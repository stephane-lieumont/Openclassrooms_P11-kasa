import { FunctionComponent } from "react"
import { Link } from 'react-router-dom'
import Logo from './../assets/logo.svg'

import './Header.scss'

const Header: FunctionComponent = () => {
  return (
    <header>
      <Link to="/">
        <svg width="210" height="68"><use xlinkHref={Logo + '#logo'}></use></svg>
      </Link>
      <nav>
        <li><Link to="/">Acceuil</Link></li>
        <li><Link to="/a_propos_de_kasa">A propos</Link></li>
      </nav>
    </header>
  );
}

export default Header;
