import styled from "styled-components";
import { lightTheme } from "./theme";


export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`

export const StyledForm = styled.form`
    background: ${lightTheme.bg};
    width: 100%;
    max-width: 450px;
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: '#fff';
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    background-color: #dddddd;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 10px 0;
    padding: 20px;
    box-sizing: border-box;

`
export const StyledFieldset = styled.fieldset`
    border: 1px solid #ddd;
    width: 60%;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
   
    legend{
        padding: 0 10px;
    }
    label{
        padding-right: 20px;
    }
    input{
        margin-right: 10px;
    }
`
export const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
`