import React, { useState } from 'react'
import { QuestionWrapper, QuestionLabel, QuestionMultiChoice, QuestionMultiChoiceItem, QuestionMultiChoiceText } from '../components'

function ThirdSlide(props:any) {

    const [activeChoice, setChoice] = useState("");
    const resultKey = "productTimeFrame"

    function handleClick(value:string) {
        props.handleChange(value, resultKey)
        setChoice(value)
    }

    return (
        <QuestionWrapper>
            <QuestionLabel>What's your timeframe?</QuestionLabel>
            <QuestionMultiChoice>
                <QuestionMultiChoiceItem active={activeChoice === "1W"} firstItem={true} onClick={() => handleClick("1W")}>
                    <QuestionMultiChoiceText>One week</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === "1M"} onClick={() => handleClick("1M")}>
                    <QuestionMultiChoiceText>One month</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === "3M"} onClick={() => handleClick("3M")}>
                    <QuestionMultiChoiceText>Three months</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === "other"} lastItem={true} onClick={() => handleClick("other")}>
                    <QuestionMultiChoiceText>Other</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>                 
            </QuestionMultiChoice>
        </QuestionWrapper>
    )
}

export default ThirdSlide