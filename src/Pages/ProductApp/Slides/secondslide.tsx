import React, { useState } from 'react'
import { QuestionWrapper, QuestionLabel, QuestionMultiChoice, QuestionMultiChoiceItem, QuestionMultiChoiceText } from '../components'

function SecondSlide(props:any) {

    const [activeChoice, setChoice] = useState(0);
    const resultKey = "productPrice"

    function handleClick(value:number) {
        props.handleChange(value, resultKey)
        setChoice(value)
    }

    return (
        <QuestionWrapper>
            <QuestionLabel>What's your budget?</QuestionLabel>
            <QuestionMultiChoice>
                <QuestionMultiChoiceItem active={activeChoice === 100} firstItem onClick={() => handleClick(100)}>
                    <QuestionMultiChoiceText>100$</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === 1000} onClick={() => handleClick(1000)}>
                    <QuestionMultiChoiceText>1,000$</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>
                <QuestionMultiChoiceItem active={activeChoice === 10000} lastItem onClick={() => handleClick(10000)}>
                    <QuestionMultiChoiceText>10,000$</QuestionMultiChoiceText>
                </QuestionMultiChoiceItem>                      
            </QuestionMultiChoice>
        </QuestionWrapper>
    )
}

export default SecondSlide

