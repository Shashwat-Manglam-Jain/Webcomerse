// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '../style.css'
// eslint-disable-next-line react/prop-types
const Navbar = ({cart,seco}) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [first, setfirst] = useState([]);
 
 
  return (
    <div>

      <ul className="flex sm:gap-8 text-lg justify-center pt-3 sm:pt-8 text-center  sm:pr-80 fixed z-50 bg-white w-screen ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nuq-iNHEa3SWMaPOfoxPOhAM9WpuI9YDfg&usqp=CAU"
          alt=""
          className="h-12 w-12 "
        />
        <li>
        <NavLink to="/" className='iborder hidden sm:iborder sm:block' onClick={()=>window.scrollTo(0,0)}>Home</NavLink>

        </li>
        <li>
          <NavLink to="/about"  className='iborder hidden sm:iborder sm:block'  onClick={()=>window.scrollTo(0,0)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='iborder hidden sm:block sm:iborder'  onClick={()=>window.scrollTo(0,0)} >Contact</NavLink>
        </li>

        <div className="relative sm:left-72 sm:gap-11 flex ">
          <li>
            <span className="flex">
           <input
              value={first}
                type="text"
                placeholder="Search"
                className="sm:w-96  border ml-3 border-gray-300 p-1 "
onChange={(input)=>{setfirst(input.target.value)}}              />
              <Link to={`/search/${first}`}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="h-5 w-5 relative right-7 top-3"
                />
              </Link>
            </span>
          </li>
          <li>
           
          <div className="flex ">  <Link to={'/Cart'}>
              <button>
                <div>
                  <span className="bg-white hover:bg-[#f63667ff] sm:hover:text-white sm:relative hidden sm:block sm:bottom-5 sm:mr-12">{cart} </span>
                  <i className="fa-solid fa-cart-shopping fa-xl sm:relative sm:text-[#f70000]  sm:right-7 hidden sm:block sm:bottom-2  sm:h-12 sm:w-15"></i><sup></sup>
                </div>
              </button>
            </Link>
            <Link to={'/buy'}>  <span className="sm:bg-white sm:hover:bg-[#f63667ff] sm:hover:text-white hidden sm:block sm:relative sm:bottom-5"> {seco}</span>
              <i class="fa-solid fa-money-check-dollar  fa-xl sm:relative text-green-800   sm:right-7 sm:bottom-2 sm:left-0.5  hidden sm:block sm:h-12 sm:w-15"></i></Link></div>
          </li>
          <Link to="/">
  {isAuthenticated ? (
    <div className="sm:flex pl-5 z-10 ">
      <img
        src={user.picture}
        alt={user.name}
      className="h-10 rounded-full "
      />
      <button
       className="sm:uppercase  sm:mr-5 hidden sm:block hover:bg-[#f63667ff] hover:text-white  sm:cursor-pointer sm:w-20 sm:ml-2 sm:font-semibold sm:text-base sm:text-center sm:text-white sm:bg-gray-800"
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Log Out
      </button>
      <div className=" w-24 relative left-5 bottom-8  sm:hidden"><i class="fa-solid fa-bars fa-lg"></i></div>
    </div>
  ) : (
    <button className="hover:bg-[#f63667ff] hover:text-white"
      style={{
        textTransform: "uppercase",
        padding: "0.2rem 0.4rem",
        cursor: "pointer",
        width: "5rem",
        fontWeight: "600",
        fontSize: "1.125rem",
        textAlign: "center",
        color: "white",
        textDecoration: "none",
        backgroundColor: "#1f2937",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log in
    </button>
  )}
</Link>

        </div>
      </ul>
    </div>
  );
};

export default Navbar;
