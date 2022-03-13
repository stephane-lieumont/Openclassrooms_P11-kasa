import { FunctionComponent, useState, useEffect } from "react"

type CarouselProps = {
  title?: string
  pictures?: string[],
}


const Carousel: FunctionComponent<CarouselProps> = ({title, pictures = []}: CarouselProps) => {
  const [index, setIndex] = useState<number>(0)
  const nbrPictures = pictures.length

  useEffect(() => {
    const interval = setInterval(() => {
      if(index >= (nbrPictures - 1)) {
        setIndex(0)
      } else {
        setIndex(index + 1);
      }      
    }, 5000);
    return () => {
      clearInterval(interval);
    }
  }, [index, nbrPictures]);

  return (
    <div className="carousel">
      <div className="carousel__container" style={{ transform: `translateX(${ -100 * index }%)` }}>
        <ul className="carousel__group">
          {pictures?.map((picture, index) => (
            <li key={index} className="carousel__item"><img src={picture} alt={`${title} ${index}`}></img></li>
          ))}
        </ul>
      </div>
      <div className="carousel__counter">
        <p>{ `${index + 1} / ${ nbrPictures }` }</p>
      </div>
    </div>
  );
}

export default Carousel;