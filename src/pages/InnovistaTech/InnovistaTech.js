import styles from './InnovistaTech.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import logo from '../../assets/imgs/logo-innovistaTech.png';
import app from '../../assets/imgs/innovistaTech/app.jpg';
import countryFlow from '../../assets/imgs/innovistaTech/countryflow.jpg';
import countryObjectError from '../../assets/imgs/innovistaTech/countryobjecterror.jpg';
import countryObject from '../../assets/imgs/innovistaTech/countryobject.jpg';
import accountDescriptionCountryField from '../../assets/imgs/innovistaTech/accountdescriptioncountryfield.jpg';
import accountCountryField from '../../assets/imgs/innovistaTech/accountcountryfield.jpg';
import accountAttTotalValue from '../../assets/imgs/innovistaTech/AccountAttTotalValue.jpg'
import accountEmailSettings from '../../assets/imgs/innovistaTech/AccountEmailSettings.jpg';
import orderJob from '../../assets/imgs/innovistaTech/Orderjob.jpg';
import ordersLwc from '../../assets/imgs/innovistaTech/orderslwc.jpg';
import restInsert from '../../assets/imgs/innovistaTech/restinsertorder.jpg';
import restUpsert from '../../assets/imgs/innovistaTech/restupsertaccountpostaman.jpg';

const carouselImagesCountry = [countryObject, countryObjectError, countryFlow]
const carouselImagesAccount = [accountCountryField, accountDescriptionCountryField, accountAttTotalValue, accountEmailSettings]
const carouselImagesRest = [restInsert, restUpsert]

const InnovistaTech = () => {
  const carouselCountry = useRef();
  const carouselAccount = useRef();
  const carouselRest = useRef();

  const [widthCountry, setWidthCountry] = useState(0);
  const [widthAccount, setWidthAccount] = useState(0);
  const [widthRest, setWidthRest] = useState(0);

  useEffect(() => {
    setWidthCountry(carouselCountry.current?.scrollWidth - carouselCountry.current?.offsetWidth)
  }, [])
  useEffect(() => {
    setWidthAccount(carouselAccount.current?.scrollWidth - carouselAccount.current?.offsetWidth)
  }, [])
  useEffect(() => {
    setWidthRest(carouselRest.current?.scrollWidth - carouselRest.current?.offsetWidth)
  }, [])

  return (
    <div className={styles.conteiner}>
      <div className={styles.imgAlign}><img src={logo} alt="Logo do Innovista Tech" /></div>
      <h1>Innovista Tech</h1>
      <div className={styles.organization}>
        <h2>Organização</h2>
        <p>Cor de fundo: <span>#022072</span></p>
        <p>Segundo plano de cabeçalho global: <span>#537DA7</span></p>
        <h3>Aplicativo</h3>
        <div>
          <img src={app} alt="Aplicativo" />
        </div>
      </div>
      <div className={styles.personObject}>
        <h2>Objeto Personalizado</h2>
        <h3>País (Country__c)</h3>
        <motion.div ref={carouselCountry} className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
          <motion.div 
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -widthCountry}}
          initial={{ x: 100}}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          >
            {carouselImagesCountry.map(image => (
              <motion.div className={styles.item} key={image}>
                <img src={image} alt='Imagem do Carrosel'></img>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <h2>Objetos Core</h2>
      <h3>Conta (Account)</h3>
      <motion.div ref={carouselAccount} className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
          <motion.div 
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -widthAccount}}
          initial={{ x: 100}}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          >
            {carouselImagesAccount.map(image => (
              <motion.div className={styles.item} key={image}>
                <img src={image} alt='Imagem do Carrosel'></img>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      <h3>Pedido (Pedido)</h3>
      <div className={styles.imgAlign}><img src={orderJob} alt="Pedido Batch" /></div>
      <h2>LWC</h2>
      <div className={styles.imgAlign}>
        <img src={ordersLwc} alt="Lwc de Pedidos" />
      </div>
      <h2>REST</h2>
      <motion.div ref={carouselRest} className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
          <motion.div 
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -widthRest}}
          initial={{ x: 100}}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          >
            {carouselImagesRest.map(image => (
              <motion.div className={styles.item} key={image}>
                <img src={image} alt='Imagem do Carrosel'></img>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
    </div>
  )
}

export default InnovistaTech