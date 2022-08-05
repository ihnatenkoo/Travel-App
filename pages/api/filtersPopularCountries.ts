// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IFiltersPopularCountries } from '@/types/';

const filtersPopularCountries = [
  { location: 'All', name: 'All' },
  { location: 'Ukraine', name: 'Ukraine' },
  { location: 'Italy', name: 'Italy' },
  { location: 'Japan', name: 'Japan' },
  { location: 'United States', name: 'USA' },
  { location: 'United Kingdom', name: 'England' },
  { location: 'Australia', name: 'Australia' },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IFiltersPopularCountries>>
) {
  res.status(200).json(filtersPopularCountries);
}
