import { IGroupOfSymbols, IMainTableOptions, ISymbolsRangeOfGroup, TypeRange } from 'types/table'
import { randomSort } from 'utils/array'
import { groupsOfSymbols, symbolsRangeOfGroups } from './data'
const GORBOV_MODIFIER_BLACK = '+'
const GROBOV_MODIFIER_RED = '-'

const CHARS = {
   ARABIC_NUMERALS: [] as string[],
   // ROMAN_NUMERALS:[] as string[], //?
   CYRILLIC_CAPITAL_ALPHABET: [] as string[],
   CYRILLIC_CAPITAL_ADDITIONAL: [] as string[],
   CYRILLIC_CAPITAL_SUPPLEMENT: [] as string[],
   CYRILLIC_CAPITAL_EXTENDED: [] as string[],
   CYRILLIC_SMALL_ALPHABET: [] as string[], // CYRILLIC_SMALL_ADDITIONAL_1: [] as string[],
   // CYRILLIC_SMALL_ADDITIONAL_2: [] as string[],
   // LATIN_CAPITAL: [] as string[],
   // LATIN_SMALL: [] as string[],
}

const localeCompare = (a: string, b: string) => a.localeCompare(b, 'ru')

const equalLowerUpperCase = (a: string) => a.toLowerCase() === a.toUpperCase()

const isUpperCase = (str: string) => str.toUpperCase() === str
const isLowerCase = (str: string) => str.toLowerCase() === str
const parseInt16 = (strInt: string) => parseInt(strInt, 16)

const getSymbolsFromGroup = (ranges: ISymbolsRangeOfGroup) => {
   const startCode = parseInt16(ranges.range[0])
   const endCode = parseInt16(ranges.range[1])

   if (startCode > endCode) throw new Error('startCode > endCode')

   const checkLetterCase = (a: string) => {
      switch (ranges.case) {
         case 'all':
            return true

         case 'capital':
            return isUpperCase(a)

         case 'small':
            return isLowerCase(a)

         default:
            return true
      }
   }

   const chars = []

   for (let currentCode = startCode; currentCode <= endCode; currentCode++) {
      const char = String.fromCodePoint(currentCode)

      if (checkLetterCase(char)) {
         chars.push(char)
      }
   }

   return chars
}

const g = symbolsRangeOfGroups.filter((g) => g.groupId === '7')

const r: string[][] = []
g.forEach((g) => {
   r.push(getSymbolsFromGroup(g))
})
// console.log(r)

console.log(r.flat(1).sort(localeCompare))

// const a = getSymbolsFromGroup(groupsOfSymbols[0])
// const b = getSymbolsFromGroup(groupsOfSymbols[1])
// const c = getSymbolsFromGroup(groupsOfSymbols[3])
// console.log(a.concat(c).sort(localeCompare))

export const getEmptyFilledArray = (length: number): string[] => {
   return Array<string>(length).fill('')
}

export const shuffleArray = <T>(arr: Array<T>) => {
   return [...arr].sort(randomSort)
}

export const getSizeWithX = (size: number) => `${size}x${size}`

export const getMaxSize = (tableType: string): number => {
   switch (tableType) {
      case 'TableType.NUMBERS': {
         return 21
      }
      case 'TableType.LATIN': {
         break
      }
      case 'TableType.CYRILLIC': {
         break
      }
      default: {
         throw new Error('Неверный тип таблицы')
      }
   }

   return 1
}

interface IGenerateSequenceParams {
   length: number
   tableType: string
}

export const generateSequence = (params: IGenerateSequenceParams) => {
   const generator = new SequenceGenerator({
      length: params.length,
   })
   generator.generate()

   return generator.sequence
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isAddRoman = () => {
   return Math.round(Math.random() * 3) === 3
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function romanize(num: number) {
   if (isNaN(num)) return NaN

   const digits = String(+num).split('')

   const key = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
   ]

   let roman = ''
   let i = 3
   while (i--) roman = (key[+(digits.pop() as string) + i * 10] || '') + roman

   return Array(+digits.join('') + 1).join('M') + roman
}

interface ISequenceGeneratorProps {
   length: number
}

class SequenceGenerator {
   private chars: string[] = []
   sequence: string[]

   private length: number

   constructor(props: ISequenceGeneratorProps) {
      this.length = props.length

      this.sequence = getEmptyFilledArray(props.length)

      this.chars = CHARS.ARABIC_NUMERALS
      this.getChars()
   }

   private getChars() {
      //установить нужные символы в this.chars
   }

   private fillSequenceStandard() {
      for (let idx = 0; idx < this.sequence.length; idx++) {
         this.sequence[idx] = this.chars[idx]
      }
   }

   private fillSequenceGorbov() {
      /* чёрный с +, красные с - */
      // 3x3
      //   0   1   2   3   4   5   6   7   8
      // [+1, -4, +2, -3, +3, -2, +4, -1, +5]

      //4x4
      //   0   1   2   3   4   5   6   7   8   9   10   11   12   13   14   15
      // [+1  -8  +2  -7  +3  -6  +4  -5  +5  -4   +6   -3   +7   -2   +8   -1]
      let charIdx = 0
      let blackCharIdx = 0

      // начинаем с последнего, если длина чётная. Если НЕчётная с предпоследнего
      let redCharIdx = this.sequence.length - (this.sequence.length % 2 === 0 ? 1 : 2)

      while (blackCharIdx < this.sequence.length || redCharIdx > 0) {
         if (this.sequence[blackCharIdx] !== undefined) {
            this.sequence[blackCharIdx] = `${GORBOV_MODIFIER_BLACK}${this.chars[charIdx]}`
         }
         if (this.sequence[redCharIdx] !== undefined) {
            this.sequence[redCharIdx] = `${GROBOV_MODIFIER_RED}${this.chars[charIdx]}`
         }
         charIdx++

         blackCharIdx += 2
         redCharIdx -= 2
      }
   }

   private fillSequencePlatonov() {}

   public generate() {}

   public shuffle() {
      return this.sequence.sort(randomSort)
   }
   public reverse() {
      return this.sequence.reverse()
   }
}

// interface IResolveSizeTableParams extends Pick<ITableParams, 'tableSize' | 'tableVariant' | 'tableMode'> {}

// interface IResolvedSizeTable extends Pick<ITableParams, 'tableSize'> {}

// export const resolveSequenceAndSizeTable = (params: IResolveSizeTableParams): IResolvedSizeTable => {
//    const resolvedParams: IResolvedSizeTable = {
//       tableSize: resolveTableSize(params.tableMode, params.tableSize),
//    }

//    return resolvedParams
// }
