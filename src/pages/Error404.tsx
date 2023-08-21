import React from "react";
import { Link } from "react-router-dom";

/**
 * React Component function : Error 404 page not found
 */
const Error404: React.FunctionComponent = () => {
  return (
    <div id="error404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
};

export default Error404;
