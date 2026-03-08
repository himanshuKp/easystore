import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import {HydrateFallback} from "./components/HydrateFallback.jsx";

function App() {
    const navigation = useNavigation();

    return (
        <>
            <Header/>
            {
                navigation.state === "loading" ? <HydrateFallback/> : <Outlet/>
            }
            <Footer/>
        </>
    )
}

export default App
