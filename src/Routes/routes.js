import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import Orders from "../Pages/Orders";

export const routes = [
    {path:"", component: Home},
    {path:"*", component: Home},
    {path:"favorites", component: Favorites},
    {path:"orders", component: Orders}
]