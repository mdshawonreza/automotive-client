import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import Slider from "./Slider";





const BrandCards = () => {
    const [products, setProducts] = useState([])

    // const [noData,setNoData]=useState('')

    const params = useParams()
    console.log(params)

    // if (products) {
    //     setNoData(1)
    // }


    useEffect(() => {

        fetch(`https://automotive-server-47ir5l0ph-md-shawon-rezas-projects.vercel.app/products/brand?brandId=${params.brand}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [params.brand])
    
    return (
        <div className="">
            <div className="bg-base-200 pb-8">
            
            <div className="max-w-[380px] md:max-w-3xl lg:max-w-4xl mx-auto">
            {
                products.length>0 && <div><Slider></Slider></div>
            }
            
                {
                    products.length>0 && <div className="my-8">
                        <h2 className="text-4xl font-bold text-center ">Our products</h2>
                        <p className="text-center text-gray-500 mt-3">Identify, choose, pay, confirm details, and wait for delivery when ordering <br /> products, keeping records for reference.</p>
                    </div>
                    
                }
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
               {
                 products.length==0 && <div className="min-h-[50vh] flex justify-center items-center"><p className="text-xl font-bold text-gray-500">No Products available!</p></div>
               }
                
            </div>
        </div>
        </div>
    );
};

export default BrandCards;