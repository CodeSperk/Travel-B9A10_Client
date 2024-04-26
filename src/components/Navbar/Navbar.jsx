import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allSpot">All Tourist Spot</NavLink>
          </li>
          <li>
            <NavLink to="/addSpot">Add Tourist Spot</NavLink>
          </li>
          <li>
            <NavLink to="/myList">My List</NavLink>
          </li>
  </>


  const userName = user?.displayName? user.displayName : "Update your Name";
  const userPhoto = user?.photoURL ? user.photoURL : "https://i.ibb.co/Vq2sG3c/fake-profile.webp" ;


  const handleLogout = () => {
    logOutUser()
    .then()
    .catch(error=>console.log(error.code));
  }

  console.log(user);
  return (
    <nav className="bg-white opacity-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16 flex justify-between items-center py-4 min-h-16">
        {/* nav left */}
        <div>
        <Link to="/" className="w-36 hidden lg:block">
          <img
            src="https://i.ibb.co/FxF2j95/logo-dark.png"
            alt=""
            className="w-full"
          />
        </Link>
        {/* dropdown menu */}
        <div className="dropdown dropdown-hover lg:hidden">
        <GiHamburgerMenu tabIndex={0}  className="text-2xl hover:text-[var(--clr-accent)] cursor-pointer"/>

            {/* profile details */}
            <div className="dropdown-content z-[1] menu p-6 shadow bg-base-100 rounded-box w-52 flex flex-col justify-between text-center min-h-36">
              
              <ul className="py-6">
                {navLinks}
              </ul>
            
            </div>
          </div>
        </div>

        {/* nav menues */}
        <ul className="hidden lg:flex gap-4 font-bold">
          {navLinks}
        </ul>

        {/* nav right */}
        {user ? (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="w-11 h-11 border-2 border-[var(--clr-accent)] rounded-full cursor-pointer">
              <img
                src={userPhoto}
                alt="User Photo"
                className="rounded-full h-full w-full"
              />
            </div>

            {/* profile details */}
            <div tabIndex={0}  className="dropdown-content z-[1] menu p-6 shadow bg-base-100 rounded-box w-52 right-0 flex flex-col justify-between text-center min-h-36">
              <p className="font-bold">{userName}</p>

              <div className="flex items-center gap-2 justify-center cursor-pointer hover:text-[var(--clr-accent)] font-bold text-base" onClick={handleLogout}>
              <BiLogOut />
              <p>Logout</p>  
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-base">
            <Link
              to="/register"
              className="flex items-center gap-1 font-semibold hover:text-[var(--clr-accent)] cursor-pointer"
            >
              <FaUser className="" />
              Register
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-1 font-semibold hover:text-[var(--clr-accent)] cursor-pointer"
            >
              <BiLogIn className="text-xl" />
              <p>Login</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
