import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import styles from './Header.module.scss'

const Header = ({openCart}) => {

  const { totalPrice } = useCart()

    return (
      <header>
        <Link to='react-sneakers' className={styles.headerLink}>
          <div className={styles.headerLeft}>
              <img className={styles.headerLeft__img} width={40} height={40} src="img/logo.png" alt="logo" />
              <div>
                  <h3>REACT SNEAKERS</h3>
                  <p className={styles.headerLeft__p}>The best sneakers store</p>
              </div>
          </div>
        </Link>
        <ul className={styles.headerRight}>
            <li onClick={openCart} className={styles.headerRight__li}>
              <img className={styles.headerRight__li_img} width={18} height={18} src="img/cart.svg" alt="cart" />
              <span>{totalPrice}$</span>
            </li>
            <li className={styles.headerRight__li}>
              <Link to='favorites' className={styles.headerLink}>
                <img className={styles.headerRight__li_img} width={18} height={18} src="img/favorite.svg" alt="favorite" />
                <span className={styles.headerRight__li_span}>Favorite</span>
              </Link>
            </li> 
            <li className={styles.headerRight__li}>
            <Link to='orders' className={styles.headerLink}>
              <img className={styles.headerRight__li_img} width={18} height={18} src="img/user.svg" alt="user" />
              <span className={styles.headerRight__li_span}>Profile</span>
              </Link>
            </li>
          </ul>
      </header>
    );
}

export default Header;