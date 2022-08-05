// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '@/types/';

export const places: Array<IPlace> = [
  {
    name: 'kyiv',
    location: {
      city: 'Kyiv',
      country: 'Ukraine',
    },
    coordinates: {
      lat: 50.450001,
      lng: 30.523333,
    },
    description:
      'Kyiv is an important industrial, scientific, educational, and cultural center in Eastern Europe. It is home to many high-tech industries, higher education institutions, and historical landmarks. The city has an extensive system of public transport and infrastructure, including the Kyiv Metro.',
    distance: 300,
    duration: 4,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/Ukraine/kyiv.jpg`,
    rating: 8,
  },
  {
    name: 'gold-cost',
    location: {
      city: 'Gold Cost',
      country: 'Australia',
    },
    coordinates: {
      lat: -28.00099,
      lng: 153.42833,
    },
    description:
      'The Gold Coast is a coastal city in the state of Queensland, Australia. The Gold Coast is the sixth-largest city in Australia, Australia largest non-capital city, and Queenslans second-largest city. The Gold Coast is a major tourist destination with a sunny, subtropical climate and has become widely known for its world-class surfing beaches.',
    distance: 14750,
    duration: 30,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/Australia/gold-cost.jpg`,
    rating: 9,
  },
  {
    name: 'las-vegas',
    location: {
      city: 'Las Vegas',
      country: 'United States',
    },
    coordinates: {
      lat: 36.169941,
      lng: -115.139832,
    },
    description:
      'Las Vegas is the largest city in the state of Nevada. Las Vegas is the Entertainment Capital of the World. It is located in the Mojave Desert of Southern Nevada. The city features many mega hotel/casino complexes decorated with lavish care and attention to detail creating a fantasy like environment. The casinos often have names and themes that evoke romance, mystery, and exotic destinations.',
    distance: 8450,
    duration: 14,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/USA/las-vegas.jpg`,
    rating: 10,
  },
  {
    name: 'sydney',
    location: {
      city: 'Sydney',
      country: 'Australia',
    },
    coordinates: {
      lat: -33.86882,
      lng: 151.20929,
    },
    description:
      'Sydney  is the capital city of the state of New South Wales, and the most populous city in both Australia and Oceania. Located on Australia east coast, the metropolis surrounds Sydney Harbour and extends about 70 km (43.5 mi) on its periphery towards the Blue Mountains to the west. Despite being one of the most expensive cities in the world, Sydney frequently ranks in the top ten most liveable cities in the world.',
    distance: 15750,
    duration: 30,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/Australia/sydney.jpg`,
    rating: 10,
  },
  {
    name: 'rome',
    location: {
      city: 'Rome',
      country: 'Italy',
    },
    coordinates: {
      lat: 41.902782,
      lng: 12.496365,
    },
    description:
      'Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi), Rome is the countrys most populated comune and the third most populous city in the European Union by population within city limits.',
    distance: 3350,
    duration: 7,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/Italy/rome.jpg`,
    rating: 8,
  },
  {
    name: 'new-york',
    location: {
      city: 'New York',
      country: 'United States',
    },
    coordinates: {
      lat: 40.712776,
      lng: -74.005974,
    },
    description:
      'New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States.',
    distance: 7200,
    duration: 12,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/USA/new-york.jpg`,
    rating: 9,
  },
  {
    name: 'milan',
    location: {
      city: 'Milan',
      country: 'Italy',
    },
    coordinates: {
      lat: 45.464203,
      lng: 9.189982,
    },
    description:
      'Milan is a city in northern Italy, capital of Lombardy regional area of the Italian Lakes and the second-most populous city proper in Italy after Rome. The city proper has a population of about 1.4 million, while its metropolitan city has 3.26 million inhabitants.',
    distance: 3350,
    duration: 7,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/Italy/milan.jpg`,
    rating: 8,
  },
  {
    name: 'london',
    location: {
      city: 'London',
      country: 'United Kingdom',
    },
    coordinates: {
      lat: 51.507386,
      lng: -0.127895,
    },
    description:
      'London is the capital and largest city of England and the United Kingdom, with a population of just over 9 million. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones. London diverse cultures encompass over 300 languages. The mid-2018 population of Greater London of about 9 million made it Europe third-most populous city.',
    distance: 5750,
    duration: 12,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/United-Kingdom/london.jpg`,
    rating: 9,
  },
  {
    name: 'lviv',
    location: {
      city: 'Lviv',
      country: 'Ukraine',
    },
    coordinates: {
      lat: 49.841893,
      lng: 24.031724,
    },
    description:
      'Lviv is the largest city in Western Ukraine, and the sixth-largest in Ukraine, with a population of 717,510 (2021 est). Lviv is one of the main cultural centres of Ukraine. It was named in honour of Leo, the eldest son of Daniel, King of Ruthenia. The historical heart of the city, with its old buildings and cobblestone streets, survived Soviet and German occupations during World War II largely unscathed.',
    distance: 750,
    duration: 7,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/Ukraine/lviv.jpg`,
    rating: 9,
  },
  {
    name: 'tokyo',
    location: {
      city: 'Tokyo',
      country: 'Japan',
    },
    coordinates: {
      lat: 35.689487,
      lng: 139.691711,
    },
    description:
      'Tokyo is the largest urban economy in the world by gross domestic product, and is categorized as an Alpha+ city by the Globalization and World Cities Research Network. Part of an industrial region that includes the cities of Yokohama, Kawasaki, and Chiba, Tokyo is Japans leading center of business and finance.',
    distance: 1550,
    duration: 10,
    image: `${process.env.NEXT_PUBLIC_URL}/images/places/Japan/tokyo.jpg`,
    rating: 8,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<IPlace>>) {
  res.status(200).json(places);
}
