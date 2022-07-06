// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../app/interfaces/place';

import tokyoImg from '/public/images/japan.jpg';

const places: Array<IPlace> = [
  {
    name: 'Tokyo',
    description: 'lorem lorem lorem lorem lorem lorem',
    distance: 1550,
    image: tokyoImg.src,
    rating: 9
  },
  {
    name: 'Kyiv',
    description: 'lorem lorem lorem lorem lorem lorem',
    distance: 500,
    image: tokyoImg.src,
    rating: 10
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<IPlace>>) {
  res.status(200).json(places);
}
