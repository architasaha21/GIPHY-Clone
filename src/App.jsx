import AppLayout from "./layout/AppLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Search from "./pages/Search"
import Favorites from "./pages/Favorites"
import Gif from "./pages/Gif"
import GifProvider from "./context/gif-context"


//importing all routes
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
          path: "/",
          element: <Home />
      },
      {
          path: "/:Category",
          element: <Category />
      },
      {
          path: "/Search/:query",
          element: <Search />
      },
      {
          path: '/Favorites',
          element: <Favorites />
      },
      {
          path: '/:type/:slug',
          element: <Gif />
      },
    ],
  },
]);

function App() {
  return 
  <GifProvider>
    <RouterProvider  router={router}/>
  </GifProvider>
}

export default App
