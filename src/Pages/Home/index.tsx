import React from 'react'
import styled from "styled-components"
import HeroSVG from "../../Assets/svgs/hero_illustration.svg"
import HeroText from "../../Assets/svgs/hero_text.svg"
import ContactSVG from "../../Assets/svgs/contact.svg"
// import HeroImage from "../../Assets/images/home_hero.jpg"
import SideColumnSection from '../../Components/Section/SideColumnSection'
import ContactForm from '../../Components/ContactForm'

interface SectionProps {
    sectionHeight?: Number;
    sectionColor?: String;
    sectionBorder?: boolean;
}

const Wrapper = styled.div`
    z-index: 5;
    height: 100%;
    width: 100%;
    background: whitesmoke;
`;

// const Hero = styled.div`
//     height: 100vh;
//     width: 100%;
//     background-image: url(${HeroImage});
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     position: relative;
// `;

const Section = styled.div<SectionProps>`
    display: flex;
    flex-direction: row;
    height: ${(props: any) => props.sectionHeight || 100}vh;
    background: ${(props: any) => props.sectionColor || "grey"};
    width: 100%;
    border: ${({ sectionBorder }) => sectionBorder && "1px black solid" };
`;

const SectionBottom = styled.div`
    display: flex;
    flex-direction: row;
    height: 25%;
    width: 100%;

`;

const SectionTitle = styled.h1`
    font-family: 'Source Code Pro', monospace;
    width: 100%;
    font-size: 3.5rem;
    margin-top: 50px;
`;

const SectionMainContent = styled.div`
    display: flex;
    flex-direction: row;
`;

const SectionColumn = styled.div`

`;

const ReviewItem = styled.div``

{/* 
    Hero
    Workflow
    Kundcase/work
    Awards/prizes
    Contact
*/}


function HomePage() {
    return (
        <Wrapper>
            
            <Section sectionHeight={100} sectionColor="white">
                <img src={HeroText} alt="" style={{ height: "75%", width: "75%", position: "absolute", left: "-200px", top: "50px" }} />
                <img src={HeroSVG} alt="" style={{ height: "40%", width: "40%", position: "absolute", right: "100px", top: "250px" }} />
            </Section>

            <SideColumnSection />

            <Section sectionHeight={80} sectionColor="white">
                <div style={{ width: "50%", height: "100%" }}>
                    <img src={ContactSVG} alt="" style={{ width: "100%" }} />    
                </div>
                <div style={{ width: "30%", height: "100%", paddingLeft: "100px" }}>
                    <ContactForm />
                </div>
            </Section>

        </Wrapper>
    )
}

export default HomePage
