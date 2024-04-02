import styles from './Drawer.module.scss';
import Info from '../Info/Info';
import { useState } from 'react';
import axios from 'axios';
import { useCart } from '../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ items = [], onRemove, opened}) => {
const [isCompleted, setIsCompleted] = useState(false);
const [orderId, setOrderId] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const { setCartOpen, cartItems,  setCartItems, totalPrice } = useCart();

const onClickOrder = async () => {
  try {
    setIsLoading(true);
    const { data } = await axios.post('https://65fb790514650eb2100a0380.mockapi.io/api/sneakers/Orders/', {items : cartItems});
  setOrderId(data.id);
  setIsCompleted(true);
  setCartItems([]);

for(let i = 0; i < cartItems.length; i++) {
  const item = cartItems[i];
  await axios.delete('https://65cba217efec34d9ed87e424.mockapi.io/sneakers/cart/' + item.id);
  await delay(1000);
}

  } catch {
    alert('No order :(')
  }
  setIsLoading(false);
}

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={styles.drawer}>
          <h2 className={styles.drawer__h2}>
            Cart 
            <img onClick={() => setCartOpen(false)} className={styles.drawer__remove} width={32} height={32} src="img/delete.svg" alt="Delete" />
          </h2>
          <div className={styles.items}>
            {
              items.length > 0 
                ?
                <div>
                  {
                    items.map((obj, idx) =>
                      <div key={idx} className={styles.basketItem}>
                        <img className={styles.basketItem__img} width={70} height={70} src={obj.imgUrl} alt="Sneakers" />
                        <div className={styles.basketItem__info}>
                          <p className={styles.basketItem__info_p}>{obj.title}</p>
                          <b>{obj.price}$</b>
                        </div>
                        <img onClick={() => onRemove(obj.id)} className={styles.basketItem__remove} width={32} height={32} src="img/delete.svg" alt="Delete" />
                      </div>
                    )
                  }
                  <div className={styles.bottom}>
                    <ul className={styles.totalCost}>
                      <li className={styles.totalCost__li}>
                        <span>Total</span>
                        <div className={styles.totalCost__border}></div>
                        <b>{totalPrice}$</b>
                      </li>
                      <li className={styles.totalCost__li}>
                        <span>Tax 5%</span>
                        <div className={styles.totalCost__border}></div>
                        <b>{totalPrice / 20}$</b>
                      </li>
                    </ul>
                    <button disabled={isLoading} onClick={onClickOrder} className={styles.basketBtn}>
                      Checkout <img className={styles.basketBtn__arrow} src="img/arrow.svg" alt="Arrow" />
                    </button>
                  </div>
                </div>
                :
                  <Info 
                    image = { isCompleted ? 'img/orderDone.png' : "img/empty.svg" }
                    title = { isCompleted ? 'Order completed!' : 'Cart empty!' } 
                    descriptions = { isCompleted ? `Your order #${orderId} will be transferred to the deliver service soon` : 'Add at least one pair of sneakers to order' }
                  />
            }
           
          </div>
        </div>
      </div>
  )
}

export default Drawer