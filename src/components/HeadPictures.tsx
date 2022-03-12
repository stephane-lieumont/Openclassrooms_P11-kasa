import { FunctionComponent } from "react";
import DefaultPicture from './../assets/home-picture-bg.jpg'

export enum HeightSize {
  large,
  medium
}

type HeaderPicturesProps = {
  picture?: string,
  content?: string,
  heightSize?: HeightSize
}


const HeadPictures: FunctionComponent<HeaderPicturesProps> = ({picture, content, heightSize}: HeaderPicturesProps) => {

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
      <img src={picture ? picture : DefaultPicture } alt="head" />
      {content && 
        <p>{content}</p>
      }
    </div>
  );
}

export default HeadPictures;