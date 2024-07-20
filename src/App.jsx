import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";
import NewPost from "./routes/createPostPage/NewPost.jsx";
import Home from "./routes/homePage/Home.jsx"
import {Layout, RequireAuth} from "./routes/layout/Layout.jsx";
import List from "./routes/listPage/List.jsx";
import Login from "./routes/loginPage/Login.jsx";
import Profile from "./routes/profilePage/Profile.jsx";
import ProfileUpdate from "./routes/profileUpdatePage/ProfileUpdate.jsx";
import Register from "./routes/registerPage/register.jsx";
import Single from "./routes/singlePage/Single.jsx";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/list",
          element: <List/>,
          loader: listPageLoader
        },
        {
          path:"/:id",
          element: <Single/>,
          loader: singlePageLoader
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path:"/",
      element: <RequireAuth/>,
      children:[
        {
          path:"/profile",
          element: <Profile/>,
          loader: profilePageLoader
        },
        {
          path:"/profile/update",
          element: <ProfileUpdate/>
        },
        {
          path:"/add",
          element:<NewPost/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App