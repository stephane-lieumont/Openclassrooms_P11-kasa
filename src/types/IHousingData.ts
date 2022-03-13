import iHostData from "./iHostData"

export default interface IHousingData {
  id?: any | null,
  title: string,
  cover: string,
  pictures: Array<string>,
  description: string,
  host: iHostData,
  rating: number,
  location: string,
  equipments: Array<String>
  tags: Array<string>
}