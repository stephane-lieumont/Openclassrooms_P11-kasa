import React from "react";

import Loader from "./Loader";

export enum HeightSize {
  large,
  medium,
}

type HeaderPicturesProps = {
  content?: string;
  heightSize?: HeightSize;
  overlay?: boolean;
  children?: React.ReactNode;
  isLoading?: boolean;
};

/**
 * React Component function : Head Pictrures
 * @param props Component props
 * @param props.content Inner content text
 * @param props.heightSize Change heightSize define options type
 * @param props.children Inner content children elements
 * @param props.isLoading Indicate if picture is loading
 * @param props.overlay add background image whith darken colors
 */
const HeadPictures: React.FunctionComponent<HeaderPicturesProps> = ({
  content,
  heightSize,
  children,
  isLoading = false,
  overlay = false,
}: HeaderPicturesProps) => {
  return (
    <div
      className={
        "head-picture " +
        (heightSize === HeightSize.large ? "head-picture--large " : "") +
        (heightSize === HeightSize.medium ? "head-picture--medium " : "") +
        (overlay ? "head-picture__overlay " : "") +
        (isLoading ? "loading" : "loaded-1")
      }
    >
      {isLoading === true && (
        <div className="head-picture__loader">
          <Loader absolute />
        </div>
      )}
      <div className={"head-picture__container " + (isLoading ? "loading" : "loaded-1")}>
        {children}
      </div>
      {content && (
        <div className={"head-picture__content " + (isLoading ? "loading" : "loaded-2")}>
          <h2>{content}</h2>
        </div>
      )}
    </div>
  );
};

export default HeadPictures;
