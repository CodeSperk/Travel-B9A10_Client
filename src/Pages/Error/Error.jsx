import Lottie from "lottie-react";
import errorAnimation from "./error.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="w-full py-48 h-screen flex flex-col justify-center items-center">
        <h2 className="-mb-4 text-[var(--clr-accent)]">Page Not Found</h2>
      <Lottie animationData={errorAnimation} loop={true} />
        <Link to="/" className="text-center">
          <button
            className="bg-[var(--clr-accent)] text-white py-2.5 px-8 w-fit mx-auto text-center rounded-full text-lg hover:rounded-md duration-500 -mt-4"
          > Go to Homepage</button>
        </Link>
      </div>
     
    </div>
  );
};

export default Error;