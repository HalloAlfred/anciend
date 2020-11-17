import React from 'react'
import styled from "styled-components"

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #6c63ff;
    cursor: pointer;
    height: 50px;
    width: 30%;
    margin-top: 100px;
    border-radius: 10px;

    &:hover {
        background: #6058e8;
    }
`;

const ButtonText = styled.p`
    margin: 0;
    color: white;
    font-size: 1.25rem;
    margin-left: 20px;
    font-family: 'Source Code Pro', monospace;
    font-weight: bold;
`;

const ButtonIcon = styled.div`
    margin-right: 20px;
`;



function SubmitButton(props: any) {
    return (
        <ButtonWrapper onClick={props.handleClick}>
            <ButtonText>{props.buttonText}</ButtonText>
            <ButtonIcon></ButtonIcon>
        </ButtonWrapper>
    )
}

export default SubmitButton
