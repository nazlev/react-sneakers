const Header = () => {
    return (
        <header>
        <div className="headerLeft">
          <img className="headerLeft__img" width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
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
              <span className="headerRight__li_span">Favorite</span>
            </li> 
            <li className="headerRight__li">
              <img className="headerRight__li_img" width={18} height={18} src="/img/user.svg" alt="user" />
              <span className="headerRight__li_span">Profile</span>
            </li>
          </ul>
      </header>
    );
}

export default Header;