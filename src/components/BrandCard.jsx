import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    const { brandName, photo } = brand


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure> <img className="h-48 w-full" src={photo} alt="Shoes" /></figure>
            <div className="card-body">


                <Link to={`/details/${brandName}`}>
                <h2 className=" text-2xl font-bold hover:text-orange-600 text-center">{brandName}</h2>
                </Link>
               
               
            </div>
        </div>
    );
};

export default BrandCard;