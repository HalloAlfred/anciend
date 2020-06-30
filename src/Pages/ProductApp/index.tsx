import React, { useState } from 'react'
import styled from "styled-components"
import { Wrapper, InnerWrapper, ButtonGroup } from './components'
import SubmitButton from '../../Components/FormItems/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import {
    Link
} from "react-router-dom";

import FirstSlide from "./Slides/firstslide"
import SecondSlide from "./Slides/secondslide"
import ThirdSlide from "./Slides/thirdslide"
import CompletedSlide from "./Slides/completedslide"


function ProductApp() {

    const [activeSlide, setSlide] = useState(0);
    const [formResults, setFormResults] = useState({
        productType: "",
        productPrice: 0,
        productTimeFrame: ""
    });

    function calculateProject() {

    }

    function handleChange(value:any, formResultKey:any) {
        console.log(value)
        if (formResultKey === "productType")
            setFormResults({ ...formResults, productType: value })
        if (formResultKey === "productPrice")
            setFormResults({ ...formResults, productPrice: value })
        if (formResultKey === "productTimeFrame")
            setFormResults({ ...formResults, productTimeFrame: value })
    } 

    return (
        <Wrapper>
            <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Link to="/"><FontAwesomeIcon icon={faTimes} size="2x" color="white" /></Link>
            </div>
            <InnerWrapper>

                {activeSlide === 0 && <FirstSlide handleChange={handleChange} />}
                {activeSlide === 1 && <SecondSlide handleChange={handleChange} />}
                {activeSlide === 2 && <ThirdSlide handleChange={handleChange} />}
                {activeSlide === 3 && <CompletedSlide />}
            
                <ButtonGroup>
                    {activeSlide !== 0 && <SubmitButton buttonText="Back" handleClick={() => setSlide(activeSlide - 1)} /> }
                    {activeSlide !== 3 && <SubmitButton buttonText="Next" handleClick={() => setSlide(activeSlide + 1)} /> }
                    {activeSlide === 3 && <SubmitButton buttonText="Done!" handleClick={() => console.log(formResults)} />} 
                </ButtonGroup>
                
            </InnerWrapper>
        </Wrapper>
    )
}

export default ProductApp
