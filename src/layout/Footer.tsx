import { FunctionComponent } from "react";
import Logo from './../assets/logo.svg'

/**
 * React Component function : Footer layout
 */
const Footer: FunctionComponent = () => {  
  return (
    <footer>
      <div className="container max-screen-lg">
        <svg width="122" height="40"><use xlinkHref={Logo + '#logo'}></use></svg>
        <p>© { (new Date().getFullYear()) } Kasa. All rights reserved</p>
      </div>
    </footer>    
  );
}

export default Footer;