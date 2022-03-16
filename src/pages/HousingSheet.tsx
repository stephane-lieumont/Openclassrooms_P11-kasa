import { FunctionComponent, Fragment, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import IHousingData from "../types/IHousingData"
import HousingService from "../services/HousingService"
import HeadPictures, { HeightSize } from "../components/HeadPictures"
import Loader from "../components/Loader"
import Stars from "../components/Stars"
import DropdownContent from "../components/DropdownContent"
import Carousel from "../components/Carousel"

/**
 * React Component function : Housing sheet page
 */
const HousingSheet: FunctionComponent = () => {
  const { housingId } = useParams<string>()
  const [housingData, setHousingData] = useState<IHousingData>()
  const [errorAPI, setErrorAPI] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [sliderIsLoading, setSliderIsLoading] = useState<boolean>(true)
  const [avatarIsLoading, setAvatarIsLoading] = useState<boolean>(true)

  // Call Datas API
  useEffect(() => {
    HousingService.getById(housingId!)
      .then(housing => {
        setHousingData(housing)
      })
      .catch(() => {
        setErrorAPI(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [housingId])
  
  // If error when call datas API
  if (errorAPI) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>
  }

  // Load Pictures inside carousel
  const handleLoadedPictures = () => {
    setSliderIsLoading(false)
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
