
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert2";


const UpdateProduct = () => {


    const defaultProductValue = useLoaderData()
    const { _id, photo,type, brandName,rating, productName, shortDescription, price}=defaultProductValue
    console.log(defaultProductValue)

    const handleUpdateProduct = event => {

        event.preventDefault();
        const form = event.target;

        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updateProduct = { productName, brandName, type, price, shortDescription, rating, photo };

        console.log(updateProduct)
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    swal.fire({
                        title: 'Success!',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // form.reset()
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] max-w-6xl mx-auto  p-24">
            <h2 className="text-center text-4xl font-bold mb-8" >Update {productName} Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form Product Name and Brand Name row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="productName" defaultValue={productName} placeholder="Enter product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brandName" defaultValue={brandName} placeholder="Enter brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Type and Price row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" defaultValue={type} placeholder="Enter Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" defaultValue={price} placeholder="Enter price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Short description and Rating row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Enter short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" defaultValue={rating} placeholder="Enter rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo URl row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URl" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="update Product" className="btn btn-block bg-[#D2B48C] hover:bg-[#D2B48C]" />
            </form>
        </div>
    );
};

export default UpdateProduct;