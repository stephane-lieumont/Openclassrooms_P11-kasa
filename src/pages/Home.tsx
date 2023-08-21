import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HomePicture from "../assets/home-picture.jpg";
import CardHousing from "../components/CardHousing";
import HeadPictures, { HeightSize } from "../components/HeadPictures";
import Loader from "../components/Loader";
import HousingService from "../services/HousingService";
import IHousingData from "../types/IHousingData";

/**
 * React Component function : Home page
 */
const Home: React.FunctionComponent = () => {
  const [housings, setHousings] = useState<Array<IHousingData>>([]);
  const [errorAPI, setErrorAPI] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [headingIsLoading, setHeadingIsLoading] = useState<boolean>(true);

  // Call Datas API
  useEffect(() => {
    HousingService.getAll()
      .then((housings) => {
        setHousings(housings);
      })
      .catch(() => {
        setErrorAPI(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // If error when call datas API
  if (errorAPI) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>;
  }

  // Load head picture
  const handleLoad = () => {
    setHeadingIsLoading(false);
  };

  // Else display Housings Cards
  return (
    <Fragment>
      <div id="heading">
        <HeadPictures
          heightSize={HeightSize.medium}
          content="Chez vous, partout et ailleurs"
          isLoading={headingIsLoading}
          overlay
        >
          <img src={HomePicture} alt="home landscape" onLoad={handleLoad} />
        </HeadPictures>
      </div>
      <section id="housings">
        <ul className="housings-list">
          {isLoading && <Loader />}
          {housings.map((housing, index) => (
            <li key={housing.id}>
              <Link to={`/fiche-logement/${housing.id}/${housing.title.replace(/ /g, "_")}`}>
                <CardHousing picture={housing.cover} title={housing.title} id={index} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default Home;
