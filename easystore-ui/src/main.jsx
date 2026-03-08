import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Home from "./features/home/Home.jsx";
import About from "./features/about/About.jsx";
import Contact from "./features/contact/Contact.jsx";
import Login from "./features/login/Login.jsx";
import Cart from "./features/cart/Cart.jsx";
import {productsLoader} from "./features/product/ProductsLoader.jsx";
import {Bounce, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {contactAction} from "./features/contact/ContactAction.jsx";
import ProductDetail from "./features/product/ProductDetail.jsx";
import {CartProvider} from "./context/CartProvider.jsx";

const routerDefinitions = createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
        <Route index element={<Home/>} loader={productsLoader}/>
        <Route path={"/home"} element={<Home/>} loader={productsLoader}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contact"} element={<Contact/>} action={contactAction}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
        <Route path={"/product/:productId"} element={<ProductDetail/>}/>
    </Route>
)

const appRouter = createBrowserRouter(routerDefinitions);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={appRouter}/>
        </CartProvider>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable
            pauseOnHover
            theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
            transition={Bounce}
        />
    </StrictMode>,
)
