export interface IPlace {
  name: string;
  location: TypeLocation;
  description: string;
  distance: number;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

type TypeLocation = {
  city: string;
  country: string;
};
