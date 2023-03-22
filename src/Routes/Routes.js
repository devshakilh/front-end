
import { createBrowserRouter } from "react-router-dom";
import Users from "../data-Users/Users";
import Main from "../Layout/Main";
import Login from "../Login/Login";

import SignUp from "../Login/SignUp";

import Home from "../Pages/Home";

import Footer from "../Shared/Footer";
import PrivateRoute from "../Shared/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Users /></PrivateRoute>
    }
]);