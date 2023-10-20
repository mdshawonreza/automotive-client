import { useLoaderData } from "react-router-dom";
import CartProductCard from "./CartProductCard";
import { useState } from "react";
import TotalPrice from "./TotalPrice";


const MyCart = () => {
    const cartProducts = useLoaderData([])
    const [cartNowProducts, setCartNowProducts] = useState(cartProducts)

    return (
        <div className="bg-base-200">

            <div className="max-w-[380px] md:max-w-3xl lg:max-w-6xl mx-auto py-8">

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-4/6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            cartNowProducts.map(cartNowProduct => <CartProductCard
                                key={cartNowProduct._id}
                                cartNowProducts={cartNowProducts}
                                setCartNowProducts={setCartNowProducts}
                                cartNowProduct={cartNowProduct}
                            ></CartProductCard>)
                        }
                    </div>
                    {/* <div className="w-2/6 border-2">
                        <h2 className="text-2xl text-center">total cost for products</h2>
                    </div> */}
                    <div className="w-2/6  bg-white rounded-lg p-4 " >
                        <div className='border-b-2'>
                            <h3 className="text-orange-500 text-xl font-semibold  mb-2 text-center">Total ordered products list</h3>
                        </div>
                        <h3 className='text-2xl font-bold py-2' >Product Name :</h3>
                        <div className='pb-4 border-b-2 min-h-[50vh]'>
                            {
                                cartNowProducts.map(cartNowProduct=><TotalPrice cartNowProduct={cartNowProduct}  key={cartNowProduct._id}></TotalPrice>)
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;