export const getRandomColor = () => Math.random().toString(16).slice(-6)

// export const getRandomColor = (): string =>
// Math.floor(Math.random() * (0xffffff - 0x000000 + 1) + 0x000000).toString(16)

export const normalizeHEXColor = (color?: string) => {
   if (!color) {
      return undefined
   } else if (!color.startsWith('#')) {
      return `#${color}`
   }
   return color
}
