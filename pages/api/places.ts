// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../app/interfaces/place';

const places: Array<IPlace> = [
  {
    name: 'kyiv',
    location: {
      city: 'Kyiv',
      country: 'Ukraine'
    },
    description: 'lorem lorem lorem lorem lorem lorem',
    distance: 300,
    image: 'http://localhost:3000/images/places/Ukraine/kyiv.jpg',
    rating: 10
  },
  {
    name: 'tokyo',
    location: {
      city: 'Tokyo',
      country: 'Japan'
    },
    description: 'lorem lorem lorem lorem lorem lorem',
    distance: 1550,
    image: 'http://localhost:3000/images/places/Japan/tokyo.jpg',
    rating: 8
  },
  {
    name: 'new-york',
    location: {
      city: 'New York',
      country: 'USA'
    },
    description: 'lorem lorem lorem lorem lorem lorem',
    distance: 7200,
    image: 'http://localhost:3000/images/places/USA/new-york.jpg',
    rating: 9
  },
  {
    name: 'rome',
    location: {
      city: 'Rome',
      country: 'Italy'
    },
    description: 'lorem lorem lorem lorem lorem lorem',
    distance: 3350,
    image: 'http://localhost:3000/images/places/Italy/rome.jpg',
    rating: 8
  },
  {
    name: 'milan',
    location: {
      city: 'Milan',
      country: 'Italy'
    },
    description: 'lorem lorem lorem lorem lorem lorem',
    distance: 3350,
    image: 'http://localhost:3000/images/places/Italy/milan.jpg',
    rating: 8
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<IPlace>>) {
  res.status(200).json(places);
}
