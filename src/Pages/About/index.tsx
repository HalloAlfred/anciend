import React, { useRef } from 'react'
import styled from "styled-components"
import HeroSVG from "../../Assets/svgs/about_SVG.svg"
import BuildingImage from "../../Assets/images/building.jpg"

import WomanOwner from "../../Assets/images/people/woman_owner.png"
import ManHR from "../../Assets/images/people/man_hr.png"
import ManHR1 from "../../Assets/images/people/man_hr1.png"
import ManHR2 from "../../Assets/images/people/man_hr2.png"
import WomanHR from "../../Assets/images/people/woman_hr.png"
import WomanHR1 from "../../Assets/images/people/woman_hr1.png"
import Developer from "../../Assets/images/people/developer.png"
import Developer1 from "../../Assets/images/people/developer1.png"
import Developer2 from "../../Assets/images/people/developer2.png"
import Developer3 from "../../Assets/images/people/developer3.png"

interface SectionProps {
    sectionHeight?: Number;
    sectionColor?: String;
}

const Wrapper = styled.div`
    width: 100%;
`;

const Section = styled.div<SectionProps>`
    display: flex;
    flex-direction: row;
    height: ${(props: any) => props.sectionHeight || 100}vh;
    background: ${(props: any) => props.sectionColor || "white"};
    width: 100%;
`;

{/* Link list */}

const LinkList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 25%;
    position: absolute;
    top: 200px;
    left: 100px;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const LinkItem = styled.li`
    width: 100%;
    flex-basis: 25%;
    background: #00ffffff;
    color: white;
    cursor: pointer;

    &:hover {
        background: #00f0f0;
    }
`;

const LinkItemText = styled.p`
    color: white;
    font-size: 1.5rem;
    font-family: 'Source Code Pro', monospace;
`;

{/* Person List */}

const PersonSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    width: 100%;
    margin-top: 150px;
    padding-bottom: 300px;
`;

const PersonListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
`;

const PersonList = styled.ul`
    width: 100%; 
    display: flex; 
    flex-direction: row; 
    padding: 0; 
    margin: 0; 
    flex-wrap: wrap;
    margin-bottom: 50px;
`;

const PersonListTitle = styled.label`
    text-align: left;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.7rem;
`;

const PersonItem = styled.li`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-basis: 15%; 
    height: 225px;
`;

const PersonImage = styled.img`
    width: 70%;
    height: 70%; 
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.1);
        width: 75%;
        height: 75%; 
    }
`;

{/* Where */}

const LocationTitle = styled.h2`
    text-align: left;
    font-family: 'Source Code Pro', monospace;
    font-size: 3rem;
    margin-bottom: 20px;
`;

const LocationText = styled.p`
    text-align: left;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.5rem;
    color: #292929;
    width: 80%;
`;



const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" })

const listHR = [ WomanOwner, ManHR, WomanHR, ManHR1, WomanHR1, ManHR2 ]
const listDevelopers = [ Developer3, Developer, Developer1, Developer2  ]
const listDesigners = [ WomanOwner, WomanOwner, WomanOwner ]

function AboutPage() {

    const aboutUsRef = useRef(null)
    const locationRef = useRef(null)
    const ourTeamRef = useRef(null)
    const FAQRef = useRef(null)
    const executeScroll = (passedRef: any) => scrollToRef(passedRef)

    return (
        <Wrapper>

            <Section>
                <LinkList>
                    <LinkItem onClick={() => executeScroll(aboutUsRef)}><LinkItemText>About us</LinkItemText></LinkItem>
                    <LinkItem onClick={() => executeScroll(locationRef)}><LinkItemText>Location</LinkItemText></LinkItem>
                    <LinkItem onClick={() => executeScroll(ourTeamRef)}><LinkItemText>Our team</LinkItemText></LinkItem>
                    <LinkItem onClick={() => executeScroll(FAQRef)}><LinkItemText>FAQ</LinkItemText></LinkItem>
                </LinkList>
                <img src={HeroSVG} alt="" style={{ position: "absolute", top: "200px", right: "0" }} />
            </Section>
            



            <Section sectionHeight={60} ref={aboutUsRef} style={{ justifyContent: "center" }}>
                <div style={{ width: "80%", height: "100%" }}>
                    <LocationTitle>
                        About us
                    </LocationTitle>
                    <LocationText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </LocationText>
                    <LocationText>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </LocationText>
                </div>
            </Section>




            <Section sectionHeight={80} ref={locationRef}>
                <img src={BuildingImage} style={{ height: "100%", width: "33.33%", marginRight: "50px" }} />
                <div style={{ width: "66.33%", height: "100%", padding: "30px 30px", paddingTop: 0, display: "flex", flexDirection: "column",  }}>
                    <LocationTitle>Strandgatan 28, Stockholm</LocationTitle>
                    <LocationText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </LocationText>
                    <LocationText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </LocationText>
                </div>
            </Section>
            
            


            <PersonSection>
                
                <PersonListWrapper>
                    <PersonListTitle ref={ourTeamRef}>HR</PersonListTitle>
                    <Section style={{ height: "auto" }} >
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <PersonList>
                                {listHR.map((person, i) => {
                                    return (
                                        <PersonItem key={i}>
                                                <PersonImage src={person} alt="" />
                                        </PersonItem>
                                    )
                                })}
                            </PersonList>
                        </div>
                    </Section>
                </PersonListWrapper>
                
                <PersonListWrapper>
                    <PersonListTitle>Developers</PersonListTitle>
                    <Section style={{ height: "auto" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <PersonList>
                                {listDevelopers.map((person, i) => {
                                    return (
                                        <PersonItem key={i}>
                                                <PersonImage src={person} alt="" />
                                        </PersonItem>
                                    )
                                })}
                            </PersonList>
                        </div>
                    </Section>
                </PersonListWrapper>
                
                <PersonListWrapper>
                    <PersonListTitle>Designers</PersonListTitle>
                    <Section style={{ height: "auto" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <PersonList>
                                {listDesigners.map((person, i) => {
                                    return (
                                        <PersonItem key={i}>
                                                <PersonImage src={person} alt="" />
                                        </PersonItem>
                                    )
                                })}
                            </PersonList>
                        </div>
                    </Section>
                </PersonListWrapper>
                
            </PersonSection>



            <Section ref={FAQRef} style={{ justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
                    <LocationTitle>FAQ</LocationTitle>
                    <LocationText>Sed ut perspiciatis unde omnis?</LocationText>
                    <p style={{ textAlign: "left" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <LocationText>Sed ut perspiciatis unde omnis?</LocationText>
                    <p style={{ textAlign: "left" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <LocationText>Sed ut perspiciatis unde omnis?</LocationText>
                    <p style={{ textAlign: "left" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <LocationText>Sed ut perspiciatis unde omnis?</LocationText>
                    <p style={{ textAlign: "left" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Section>
            

        </Wrapper>
    )
}

export default AboutPage
