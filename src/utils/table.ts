export const getX = (pageX: number, el: HTMLElement): number => {
   const { offsetLeft, offsetWidth } = el
   if (pageX < offsetLeft) return 0
   else if (pageX >= offsetWidth + offsetLeft) return offsetWidth - 1
   return pageX - offsetLeft
}

export const getY = (pageY: number, el: HTMLElement): number => {
   const { offsetTop, offsetHeight } = el
   if (pageY < offsetTop) return 0
   else if (pageY >= offsetHeight + offsetTop) return offsetHeight - 1
   return pageY - offsetTop
}

export const calcIdx = (x: number, y: number, sizeCanvas: number, tableSize: number) => {
   const sizeRect = sizeCanvas / tableSize
   if (x <= 0) x = 0
   if (y <= 0) y = 0
   if (x >= sizeCanvas) x = sizeCanvas - 1
   if (y >= sizeCanvas) y = sizeCanvas - 1

   const row = Math.floor(y / sizeRect)
   const column = Math.floor(x / sizeRect)
   const index = row * tableSize + column

   return index
   // return { idx: index, idxRow: row, idxColumn: column }
}
