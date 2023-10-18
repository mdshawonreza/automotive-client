import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";
import UpdateProduct from "../components/UpdateProduct";
import BrandCards from "../components/BrandCards";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home> ,
            loader:()=>fetch('/public/brands.json')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/addProduct",
            element:<PrivateRoute>
                <AddProduct></AddProduct>
            </PrivateRoute>
        },
        {
            path:"/updateProduct",
            element:<PrivateRoute>
                <UpdateProduct></UpdateProduct>
            </PrivateRoute>
        },
        {
            path:"/myCart",
            element:<PrivateRoute>
                <MyCart></MyCart>
            </PrivateRoute>
        },
        {
            path:"/details/:brand",
            element:<PrivateRoute>
                <BrandCards></BrandCards>
            </PrivateRoute>,
            loader:()=>fetch ('http://localhost:5000/products')
        }
      ]
    },
  ]);

export default Routes;