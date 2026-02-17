import './App.css'
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
