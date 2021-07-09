import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';

const NavBar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars size="1.3rem" onClick={toggle}/>
            <NavMenu>
            <NavLink to="/about" >
                About
            </NavLink>
            <NavLink to="/projects" >
                Projects
            </NavLink>
            <NavLink to="/contact" >
                Contact
            </NavLink>
            <NavLink to="/signup" >
                Sign Up
            </NavLink>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavMenu>
        </Nav>
        </>
    )
}
export default NavBar;