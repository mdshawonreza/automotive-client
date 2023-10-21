import banner4 from "../assets/banner4.jpg"
import banner2 from "../assets/banner5.jpg"
import banner3 from "../assets/banner6.webp"

const Slider = () => {
    return (
        <div className="max-w-380 md:max-w-3xl lg:max-w-6xl mx-auto mb-8">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={banner4} className="w-full h-[30vh] md:h-[90vh] " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-success btn-outline  btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-success btn-outline  btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={banner2} className="w-full h-[30vh] md:h-[90vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-success btn-outline  btn-circle ">❮</a>
                        <a href="#slide3" className="btn btn-success btn-outline  btn-circle ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full h-[30vh] md:h-[90vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-success btn-outline  btn-circle ">❮</a>
                        <a href="#slide1" className="btn btn-success btn-outline  btn-circle ">❯</a>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    );
};

export default Slider;