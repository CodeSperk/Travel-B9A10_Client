const AddTouristSpot = () => {
  const handleAddSpot = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      
      <div className="bg-cover bg-no-repeat bg-center py-12 md:py-20 px-4 md:px-12" style={{backgroundImage:"url(https://i.ibb.co/dG4SgBR/banner-2.jpg)"}}>
        
        <form onSubmit={handleAddSpot} className="max-w-3xl lg:max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-md shadow-xl text-center space-y-4">
        <h2 className="font-bold mb-8 uppercase">Add Tourist Spots</h2>

          {/* Spot Name & country name */}
         <div className="flex flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">Name :</span>
                <input type="text" name="placeName" className="h-full outline-0 border-0 rounded-md" placeholder="Place Name" />
              </label>

              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">Country :</span>
   
  {/* <select className="select">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select> */}
    <select className="h-full outline-0 border-0 rounded-md flex-grow">
    <option disabled selected className="">Select Country</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>

              </label>              
         </div>

         {/* Spot Location & Seasonality name */}
         <div className="flex flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">Location :</span>
                <input type="text" name="location" className="h-full outline-0 border-0 rounded-md" placeholder="State / District" />
              </label>
              
              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">seasonality :</span>
                <input type="text" name="seasonality" className="h-full outline-0 border-0 rounded-md" placeholder="Suitable Season" />
              </label>              
         </div>

         {/* Spot Travel Time & TotalVisitor name */}
         <div className="flex flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">Duration :</span>
                <input type="text" name="duration" className="h-full outline-0 border-0 rounded-md" placeholder="Travel Time" />
              </label>
              
              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">Total Visitor :</span>
                <input type="number" name="visitor" className="h-full outline-0 border-0 rounded-md flex-grow" placeholder="Number of visitors per Year" />
              </label>              
         </div>


         {/* image url */}
         <div className="flex flex-col md:flex-row gap-4">
         <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">Cost :</span>
                <input type="text" name="cost" className="h-full outline-0 border-0 rounded-md" placeholder="Average Cost" />
              </label>      

              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">Photo :</span>
                <input type="text" name="photo" className="h-full outline-0 border-0 rounded-md" placeholder="Enter Photo URL" />
              </label>              
         </div>
         {/* description */}
         <div>
          <textarea name="description" id="" placeholder="Descriptioon" cols="30" rows="3" className="bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full outline-0 border-0"></textarea>
         </div>

         {/* User Name & User Email */}
         <div className="flex flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">User Name:</span>
                <input type="text" name="userName" className="h-full outline-0 border-0 rounded-md" placeholder="Enter Your Name" />
              </label>
              
              <label className="flex items-center gap-2 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-full md:w-1/2">
                <span className="">User Email :</span>
                <input type="email" name="userEmail" className="h-full outline-0 border-0 rounded-md" placeholder="Enter Your Email" />
              </label>              
         </div>

            <div></div>
          <input type="submit" value="Add Spot" className="bg-[var(--clr-accent)] text-white w-full p-2 rounded-md uppercase font-bold cursor-pointer hover:rounded-full duration-300"/>


        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
