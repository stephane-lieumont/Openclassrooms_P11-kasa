import { FunctionComponent, Fragment, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import IHousingData from "../types/IHousingData"
import HousingService from "../services/HousingService"
import HeadPictures, { HeightSize } from "../components/HeadPictures"
import Loader from "../components/Loader"
import Stars from "../components/Stars"
import DropdownContent from "../components/DropdownContent"
import Carousel from "../components/Carousel"
import { Navigate } from "react-router-dom"

/**
 * React Component function : Housing sheet page
 */
const HousingSheet: FunctionComponent = () => {
  const { housingId } = useParams<string>()
  const { name } = useParams<string>()
  const [error404, setError404] = useState<boolean>(false)
  const [housingData, setHousingData] = useState<IHousingData>()
  const [errorAPI, setErrorAPI] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [sliderIsLoading, setSliderIsLoading] = useState<boolean>(true)
  const [avatarIsLoading, setAvatarIsLoading] = useState<boolean>(true)

  // Call Datas API
  useEffect(() => {
    let housing: IHousingData

    HousingService.getById(housingId!)
      .then(data => {
        housing = data  
      })
      .catch(() => {
        setErrorAPI(true)
      })
      .finally(() => {        
        setIsLoading(false)
        // if url have bad id or name redirect to 404
        if(!housing || name !== housing.title.replace(/ /g,"_")) {
          setError404(true)
        } else {
          setHousingData(housing)
        }
      })
  }, [housingId, name])

  // if data or id not exist redirect 404
  if(error404){
    return <Navigate  to='/error404' />
  }
  
  // If error when call datas API
  if (errorAPI) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>
  }

  // Load Pictures inside carousel
  const handleLoadedPictures = () => {
    const timer = setTimeout(() => {
      setSliderIsLoading(false)
      clearTimeout(timer)  
    },700)      
  }

  // Load image avatar author
  const avatarLoaded = () => {
    setAvatarIsLoading(false)
  }

  return (
    <Fragment>
    {isLoading ? (
      <Loader />
    ):(
      <Fragment>
        <div id="heading">
          <HeadPictures 
            heightSize={HeightSize.large}
            isLoading={sliderIsLoading}
          >
            <Carousel pictures={housingData?.pictures} title={housingData?.title} handleLoad={ handleLoadedPictures } />
          </HeadPictures>                
        </div>
        <section id ="description">
          <div className="housing">
            <div className="housing__title">
              <h2>{housingData?.title}</h2>
              <h3>{housingData?.location}</h3>
              <ul className="housing__tags">
                { housingData?.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <aside className="housing__author">
              <div className="housing__author__description">           
                <h3>{housingData?.host.name}</h3>
                <div className={ avatarIsLoading ? 'avatar' : 'avatar loaded'}>
                  <img src={housingData?.host.picture} onLoad={ avatarLoaded } alt={housingData?.host.name}/>
                </div>
              </div>   
              <Stars count={housingData?.rating!} />
            </aside>
          </div>
        </section>
        <section id="details">
          <DropdownContent title="Description">
            <p>{housingData?.description}</p>
          </DropdownContent>
          <DropdownContent title="Équipements">
            <ul>
              { housingData?.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </DropdownContent>
        </section>
      </Fragment>
    )}
    </Fragment>
  );
}

export default HousingSheet;
