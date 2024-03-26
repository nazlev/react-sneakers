import React from 'react';
import Card from '../Components/Card/Card';
import AppContext from '../Context/context';
import { useContext } from 'react';

const Favorite = ({ addToCart }) => {
  const { favItems, addToFavorites } = useContext(AppContext);
  return (
    <div className='content'>
        <div className="contentHead">
          <h1>My favorites</h1>
        </div> 

        <div className="cards">
        {
          favItems.map(item =>
              <Card 
                addToFavorites = {addToFavorites}
                onPlus = {(obj) => addToCart(obj)}
                favorited = {true}
                key = {item.id}
                {...item}
              />
            )
        }

        </div>
    </div>
  )
}

export default Favorite;