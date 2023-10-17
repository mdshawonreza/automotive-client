import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";


const Home = () => {
    const brands=useLoaderData()
    console.log(brands)
    return (
        <div className="max-w-[580px] md:max-w-3xl lg:max-w-5xl mx-auto">
            <h2>{brands.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    brands.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Home;