import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const product=useLoaderData()
    const { _id, photo, brandName, productName, shortDescription, price } = product

    return (
        <div>
            <h2>{productName}</h2>
            <Link to={`/myCart`}>
                <button className="btn btn-success btn-outline ">add to cart</button>
            </Link>

        </div>
    );
};

export default Details;