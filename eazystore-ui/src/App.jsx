import './App.css'
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import {HydrateFallback} from "./components/shared/HydrateFallback.jsx";

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
