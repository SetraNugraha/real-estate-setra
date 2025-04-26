type Facilities = {
  beds: number
  bath: number
}

type Tags = {
  name: string
  image: string
  textColor: string
  bgColor: string
}

interface Properties {
  id: number
  name: string
  address: string
  tags?: Tags
  propertieImage: string
  price: number
  facilities: Facilities
}

export const properties: Properties[] = [
  {
    id: 1,
    name: 'Tranquil Haven in the Woods',
    address: '103 Wright CourtBurien, WA 98168',
    propertieImage: 'tranquil.png',
    price: 5970,
    tags: {
      name: 'Popular',
      image: 'popular.svg',
      textColor: '#FF1111',
      bgColor: '#FFE1E1',
    },
    facilities: {
      beds: 4,
      bath: 3,
    },
  },
  {
    id: 2,
    name: 'Serene Retreat by the Lake',
    address: '1964 Jehovah Drive, VA 22408',
    propertieImage: 'serene.png',
    price: 1970,
    tags: {
      name: 'New Listing',
      image: 'new-listing.svg',
      textColor: '#119BFF',
      bgColor: '#D7EEFF',
    },
    facilities: {
      beds: 3,
      bath: 2,
    },
  },
  {
    id: 3,
    name: 'Charming Cottage in the Meadow',
    address: '1508 Centennial Farm RoadHarlan, 51537',
    propertieImage: 'charming.png',
    price: 3450,
    tags: {
      name: 'Discounted Price',
      image: 'discounted.svg',
      textColor: '#00CE3A',
      bgColor: '#F1FFF1',
    },
    facilities: {
      beds: 4,
      bath: 4,
    },
  },
  {
    id: 4,
    name: 'Grand Estate on the Hilltop',
    address: '103 Wright CourtBurien, WA 98168',
    propertieImage: 'grand.png',
    price: 2389,
    facilities: {
      beds: 4,
      bath: 3,
    },
  },

  {
    id: 5,
    name: 'Grand Estate on the Hilltop',
    address: '11 Cortuis Alas, GS 0019',
    propertieImage: 'tranquil.png',
    price: 7761,
    facilities: {
      beds: 1,
      bath: 2,
    },
  },

  {
    id: 6,
    name: 'Grand Estate on the Hilltop',
    address: '998 Willian CourtBurien, SA 88761',
    propertieImage: 'charming.png',
    price: 4459,
    facilities: {
      beds: 2,
      bath: 2,
    },
  },
]
