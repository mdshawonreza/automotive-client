
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const CartProductCard = ({ cartNowProduct,cartNowProducts,setCartNowProducts }) => {
    const { _id, productName, brandName, photo } = cartNowProduct

    

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(` https://automotive-server-47ir5l0ph-md-shawon-rezas-projects.vercel.app/cartProducts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount>0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining=cartNowProducts.filter(cof=>cof._id !==_id)
                            setCartNowProducts(remaining)
                        }
        
                    })

            }
        })
       
    }
    return (
        <div className="card card-compact h-72  bg-base-100 shadow-xl">
            <figure> <img className="h-36  " src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=" text-lg font-bold text-orange-600 ">Brand : {brandName}</h2>
                <p className="text-gray-500 text-base font-normal"> <span className="text-base font-bold">Product : </span>{productName} </p>
                <div className="">
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-outline btn-error w-20">Delete</button>
                </div>
                

            </div>
        </div>
    );
};

export default CartProductCard;

CartProductCard.propTypes={
    cartNowProduct : PropTypes.object,
    cartNowProducts:PropTypes.array,
    setCartNowProducts:PropTypes.array,

}