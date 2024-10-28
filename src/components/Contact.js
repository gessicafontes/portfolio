import styles from './Contact.module.css'
import Button from './Button'

const Contact = () => {
  return(
    <section className={styles.wrap}>
      <div className={styles.mw1200}>
        <div className={styles.content}>
          <h2>Contact</h2>
          <div><Button>Enviar E-mail</Button></div>
        </div>
      </div>
    </section>
  )
}

export default Contact