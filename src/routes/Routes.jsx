import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";
import UpdateProduct from "../components/UpdateProduct";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
            element:<AddProduct></AddProduct>
        },
        {
            path:"/updateProduct",
            element:<UpdateProduct></UpdateProduct>
        },
        {
            path:"/myCart",
            element:<MyCart></MyCart>
        }
      ]
    },
  ]);

export default Routes;