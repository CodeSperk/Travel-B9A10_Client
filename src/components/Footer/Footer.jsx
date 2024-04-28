import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-dark-primary)]">
      <div className="max-w-4xl mx-auto px-4 md:px-12 xl:px-16 text-white py-8 md:py-10 lg:py-16">
       
<div>
  <h2 className="text-white text-center mb-6">Stay Connected With Us</h2>
  <div className="flex flex-col md:flex-row justify-between gap-4">
  <input type="text" placeholder="Your name" className="py-2 px-2 rounded border-2 border-[var(--clr-accent)] outline-none text-black w-full "/>

  <input type="email" placeholder="Your email address" className="py-2 px-2 rounded border-2 border-[var(--clr-accent)] outline-none text-black w-full "/>

  <input type="number" placeholder="Your phone" className="py-2 px-2 rounded border-2 border-[var(--clr-accent)] outline-none text-black w-full "/>
  </div>
  <div className="relative">
  <textarea name="" id="" rows="3" className="w-full mt-4 rounded shadow-inner shadow-[var(--clr-accent)] text-black p-3 outline-none ">
  </textarea>
  <input type="submit" className="bg-[var(--clr-accent)] py-1 px-4 rounded hover:scale-110 duration-500 cursor-pointer absolute bottom-2 right-1"/>
  </div>


</div>

       {/* social */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
      <div className="border-b-2 border-[#2D2F81] mb-1 hidden md:flex"></div>
      <div className="flex items-center justify-center gap-6">
      <a href="#"> <FaFacebookF className="icon text-xl hover:scale-150 transition-all duration-3000" /> </a>
            <a href="#"> 
            <FaInstagramSquare className="icon text-xl  hover:scale-150 transition-all duration-300" /></a>
            <a href="#">
            <FaYoutube className="icon text-xl  hover:scale-150 transition-all duration-3000" />
            </a>
            <a href="#">
            <FaLinkedinIn className="icon text-xl  hover:scale-150 transition-all duration-3000" />
            </a>
            <a href="#">
            <FaTwitter className="icon text-xl  hover:scale-150 transition-all duration-3000" />
            </a>
      </div>
      <div className="border-b-2 border-[#2D2F81]  mb-1 hidden md:flex"></div>
    </div>

{/* footer bottom */}
        <div className="text-center">
        <Link to="/">
          <img
            src="https://i.ibb.co/p4KdDNx/logo-dark-light.png"
            alt=""
            className="w-32 mx-auto"
          />
        </Link>
        <p>Copyright @ {year}, Travel.Inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;