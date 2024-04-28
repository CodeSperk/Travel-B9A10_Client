import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [mySpots, setMySpots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setMySpots(data);
      });
  }, [userEmail]);

  const handleSpotDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data=> {
      if(data.deletedCount > 0){
        Swal.fire({
          icon: "success",
          title: "Deleted Successful",
          timer: 2500
        });
      }
    })
  }
});
}

  return (
    <div>
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
        {mySpots.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Spot Name</th>
                  <th>Location</th>
                  <th>Duration</th>
                  <th>Average Cost</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {mySpots.map((spot, idx) => (
                  <tr key={spot._id}>
                    <th>{idx + 1}</th>
                    <td>{spot.placeName}</td>
                    <td>{spot.location}</td>
                    <td>{spot.travelTime}</td>
                    <td>$ {spot.cost}</td>
                    <td><Link to={`/update/${spot._id}`}><LuFileEdit className="text-xl text-[var(--clr-accent)] ml-2 cursor-pointer hover:scale-150 duration-500" title="Update"/>   </Link></td>
                    <td><MdDeleteOutline className="text-2xl text-red-500 ml-2 cursor-pointer hover:scale-150 duration-500" title="Delete" onClick={() => handleSpotDelete(spot._id)}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1>You have added no spots yet</h1>
        )}
      </section>    
    </div>
  );
};

export default MyList;
