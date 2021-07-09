import NavBar from "../components/NavBar/NavBar"
import SideBar from "../components/Sidebar/SideBar";
import { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = ()=>{
        setIsOpen(!isOpen);
    }

    return(
        <>
        <SideBar isOpen={isOpen} toggle={toggleOpen}/>
        <NavBar toggle={toggleOpen}/>
        <HeroSection/>
        </>
    );
}
export default Landing;