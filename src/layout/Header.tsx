import { FunctionComponent } from "react"
import { Link } from 'react-router-dom'
import Logo from './../assets/logo.svg'

const Header: FunctionComponent = () => {
  return (
    <header>
      <Link to="/">
        <svg width="210" height="68"><use xlinkHref={Logo + '#logo'}></use></svg>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Acceuil</Link></li>
          <li><Link to="/a_propos_de_kasa">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
