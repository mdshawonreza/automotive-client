import find1 from '../assets/find1.png'
import find2 from '../assets/find2.png'
import find3 from '../assets/find3.png'
import find4 from '../assets/find4.png'

const ShareYourPlan = () => {
    return (
        <div className="bg-base-200">
            <h2 className='text-center text-3xl font-bold pt-16'>Feel comfort to share  <span className='text-orange-500'>your plan </span></h2>
            <p className='text-center font-medium text-gray-500 mt-3'> Feel at ease to discuss your plans and ideas with confidence,we're here to support and <br />help you turn your dreams into reality..</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 md:pb-14">
                <div className="card   ">
                    <figure className="px-10 pt-10">
                        <img src={find1} alt="Shoes" className='w-40  bg-gray-500 rounded-full p-8 hover:bg-emerald-600' />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">SHARE YOUR PLANS</h2>
                        <p className=' text-gray-500'>Share your vision, and together, we'll shape a future filled with success and happiness</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline hover:bg-gray-500 ">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card  ">
                    <figure className="px-10 pt-10">
                        <img src={find2} alt="Shoes" className='w-40 bg-gray-500 rounded-full p-8  hover:bg-emerald-600' />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">SHOWROOM LOCATIONS</h2>
                        <p className=' text-gray-500'>Discover our diverse showroom locations, where your dreams find their perfect match</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline hover:bg-gray-500">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card  ">
                    <figure className="px-10 pt-10">
                        <img className='w-40 bg-gray-500 rounded-full p-8  hover:bg-emerald-600' src={find3} />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">BUDGET FRIENDLY
                        </h2>
                        <p className=' text-gray-500'>Explore our budget-friendly options and experience quality without breaking the bank</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline hover:bg-gray-500">DETAILS</button>
                        </div>
                    </div>
                </div>
                <div className="card   ">
                    <figure className="px-10 pt-10">
                        <img className='w-40 bg-gray-500 rounded-full p-8  hover:bg-emerald-600' src={find4} />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">CALL NOW!</h2>
                        <p className=' text-gray-500'>Act fast! Call now to seize this limited-time opportunity and unlock exclusive benefits.</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline hover:bg-gray-500">Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShareYourPlan;