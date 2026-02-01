import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import AddFood from '../Pages/AddFood/AddFood';
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import MyFood from "../Pages/MyFood/MyFood";

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
        // {
          
        //   path:'/all-foods',
        //   element:(
        //     <PrivateRoute>
        //   <AllFoods/>
        //   </PrivateRoute>
        //   ),
        //   loader: () => fetch('https://foodfan-server.vercel.app/foods')
          
        // },
        {
  path:'/all-foods',
  element: (
    <PrivateRoute>
      <AllFoods/>
    </PrivateRoute>
  ),
  loader: async () => {
    const res = await fetch('https://foodfan-server.vercel.app/foods');
    return res.json();
  }
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
        // loader: ({params}) => fetch(`foodfan-server.vercel.app/foods/${params.id}`) 
        loader: async ({ params }) => {
        const res = await fetch(`https://foodfan-server.vercel.app/foods/${params.id}`);
        return res.json();
        }

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