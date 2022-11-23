import { IMainTableOptions } from 'types/table'
import { randomSort } from 'utils/array'
const GORBOV_MODIFIER_BLACK = '+'
const GROBOV_MODIFIER_RED = '-'
const CYRILLIC = 'CYRILLIC'
const CAPITAL_CASE = 'CAPITAL'
const SMALL_CASE = 'SMALL'
const CLASSIC_MODE_SIZE = 5
const HARD_MODE_SIZE = 9
const MAX_TABLE_SIZE = 21
export type TypeUTFRange = [string, string]

const CYRILLIC_CAPITAL_ALPHABET: TypeUTFRange = ['0410', '042F'] //А-Я, Ё

const CYRILLIC_CAPITAL_ALPHABET_INCLUDE = ['0401'] // Ё

const CYRILLIC_CAPITAL_ADDITIONAL: TypeUTFRange = ['0400', '040F'] //Ѐ-Џ

const CYRILLIC_SMALL_ADDITIONAL: TypeUTFRange = ['0450', '045F'] //ѐ-џ

const CYRILLIC_CAPITAL_ADDITIONAL_1: TypeUTFRange = ['0460', '0480'] //Ѡ-Ҁ

const CYRILLIC_CAPITAL_ADDITIONAL_2: TypeUTFRange = ['048A', '04BE'] //Ҋ-Ҿ

const CYRILLIC_CAPITAL_ADDITIONAL_3: TypeUTFRange = ['04C1', '04CD'] //Ӂ-Ӎ

const CYRILLIC_CAPITAL_ADDITIONAL_4: TypeUTFRange = ['04D0', '04FE'] //Ӑ-Ӿ

const CYRILLIC_CAPITAL_SUPPLEMENT: TypeUTFRange = ['0500', '052E']
const CYRILLIC_CAPITAL_EXTENDED_B_1: TypeUTFRange = ['A640', 'A66C'] // Ꙁ-Ꙭ

const CYRILLIC_CAPITAL_EXTENDED_B_2: TypeUTFRange = ['A680', 'A69A'] // Ꚁ-Ꚛ

const CYRILLIC_SMALL_ALPHABET: TypeUTFRange = ['0430', '044F'] // а-я, ё

const CYRILLIC_SMALL_ALPHABET_INCLUDE = ['0451'] // ё

const CYRILLIC_SMALL_ADDITIONAL_1 = ['0461', '0481'] // ѡ-ҁ //04CF - palochka смещает коды

const CYRILLIC_SMALL_ADDITIONAL_2 = ['048B', '04FF'] // ҋ-ӿ //

const CYRILLIC_SMALL_SUPPLEMENT = ['0501', '052F']
const CYRILLIC_SMALL_EXTENDED_B_1 = ['A641', 'A66D'] // ꙁ-ꙭ

const CYRILLIC_SMALL_EXTENDED_B_2 = ['A681', 'A69B'] // ꚁ-ꚛ
// const LATIN_CAPITAL_ALPHABET = ['0041', '005A'] //А-Z
// const LATIN_SMALL_ALPHABET = ['0061', '007A'] // а-z

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

type TypeLetterCase = 'ALL' | 'SMALL' | 'CAPITAL'
interface IOptions {
   letterCase?: TypeLetterCase
   includeCodes?: string[]
   excludeCodes?: string[]
}

const getcharsFromUnicodeCodeRange = (
   unicodeRange: TypeUTFRange,
   options: IOptions = { letterCase: 'ALL', excludeCodes: [], includeCodes: [] }
) => {
   const startCode = parseInt16(unicodeRange[0])
   const endCode = parseInt16(unicodeRange[1])

   if (startCode > endCode) throw new Error('startCode > endCode')

   const mapExcludeCodes = new Map()

   const checkLetterCase = (a: string) => {
      switch (options.letterCase) {
         case 'ALL':
            return true

         case 'CAPITAL':
            return isUpperCase(a)

         case 'SMALL':
            return isLowerCase(a)

         default:
            return true
      }
   }
   if (options.excludeCodes?.length) {
      options.excludeCodes.forEach((UTF16Code) => mapExcludeCodes.set(parseInt16(UTF16Code), true))
   }
   const chars = []

   for (let currentCode = startCode; currentCode <= endCode; currentCode++) {
      if (mapExcludeCodes.has(currentCode)) {
         continue
      }

      const char = String.fromCodePoint(currentCode)

      if (checkLetterCase(char)) {
         chars.push(char)
      }
   }
   if (options.includeCodes?.length) {
      options.includeCodes.forEach((UTF16Code) => {
         const code = parseInt16(UTF16Code)
         const char = String.fromCodePoint(code)

         if (checkLetterCase(char)) {
            chars.push(char)
         }
      })
   }
   return chars
}

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
