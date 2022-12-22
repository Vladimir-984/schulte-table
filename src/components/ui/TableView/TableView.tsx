import React from 'react'
import { Appearance, classNames, Tappable, useAppearance } from '@vkontakte/vkui'

import './TableView.css'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { TableCell } from '../TableCell/TableCell'
import {
   selectActiveTableCurrentSequenceCell,
   selectActiveTableDisplayedCells,
   selectActiveTableOptionsSize,
   selectActiveTableOptionsSizeValue,
   selectActiveTableStatus,
} from 'store/selectors/activeTable'
import { autoChangeColor, clickDisplayedCell, startSolution } from 'store/slices/activeTableSlice'
import { Icon28Play } from '@vkontakte/icons'
import { toRadians } from 'utils/number'
// import { calcIdx, getX, getY } from 'utils/table'
import { TypeBackgroundColorMode, TypeSymbolColorMode } from 'types/table'
import { AppearanceType } from '@vkontakte/vk-bridge'
// import { autoChangeColor } from 'store/slices/tableSlice'

export const drawRoundRect = (
   ctx: CanvasRenderingContext2D,
   x: number,
   y: number,
   width: number,
   height: number,
   radius: IRadius | number = 5
) => {
   if (typeof radius === 'number') {
      radius = { tl: radius, tr: radius, br: radius, bl: radius }
   } else {
      radius = { ...{ tl: 0, tr: 0, br: 0, bl: 0 }, ...radius }
   }

   ctx.beginPath()
   ctx.moveTo(x + radius.tl, y)
   ctx.lineTo(x + width - radius.tr, y)
   ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
   ctx.lineTo(x + width, y + height - radius.br)
   ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
   ctx.lineTo(x + radius.bl, y + height)
   ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
   ctx.lineTo(x, y + radius.tl)
   ctx.quadraticCurveTo(x, y, x + radius.tl, y)
   ctx.closePath()
}

interface TableViewProps {}

const COLORS = {
   [Appearance.LIGHT]: {
      symbolPrimary: '#000',
      symbolSecondary: '#e1e3e6', //
      black: '#000',
      white: '#fff',
      red: '#e64646',
      cellStroke: '#d7d8d9',
      cellBackgroundPrimary: '#fff',
      cellBackgroundSecondary: '#ddd',
   },
   [Appearance.DARK]: {
      symbolPrimary: '#e1e3e6',
      symbolSecondary: '#e1e3e6', //
      black: '#000',
      white: '#fff',
      red: '#e64646',
      cellStroke: '#363738',
      // cellStroke: '#d7d8d9',
      // cellStroke: '#a3adb8',
      cellBackgroundPrimary: '#19191a',
      cellBackgroundSecondary: '#ddd',
   },
}
const checkHEXColor = (color?: string) => {
   const _color = '#' + color
   return /^#([0-9A-F]{3}){1,2}$/i.test(_color)
}

export const getBackgroundFillStyle = (
   appearance: AppearanceType,
   colorMode: TypeBackgroundColorMode,
   color?: string
) => {
   switch (colorMode) {
      case 'red': {
         return COLORS[appearance].red
      }
      case 'black': {
         return COLORS[appearance].black
      }
      case 'primary': {
         return COLORS[appearance].cellBackgroundPrimary
      }
      case 'secondary': {
         return COLORS[appearance].cellBackgroundSecondary
      }
      case 'custom': {
         return checkHEXColor(color) ? `#${color}` : COLORS[appearance].cellBackgroundPrimary
      }
      default: {
         return COLORS[appearance].cellBackgroundPrimary
      }
   }
}

const getSymbolFillStyle = (appearance: AppearanceType, colorMode: TypeSymbolColorMode, color?: string) => {
   switch (colorMode) {
      case 'primary': {
         return COLORS[appearance].symbolPrimary
      }
      case 'secondary': {
         return COLORS[appearance].symbolSecondary
      }
      case 'white': {
         return COLORS[appearance].white
      }
      case 'red': {
         return COLORS[appearance].red
      }
      case 'black': {
         return COLORS[appearance].black
      }

      case 'custom': {
         return checkHEXColor(color) ? `#${color}` : COLORS[appearance].symbolPrimary
      }
      default: {
         return COLORS[appearance].symbolPrimary
      }
   }
}

