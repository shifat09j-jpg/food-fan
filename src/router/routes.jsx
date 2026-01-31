import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import AddFood from '../Pages/AddFood/AddFood';
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import MyFood from "../Pages/MyFood/MyFood";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

export const router = createBrowserRouter ([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          path:'/',
          element:<Home/>,
          
        },
        {
          path:'/all-foods',
          element:<AllFoods/>,
          loader: () => fetch('http://localhost:3000/foods')
          
        },
        {
          path:'/profile',
          element:(
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
          )
          
        },
        {
          path:'/addFood',
          element:(
           <PrivateRoute>
              <AddFood/>
            </PrivateRoute>
          )
          
        },
        {
          path:'/food-details/:id',
          element:(
            <PrivateRoute>
              <FoodDetails/>
            </PrivateRoute>
          ),
        loader: ({params}) => fetch(`http://localhost:3000/foods/${params.id}`) 
        },
        {
          path:'/my-foods',
          element: (
            <PrivateRoute>
              <MyFood/>
            </PrivateRoute>
          )
          
        },
        {
          path:'/update-food/:id',
          element:(
            <PrivateRoute>
              <UpdateFood/>
            </PrivateRoute>
          )
          
        },
        {
          path:'/auth/login',
          element: <Login></Login>
          
        },
        {
          path:'/auth/register',
          element:<Register/>
          
        },
       
        
      ]
    }
])