import React from 'react'
import {
   Button,
   ButtonGroup,
   Card,
   CardGrid,
   Div,
   FixedLayout,
   Group,
   Header,
   List,
   Panel,
   PanelHeader,
   PanelHeaderButton,
   PanelProps,
   Separator,
   SimpleCell,
   SizeType,
   Switch,
   Title,
} from '@vkontakte/vkui'

import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon24DoneOutline, Icon28DoneOutline, Icon28SettingsOutline } from '@vkontakte/icons'
import { useRouter } from '@happysanta/router'
import { PAGE_OPTIONS, PAGE_TABLE } from 'router/pages'

import { Dropdown } from '@vkontakte/vkui/unstable'

import { TableSequence, TableType } from 'types/table'
import { getNegativeOffsetDistance } from 'utils/dropdown'

export const PanelMain: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   /*    const [size, setSize] = React.useState(3)
   const [sequence, setSequence] = React.useState<TableSequence>(TableSequence.RIGHT)
   const [cellType, setCellType] = React.useState<TableCell>(TableCell.RECT)
   const [tableType, setTableType] = React.useState<TableType>(TableType.NUMBERS) */
   /* 
   const onChangeSize: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
      const _size = +e.target.value
      if (!isNaN(_size)) {
         setSize(_size)
      }
   }

   const onChangeSequence: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (Object.values<string>(TableSequence).includes(e.target.value)) {
         setSequence(e.target.value as TableSequence)
      }
   }
   const onChangeTableType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (Object.values<string>(Table).includes(e.target.value)) {
         setTableType(e.target.value as Table)
      }
   }

   const onChangeCellType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (Object.values<string>(Cell).includes(e.target.value)) {
         setCellType(e.target.value as Cell)
      }
   } */

   const onClickSettings = () => {
      router.pushPage(PAGE_OPTIONS)
   }

   const onClickStart: React.MouseEventHandler<HTMLElement> = (e) => {
      router.pushPage(PAGE_TABLE)
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader
            before={
               <PanelHeaderButton aria-label='a' onClick={onClickSettings}>
                  <Icon28SettingsOutline />
               </PanelHeaderButton>
            }
            separator={false}
         >
            Таблицы Шульте
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <ContentCell />
         <div style={{ visibility: 'hidden' }}>
            <Div>
               <ButtonGroup stretched align='center' mode='vertical'>
                  <Button
                     size='l'
                     mode='primary'
                     appearance='accent'
                     className='Button--round Tappable--active-opacity'
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  >
                     Начать
                  </Button>
               </ButtonGroup>
            </Div>
         </div>
         <FixedLayout vertical='bottom' filled>
            <Separator wide />
            <Div>
               <ButtonGroup stretched align='center' mode='vertical'>
                  <Button
                     onClick={onClickStart}
                     size='l'
                     mode='primary'
                     appearance='accent'
                     className='Button--round Tappable--active-opacity'
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  >
                     Начать
                  </Button>
               </ButtonGroup>
            </Div>
         </FixedLayout>
      </Panel>
   )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ContentProps {
   size: number
   onChangeSize: React.ChangeEventHandler<HTMLSelectElement>
   tableType: TableType
   onChangeTableType: React.ChangeEventHandler<HTMLInputElement>
   sequence: TableSequence
   onChangeSequence: React.ChangeEventHandler<HTMLInputElement>
}

