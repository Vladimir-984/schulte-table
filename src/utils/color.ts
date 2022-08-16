export const getRandomColor = () => Math.random().toString(16).slice(-6)

export const normalizeHEXColor = (color?: string) => {
   if (!color) {
      return undefined
   } else if (!color.startsWith('#')) {
      return `#${color}`
   }
   return color
}
