
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, photo, brandName, productName, shortDescription, price } = product


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='w-full h-60' src={photo} alt="Shoes" /></figure>
            <div className=" py-10 pl-5 flex space-y-4 justify-between  ">
                <div className='space-y-3'>
                    <h2 className="text-3xl font-bold">{productName}</h2>
                    <div className="rating">
                        <input type="radio" name={_id} className={` mask mask-star-2 bg-orange-400 `} />
                        <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-lg text-gray-400'>{shortDescription}</p>
                    <p className='text-xl font-medium'>Price: $ <span className='text-orange-500'>{price}</span></p>
                </div>
                <div className='flex items-end'>
                    <div className='space-y-3 pr-4 flex flex-col '>
                        <div className="card-actions  ">
                            <button className="btn btn-primary">Details</button>
                        </div>
                        <div className="card-actions ">
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="btn btn-primary">Update</button>
                            </Link>
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