const ContentCell: React.FC = () => {
   const typeRef = React.useRef<HTMLDivElement>(null)
   const variantRef = React.useRef<HTMLDivElement>(null)
   const sizeRef = React.useRef<HTMLDivElement>(null)
   const modeRef = React.useRef<HTMLDivElement>(null)
   const sequenceRef = React.useRef<HTMLDivElement>(null)

   const [shownTypeDropdown, setShownTypeDropdown] = React.useState(false)
   const [shownVariantDropdown, setShownVariantDropdown] = React.useState(false)
   const [shownSizeDropdown, setShownSizeDropdown] = React.useState(false)
   const [shownModeDropdown, setShownModeDropdown] = React.useState(false)
   const [shownSequenceDropdown, setShownSequenceDropdown] = React.useState(false)

   const onChangeShownType = (shown: boolean) => {
      setShownTypeDropdown(shown)
   }
   const onChangeShownVariant = (shown: boolean) => {
      setShownVariantDropdown(shown)
   }
   const onChangeShownSize = (shown: boolean) => {
      setShownSizeDropdown(shown)
   }
   const onChangeShownMode = (shown: boolean) => {
      setShownModeDropdown(shown)
   }
   const onChangeShownSequence = (shown: boolean) => {
      setShownSequenceDropdown(shown)
   }
   return (
      <Group separator='hide'>
         <Group mode='plain' separator='hide' header={<Header mode='secondary'>Таблица</Header>}>
            <CardGrid size='l'>
               <Card>
                  <Dropdown
                     shown={shownTypeDropdown}
                     onShownChange={onChangeShownType}
                     action='click'
                     offsetDistance={getNegativeOffsetDistance(typeRef)}
                     offsetSkidding={0}
                     sameWidth={false}
                     placement={'bottom-end'}
                     content={
                        <Group mode='plain' style={{ width: 160 }}>
                           <List>
                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 after={<Icon28DoneOutline />}
                              >
                                 Цифры
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 Кириллица
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 Латиница
                              </SimpleCell>
                           </List>
                        </Group>
                     }
                  >
                     <SimpleCell
                        getRootRef={typeRef}
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={
                           <Title level='3' weight='2'>
                              Цифры
                           </Title>
                        }
                     >
                        Тип
                     </SimpleCell>
                  </Dropdown>

                  <Separator wide />

                  <Dropdown
                     shown={shownVariantDropdown}
                     onShownChange={onChangeShownVariant}
                     action='click'
                     offsetDistance={getNegativeOffsetDistance(variantRef)}
                     offsetSkidding={0}
                     sameWidth={false}
                     placement={'bottom-end'}
                     content={
                        <Group mode='plain' style={{ width: 200 }}>
                           <List>
                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 after={<Icon28DoneOutline />}
                              >
                                 Стандартный
                              </SimpleCell>
                              <Separator wide />

                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 description='1 | ф | f буквы'
                              >
                                 Шульте-Горбова 1
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 description='1 | ф | f ячейки'
                              >
                                 Шульте-Горбова 2
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 description='Только для цифр'
                              >
                                 Шульте-Платонова
                              </SimpleCell>

                              {/*  <SimpleCell sizeY={SizeType.COMPACT} description='1-а буквы ???'>
                                 Шульте-Горбова 3
                              </SimpleCell>
                           */}
                           </List>
                        </Group>
                     }
                  >
                     <SimpleCell
                        getRootRef={variantRef}
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={
                           <Title level='3' weight='2'>
                              Стандартный
                           </Title>
                        }
                     >
                        Вариант
                     </SimpleCell>
                  </Dropdown>
                  <Separator wide />

                  <Dropdown
                     shown={shownModeDropdown}
                     onShownChange={onChangeShownMode}
                     offsetDistance={getNegativeOffsetDistance(modeRef)}
                     offsetSkidding={0}
                     action='click'
                     sameWidth={false}
                     placement={'bottom-end'}
                     content={
                        <Group mode='plain' style={{ width: 180 }}>
                           <List>
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 Настраиваемый
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 after={<Icon28DoneOutline />}
                              >
                                 Классический
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 Сложный
                              </SimpleCell>
                           </List>
                        </Group>
                     }
                  >
                     <SimpleCell
                        getRootRef={modeRef}
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={
                           <Title level='3' weight='2'>
                              Классический
                           </Title>
                        }
                     >
                        Режим
                     </SimpleCell>
                  </Dropdown>

                  {/*  <Separator wide />
                  <SimpleCell disabled after={<Switch />}>
                     Точка фокусировки
                  </SimpleCell> */}
               </Card>
            </CardGrid>
         </Group>
         <Group mode='plain' separator='hide' header={<Header mode='secondary'>Настраиваемый</Header>}>
            <CardGrid size='l'>
               <Card>
                  <Dropdown
                     shown={shownSizeDropdown}
                     onShownChange={onChangeShownSize}
                     offsetDistance={getNegativeOffsetDistance(sizeRef)}
                     offsetSkidding={0}
                     action='click'
                     sameWidth={false}
                     placement={'bottom-end'}
                     content={
                        <Group mode='plain' style={{ width: 160 }}>
                           <List>
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 3x3
                              </SimpleCell>
                              <Separator wide />

                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 after={<Icon28DoneOutline />}
                              >
                                 5x5
                              </SimpleCell>
                              <Separator wide />

                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 7x7
                              </SimpleCell>
                              <Separator wide />

                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 9x9
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 11x11
                              </SimpleCell>
                           </List>
                        </Group>
                     }
                  >
                     <SimpleCell
                        getRootRef={sizeRef}
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={
                           <Title level='3' weight='2'>
                              5x5
                           </Title>
                        }
                     >
                        Размер
                     </SimpleCell>
                  </Dropdown>
                  <Separator wide />
                  <Dropdown
                     shown={shownSequenceDropdown}
                     onShownChange={onChangeShownSequence}
                     action='click'
                     offsetDistance={getNegativeOffsetDistance(sequenceRef)}
                     offsetSkidding={0}
                     sameWidth={false}
                     placement={'bottom-end'}
                     content={
                        <Group mode='plain' style={{ width: 160 }}>
                           <List>
                              <SimpleCell
                                 activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                                 sizeY={SizeType.COMPACT}
                                 after={<Icon28DoneOutline />}
                              >
                                 Прямой
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 Обратный
                              </SimpleCell>
                              <Separator wide />
                              <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} sizeY={SizeType.COMPACT}>
                                 Случайный
                              </SimpleCell>
                           </List>
                        </Group>
                     }
                  >
                     <SimpleCell
                        getRootRef={sequenceRef}
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={
                           <Title level='3' weight='2'>
                              Прямой
                           </Title>
                        }
                     >
                        Порядок
                     </SimpleCell>
                  </Dropdown>
                  <Separator wide />
                  <SimpleCell disabled after={<Switch />}>
                     Отразить по горизонтали
                  </SimpleCell>
                  <Separator wide />
                  <SimpleCell disabled after={<Switch />}>
                     Отразить по вертикали
                  </SimpleCell>
                  <Separator wide />
                  <SimpleCell disabled after={<Switch />}>
                     Перемешивать ячейки
                  </SimpleCell>
               </Card>
            </CardGrid>
         </Group>
      </Group>
   )
}
