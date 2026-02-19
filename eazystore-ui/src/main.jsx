import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "./components/shared/ErrorBoundary.jsx";
import Home from "./components/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/login/Login.jsx";
import Cart from "./components/cart/Cart.jsx";
import {productsLoader} from "./components/product/ProductsLoader.jsx";

const routerDefinitions = createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
        <Route index element={<Home/>} loader={productsLoader}/>
        <Route path={"/home"} element={<Home/>} loader={productsLoader}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
    </Route>
)

const appRouter = createBrowserRouter(routerDefinitions);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={appRouter}/>
    </StrictMode>,
)
