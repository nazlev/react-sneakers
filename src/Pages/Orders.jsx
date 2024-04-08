import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';
import { Link } from 'react-router-dom';

const Orders = ({ addToCart, addToFavorites }) => {
  const [ orders, setOrders ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const arrLoading = [
    {"id":1},{"id":2},{"id":3},{"id":4},
    {"id":5},{"id":6},{"id":7},{"id":8}
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
      {
        orders.length > 0 
        ? <>
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
        </>
        : 
          <>
            {isLoading ? "" 
              : 
                <div className='nothing'>
                <img width={70} height={70} src="img/noOrders.png" alt="noOrders" />
                <h2>No Orders :(</h2>
                <span>Are you a beggar?</span>
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

export default Orders;