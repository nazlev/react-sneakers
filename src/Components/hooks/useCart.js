import { useContext } from "react";
import AppContext from "../../Context/context";


export const useCart = () => {
    const { setCartOpen, cartItems,  setCartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);

    return { setCartOpen, cartItems,  setCartItems, totalPrice };
}