import React, { useState } from 'react'
import { QuestionWrapper, QuestionLabel, QuestionMultiChoice, QuestionMultiChoiceItem, QuestionMultiChoiceText } from '../components'

function FirstSlide(props: any) {

    const [activeChoice, setChoice] = useState("");
    const resultKey = "productType"

    function handleClick(value:string) {
        props.handleChange(value, resultKey)
        setChoice(value)
    }

    return (
        <QuestionWrapper>
            <QuestionLabel>What do you need?</QuestionLabel>
            <QuestionMultiChoice>
                <QuestionMultiChoiceItem active={activeChoice === "website"} firstItem={true} onClick={() => handleClick("website")}>
                    <QuestionMultiChoiceText>Website</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === "web_app"} onClick={() => handleClick("web_app")}>
                    <QuestionMultiChoiceText>Web application</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === "mobile_app"} onClick={() => handleClick("mobile_app")}>
                    <QuestionMultiChoiceText>Mobile application</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === "other"} lastItem={true} onClick={() => handleClick("other")}>
                    <QuestionMultiChoiceText>Other</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>                        
            </QuestionMultiChoice>
        </QuestionWrapper>
    )
}

export default FirstSlide
