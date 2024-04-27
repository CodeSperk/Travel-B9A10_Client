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

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch("http://localhost:5000")
      },{
        path:"/details/:id",
        element:<TouristSpotDetails></TouristSpotDetails>,
        loader:({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },{
        path:"/register",
        element:<Register></Register>
      },{
        path:"/login",
        element:<Login></Login>
      },{
        path:"/addSpot",
        element:<AddTouristSpot></AddTouristSpot>
      },{
        path:"/allSpot",
        element:<AllTouristSpot></AllTouristSpot>
      },{
        path:"/myList",
        element:<MyList></MyList>
      }
    ]
  }
])
export default Routes;