const Drawer = () => {
  return (
    <div style={{display:'none'}} className="overlay">
        <div className="drawer">
          <h2 className="drawer__h2">
            Basket 
            <img className="basketItem__remove" width={32} height={32} src="/img/delete.svg" alt="Delete" />
          </h2>
          <div className="items">
          <div className="basketItem">
              <img className="basketItem__img" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
              <div className="basketItem__info">
                <p className="basketItem__info_p">Men Sneakers Nike   Blazer Mid Suede</p>
                <b>129$</b>
              </div>
              <img className="basketItem__remove" width={32} height={32} src="/img/delete.svg" alt="Delete" />
          </div>
          <div className="basketItem">
              <img className="basketItem__img" width={70} height={70} src="/img/sneakers/2.jpg" alt="Sneakers" />
              <div className="basketItem__info">
                <p className="basketItem__info_p">Men Sneakers Nike Air Max 270</p>
                <b>129$</b>
              </div>
              <img className="basketItem__remove" width={32} height={32} src="/img/delete.svg" alt="Delete" />
          </div>
          </div>
          

          <ul className="totalCost">
            <li className="totalCost__li">
              <span>Total</span>
              <div className="totalCost__border"></div>
              <b>258$</b>
            </li>
            <li className="totalCost__li">
              <span>Tax 5%</span>
              <div className="totalCost__border"></div>
              <b>12$</b>
            </li>
          </ul>
          <button className="basketBtn">Checkout <img className="basketBtn__arrow" src="/img/arrow.svg" alt="Arrow" /></button>
        </div>
      </div>
  )
}

export default Drawer