export const getIdxFromCanvasCtx = (ctx: CanvasRenderingContext2D, offsetX: number, offsetY: number) => {
   const x = offsetX * window.devicePixelRatio
   const y = offsetY * window.devicePixelRatio

   const data = ctx.getImageData(x, y, 1, 1).data

   if (!data) return
   const isOpaque = data[3] === 255
   if (!isOpaque) return

   const row = data[0]
   const col = data[1]
   const size = data[2]

   const idx = size * row + col
   return idx
}

interface ICellTappableAnimation {
   type: 'hover' | 'active'
   state: 'in' | 'out' | 'active'
   started: number

   value: number
}

const CANVAS_FONT_WEIGHT = 500
const CANVAS_FONT_FAMILY = '-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif'

const CANVAS_STROKE_LINE_WIDTH = 2
const CANVAS_MARGIN_CELL = 2

const CANVAS_COEFFICIENT_FONT_SIZE = 0.45
const CANVAS_COEFFICIENT_RADIUS_ROUND_RECT = 0.08

interface ICanvasSizes {
   widthCanvas: number
   heightCanvas: number
   sizeCell: number
   dprMarginCell: number
   dprStrokeWidthCell: number
   dprHalfStrokeWidthCell: number
}
interface ICanvasCell {}

export const TableView: React.FC<TableViewProps> = ({}) => {
   const dispatch = useAppDispatch()
   const appearance = useAppearance()

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const currentCell = useAppSelector(selectActiveTableCurrentSequenceCell)

   const canvasRef = React.useRef<HTMLCanvasElement>(null)

   const canvasSizesRef = React.useRef<ICanvasSizes>({
      sizeCell: 0,
      heightCanvas: 0,
      widthCanvas: 0,
      dprMarginCell: 0,
      dprStrokeWidthCell: 0,
      dprHalfStrokeWidthCell: 0,
   })

   const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null)

   const shadowCanvas = React.useRef<HTMLCanvasElement>(document.createElement('canvas')).current
   const shadowCtx = React.useRef<CanvasRenderingContext2D | null>(null)

   const rafTappable = React.useRef<number | null>(null)

   const tappableAnimations = React.useRef(new Map<number, ICellTappableAnimation>()).current

   const activeHoverIdx = React.useRef<number | null>(null)

   // const clickCoordsRef = React.useRef<{ x: number; y: number }>({ x: -1, y: -1 })

   const tableStatus = useAppSelector(selectActiveTableStatus)

   const tableSize = useAppSelector(selectActiveTableOptionsSizeValue)
   const displayedCells = useAppSelector(selectActiveTableDisplayedCells)

   const setCanvasSizes = () => {
      if (!(canvasRef.current instanceof HTMLCanvasElement)) return

      const dpr = window.devicePixelRatio

      const w = canvasRef.current.clientWidth * dpr
      const h = canvasRef.current.clientHeight * dpr

      const dprMarginCell = CANVAS_MARGIN_CELL * dpr
      const dprStrokeWidthCell = CANVAS_STROKE_LINE_WIDTH * dpr
      const dprHalfStrokeWidthCell = dprStrokeWidthCell / 2

      const sizeCell = (w - (tableSize - 1) * dprMarginCell) / tableSize - dprStrokeWidthCell

      canvasSizesRef.current.widthCanvas = w
      canvasSizesRef.current.heightCanvas = h
      canvasSizesRef.current.dprMarginCell = dprMarginCell
      canvasSizesRef.current.dprStrokeWidthCell = dprStrokeWidthCell
      canvasSizesRef.current.dprHalfStrokeWidthCell = dprHalfStrokeWidthCell

      canvasSizesRef.current.sizeCell = sizeCell

      canvasRef.current.width = w
      canvasRef.current.height = h

      shadowCanvas.width = w
      shadowCanvas.height = h
   }

   const initCtx = () => {
      if (!(canvasRef.current instanceof HTMLCanvasElement)) return

      const _ctx = canvasRef.current.getContext('2d')
      const _shadowCtx = shadowCanvas.getContext('2d', { willReadFrequently: true })

      if (!_ctx || !_shadowCtx) return
      ctxRef.current = _ctx
      ctxRef.current.imageSmoothingEnabled = true

      shadowCtx.current = _shadowCtx
      shadowCtx.current.imageSmoothingEnabled = true
   }

   const clear = () => {
      if (!ctxRef.current || !shadowCtx.current) return

      ctxRef.current.clearRect(0, 0, ctxRef.current.canvas.width, ctxRef.current.canvas.height)

      shadowCtx.current.clearRect(0, 0, shadowCtx.current.canvas.width, shadowCtx.current.canvas.height)
   }

   const draw = (time?: number) => {
      // const st = performance.now()

      if (!ctxRef.current || !shadowCtx.current) return

      // console.log(time)

      // rafTappable.current = requestAnimationFrame(draw)

      clear()

      ctxRef.current.textAlign = 'center'
      ctxRef.current.textBaseline = 'middle'

      const sizeCell =
         (ctxRef.current.canvas.width - (tableSize - 1) * canvasSizesRef.current.dprMarginCell) / tableSize -
         canvasSizesRef.current.dprStrokeWidthCell

      const fontSize = sizeCell * CANVAS_COEFFICIENT_FONT_SIZE
      const radisRoundRect = sizeCell * CANVAS_COEFFICIENT_RADIUS_ROUND_RECT

      ctxRef.current.font = `${CANVAS_FONT_WEIGHT} ${fontSize}px ${CANVAS_FONT_FAMILY}`

      for (let idx = 0; idx < displayedCells.length; idx++) {
         const cell = displayedCells[idx]

         const col = idx % tableSize
         const row = Math.floor(idx / tableSize)

         const x =
            col * sizeCell +
            canvasSizesRef.current.dprMarginCell * col +
            canvasSizesRef.current.dprHalfStrokeWidthCell * (col + 1) +
            canvasSizesRef.current.dprHalfStrokeWidthCell * col

         const y =
            row * sizeCell +
            canvasSizesRef.current.dprMarginCell * row +
            canvasSizesRef.current.dprHalfStrokeWidthCell * (row + 1) +
            canvasSizesRef.current.dprHalfStrokeWidthCell * row

         ctxRef.current.save()
         ctxRef.current.translate(x, y)
         drawRoundRect(ctxRef.current, 0, 0, sizeCell, sizeCell, radisRoundRect)

         shadowCtx.current.save()
         shadowCtx.current.translate(x, y)
         drawRoundRect(shadowCtx.current, 0, 0, sizeCell, sizeCell, radisRoundRect)

         ctxRef.current.lineWidth = canvasSizesRef.current.dprStrokeWidthCell

         // ctxRef.current.strokeStyle = '#000'
         ctxRef.current.strokeStyle = COLORS[appearance].cellStroke
         ctxRef.current.stroke()

         const backgroundColor = getBackgroundFillStyle(
            appearance,
            cell.background.backgroundColorMode,
            cell.background.backgroundColor
         )
         if (backgroundColor) {
            ctxRef.current.fillStyle = backgroundColor
            ctxRef.current.fill()
         }

         shadowCtx.current.fillStyle = `rgb(${row},${col},${tableSize})`
         shadowCtx.current.fill()

         let textX = sizeCell / 2
         let textY = sizeCell - fontSize

         const centerCell = sizeCell / 2
         ctxRef.current.translate(centerCell, centerCell)

         if (cell.transforms) {
            const angleTurn = +cell.transforms.turn
            if (angleTurn) {
               const tr = sizeCell / 2
               ctxRef.current.translate(tr, tr)
               ctxRef.current.rotate(toRadians(angleTurn))
               ctxRef.current.translate(-tr, -tr)
            }
            const flip = cell.transforms.flip as 'both' | 'x' | 'y'

            let scaleX = 1
            let scaleY = 1
            if (flip === 'both' || flip === 'x') {
               textX = (sizeCell / 2) * -1
               scaleX = -1
            }
            if (flip === 'both' || flip === 'y') {
               textY = (sizeCell / 2) * -1
               scaleY = -1
            }

            ctxRef.current.scale(scaleX, scaleY)
         }

         const textColor = getSymbolFillStyle(appearance, cell.symbol.colorMode, cell.symbol.color)
         ctxRef.current.fillStyle = textColor

         if (cell.visibility === 'translucent_symbol') {
            ctxRef.current.globalAlpha = 0.25
            ctxRef.current.fillStyle = getSymbolFillStyle(appearance, 'primary')
         }

         ctxRef.current.fillText(cell.symbol.value, 0, 0)

         ctxRef.current.restore()

         shadowCtx.current.restore()
      }
      // console.log(performance.now() - st)
   }

   const onClick: React.MouseEventHandler<HTMLCanvasElement> = (e) => {
      const { offsetX, offsetY } = e.nativeEvent
      if (!shadowCtx.current) return

      const idx = getIdxFromCanvasCtx(shadowCtx.current, offsetX, offsetY)
      if (idx === undefined) return
      dispatch(clickDisplayedCell(idx))
   }

   /*  const animateHover = (time: number) => {
      rafTappable.current = requestAnimationFrame(animateHover)

      const cell = displayedCells[idx]

      const col = idx % tableSize
      const row = Math.floor(idx / tableSize)

      const x =
         col * sizeCell +
         canvasSizesRef.current.dprMarginCell * col +
         canvasSizesRef.current.dprHalfStrokeWidthCell * (col + 1) +
         canvasSizesRef.current.dprHalfStrokeWidthCell * col

      const y =
         row * sizeCell +
         canvasSizesRef.current.dprMarginCell * row +
         canvasSizesRef.current.dprHalfStrokeWidthCell * (row + 1) +
         canvasSizesRef.current.dprHalfStrokeWidthCell * row
   }
 */
   const onMouseMove: React.MouseEventHandler<HTMLCanvasElement> = (e) => {
      const { offsetX, offsetY } = e.nativeEvent

      if (!shadowCtx.current) return

      const idx = getIdxFromCanvasCtx(shadowCtx.current, offsetX, offsetY)

      if (idx === undefined) {
         if (!canvasRef.current) return
         return (canvasRef.current.style.cursor = 'default')
      }

      if (!canvasRef.current) return
      canvasRef.current.style.cursor = 'pointer'

      // console.log(idx)
   }

   React.useEffect(() => {
      initCtx()
      // setCanvasSizes()
      // draw()
   }, [])

   React.useEffect(() => {
      setCanvasSizes()
      draw()
   }, [displayedCells])

   return (
      <div className={classNames('TableView')}>
         <div className='TableView__in'>
            <canvas className='TableView__canvas' ref={canvasRef} onClick={onClick} onMouseMove={onMouseMove} />
         </div>
      </div>
   )
}

