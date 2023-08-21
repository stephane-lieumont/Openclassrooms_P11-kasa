import iHostData from "./iHostData";

/**
 * Housing Data Model
 */
export default interface IHousingData {
  id?: string | null;
  title: string;
  cover: string;
  pictures: Array<string>;
  description: string;
  host: iHostData;
  rating: number;
  location: string;
  equipments: Array<string>;
  tags: Array<string>;
}
