import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';

const Orders = ({ addToCart, addToFavorites }) => {
  const [ orders, setOrders ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const arrLoading = [
    {"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},
    {"id":7},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12}
]

  useEffect(() =>{
    (async()=> {
      try {
        const { data } = await axios.get('https://65fb790514650eb2100a0380.mockapi.io/api/sneakers/Orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false)
      } catch(error) {
        alert(error)
      }
      
    })();
  }, [])
  return (
    <div className='content'>
        <div className="contentHead">
          <h1>My orders</h1>
        </div> 

        <div className="cards">
        {
          (isLoading ? arrLoading : orders).map(item =>
              <Card 
                loading = {isLoading}
                key = {item.id}
                {...item}
              />
            )
        }

        </div>
    </div>
  )
}

export default Orders;