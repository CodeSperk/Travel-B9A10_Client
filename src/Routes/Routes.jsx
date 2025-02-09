import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddTouristSpot from "../Pages/TouristSpot/AddTouristSpot";
import AllTouristSpot from "../Pages/TouristSpot/AllTouristSpot";
import MyList from "../Pages/MyList/MyList";
import TouristSpotDetails from "../Pages/ViewDetails/TouristSpotDetails";
import PrivateRout from "../Hooks/PrivateRout";
import UpdateSpot from "../Pages/Update/UpdateSpot";
import CountrySpots from "../Pages/CountrySpots/CountrySpots";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/details/:id",
        element:<PrivateRout> <TouristSpotDetails></TouristSpotDetails> </PrivateRout>
      },{
        path:"/register",
        element:<Register></Register>
      },{
        path:"/login",
        element:<Login></Login>
      },{
        path:"/addSpot",
        element:<PrivateRout> <AddTouristSpot></AddTouristSpot> </PrivateRout>
      },{
        path:"/allSpot",
        element:<AllTouristSpot></AllTouristSpot>
      },{
        path:"/allSpots/:country",
        element:<CountrySpots></CountrySpots>
      },{
        path:"/myList",
        element:<PrivateRout> <MyList></MyList> </PrivateRout>
      },{
        path:"/update/:id",
        element:<PrivateRout><UpdateSpot></UpdateSpot></PrivateRout>
      }
    ]
  }
])
export default Routes;