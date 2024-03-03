import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Checkout from "../components/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Order from "../components/Order/Order";
import Shop from "../components/Shop/Shop";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentFail from "../pages/Payment/PaymentFail";

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
                path: 'checkout',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>
            },
            {
                path: '/payment/success',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: '/payment/fail',
                element: <PaymentFail></PaymentFail>
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