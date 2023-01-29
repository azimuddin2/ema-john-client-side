import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Order from "../components/Order/Order";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import Shop from "../components/Shop/Shop";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
            },
            {
                path: 'order',
                element: <Order></Order>
            },
            {
                path: 'inventory',
                element: <Inventory></Inventory>
            },
            {
                path: 'checkout',
                element: <RequireAuth>
                    <Checkout></Checkout>
                </RequireAuth>
            }
        ],
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signup',
        element: <SignUp></SignUp>
    }
]);

export default router;