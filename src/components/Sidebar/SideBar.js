import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from "./SideBarElements";

const SideBar = ({isOpen, toggle}) => {
    return(
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon size='1.3rem'/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="projects" onClick={toggle}>
                        Projects
                    </SideBarLink>
                    <SideBarLink to="contact" onClick={toggle}>
                        Contact
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
}

export default SideBar;