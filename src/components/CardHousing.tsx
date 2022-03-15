import { FunctionComponent, useEffect, useState } from "react"
import Loader from "./../components/Loader"

type CardHousingProps = {
  id?: number
  picture?: string,
  title?: string
}


const CardHousing: FunctionComponent<CardHousingProps> = ({title ="titre de la location", picture, id}: CardHousingProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [destroyLoader, setDestroyLoader] = useState<boolean>(false)

  useEffect(() => {
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