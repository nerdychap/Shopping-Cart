import styled from "styled-components";

export const FormWrapper = styled.form`
padding: 10px;
border: 1px solid blue;
box-shadow: 0 0 5px blue;
background-color: lightblue;
max-width: 500px;
width: 90%;
margin: 75px auto 10px;
`;
export const InputWrapper = styled.div`
margin: 2px 0;
display: grid;
`;
export const Input = styled.input`
    padding: 5px;
    border-radius: 3px;
    border: 2px solid ${({ color }) => color};
`;

export const Button = styled("button")`
    border: 2px solid ${({ bgColor }) => bgColor};
    font-size: 1.2em;
    border-radius: 3px;
    padding: 3px 10px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    margin: 5px auto;
    width: 100%;
    max-width: 500px;
    @media screen and (min-width: 1024px){
        &:hover{
    color: ${({ bgColor }) => bgColor};
    background-color: ${({ color }) => color};
    }
    }

    `;

export const Label = styled.label`
font-size: 1.2em;
`;

export const DuplicateError = styled.i`
color: red;
`;