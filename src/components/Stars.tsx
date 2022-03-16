import { FunctionComponent } from "react";
import Star from './../assets/star.svg'

type StarsProps = {
  count: number,
}

/**
 * React Component function : Stars
 * @param props Component props
 * @param props.count Rating number option
 */
const Stars: FunctionComponent<StarsProps> = ({count = 0}: StarsProps) => {
  const items = []
  const starsMax = 5

  // Generate stars li with classname
  for(let i = 0; i < starsMax; i++) {
    items.push(<li key={`stars ${i}`} className={i < count ? "stars__item--active" : "stars__item--off"}><svg width="30" height="30"><use xlinkHref={Star + '#star'}></use></svg></li>)
  }
  
  return (
    <ul className="stars">{ items }</ul>
  )
}

export default Stars;