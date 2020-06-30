import React from 'react'
import styled from "styled-components"
import PlanningSVG from "../../Assets/svgs/planning.svg"
import CodingSVG from "../../Assets/svgs/coding.svg"
import CompletedSVG from "../../Assets/svgs/completed.svg"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
    background: white;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 80%;
`;

const Title = styled.h1`
    width: 100%;
    font-family: 'Source Code Pro', monospace;
    font-size: 3.5rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* border: solid black 1px; */
    flex-basis: 75%;
    width: 100%;
`;

const ContentColumn = styled.div`
    height: 100%;
    flex-basis: 33.33%;
    display: flex;
    flex-direction: column;
    /* border: black solid 1px; */
    align-items: center;
`;

const ContentColumnImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 25%;
`;

const ContentTextWrapper = styled.div`

`;

const ContentColumnTitle = styled.h2`
    font-family: 'Source Code Pro', monospace;
`;

const ContentColumnText = styled.p`
    font-family: 'Source Code Pro', monospace;
    font-size: 1.5rem;
    color: grey;
    width: 80%;
`;

{/* 
    props:
        - icon?
        - text

*/}

function SideColumnSection() {
    return (
        <Wrapper>
            <InnerWrapper>
                <Title>Workflow</Title>
                <ContentWrapper>
                    <ContentColumn>
                        <ContentColumnImageWrapper>
                            <img src={PlanningSVG} alt="" style={{ width: "60%", height: "60%" }} />
                        </ContentColumnImageWrapper>
                        <ContentColumnTitle>Planning</ContentColumnTitle>
                        <ContentColumnText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ContentColumnText>
                    </ContentColumn>
                    <ContentColumn>
                        <ContentColumnImageWrapper>
                            <img src={CodingSVG} alt="" style={{ width: "60%", height: "60%" }} />
                        </ContentColumnImageWrapper>
                        <ContentColumnTitle>Coding</ContentColumnTitle>
                        <ContentColumnText>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</ContentColumnText>
                    </ContentColumn>
                    <ContentColumn>
                        <ContentColumnImageWrapper>
                            <img src={CompletedSVG} alt="" style={{ width: "60%", height: "60%" }} />
                        </ContentColumnImageWrapper>
                        <ContentColumnTitle>Deploying</ContentColumnTitle>
                        <ContentColumnText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</ContentColumnText>
                    </ContentColumn>
                </ContentWrapper>
            </InnerWrapper>
        </Wrapper>
    )
}

export default SideColumnSection
