import React from 'react'
import { useState } from 'react';
import { Container, LogoContainer, Menu, MenuIten, MenuItenLink, MobileIcon, Wrapper } from './Navbar.elements'
import { FaPhotoVideo,FaStream,FaTimesCircle,FaHome,FaBriefcase,FaGlasses,FaUserTie} from "react-icons/fa";
import { IconContext } from 'react-icons/lib';



const Navbar = () => {
const [showMobileMenu, setshowMobileMenu] = useState(false)
    
    return(
        <Container>
            <Wrapper>
                <IconContext.Provider value={{style: {fontSize:"2em"}}}>
                <LogoContainer>
                    <FaPhotoVideo/>
                    <p>FLASHBACK BY - </p>
                    <p>MARIA</p>
                </LogoContainer>

                <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)} >
                    {
                        showMobileMenu ? <FaTimesCircle/> : <FaStream/>
                    }
                </MobileIcon>
 
                <Menu open={showMobileMenu}>
                    <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                        <MenuItenLink>
                           <div>
                           <FaHome/>
                           <a href="/" style={{color :"#fff"}}>
                               Home
                           </a>
                           </div>
                        </MenuItenLink>
                    </MenuIten>
                    <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                        <MenuItenLink>
                          <div>
                          <FaUserTie/>
                          <a href= "/aboutMe" style={{color :"#fff"}}>
                          ABOUT ME 
                          </a>
                          </div>
                        </MenuItenLink> 
                    </MenuIten>
                    <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                        <MenuItenLink>
                          <div>
                            <FaBriefcase/>
                            <a href='/portfolio' style={{color :"#fff"}}>
                            PORTFOLIO 
                            </a>
                          </div>
                        </MenuItenLink>
                    </MenuIten>
                    <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                        <MenuItenLink>
                            <div>
                            <FaGlasses/>
                           <a href='/contactMe' style={{color : "#fff"}}>
                           CONTACT ME
                           </a>
                            </div>
                        </MenuItenLink>
                    </MenuIten>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>

    )
}
export default Navbar