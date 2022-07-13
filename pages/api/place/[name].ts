// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../../app/interfaces/place';
import { places } from './index';

type ResponsePlace = IPlace | undefined;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponsePlace>) {
  res.status(200).json(places.find((place) => place.name === req.query.name));
}
