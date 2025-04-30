interface Testimonials {
  id: number
  username: string
  profileImage: string
  body: string
}

export const testimonials: Testimonials[] = [
  {
    id: 1,
    username: 'Barbara D. Smith',
    profileImage: 'barbara.png',
    body: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
  },

  {
    id: 2,
    username: 'William D. Brune',
    profileImage: 'barbara.png',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },

  {
    id: 3,
    username: 'Aston D. Rule',
    profileImage: 'barbara.png',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]
