const hslToHex = (h: number, s: number, l: number) => {
   l /= 100
   const a = (s * Math.min(l, 1 - l)) / 100
   const f = (n: number) => {
      const k = (n + h / 30) % 12
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
      return Math.round(255 * color)
         .toString(16)
         .padStart(2, '0') // convert to Hex and prefix "0" if needed
   }
   return `${f(0)}${f(8)}${f(4)}`
}
// export const getRandomColor = () => Math.random().toString(16).slice(-6)

// export const getRandomColor = (): string =>
// Math.floor(Math.random() * (0xffffff - 0x000000 + 1) + 0x000000).toString(16)

export const getRandomColor = (): string => {
   const h = Math.random() * 360
   const s = 60
   const l = 50
   return hslToHex(h, s, l)
}

export const normalizeHEXColor = (color?: string) => {
   if (!color) {
      return undefined
   } else if (!color.startsWith('#')) {
      return `#${color}`
   }
   return color
}
