import { FunctionComponent, useState, useEffect, Fragment } from "react"

type CarouselProps = {
  title?: string
  pictures?: string[],
  handleLoad?: CallableFunction
}


/**
 * React Component function : Carousel of pictures housing
 * @param props Component props
 * @param props.title Card title 
 * @param props.pictures Card list pictures
 * @param props.handleLoad Card callback when all img load
 */
const Carousel: FunctionComponent<CarouselProps> = ({title, pictures = [], handleLoad = () => {}}: CarouselProps) => {
  const [index, setIndex] = useState<number>(0)
  const [picturesLoaded, setPicturesLoaded] = useState<number>(0)

  const nbrPictures = pictures.length 

  /**
   * Go to next picture
   * @param index 
   * @param nbrPictures 
   */
  const nextPicture = (index:number, nbrPictures:number) => {
    if(index >= (nbrPictures - 1)) {
      setIndex(0)
    } else {
      setIndex(index + 1);
    }     
  }

  /**
   * Go to previous picture
   * @param index 
   * @param nbrPictures 
   */
  const previousPicture = (index:number, nbrPictures:number) => {
    if(index === 0) {
      setIndex(nbrPictures - 1)
    } else {
      setIndex(index - 1);
    }     
  }

  // Timer automatic slider
  useEffect(() => {
    if(picturesLoaded === nbrPictures && nbrPictures > 1) {
      const interval = setInterval(() => {
        nextPicture(index, nbrPictures)  
      }, 5000);
      return () => {
        clearInterval(interval);
      }
    }

  }, [index, nbrPictures, picturesLoaded]);

  // Loading all pictures
  useEffect(() => {
    if(picturesLoaded === nbrPictures) {
      handleLoad()
    }
  }, [picturesLoaded, nbrPictures, handleLoad])

  const loadPicture = () => {
    setPicturesLoaded(picturesLoaded + 1)
  }

  return (
    <div className="carousel">
      <div className="carousel__container" style={{
          transform: `translateX(${ -100 * index }%)`
        }}>
        <ul className="carousel__group" style={{width: 100 * nbrPictures + '%'}}>
          {pictures?.map((picture, index) => (
            <li key={index} className="carousel__item" style={{
              flexBasis: 100 / nbrPictures + '%',
              width: 100 / nbrPictures + '%'
            }}>
              <img src={picture} onLoad={loadPicture} alt={`${title} ${index}`} />
            </li>
          ))}
        </ul>
      </div>
      {nbrPictures > 1 &&
        <Fragment>
          <div className="carousel__counter">
            <p>{ `${index + 1} / ${ nbrPictures }` }</p>
          </div>
          <div className="carousel__control">
            <div onClick={() => previousPicture(index, nbrPictures)} className="carousel__control__previous">previous</div>
            <div onClick={() => nextPicture(index, nbrPictures)} className="carousel__control__next">next</div>
          </div>
        </Fragment>
      }
    </div>
  );
}

export default Carousel;