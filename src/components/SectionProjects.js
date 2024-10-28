import styles from './SectionProjects.module.css'
import innovistaTect from '../assets/imgs/innonvistaTech.jpg'
import javascript from '../assets/imgs/icon-javascript.png'
import apex from '../assets/imgs/icon-apex.png'
import soqlsosl from '../assets/imgs/icon-soqlsosl.png'
import lwc from '../assets/imgs/icon-lwc.png'
import { Link } from 'react-router-dom'

const SectionProjects = () => {
  return (
    <section className={styles.wrap}>
      <div className={`${styles.conteiner} mw1200`}>
        <h2>Featured Projects</h2>
        <div className={styles.projects}>
        <Link to='/innovistaTech'>
          <div className={styles.card}>
            <div className={styles.project}>
              <img src={innovistaTect} alt="" />
              <div className={styles.case}>
                <p>Criação de uma Organização que tem objeto personalizado, incrementação de regra em objeto padrão, flows, entre outros.</p>
              </div>
            </div>
            <div className={styles.stacks}>
              <img src={javascript} alt="" />
              <img src={apex} alt="" />
              <img src={soqlsosl} alt="" />
              <img src={lwc} alt="" />
            </div>
          </div>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionProjects