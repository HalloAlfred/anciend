import styled from "styled-components"


interface QuestionMultiChoiceItemProps {
    firstItem?: boolean;
    lastItem?: boolean;
    active?: boolean;
}



export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: #00ffffff;
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    padding-top: 100px;
    padding-bottom: 100px;
`;

{/* Question */}
export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const QuestionLabel = styled.p`
    color: white;
    font-size: 3rem;
    font-family: 'Source Code Pro', monospace;
`;

export const QuestionMultiChoice = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: auto;
    border: 3px white solid;
    border-radius: 30px;
`;

export const QuestionMultiChoiceItem = styled.div<QuestionMultiChoiceItemProps>`
    width: 100%;
    flex: 0 1 auto;
    border-bottom: ${({ lastItem }) => lastItem ? "" : "3px solid white" };
    border-bottom-left-radius: ${({ lastItem }) => lastItem ? "25px" : "" };
    border-bottom-right-radius: ${({ lastItem }) => lastItem ? "25px" : "" };
    border-top-left-radius: ${({ firstItem }) => firstItem ? "25px" : "" };
    border-top-right-radius: ${({ firstItem }) => firstItem ? "25px" : "" };
    cursor: pointer;
    background: ${({ active }) => active && "white"};

    &:hover {
        background: ${({ active }) => !active && "#00f0f0"};
    }

    p {
        color: ${({ active }) => active && "#00ffffff"}
    }
`; 

export const QuestionMultiChoiceText = styled.p`
    color: white;
    font-size: 2rem;
    font-family: 'Source Code Pro', monospace;
`;

{/* Checkbox */}
export const CheckboxWrapper = styled.div``

export const CheckboxList = styled.div``;

export const Checkbox = styled.div``;

export const CheckboxText = styled.p``;


export const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
