import { FunctionComponent } from "react"
import { NavLink, Link } from 'react-router-dom'
import Logo from './../assets/logo.svg'

/**
 * React Component function : Header layout
 */
const Header: FunctionComponent = () => {
  return (
    <header>
      <div className="container max-screen-lg">
        <Link to="/">
          <svg width="210" height="68"><use xlinkHref={Logo + '#logo'}></use></svg>
        </Link>
        <nav>
          <ul>
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Acceuil</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/a-propos-de-kasa">A propos</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
