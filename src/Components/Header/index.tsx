import React, { useState } from 'react'
import styled from "styled-components"
import {
    Link,
    useLocation
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

interface LinkItemProps {
    active?: Boolean;
}

const Wrapper = styled.div`
    display: flex;
    /* justify-content: center; */
    z-index: 10;
    background: transparent;
    height: 100px;
    width: 100%;
    position: absolute;
    top: 0;
`;

const InnerWrapper = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;

    @media (max-width: 460px) {
        width: 100%;
    }
`;

const Title = styled.h1`
`;

const NavMenu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-basis: 70%;

    @media (max-width: 460px) {
        display: none;
    }
`;

const LinkList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
`;

const LinkItem = styled.li<LinkItemProps>`
    height: 100%;
    border-radius: 10px;
    background-color: ${({ active }) => active && "#00ffffff"  };
    padding-left: 15px;
    padding-right: 15px;

    a {
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
        height: 100%;
        width: 100%;
        font-family: 'Source Code Pro', monospace;
    }

    &:hover {
    }
`;

const MobileNavMenu = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;

    @media (max-width: 460px) {
        display: flex;
    }
`;

const MobileNavMenuWrapper = styled.div`
    position: absolute;
    z-index: 100;
    background: #262626;
    display: flex;
    height: 100%;
    width: 100%;
`;

const AppButton = styled.div`
    height: 100%;
    background: tomato;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 10px;
    
    a {
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
        height: 100%;
        width: 100%;
        font-family: 'Source Code Pro', monospace;
    }
`;

function Header() {

    let route = useLocation();
    const [mobileMenuToggled, toggleMobileMenu] = useState(false);

    return (
        <Wrapper>
            <InnerWrapper>

                <Title>Anciend</Title>

                <NavMenu>
                    <LinkList>
                        <LinkItem active={route.pathname === "/" ? true : false}><Link to="/">Home</Link></LinkItem>
                        <LinkItem active={route.pathname === "/about" ? true : false}><Link to="/about">About</Link></LinkItem>
                        <LinkItem active={route.pathname === "/services" ? true : false}><Link to="/services">Services</Link></LinkItem>
                    </LinkList>
                    <AppButton><Link to="/productapp">App</Link></AppButton>
                </NavMenu>

                

                <MobileNavMenu>
                    <FontAwesomeIcon icon={ faBars } color="black" size="2x" onClick={() => toggleMobileMenu(true)} />
                </MobileNavMenu>
                
            </InnerWrapper>

            { mobileMenuToggled && <MobileNavMenuWrapper></MobileNavMenuWrapper> }

        </Wrapper>
    )
}

export default Header
