import { FunctionComponent, useEffect, useState } from "react"
import Loader from "./../components/Loader"

type CardHousingProps = {
  id?: number
  picture?: string,
  title?: string
}

/**
 * React Component function : Card housings
 * @param props Component props
 * @param props.title Card title 
 * @param props.picture Card cover
 * @param props.id Card id render list
 */
const CardHousing: FunctionComponent<CardHousingProps> = ({title ="titre de la location", picture, id}: CardHousingProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [destroyLoader, setDestroyLoader] = useState<boolean>(false)

  useEffect(() => {
    // Clean Loader Component when content is load
    if(!loading) {
      const timer = setTimeout(() => {
        setDestroyLoader(true)
        clearTimeout(timer)
      }, 1000)

      return () => clearTimeout(timer)
    }    
  }, [loading])

  return (
    <div className={`card-housing card-housing--${id}`}>
      <h3>{ title }</h3>
      { !destroyLoader &&
        <Loader absolute light />
      }      
      <img className={loading ? '' : 'loaded'} src={ picture } alt={`${title} miniature`} onLoad={ () => setLoading(false) } />
    </div>
  );
}

export default CardHousing;