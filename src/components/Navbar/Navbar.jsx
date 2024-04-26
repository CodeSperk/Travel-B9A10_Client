import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      Navbar .....
    </div>
  );
};

export default Navbar;