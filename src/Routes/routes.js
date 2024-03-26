import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";

export const routes = [
    {path:"/", component: Home},
    {path:"*", component: Home},
    {path:"/favorites", component: Favorites}
]