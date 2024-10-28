import styles from './SectionBio.module.css'
import me from '../assets/imgs/me.jpg'

const SectionBio = () => {
  return (
    <section className={styles.wrap}>
      <div className={`${styles.conteiner} mw1200`}>
        <div>
          <img src={me} alt="Oi :D" />
        </div>
        <div>
          <div className={styles.text}>
            <h2>Géssica Fontes</h2>
            <p><span>Sou Géssica, <br /> desenvolvedora fullstack, <br /> gosto bastante do mundo <br /> da tecnologia e sempre <br /> estou entusiasmada para <br /> aprender alguma novidade. </span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBio