import styles from './Contact.module.css'
import Button from './Button'

const Contact = () => {
  return(
    <section className={styles.wrap}>
      <div className={styles.mw1200}>
        <div className={styles.content}>
          <h2>Contact</h2>
          <div><a href="mailto:gessica.pimentel.fontes@gmail.com"><Button>Enviar E-mail</Button></a></div>
        </div>
      </div>
    </section>
  )
}

export default Contact