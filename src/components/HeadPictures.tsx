import { FunctionComponent } from "react"
import Loader from "./Loader"

export enum HeightSize {
  large,
  medium
}

type HeaderPicturesProps = {
  content?: string,
  heightSize?: HeightSize,
  overlay?:boolean,
  children?: React.ReactNode,
  isLoading?: boolean
}


const HeadPictures: FunctionComponent<HeaderPicturesProps> = ({content, heightSize, children, isLoading = false, overlay = false}: HeaderPicturesProps) => {
  return (
    <div className={
      'head-picture ' +
      (heightSize === HeightSize.large ? 'head-picture--large ' : '') +
      (heightSize === HeightSize.medium ? 'head-picture--medium ': '') +
      (overlay ? 'head-picture__overlay ' : '') + 
      (isLoading ? 'loading' : 'loaded-1') 
    }>
      {isLoading === true &&
        <div className="head-picture__loader">
          <Loader absolute />
        </div>
      }
      <div className={
        "head-picture__container " +
        (isLoading ? 'loading' : 'loaded-1') 
      }>
        {children}
      </div>
      {content &&
        <div className={
          "head-picture__content " +
          (isLoading ? 'loading' : 'loaded-2') 
        }>
          <p>{content}</p>
        </div>
      }
    </div>
  );
}

export default HeadPictures;