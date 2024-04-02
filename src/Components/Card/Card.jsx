import { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../Context/context';

const Card = ({ 
    id, 
    imgUrl, 
    title, 
    price, 
    addToFavorites, 
    onPlus, 
    favorited = false, 
    loading = false 
  }) => {

  
  const { isItemAdded } = useContext(AppContext);
  const [liked, setLiked] = useState(favorited);
  const obj = {id, parentId:id, imgUrl, title, price}

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorite = () => {
    addToFavorites(obj)
    setLiked(!liked)
  }

  return (
    <div className={styles.card}>
      {
        loading ?
          <ContentLoader 
            speed={2}
            width={155}
            height={225}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" /> 
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" /> 
          <rect x="124" y="230" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>
          :
            <>
              {addToFavorites && <img 
                onClick={onClickFavorite}
                className={styles.card__favorite} 
                src={liked ? "img/liked.svg" : "img/unliked.svg"} 
                alt="Like"
              />}
              <img width='100%' height={145} src={imgUrl} alt="Sneakers" />
              <h5 className={styles.card__h5}>{title}</h5>
              <div className={styles.card__info}>
                <div className={styles.card__info_price}>
                  <span  className={styles.card__info_span}>Price:</span>
                  <b>{price}$</b>
                </div>
                  {onPlus && <img 
                    className={styles.card__img} 
                    onClick={onClickPlus}  
                    src={isItemAdded(id) ? 'img/checked.svg' : 'img/plus.svg'} 
                    alt='Checked'
                  />}
              </div>
            </>
      }
        </div>
  )
}

export default Card