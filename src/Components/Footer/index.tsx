import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    height: 50vh;
    width: 100%;
    background: white;

    @media (max-width: 460px) {
        display: none;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 250px;
    padding-bottom: 100px;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 40%;
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    width: 50%;
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`;

const NavMenuColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
`;

const NavMenuColumnTitle = styled.h3`
    font-family: 'Source Code Pro', monospace;
    text-align: left;
    font-size: 1.6rem;
`;

const NavMenuColumnLink = styled.h3`
    font-family: 'Source Code Pro', monospace;
    text-align: left;
`;

const SocialMediaBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
`;

const FooterTitle = styled.p`
    font-size: 3rem;
    font-family: 'Source Code Pro', monospace;
    text-align: left;
    margin: 0;
`;

const CompanyTitle = styled.h2`
    font-family: 'Source Code Pro', monospace;
    color: black;
    text-align: left;
`;




function Footer() {
    return (
        <Wrapper>
            <InnerWrapper>
                <LeftWrapper>
                    <FooterTitle>Going somewhere you can't find?</FooterTitle>
                    <CompanyTitle>Anciend</CompanyTitle>
                </LeftWrapper>
                <RightWrapper>
                    <NavMenu>
                        <NavMenuColumn>
                            <NavMenuColumnTitle>Home</NavMenuColumnTitle>
                            <div style={{ marginTop: "50px" }}>
                                <NavMenuColumnLink>Workflow</NavMenuColumnLink>
                                <NavMenuColumnLink>Showcase</NavMenuColumnLink>
                                <NavMenuColumnLink>Contact</NavMenuColumnLink>
                            </div>
                        </NavMenuColumn>
                        <NavMenuColumn>
                            <NavMenuColumnTitle>About</NavMenuColumnTitle>
                            <div style={{ marginTop: "50px" }}>
                                <NavMenuColumnLink>About us</NavMenuColumnLink>
                                <NavMenuColumnLink>Where</NavMenuColumnLink>
                                <NavMenuColumnLink>Our team</NavMenuColumnLink>
                            </div>
                        </NavMenuColumn>
                        <NavMenuColumn>
                            <NavMenuColumnTitle>Services</NavMenuColumnTitle>
                            <div style={{ marginTop: "50px" }}>
                                <NavMenuColumnLink>Big companies</NavMenuColumnLink>
                                <NavMenuColumnLink>Small companies</NavMenuColumnLink>
                                <NavMenuColumnLink>Pricing</NavMenuColumnLink>
                            </div>
                        </NavMenuColumn>
                    </NavMenu>
                    <SocialMediaBar>
                        <FontAwesomeIcon icon={ faFacebookF } color="black" size="2x" />
                        <FontAwesomeIcon icon={ faYoutube } color="black" size="2x" />
                        <FontAwesomeIcon icon={ faInstagram } color="black" size="2x" />
                        <FontAwesomeIcon icon={ faTwitter } color="black" size="2x" />
                    </SocialMediaBar>
                </RightWrapper>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Footer
