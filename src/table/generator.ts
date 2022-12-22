import { randomSort } from 'utils/array'
// import { groupsOfChars, charsRangeOfGroups } from './data'
const REDBLACK_TABLE_MODIFIER_BLACK = '+'
const REDBLACK_TABLE_MODIFIER_RED = '-'

const isUpperCase = (str: string) => str.toUpperCase() === str
const isLowerCase = (str: string) => str.toLowerCase() === str
const parseInt16 = (strInt: string) => parseInt(strInt, 16)

/* const getLengthOfRangesChars = (rangesCharsOfGroup: ICharsRangeOfGroup[]) => {
   const length = rangesCharsOfGroup.reduce((acc, current) => {
      const [start16, end16] = current.range
      const startCode = parseInt16(start16)
      const endCode = parseInt16(end16)
      if (isNaN(startCode) || isNaN(endCode)) return acc //throw new Error('range is NaN')
      if (startCode > endCode) return acc //throw new Error('startCode > endCode')

      return acc + (endCode - startCode + 1)
   }, 0)
   return length
} */

/* console.log(getLengthOfRangesChars(charsRangeOfGroups)) */

/* const CHARS = {
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
} */

const localeCompare = (a: string, b: string) => a.localeCompare(b, 'ru')

const equalLowerUpperCase = (a: string) => a.toLowerCase() === a.toUpperCase()

/* const getCharsFromRange = (range: TypeRange) => {
   const startCode = parseInt16(range[0])
   const endCode = parseInt16(range[1])

   if (isNaN(startCode) || isNaN(endCode)) throw new Error('range is NaN')
   if (startCode > endCode) throw new Error('startCode > endCode')

   const chars: string[] = []

   for (let currentCode = startCode; currentCode <= endCode; currentCode++) {
      const char = String.fromCodePoint(currentCode)
      chars.push(char)
   }

   return chars
} */

/* const getSymbolsFromGroup = (ranges: ICharsRangeOfGroup) => {
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
 */
// const charsRangesOfGroup = charsRangeOfGroups.filter((g) => g.groupId === '7')

/* const getA = (charsRanges: ICharsRangeOfGroup[]) => {}
 */
export const getEmptyFilledArray = (length: number): string[] => {
   return Array.from({ length }, () => '')
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

   constructor(props: ISequenceGeneratorProps) {
      this.sequence = getEmptyFilledArray(props.length)
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
            this.sequence[blackCharIdx] = `${REDBLACK_TABLE_MODIFIER_BLACK}${this.chars[charIdx]}`
         }
         if (this.sequence[redCharIdx] !== undefined) {
            this.sequence[redCharIdx] = `${REDBLACK_TABLE_MODIFIER_RED}${this.chars[charIdx]}`
         }
         charIdx++

         blackCharIdx += 2
         redCharIdx -= 2
      }
   }
}
