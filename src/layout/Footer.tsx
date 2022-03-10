import { FunctionComponent } from "react";
import Logo from './../assets/logo.svg'

const Footer: FunctionComponent = () => {  
  return (
    <footer>
      <svg width="122" height="40"><use xlinkHref={Logo + '#logo'}></use></svg>
      <p>© { (new Date().getFullYear()) } Kasa. All rights reserved</p>
    </footer>    
  );
}

export default Footer;