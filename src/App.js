import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Drawer from "./Components/Drawer/Drawer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Orders from "./Pages/Orders";
import AppContext from "./Context/context";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [ cartResponse, favoritesResponse, itemsResponse ] = await Promise.all([ 
          axios.get('https://65cba217efec34d9ed87e424.mockapi.io/sneakers/cart'), 
          axios.get('https://659c82a3633f9aee7907af2a.mockapi.io/collection/favorites'), 
          axios.get('https://65cba217efec34d9ed87e424.mockapi.io/sneakers/items') 
        ]);
 
        setIsLoading(false);
        setFavItems(favoritesResponse.data);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
      } catch(error) {
        alert(error)
      }
    }
    fetchData()
  }, [])

  const addToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id));
      if(findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://65cba217efec34d9ed87e424.mockapi.io/sneakers/cart/${findItem.id}`);
      } else {
        setCartItems(prev => [...prev, obj]);
        const { data } = await axios.post('https://65cba217efec34d9ed87e424.mockapi.io/sneakers/cart', obj);
        setCartItems(prev => prev.map(item => {
          if(item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          }
          else {
              return item;
          }
        }));
      }
    } catch(error) {
      alert(error)
    }
  }

  const removeItemCart = (id) => {
    axios.delete(`https://65cba217efec34d9ed87e424.mockapi.io/sneakers/cart/${id}`)
     setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
  }

  const addToFavorites = async (obj) => {
    try {
      if(favItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://659c82a3633f9aee7907af2a.mockapi.io/collection/favorites/${obj.id}`)
        setFavItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {  
        const { data } = await axios.post('https://659c82a3633f9aee7907af2a.mockapi.io/collection/favorites', obj);
        setFavItems(prev => [...prev, data])
      }
    } catch (error) {
      alert(error)
    }
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }


  return (
    <AppContext.Provider 
      value={{ 
        items, 
        cartItems, 
        favItems, 
        isItemAdded, 
        addToFavorites, 
        setCartItems, 
        setCartOpen 
      }}
    >
      <div className="App">
    
          <Drawer 
            items={cartItems} 
            onRemove={removeItemCart} 
            opened={cartOpen}
          />
      <Header openCart={() => setCartOpen(true)}/>
      
      <Routes>
        <Route path="/"
          element={<Home 
                    setSearchValue={setSearchValue}
                    searchValue={searchValue} 
                    addToCart={addToCart} 
                    isLoading={isLoading}
                    addToFavorites={addToFavorites}
                  />}
        />
        <Route 
          path="/favorites"
          element={<Favorites 
                    addToCart={addToCart}
                  />}
        />
        <Route 
          path="/orders"
          element={<Orders 
                    addToCart={addToCart}
                    addToFavorites={addToFavorites}
                  />}
        />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
