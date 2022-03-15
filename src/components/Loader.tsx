import { FunctionComponent } from "react";

type LoaderProps = {
  absolute?: boolean,
  light?: boolean
} 


const Loader: FunctionComponent<LoaderProps> = ({absolute = false, light = false} : LoaderProps) => {
  return (
    <div className={`loader-container 
      ${ absolute && 'loader-container--absolute' }
      ${ light && 'loader-container--light' }
    `}>
      <div className="loader"> 
      </div>
    </div>
  );
}

export default Loader;