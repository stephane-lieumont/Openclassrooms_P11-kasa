export default interface IHousingData {
  id?: any | null,
  title: string,
  cover: string,
  pictures: Array<string>,
  description: string,
  host: Map<string, string>,
  rating: number,
  location: string,
  equipements: Array<String>
  tags: Array<string>
}