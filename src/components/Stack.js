import styles from './Stack.module.css';
import react from '../assets/imgs/react-logo.png'
import javascript from '../assets/imgs/javascript-logo.png'
import ruby from '../assets/imgs/ruby-logo.png'
import postgree from '../assets/imgs/postgree-logo.png'
import node from '../assets/imgs/node-logo.png'
import express from '../assets/imgs/express-logo.png'
import cypress from '../assets/imgs/cypress-logo.png'
import jest from '../assets/imgs/jest-logo.png'
import sql from '../assets/imgs/sql-logo.png'
import soqlsosl from '../assets/imgs/soql-sosl-logo.png'
import apex from '../assets/imgs/apex-logo.png'
import lwc from '../assets/imgs/lwc-logo.png'
import java from '../assets/imgs/java-logo.png'

const Stack = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.slider} 
      style={{
        '--width': '100px',
        '--height': '80px',
        '--quantity': '13'
      }}>
        <div className={styles.list}>
          <div className={styles.item} style={{'--position': '1'}}>
            <img src={react} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '2'}}>
            <img src={javascript} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '3'}}>
            <img src={ruby} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '4'}}>
            <img src={postgree} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '5'}}>
            <img src={node} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '6'}}>
            <img src={express} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '7'}}>
            <img src={cypress} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '8'}}>
            <img src={jest} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '9'}}>
            <img src={sql} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '10'}}>
            <img src={soqlsosl} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '11'}}>
            <img src={apex} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '12'}}>
            <img src={lwc} alt="" />
          </div>
          <div className={styles.item} style={{'--position': '13'}}>
            <img src={java} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack