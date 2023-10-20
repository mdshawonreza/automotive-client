import { useLoaderData } from "react-router-dom";
import CartProductCard from "./CartProductCard";
import { useState } from "react";


const MyCart = () => {
    const cartProducts = useLoaderData([])
    const[ cartNowProducts,setCartNowProducts]=useState (cartProducts)

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
                    <div className="w-2/6 border-2">
                        <h2 className="text-2xl text-center">total cost for products</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;