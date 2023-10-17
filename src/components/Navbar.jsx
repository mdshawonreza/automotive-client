import { NavLink } from "react-router-dom";


const Navbar = () => {
   
        const navLinks = <>
            <li><NavLink to="/" className="text-lg  font-medium">Home</NavLink></li>
            <li><NavLink to="/login" className="text-lg font-medium">Login</NavLink></li>
            <li><NavLink to="/register" className="text-lg font-medium">Register</NavLink></li>
            <li><NavLink to="/addProduct" className="text-lg font-medium">Add Product</NavLink></li>
            <li><NavLink to="/myCart" className="text-lg font-medium">My Cart</NavLink></li>
            
        </>
    return (
        <div className="navbar bg-base-100 pt-1 pb-1 px-4 md:px-10 border-b-2 shadow-lg mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    {/* <img className="w-[200px] md:w-[260px] " src={logo} alt="" /> */}
                    <h2 className="text-3xl font-bold">Automotive</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex flex-col-reverse md:flex-row">
                {/* <div className=" flex items-center">
                    {
                        user && <img className="rounded-full w-5 md:w-9 mr-1    " src={user?.photoURL} alt="" />
                    }
                    {
                        user && <span className="mr-3 text-xs md:text-sm font-medium">{user?.displayName}</span>
                    }
                </div> */}
                {/* {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-active bg-pink-600  hover:bg-pink-700 hover:border-pink-700 text-white font-semibold text-xs md:text-base">sign out </button>
                        :
                        <Link to="/login"  > <button className="btn btn-active bg-pink-600  hover:bg-pink-700 hover:border-pink-700 text-white font-semibold text-xs md:text-base">Login </button> </Link>
                } */}
            </div>
        </div>
    );

};

export default Navbar;