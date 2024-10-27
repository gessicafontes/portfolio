import { Link } from "react-router-dom"
import styles from './Hero.module.css'
import iconLinkedin from '../assets/imgs/icon-linkedin.svg'
import iconGithub from '../assets/imgs/icon-github.svg'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/gessicafontes/"
        target="_blank" 
        rel="noopener noreferrer">
          <img src={iconLinkedin} alt="LinkedIn de Gessica Fontes" />
        </a>
        <a href="https://github.com/gessicafontes"
        target="_blank"
        rel="noopener noreferrer">
          <img src={iconGithub} alt="GitHub de Gessica Fontes" />
        </a>    
      </div>
      <h1><span>Hello!</span> <br /> I’m a <span>Fullstack Developer.</span></h1>
    </div>
  )
}

export default Hero