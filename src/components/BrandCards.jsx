import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import Slider from "./Slider";

// import { useParams } from "react-router-dom";



const BrandCards = () => {
    const [products, setProducts] = useState([])



    const params = useParams()
    console.log(params)




    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        // const findProduct=products.filter(product=>product.brandName== params.brand)
    }, [params.brand])
    return (
        <div className="bg-base-200 pb-8">
            <Slider></Slider>
            <div className="max-w-[380px] md:max-w-3xl lg:max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center my-8">Our products</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandCards;