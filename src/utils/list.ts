export const createReactKeyIdx = (prefix: string, idx: number) => `${prefix}--${idx}`

export const isAddSeparator = (items: any[], idx: number) => idx < items.length - 1
