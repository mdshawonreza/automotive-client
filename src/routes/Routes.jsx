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
import Details from "../components/Details";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home> ,
            loader:()=>fetch('http://localhost:5000/brands')
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
            path:"/updateProduct/:id",
            element:<PrivateRoute>
                <UpdateProduct></UpdateProduct>
            </PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:"/detail/:id",
            element:<PrivateRoute>
                <Details></Details>
            </PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:"/myCart",
            element:<PrivateRoute>
                <MyCart></MyCart>
            </PrivateRoute>,
            loader:()=>fetch('http://localhost:5000/cartProducts')
        },
        {
            path:"/details/:brand",
            element:<PrivateRoute>
                <BrandCards></BrandCards>
            </PrivateRoute>
           
        }
      ]
    },
  ]);

export default Routes;