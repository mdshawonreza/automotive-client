import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";
import Header from "../../components/Header";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
            <Header></Header>
            <div className="max-w-[580px] md:max-w-3xl lg:max-w-5xl mx-auto">
                <div className="text-4xl font-bold text-center my-10">
                    <h2>World best automotive brands</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;