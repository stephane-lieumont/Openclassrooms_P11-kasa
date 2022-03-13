import { FunctionComponent, Fragment } from "react"
import HeadPictures, { HeightSize } from "../components/HeadPictures"
import AboutPicture from "../assets/about-picture.jpg"
import DropdownContent from "../components/DropdownContent"

const About: FunctionComponent = () => {
  return (
    <Fragment>
      <section id="heading">
        <HeadPictures heightSize={HeightSize.medium} >
          <img src={AboutPicture} alt="about landscape" />
        </HeadPictures>
      </section>
      <section id="about">
        <DropdownContent title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </DropdownContent>
        <DropdownContent title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </DropdownContent>
        <DropdownContent title="Service">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
          N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </DropdownContent>
        <DropdownContent title="Responsabilité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </DropdownContent>
      </section>
    </Fragment>
  );
}

export default About;