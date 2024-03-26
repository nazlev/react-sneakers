import React from 'react';
import { useContext } from 'react';
import AppContext from '../../Context/context';
import styles from './Info.module.scss'

const Info = ({ image, title, descriptions }) => {

    const { setCartOpen } = useContext(AppContext);
  return (
    <div className={styles.cartEmpty}>
        <img className={styles.cartEmpty__img} height='120px' src={image} alt="Empty" />
        <h2>{title}</h2>
        <p className={styles.cartEmpty__p}>{descriptions}</p>
        <button onClick={() => setCartOpen(false)} className={styles.basketBtn}>
            <img className={styles.cartEmpty__arrow} src="/img/backArrow.png" alt="Back" /> Go back
        </button>
    </div>
  )
}

export default Info