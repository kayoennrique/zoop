import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutBase from "./pages/LayoutBase";
import Home from "./pages/Home";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:product",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
