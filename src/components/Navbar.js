import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.svg'

const navBar = () => {
  return (
    <div className={styles.wrap}>
      <nav className={`${styles.navbar} mw1200`}>
        <NavLink to="/">
          <img src={logo} alt="Logo do site" />
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
              Início
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navBar