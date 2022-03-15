import { FunctionComponent, Fragment, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CardHousing from "../components/CardHousing"
import Loader from "../components/Loader"
import HeadPictures, { HeightSize } from "../components/HeadPictures"
import HousingService from "../services/HousingService"
import IHousingData from "../types/IHousingData"
import HomePicture from "../assets/home-picture.jpg"

const Home: FunctionComponent = () => {
  const[housings, setHousings] = useState<Array<IHousingData>>([])
  const[errorAPI, setErrorAPI] = useState<boolean>(false)
  const[isLoading, setIsLoading] = useState<boolean>(true)
  const[headingIsLoading, setHeadingIsLoading] = useState<boolean>(true)

  // Call Datas API
  useEffect(() => {  
      HousingService.getAll()
        .then( housings => {
          setHousings(housings)
        })
        .catch( () => {
          setErrorAPI(true)
        })
       .finally(() => {
          setIsLoading(false)
        })
    }
  , [])
  
  // If error when call datas API
  if (errorAPI) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>
  }

  const handleLoad = () => {
    setHeadingIsLoading(false)
  }

  // Else display Housings Cards
  return (
    <Fragment>
      <section id="heading">
        <HeadPictures 
          heightSize={HeightSize.medium} 
          content="Chez vous, partout et ailleurs"
          isLoading={headingIsLoading}
          overlay
        >
          <img src={HomePicture} alt="home landscape" onLoad={ handleLoad } />
        </HeadPictures>
      </section>
      <section id="housings">        
        <ul className="housings-list">
          {isLoading &&
            <Loader />
          }
          {housings.map((housing) => (
            <li key={housing.id}>
              <Link to={`/fiche-logement/${housing.id}/${housing.title.replace(/ /g,"_")}`}>
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
