import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";
import Header from "../../components/Header";
import CreateHappy from "../../components/CreateHappy";
import ShareYourPlan from "../../components/ShareYourPlan";



const Home = () => {
    const brands = useLoaderData()
    
    return (
        <div>
            <Header></Header>
            <div className="bg-base-200 pt-6 pb-12">
                <div className="max-w-[380px] md:max-w-3xl lg:max-w-4xl  mx-auto ">
                    <div className=" text-center my-10">
                        <h2 className="text-4xl font-bold	"><span className="text-orange-500 font-extrabold">Explore the  </span>Brands That Drive <br /> Our World Forward</h2>
                        <p className="text-lg text-gray-500 mt-5 mb-6">Fueling Your Auto Passions: Explore, Learn, and Connect in Our Automotive Community. <br />Enjoy the Ride, Fellow Enthusiast!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {
                            brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                        }
                    </div>
                </div>
            </div>
            <CreateHappy></CreateHappy>
            <ShareYourPlan></ShareYourPlan>
        </div>
    );
};

export default Home;