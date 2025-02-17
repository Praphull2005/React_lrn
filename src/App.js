import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar"; // Default export
import { Product_card } from "./components/ProductCard"; // Named export
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Kid from "./components/Kid";
import Man from "./components/Man";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
// import Grocery from "./components/Grocery"; //Normal import na karke lazy me dalenge
import { lazy, Suspense } from "react";
import CompoA from "./components/CompoA";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/store";
import Cart from "./components/Cart";
import Memo from "./components/Memo";
import Login from "./components/Login";

//lazy lodding || code spilitting || dynamic import
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("Praphull")
  return (
    <>
      <Provider store = {appStore}>
        <UserContext.Provider value={{ name: userName, setUserName }}>
          <Navbar />
          {/* <CompoA /> */}
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Product_card />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/man",
        element: <Man />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/memo",
        element: <Memo />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
    errorElement: <Error />
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
