import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = event => {

        event.preventDefault();
        const form = event.target;

        const productName = form.productName.value;
        const brandName = form.brandName.value;
        // const brandName=brandNameValue.toUpperCase()
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { productName, brandName, type, price, shortDescription, rating, photo };

        console.log(newProduct)
        fetch('https://automotive-server-47ir5l0ph-md-shawon-rezas-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }

    
    return (
        <div className="bg-[#F4F3F0] max-w-6xl mx-auto p-14 md:p-24">
            <h2 className="text-center text-3xl font-bold mb-8" >Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* form Product Name and Brand Name row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="productName" placeholder="Enter product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brandName" placeholder="Enter brand name" className="input input-bordered w-full" />
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

                            <input type="text" name="type" placeholder="Enter Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* <div className="form-control  md:w-1/2">
                        <div className="input-group">
                            <select className="select select-bordered w-full">
                                <option disabled selected>Pick category</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                            </select>
                           
                        </div>
                    </div> */}
                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Enter price" className="input input-bordered w-full" />
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

                            <input type="text" name="shortDescription" placeholder="Enter short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered w-full" />
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

                            <input type="text" name="photo" placeholder="Enter photo URl" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Add Product" className="btn text-white btn-block bg-orange-600 hover:bg-orange-700" />
            </form>
        </div>
    );
};

export default AddProduct;