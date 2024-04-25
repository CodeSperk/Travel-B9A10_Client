import { Link } from "react-router-dom";
import loginBg from "/login-bg.jpeg"
import { useContext, useState } from "react";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {loginUser, googleLogin,
    githubLogin} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    loginUser(email, password)
    .then(result => {
      // console.log(result.user);
      Swal.fire({
        icon: "success",
        iconColor: "#27227d",
        confirmButtonColor: "#27227d",
        title: "Login Successful",
        timer: 2500
      });
    })
    .catch(error => {
      console.log(error.code);
    })
  }

// handle google Login
  const handleGoogleLogin = () => {
    googleLogin().then(result => {
      // console.log(result.user);
      Swal.fire({
        icon: "success",
        iconColor: "#27227d",
        confirmButtonColor: "#27227d",
        title: "Google Login Successful",
        timer: 2500
      });
    }).catch(error => console.log(error.code));
  }

// handle GitHub login
  const handleGitHubLogin = () => {
    githubLogin().then(result=> {
      // console.log(result.user);
      Swal.fire({
        icon: "success",
        iconColor: "#27227d",
        confirmButtonColor: "#27227d",
        title: "GitHub Login Successful",
        timer: 2500
      });
    }).catch(error => console.log(error.code));
  }

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
        <section className="flex flex-col md:flex-row bg-[var(--clr-accent)] max-w-[800px] mx-auto text-white rounded-xl shadow-2xl min-h-[500px]">
          {/* Welcome section */}
          <div className="bg-cover bg-center bg-no-repeat w-full md:w-7/12 min-h-96 rounded-b-[300px] md:rounded-l-xl relative" style={{backgroundImage:`url(${loginBg})`}}>
              <div className="absolute w-full h-full flex flex-col items-center justify-between bg-[#27227d] bg-opacity-30 p-8 md:p-12 rounded-l-xl">
                <h4 className="uppercase font-bold text-center">
                  Travel is the only thing you buy that makes you richer
                </h4>
                <p className="text-md font-medium text-right mt-4">
              Not registered yet?{" "}
              <Link
                to="/register"
                className="font-bold hover:underline hover:ml-4 duration-500"
              >
                Register
              </Link>
            </p>
              </div>
       
          </div>

          {/* form section */}
          <form className="w-full md:w-5/12 flex flex-col justify-between py-16 px-8" onSubmit={handleLogin}>
            <h3 className="uppercase text-center font-bold mb-8"> Adventura </h3>
           
            <div className="text-center my-4">
              <div className="flex justify-center gap-6 text-2xl mb-2">
              <FcGoogle className="hover:scale-150 duration-500 cursor-pointer" onClick={handleGoogleLogin}/>
              <FaGithub className="hover:scale-150 duration-500 cursor-pointer" onClick={handleGitHubLogin}/>
              </div>
              <small>Or use your email account</small>
            </div>

            {/* Email field */}
           <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="text-gray-500 peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email
              </label>
              
            
              <MdAlternateEmail className="absolute top-1/2 -translate-y-1/2 right-2 text-lg"/>
            
            </div>

            {/* Password Field */}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type={showPass? "text" : "Password"}
                name="password"
                className="block py-2 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="text-gray-500 peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Password
              </label>

              <div className="absolute top-1/2 -translate-y-1/2 right-2 text-lg" onClick={() => setShowPass(!showPass)}>
                {
                showPass? <FaRegEyeSlash /> : <FaRegEye /> 
                }
              </div>
            </div>
            <small className="underline text-right cursor-pointer">Forgot Your Password?</small>
            
            <input type="submit" value="Login" className="bg-white text-[var(--clr-accent)] font-bold p-1.5 rounded-full cursor-pointer border-2 hover:bg-transparent hover:text-white mt-6"/>
           
            
          </form>
        </section>
      </main>
  );
};

export default Login;