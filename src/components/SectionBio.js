import styles from './SectionBio.module.css'
import me from '../assets/imgs/me.jpg'

const SectionBio = () => {
  return (
    <div className={styles.conteiner}>
      <img src={me} alt="Oi :D" />
      <div>
        <h2>Géssica Fontes</h2>
        <p><span>Sou Géssica, <br /> desenvolvedora fullstack, <br /> gosto bastante do mundo <br /> da tecnologia e sempre <br /> estou entusiasmada para <br /> aprender alguma <br /> novidade. </span></p>
      </div>
    </div>
  )
}

export default SectionBio