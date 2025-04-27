interface NeighborhoodProperties {
  id: number
  total: number
  city: string
  image: string
}

interface Team {
  id: number
  name: string
  image: string
  job: string
}

export const neighborhoodProperties: NeighborhoodProperties[] = [
  {
    id: 1,
    total: 126,
    image: 'tranquil.png',
    city: 'New York City, NY',
  },
  {
    id: 2,
    total: 141,
    image: 'serene.png',
    city: 'Houston, TX',
  },

  {
    id: 3,
    total: 212,
    image: 'grand.png',
    city: 'San Diego, CA',
  },

  {
    id: 4,
    total: 183,
    image: 'charming.png',
    city: 'Philadelphia, PA',
  },

  {
    id: 5,
    total: 112,
    image: 'pool.jpg',
    city: 'San Francisco, CA',
  },
]

export const teams: Team[] = [
  {
    id: 1,
    name: 'Brendon M',
    image: 'brendon.png',
    job: 'CEO & Fonder',
  },
  {
    id: 2,
    name: 'Jodi J. Appleby',
    image: 'jodi.png',
    job: 'Real Estate Developer',
  },
  {
    id: 3,
    name: 'Justin S. Meza',
    image: 'justin.png',
    job: 'Listing Agent',
  },
  {
    id: 4,
    name: 'Susan T. Smith',
    image: 'susan.png',
    job: "Buyer's Agent",
  },
]
