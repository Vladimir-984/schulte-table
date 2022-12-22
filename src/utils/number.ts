export const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

export const toRadians = (angle: number) => (Math.PI / 180) * angle
