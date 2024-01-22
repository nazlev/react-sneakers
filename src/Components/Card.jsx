import React from 'react'

const Card = () => {
  return (
    <div className="card">
          <img className="card__favorite" src="/img/unliked.svg" alt="Unliked" />
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
          <h5 className="card__h5">Men Sneakers Nike Blazer Mid Suede</h5>
          <div className="card__info">
            <div className="card__info_price">
              <span  className="card__info_span">Price:</span>
              <b>129$</b>
            </div>
            <button className="card__info_btn">
              <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
  )
}

export default Card