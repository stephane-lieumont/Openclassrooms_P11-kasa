import { FunctionComponent, useState, useEffect } from "react"

type CarouselProps = {
  title?: string
  pictures?: string[],
  handleLoad?: CallableFunction
}


const Carousel: FunctionComponent<CarouselProps> = ({title, pictures = [], handleLoad = () => {}}: CarouselProps) => {
  const [index, setIndex] = useState<number>(0)
  const [picturesLoaded, setPicturesLoaded] = useState<number>(0)

  const nbrPictures = pictures.length 

  const nextPicture = (index:number, nbrPictures:number) => {
    if(index >= (nbrPictures - 1)) {
      setIndex(0)
    } else {
      setIndex(index + 1);
    }     
  }

  const previousPicture = (index:number, nbrPictures:number) => {
    if(index === 0) {
      setIndex(nbrPictures - 1)
    } else {
      setIndex(index - 1);
    }     
  }

  // Timer Slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextPicture(index, nbrPictures)  
    }, 5000);
    return () => {
      clearInterval(interval);
    }
  }, [index, nbrPictures]);

  // Loading pictures
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
            <li key={index} className="carousel__item"><img src={picture} onLoad={loadPicture} alt={`${title} ${index}`}></img></li>
          ))}
        </ul>
      </div>
      <div className="carousel__counter">
        <p>{ `${index + 1} / ${ nbrPictures }` }</p>
      </div>
      <div className="carousel__control">
        <div onClick={() => previousPicture(index, nbrPictures)} className="carousel__control__previous">previous</div>
        <div onClick={() => nextPicture(index, nbrPictures)} className="carousel__control__next">next</div>
      </div>
    </div>
  );
}

export default Carousel;