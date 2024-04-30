import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const {_id, placeName, country, location, season, travelTime, totalVisitor, photoBanner, cost, description} = spot;
  const navigate = useNavigate();

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const placeName = form.placeName.value;
    const country = form.country.value;
    const location = form.location.value;
    const season = form.seasonality.value;
    const travelTime = form.duration.value;
    const totalVisitor = form.visitor.value;
    const photoBanner = form.photo.value;
    const cost = form.cost.value;
    const description = form.description.value;

    const updatedSpot = {placeName, country, location, season, travelTime, totalVisitor, photoBanner, cost, description};
    // console.log(updatedSpot);

    fetch(`https://adventura-api-data.vercel.app/${_id}`, {
      method: "PUT",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedSpot)
    })
    .then(res => res.json())
    .then(data=> {
      // console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
          icon: "success",
          iconColor: "#2D2F81",
          confirmButtonColor: "#2D2F81",
          title: "Spot Updated Successfully",
          timer: 2500
        });
        navigate("/myList")
      }
    })

  }
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center py-12 md:py-20 px-4 md:px-12"
        style={{
          backgroundImage: "url(https://i.ibb.co/9hwwt0v/banner-3.jpg)",
        }}
      >
        <form
          onSubmit={handleUpdateSpot}
          className="max-w-3xl lg:max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-md shadow-light text-center space-y-4"
        >
          <h2 className="font-bold mb-8 uppercase">Update Your Spot</h2>

          {/* Spot Name & country name */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full md:w-1/2">
              <span className="">Name :</span>
              <input
                type="text"
                name="placeName"
                defaultValue={placeName}
                className="flex-1 p-2 h-full outline-0 border-0 rounded-md"
                placeholder="Place Name"
              />
            </label>

            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full md:w-1/2">
              <span className="">Country :</span>

              <select name="country" defaultValue={country} className="h-full p-2 outline-0 border-0 rounded-md flex-grow">
                <option value="null">
                  Select Country
                </option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Mongolia">Mongolia</option>
              </select>
            </label>
          </div>

          {/* Spot Seasonality and duration name */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full md:w-1/2">
              <span className="">seasonality :</span>
              <input
                type="text"
                name="seasonality"
                defaultValue={season}
                className="flex-1 p-2 h-full outline-0 border-0 rounded-md"
                placeholder="Suitable Season"
              />
            </label>
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full md:w-1/2">
              <span className="">Duration :</span>
              <input
                type="text"
                name="duration"
                defaultValue={travelTime}
                className="flex-1 p-2 h-full outline-0 border-0 rounded-md"
                placeholder="Travel Time"
              />
            </label>
          </div>

           {/* Spot Travel Time, TotalVisitor name  and cost*/}
           <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full md:w-1/2">
              <span className="">Total Visitor :</span>
              <input
                type="number"
                name="visitor"
                defaultValue={totalVisitor}
                className="h-full p-2 outline-0 border-0 rounded-md flex-1"
                placeholder="Number of visitors per Year"
              />
            </label>
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full md:w-1/2">
              <span className="">Cost :</span>
              <input
                type="number"
                name="cost"
                defaultValue={cost}
                className="h-full p-2 outline-0 border-0 rounded-md flex-grow"
                placeholder="Average Cost $USD"
              />
            </label>
          </div>

          {/* Photos url */}
          <div className="flex flex-col md:flex-row gap-4">
          <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full">
              <span className="">Photo :</span>
              <input
                type="text"
                name="photo"
                defaultValue={photoBanner}
                className="flex-1 p-2 h-full outline-0 border-0 rounded-md"
                placeholder="Enter Photo URL"
              />
            </label>
          </div>

         
          {/* Location */}
          <div>
          <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md pl-2 w-full">
              <span className="">Location :</span>
              <input
                type="text"
                name="location"
                defaultValue={location}
                className="flex-1 p-2 h-full outline-0 border-0 rounded-md"
                placeholder="State / District"
              />
            </label>
          </div>

          {/* description */}
          <div>
            <textarea
              name="description"
              id=""
              placeholder="Descriptioon"
              defaultValue={description}
              cols="30"
              rows="3"
              className="bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full outline-0 border-0"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Update Spot"
            className="bg-[var(--clr-accent)] text-white w-full p-2 rounded-md uppercase font-bold cursor-pointer hover:rounded-full duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot; 