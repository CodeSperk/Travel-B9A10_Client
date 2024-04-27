import { Link } from "react-router-dom";

const MyList = () => {
  return (
    <div>
      MyList page....


      <Link to="/update">
      <button className="p-2 bg-red-500 text-white rounded">update</button>
      </Link>
    </div>
  );
};

export default MyList;