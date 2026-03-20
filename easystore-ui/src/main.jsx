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
import {loginAction} from "./features/login/LoginAction.jsx";
import {AuthProvider} from './context/AuthProvider.jsx';
import Checkout from "./components/Checkout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./components/Profile.jsx";
import Orders from "./components/Orders.jsx";
import AdminOrders from "./components/admin/AdminOrders.jsx";
import Messages from "./components/admin/Messages.jsx";
import Register, {registerAction} from "./components/Register.jsx";

const routerDefinitions = createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
        <Route index element={<Home/>} loader={productsLoader}/>
        <Route path={"/home"} element={<Home/>} loader={productsLoader}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contact"} element={<Contact/>} action={contactAction}/>
        <Route path={"/login"} element={<Login/>} action={loginAction}/>
        <Route path={"/cart"} element={<Cart/>}/>
        <Route path={"/register"} element={<Register/>} action={registerAction}/>
        <Route element={<ProtectedRoute/>}>
            <Route path={"/checkout"} element={<Checkout/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/orders"} element={<Orders/>}/>
            <Route path={"/admin/orders"} element={<AdminOrders/>}/>
            <Route path={"/admin/messages"} element={<Messages/>}/>
        </Route>
        <Route path={"/product/:productId"} element={<ProductDetail/>}/>
    </Route>
)

const appRouter = createBrowserRouter(routerDefinitions);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <CartProvider>
                <RouterProvider router={appRouter}/>
            </CartProvider>
        </AuthProvider>
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
