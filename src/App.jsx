import Home from "./routes/homePage/Home.jsx"
import Layout from "./routes/layout/Layout.jsx";
import List from "./routes/listPage/List.jsx";
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
          element: <List/>
        },
        {
          path:"/:id",
          element: <Single/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App