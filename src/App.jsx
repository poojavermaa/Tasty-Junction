import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import MyDetails from "./components/MyDetails";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <MyDetails />
        <Footer />
    </div>
    </Provider>
  ); 
};


export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children: [
      {
        path: "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <Suspense fallback={<h1>Loading.......</h1>}><About /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element : <RestaurantMenu />
      },
      {
        path: "/login",
        element : <Login />
      },
      {
        path: "/cart",
        element : <Cart />
      }
    ],
    errorElement : <Error />
  },
]);

export default App;
