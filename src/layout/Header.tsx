import { FunctionComponent } from "react"
import { Link } from 'react-router-dom'
import Logo from './../assets/logo.svg'

const Header: FunctionComponent = () => {
  return (
    <header>
      <div className="container max-screen-lg">
        <Link to="/">
          <svg width="210" height="68"><use xlinkHref={Logo + '#logo'}></use></svg>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Acceuil</Link></li>
            <li><Link to="/a-propos-de-kasa">A propos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
