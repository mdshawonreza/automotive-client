import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";
import Header from "../../components/Header";
import CreateHappy from "../../components/CreateHappy";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
            <Header></Header>
            <div className="max-w-[580px] md:max-w-3xl lg:max-w-5xl mx-auto">
                <div className=" text-center my-10">
                    <h2 className="text-4xl font-bold	"><span className="text-orange-500 font-extrabold">Explore the  </span>Brands That Drive <br /> Our World Forward</h2>
                    <p className="text-lg text-gray-500 mt-5 mb-6">Fueling Your Auto Passions: Explore, Learn, and Connect in Our Automotive Community. <br />Enjoy the Ride, Fellow Enthusiast!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
            <CreateHappy></CreateHappy>
        </div>
    );
};

export default Home;