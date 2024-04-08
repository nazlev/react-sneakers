import React from 'react';
import Card from '../Components/Card/Card';
import AppContext from '../Context/context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Favorite = ({ addToCart, isLoading }) => {
  const { favItems, addToFavorites, setCartOpen } = useContext(AppContext);
  const arrLoading = [
    {"id":1},{"id":2},{"id":3},{"id":4},
    {"id":5},{"id":6},{"id":7},{"id":8}
]
  return (
    <div className='content'>
        {
          favItems.length > 0
          ? 
            <>
              <div className="contentHead">
                <h1>My favorites</h1>
              </div> 
              <div className="cards">
              {
                ( isLoading ? arrLoading : favItems ).map(item =>
                    <Card 
                      addToFavorites = {addToFavorites}
                      onPlus = {(obj) => addToCart(obj)}
                      favorited = {true}
                      loading = {isLoading}
                      key = {item.id}
                      {...item}
                    />
                  )
              }

              </div>
            </>
          : 
            <>
              {isLoading ? "" 
                : 
                  <div className='nothing'>
                    <img width={70} height={70} src="img/noFavorites.png" alt="noFavorites" />
                    <h2>No Favorites :(</h2>
                    <span>Nothing added</span>
                    <Link to='/'> 
                      <button  className='basketBtn'>
                        <img className='cartEmpty__arrow' src="img/backArrow.png" alt="Back" /> Go home
                      </button>
                    </Link>
                  </div>
              }
            </>
            
        }
    </div>
  )
}

export default Favorite;