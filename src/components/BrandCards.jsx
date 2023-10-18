import { useState } from "react";
import Product from "./Product";
// import { AuthContext } from "../providers/AuthProvider";


const BrandCards = () => {
    const [products, setProducts] = useState([])
    // const{brand}=useContext(AuthContext)
    // console.log(brand.brand_name)


    fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))

    // useEffect(()=>{
    //     const findProduct=products.find(product=>product.brandName== brand.brand_name)
    // },[])
    return (
        <div>
            
            <div>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default BrandCards;