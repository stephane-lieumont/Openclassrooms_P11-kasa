import { FunctionComponent } from "react";

type CardHousingProps = {
  picture?: string,
  title?: string
}


const CardHousing: FunctionComponent<CardHousingProps> = ({title ="titre de la location", picture}: CardHousingProps) => {
  return (
    <div className="card-housing">
      <h3>{ title }</h3>
      <img src={ picture } alt={`${title} miniature`} />
    </div>
  );
}

export default CardHousing;