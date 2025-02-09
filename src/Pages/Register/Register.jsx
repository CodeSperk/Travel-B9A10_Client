import { Link, useNavigate } from "react-router-dom";
import loginBg from "/login-bg.jpeg"
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";



const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const {createUser, logOutUser} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle sweet alert 
  const sweetAlert = (icon = " ", title = " ", iconColor) => {
   Swal.fire({
    icon: icon,
    iconColor: iconColor,
    confirmButtonColor: "#2D2F81",
    title: title,
    timer: 2500
  });
}

  // To register with email and password
  const handleRegister = e => {
    e.preventDefault();
    setError(null);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const newUser = {name, photo, email};

    // to validate password
    if(!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6){
      setError("At least one Uppercase letter, one lowercase letter & min 6 characters.");
      return;
    }

    // to register new user
    createUser(email, password)
    .then(result => {
      // to update name & photo url
      updateProfile(result.user, {
        displayName:name,
        photoURL: photo
      })
      .then()
      .catch(error=>console.log(error.code));
      sweetAlert("success", "Registration Success !", "#2D2F81");

      // to send User Info to the mongodb
      fetch("https://adventura-api-data.vercel.app/users", {
        method: "POST",
        headers:{
          "content-type" : "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data =>{
      //  console.log(data); 
      })

      //to prevent auto login
      logOutUser()
      .then()
      .catch(error=>console.log(error.code));
      
      //to clear form and navigate after success
      form.reset();
      navigate("/login");
    })
    .catch(error => {
      if(error.code === "auth/email-already-in-use"){
        sweetAlert("warning", "Already Registered !", "#2D2F81")
      }
    })
  }
  return (
      <main className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16 mb-[4rem] md:mb-[7rem]">
        <section className="flex flex-col md:flex-row bg-[var(--clr-accent)] max-w-[800px] min-h-[500px] mx-auto text-white rounded-xl shadow-dark">
          {/* Welcome section */}
          <div className="bg-cover bg-center bg-no-repeat w-full md:w-7/12 min-h-96 rounded-b-[300px] md:rounded-l-xl relative " style={{backgroundImage:`url(${loginBg})`}}>
              <div className="absolute w-full h-full flex flex-col items-center justify-between bg-[#27227d] bg-opacity-30 p-8 md:p-12 rounded-l-xl">
                <h4 className="text-white uppercase font-bold text-center">
                  Travel is the only thing you buy that makes you richer
                </h4>
                <p className="text-md font-medium text-right mt-4">
              Already registered?{" "}
              <Link
                to="/login"
                className="font-bold hover:underline hover:ml-4 duration-500"
              >
                Login
              </Link>
            </p>
              </div>
          </div>

          {/* form section */}
          <form className="w-full md:w-5/12 flex flex-col py-16 px-8" onSubmit={handleRegister}>
           <img src="https://i.ibb.co/JR0dRpD/logo-ligth.png" alt="" className="w-48 mx-auto mb-6"/>
            <div className="flex-grow">
            {/* Name field */}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                className="block py-2 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="text-gray-500 peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Name
              </label>
            </div>

            {/* Email field */}
           <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                className="block py-2 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="text-gray-500 peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email
              </label>
            </div>

            {/* Photo url Field*/}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="photo"
                className="block py-2 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="text-gray-500 peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Photo URL
              </label>
            </div>

            {/* Password Field */}
            <div className="relative z-0 w-full group">
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
              <div className="absolute top-1/2 -translate-y-1/2 right-2 text-xl" onClick={() => setShowPass(!showPass)}>
                {
                showPass? <FaRegEyeSlash /> : <FaRegEye /> 
                }
              </div>
            </div>
            <small className="text-warning">
              {error}
            </small>
            </div>
            <input type="submit" value="Register" className="w-full bg-white text-[var(--clr-accent)] font-bold p-1.5 rounded-full cursor-pointer border-2 hover:bg-transparent hover:text-white mt-6"/>
          
            
          </form>
        </section>
      </main>
  );
};

export default Register;
