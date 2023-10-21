import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const product = useLoaderData()
    const { _id, photo, brandName, productName, shortDescription, price } = product

    const handleAddCart=(id)=>{
        console.log(id)
        const addCartProduct={photo,brandName,productName, shortDescription,price }
        console.log(addCartProduct)
        fetch('https://automotive-server-47ir5l0ph-md-shawon-rezas-projects.vercel.app/cartProducts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addCartProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("inside post response",data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added to Cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
               
            }
        })
    }

    return (
        <div className="bg-base-200 py-10">
            <div className=" flex justify-center items-center  " >
                <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-[90%] md:w-[55%]">
                    <div className=" flex justify-center relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            className="w-full md:h-[50vh] rounded-t-lg"
                            src={photo}
                            alt="ui/ux review check"
                        />


                    </div>

                    <div className="p-5">
                        <div>
                            <h4 className="block border-b-2 border-slate-600 pb-2 text-orange-500  font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {productName}
                            </h4>
                        </div>
                        <p className="mt-3 block font-sans text-xl font-semibold  leading-relaxed text-gray-700 antialiased">
                            {shortDescription}
                        </p>

                        <p className="my-3" > <span className='text-xl  font-bold'>Price:</span> <span className='text-lg font-bold text-zinc-500'> $ {price}</span> </p>

                        {/* <Link to={`/myCart`}>
                            
                        </Link> */}
                        <button onClick={()=>handleAddCart(_id)} className="btn btn-success btn-outline  ">add to cart</button>

                    </div>


                </div>


            </div>


        </div>
    );
};

export default Details;