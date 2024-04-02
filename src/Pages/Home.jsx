import React from 'react';
import { useContext } from 'react';
import Card from '../Components/Card/Card';
import AppContext from '../Context/context';

const Home = ({ 
    setSearchValue,
    searchValue,
    addToCart,
    isLoading,
    addToFavorites}) =>
{
    const { items } = useContext(AppContext);

    const renderItems = () => {
        const arrLoading = [
            {"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},
            {"id":7},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12}
        ]
       return ( isLoading ? arrLoading : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())))
                
                .map(item =>
                <Card 
                    addToFavorites = {(obj) => addToFavorites(obj)}
                    onPlus = {(obj) => addToCart(obj)}
                    loading = {isLoading}
                    key = {item.id}
                    {...item}
                />
                )
    }

  return (
        <div className='content'>
            <div className="contentHead">
            <h1>{searchValue ? `Search for: '${searchValue}'` : 'All sneakers'}</h1>
            <div className="contentHead__search">
                <img height={14} width={14} src="img/search.svg" alt="search" />
                <input 
                className="contentHead__search_input" 
                type='text' 
                placeholder="Search..."
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                />
            </div>
            </div> 

            <div className="cards">
                {renderItems()}
            </div>
        </div>
  )
}

export default Home