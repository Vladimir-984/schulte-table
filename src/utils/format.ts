export const secondShortFormatter = new Intl.NumberFormat(navigator.language, {
   style: 'unit',
   unit: 'second',
   unitDisplay: 'short',
})

export const secondLongFormatter = new Intl.NumberFormat(navigator.language, {
   style: 'unit',
   unit: 'second',
   unitDisplay: 'long',
})
