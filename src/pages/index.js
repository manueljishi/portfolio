import NavBar from "../components/NavBar/NavBar"
import SideBar from "../components/Sidebar/SideBar";
import { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";

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
        <InfoSection/>
        </>
    );
}
export default Landing;