export const TableView__old: React.FC<TableViewProps> = ({}) => {
   const tableStatus = useAppSelector(selectActiveTableStatus)

   const tableSize = useAppSelector(selectActiveTableOptionsSize)

   const dispatch = useAppDispatch()
   const currentCell = useAppSelector(selectActiveTableCurrentSequenceCell)
   const styles: React.CSSProperties = {
      gridTemplateColumns: `repeat(${tableSize}, 1fr)`,
      gridTemplateRows: `repeat(${tableSize}, 1fr)`,
   }

   return (
      <div className={classNames('TableView')}>
         <div className='TableView__in'>
            <div
               className={classNames(
                  'TableView__cells'
                  // tableStatus === null && 'TableView__cells--blur'
               )}
               style={styles}
            >
               <TableViewCells />
            </div>
         </div>
      </div>
   )
}
// {tableStatus === null && <TablePlayButton />}

const TableViewCells: React.FC = () => {
   const displayedCells = useAppSelector(selectActiveTableDisplayedCells)

   return (
      <>
         {displayedCells.map((cell) => (
            <TableCell key={cell.id} {...cell} />
         ))}
      </>
   )
}
interface IRadius {
   tl: number
   tr: number
   br: number
   bl: number
}
const TablePlayButton: React.FC = () => {
   const dispatch = useAppDispatch()

   const onClickPlay = () => {
      dispatch(startSolution())
   }

   return (
      <div className='TablePlayButton'>
         <Tappable
            className='TablePlayButton__tappable'
            activeMode='background'
            activeEffectDelay={200}
            onClick={onClickPlay}
         >
            <Icon28Play className='TablePlayButton__icon' width={56} height={56} />
         </Tappable>
      </div>
   )
}
