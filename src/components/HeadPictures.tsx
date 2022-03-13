import { FunctionComponent } from "react";

export enum HeightSize {
  large,
  medium
}

type HeaderPicturesProps = {
  content?: string,
  heightSize?: HeightSize,
  children?: React.ReactNode
}


const HeadPictures: FunctionComponent<HeaderPicturesProps> = ({content, heightSize, children}: HeaderPicturesProps) => {

  const getClassName = (): string => {
    switch(heightSize) {
      case HeightSize.large:
        return "head-picture--large"
      case HeightSize.medium:
        return "head-picture--medium head-picture__overlay"
      default:
        return ""
    }
  }

  return (
    <div className={`head-picture ${getClassName()}`}>
      {children}
      {content && 
        <p>{content}</p>
      }
    </div>
  );
}

export default HeadPictures;