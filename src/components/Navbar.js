import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.svg'

const navBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <img src={logo} alt="Logo do site" />
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" className={({isActive}) => (isActive ? styles.active : "")}>
            Projetos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default navBar