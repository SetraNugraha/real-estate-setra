interface Services {
  id: number
  icon: string
  title: string
  description: string
}

export const services: Services[] = [
  {
    id: 1,
    icon: 'search.svg',
    title: 'Buy a New Home',
    description: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ',
  },

  {
    id: 2,
    icon: 'home.svg',
    title: 'Sell a House',
    description: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ',
  },

  {
    id: 3,
    icon: 'bed.svg',
    title: 'Rent a House',
    description: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ',
  },
]
