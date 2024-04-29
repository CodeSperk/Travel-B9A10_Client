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
    fetch(`https://adventura-api-data.vercel.app/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setMySpots(data);
      });
  }, [userEmail]);

  const handleSpotDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#2D2F81",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://adventura-client.web.app/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const spotsAfterDelete = mySpots.filter(spot => spot._id != id)
            setMySpots(spotsAfterDelete)
          }
        })
      }
    });
}

  return (
    <div className="mb-[4rem] md:mb-[7rem]">
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16 mb-[4rem] md:mb-[7rem]">
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
                    <td><Link to={`/update/${spot._id}`}><LuFileEdit className="text-xl text-[var(--clr-accent)] ml-2 cursor-pointer hover:scale-150 duration-500" title="Update"/>   
                    </Link></td>

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
