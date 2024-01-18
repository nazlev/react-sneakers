

function App() {
  return (
    <div className="App">
      <header>
        <div className="headerLeft">
          <img className="headerLeft__img" width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="headerLeft__h3">REACT SNEAKERS</h3>
            <p className="headerLeft__p">The best sneakers store</p>
          </div>
        </div>
        <ul className="headerRight">
            <li className="headerRight__li">
              <img className="headerRight__li_img" width={18} height={18} src="/img/cart.svg" alt="cart" />
              <span>120$</span>
            </li>
            <li className="headerRight__li">
              <img className="headerRight__li_img" width={18} height={18} src="/img/favorite.svg" alt="favorite" />
              <span className="headerRight__span">Favorite</span>
            </li> 
            <li className="headerRight__li">
              <img className="headerRight__li_img" width={18} height={18} src="/img/user.svg" alt="user" />
              <span className="headerRight__span">Profile</span>
            </li>
          </ul>
      </header>
      <div className="content">
        <div className="content__head">
          <h1 className="content__head_h1">All sneakers</h1>
          <input className="content__head_input" type='text' placeholder="Search..."></input>
        </div> 

        <div className="cards">
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
          <h5 className="card__h5">Men sneakers Nike   Blazer Mid Suede</h5>
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

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
          <h5 className="card__h5">Men sneakers Nike   Blazer Mid Suede</h5>
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

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
          <h5 className="card__h5">Men sneakers Nike   Blazer Mid Suede</h5>
          <div className="card__info">
            <div className="card__info_price">
              <span  className="card__info_span">Price:</span>
              <b>84$</b>
            </div>
            <button className="card__info_btn">
              <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
          <h5 className="card__h5">Men sneakers Nike   Blazer Mid Suede</h5>
          <div className="card__info">
            <div className="card__info_price">
              <span  className="card__info_span">Price:</span>
              <b>89$</b>
            </div>
            <button className="card__info_btn">
              <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
