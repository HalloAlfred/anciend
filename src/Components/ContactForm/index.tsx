import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
    margin-bottom: 35px;
    height: 60px;
`;

const CustomTextInput = styled.input`
`;

const InputLabel = styled.label`
    /* width: 33.33%; */
    font-family: 'Source Code Pro', monospace;
    text-align: left;
`;

const TextArea = styled.textarea``;

const SubmitButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #00ffffff;
    cursor: pointer;
    height: 50px;
    width: 30%;
    margin-top: 100px;
    border-radius: 10px;

    &:hover {
        background: #00f0f0;
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

class ContactForm extends Component {

    state = {

    }

    render() {
        return (
            <Wrapper>
                <InnerWrapper>

                    <InputGroup>
                        <InputLabel>Full name</InputLabel>
                        <CustomTextInput type="text" id="fname" name="fname" />
                    </InputGroup>
                    
                    <InputGroup>
                        <InputLabel>Email address</InputLabel>
                        <CustomTextInput />
                    </InputGroup>
                    
                    <InputGroup>
                        <InputLabel>Message</InputLabel>
                        <TextArea />
                    </InputGroup>
                    

                    <SubmitButton>
                        <ButtonText>Send</ButtonText>
                        <ButtonIcon><FontAwesomeIcon icon={faLongArrowAltRight} color="white" size="2x" /></ButtonIcon>
                    </SubmitButton>

                </InnerWrapper>
            </Wrapper>
        )
    }
}

export default ContactForm
