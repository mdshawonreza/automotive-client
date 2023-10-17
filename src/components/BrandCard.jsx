

const BrandCard = ({ brand }) => {
    const { brand_name, image_url } = brand
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-48 w-full" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand_name}</h2>
               
               
            </div>
        </div>
    );
};

export default BrandCard;