export interface IBooks {
  _id: number;
  title: string;
  img: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews?: string[];
}
