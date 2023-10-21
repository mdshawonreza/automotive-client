
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, photo, productName, shortDescription, price,rating,type } = product


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='w-full h-60' src={photo} alt="Shoes" /></figure>
            <div className=" py-10 pl-5 flex space-y-4 justify-between  ">
                <div className='space-y-3'>
                   <div className='flex justify-between items-center'>
                   <h2 className="text-[28px] font-bold">{productName}</h2>
                    <div className='-mr-20'>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="-mt-0.5 h-5 w-5 text-orange-500"
                            >
                                <path
                                  
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    
                                ></path>
                            </svg>
                            <p>{rating}.0</p>
                        </p>
                    </div>
                   </div>
                    
                    <p className='text-lg text-gray-400'>{shortDescription}</p>
                    <p className='text-xl font-medium'>Price: $ <span className='text-orange-500'>{price}</span></p>
                    <p>Products Type:{type}</p>
                </div>
                <div className='flex items-end'>

                    <div>


                        <div className='space-y-3 pr-4 flex flex-col '>
                            <div className="card-actions  ">
                                <Link to={`/detail/${_id}`}>
                                    <button className="btn btn-outline btn-success">Details</button>
                                </Link>
                            </div>
                            <div className="card-actions ">
                                <Link to={`/updateProduct/${_id}`}>
                                    <button className="btn btn-outline btn-success">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.object
}