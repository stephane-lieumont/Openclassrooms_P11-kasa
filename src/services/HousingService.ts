import IHousingData from "../types/IHousingData"

const urlMockHousingsAll: string = "/__mock/housings.json"

const getAll = async (): Promise<IHousingData[]> => {
  let response: any
  let data: Array<IHousingData>

  try {
    response = await fetch(urlMockHousingsAll)
    data = await response.json()

  } catch (err: any) {
    throw new Error('Erreur lors de la requete API :' + err)
  }

  return data
};

const getById = async (id: string): Promise<IHousingData> => {
  let response: any
  let allData: Array<IHousingData>
  let data: IHousingData

  try {
    response = await fetch(urlMockHousingsAll)
    allData = await response.json()
    data = allData.filter(housing => housing.id === id)[0]

  } catch (err: any) {
    throw new Error('Erreur lors de la requete API :' + err)
  }

  return data
};

const HousingService = {
  getAll,
  getById
};
export default HousingService;