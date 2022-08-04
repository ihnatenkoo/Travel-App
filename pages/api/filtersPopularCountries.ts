// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IFiltersPopularCountries } from '@/types/';

const filtersPopularCountries = [
  { location: 'All' },
  { location: 'Ukraine' },
  { location: 'Italy' },
  { location: 'Japan' },
  { location: 'United States' },
  { location: 'United Kingdom' },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IFiltersPopularCountries>>
) {
  res.status(200).json(filtersPopularCountries);
}
