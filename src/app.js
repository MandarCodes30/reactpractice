import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { userContext } from "./components/Context.js";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore.js";
import { Cart } from "./components/Cart.js";

const Grocery = lazy(()=> import("./components/Grocery.js").then(module => ({default:module.Grocery})));

const AppLayout = () => {

  const [username,setUser] = useState();

  useEffect(()=>{
    console.log("entered")
    const data = {
      name:"Mandar Kulal",
    };
    setUser(data.name);
  },[]);
  return (
    <Provider store={reduxStore}>
    <userContext.Provider value={{loggedinUser:username, setUser}}>
    <div className="App">
      <HeaderComponent />
      <Outlet/>
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ErrorBoundary><AppLayout/></ErrorBoundary>,
    // errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <BodyComponent/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading!!!</h1>}><Grocery/></Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  },
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
