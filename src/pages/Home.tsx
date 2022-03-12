import { FunctionComponent, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardHousing from "../components/CardHousing";
import HeadPictures, { HeightSize } from "../components/HeadPictures";
import HousingService from "../services/HousingService";
import IHousingData from "../types/IHousingData";

const Home: FunctionComponent = () => {
  const[housings, setHousings] = useState<Array<IHousingData>>([])
  const[errorAPI, setErrorAPI] = useState<boolean>(false)

  // Call Datas API
  useEffect(() => {
      HousingService.getAll()
        .then( housings => {
          setHousings(housings)
        })
        .catch( () => {
          setErrorAPI(true)
        })
    }    
  , [])
  
  // If error when call datas API
  if (errorAPI) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>
  }

  // Else display Housings Cards
  return (
    <Fragment>
      <section id="heading">
        <HeadPictures content="Chez vous, partout et ailleurs" heightSize={HeightSize.medium} />
      </section>
      <section id="housings">
        <ul className="housings-list">
          {housings.map((housing) => (
            <li key={housing.id}>
              <Link to={`/fiche-logement/${housing.id}`}>
                <CardHousing picture={housing.cover} title={housing.title}/>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
}

export default Home;
