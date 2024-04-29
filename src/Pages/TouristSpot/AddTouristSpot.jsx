// import Swal from "sweetalert2";

import Swal from "sweetalert2";

const AddTouristSpot = () => {
  const handleAddSpot = (e) => {
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
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const newSpot = {placeName, country, location, season, travelTime, totalVisitor, photoBanner, cost, description, userName, userEmail};
    console.log(newSpot);

    fetch("https://adventura-api-data.vercel.app/touristSpots", {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newSpot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          icon: "success",
          iconColor: "#2D2F81",
          confirmButtonColor: "#2D2F81",
          title: "Added Successfully",
          timer: 2500
        });
      }
    })

  };

  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center py-12 md:py-20 px-4 md:px-12"
        style={{
          backgroundImage: "url(https://i.ibb.co/dG4SgBR/banner-2.jpg)",
        }}
      >
        <form
          onSubmit={handleAddSpot}
          className="max-w-3xl lg:max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-md shadow-light text-center space-y-4"
        >
          <h2 className="font-bold mb-8 uppercase">Add Tourist Spots</h2>

          {/* Spot Name & country name */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">Name :</span>
              <input
                type="text"
                name="placeName"
                className="flex-1 h-full outline-0 border-0 rounded-md"
                placeholder="Place Name"
              />
            </label>

            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">Country :</span>

              <select name="country" defaultValue="null" className="h-full outline-0 border-0 rounded-md flex-grow">
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
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">seasonality :</span>
              <input
                type="text"
                name="seasonality"
                className="flex-1 h-full outline-0 border-0 rounded-md"
                placeholder="Suitable Season"
              />
            </label>
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">Duration :</span>
              <input
                type="text"
                name="duration"
                className="flex-1 h-full outline-0 border-0 rounded-md"
                placeholder="Travel Time"
              />
            </label>
          </div>

           {/* Spot Travel Time, TotalVisitor name  and cost*/}
           <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">Total Visitor :</span>
              <input
                type="number"
                name="visitor"
                className="flex-1 h-full outline-0 border-0 rounded-md flex-grow"
                placeholder="Number of visitors per Year"
              />
            </label>
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">Cost :</span>
              <input
                type="number"
                name="cost"
                className="flex-1 h-full outline-0 border-0 rounded-md flex-grow"
                placeholder="Average Cost"
              />
            </label>
          </div>

          {/* Photo url */}
          <div className="flex flex-col md:flex-row gap-4">
          <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full">
              <span className="">Photo :</span>
              <input
                type="text"
                name="photo"
                className="flex-1 h-full outline-0 border-0 rounded-md"
                placeholder="Enter Photo URL"
              />
            </label>
          </div>

         
          {/* Location */}
          <div>
          <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full">
              <span className="">Location :</span>
              <input
                type="text"
                name="location"
                className="flex-1 h-full outline-0 border-0 rounded-md"
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
              cols="30"
              rows="3"
              className="bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full outline-0 border-0"
            ></textarea>
          </div>

          {/* User Name & User Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">User Name:</span>
              <input
                type="text"
                name="userName"
                className="h-full outline-0 border-0 rounded-md"
                placeholder="Enter Your Name"
              />
            </label>

            <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
              <span className="">User Email :</span>
              <input
                type="email"
                name="userEmail"
                className="h-full outline-0 border-0 rounded-md"
                placeholder="Enter Your Email"
              />
            </label>
          </div>

          <div></div>
          <input
            type="submit"
            value="Add Spot"
            className="bg-[var(--clr-accent)] text-white w-full p-2 rounded-md uppercase font-bold cursor-pointer hover:rounded-full duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
