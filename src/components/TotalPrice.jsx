import PropTypes from 'prop-types';

const TotalPrice = ({cartNowProduct}) => {
    const {  productName, price } = cartNowProduct
    return (
        <div className='bg-slate-200 p-2 rounded-md mb-1 font-semibold '>
            <li> {productName} : $ {price}</li>
            
        </div>
    );
};

export default TotalPrice;
TotalPrice.propTypes={
    cartNowProduct:PropTypes.object
}