import styled from "styled-components";

import { v } from "./variables";
import { lightTheme } from "./theme";

export const StyledTableWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 30px;
    width: auto;
`;
export const STable = styled.table`
    width: 80%;
    background-color: ${lightTheme.bg};
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    border-collapse: collapse;
    text-align: center;
    overflow: hidden;
    border-collapse: collapse;
`;

export const STHead = styled.thead`
    position: sticky;
    border-bottom: 2px solid;
    border-top: 2px solid;
    border-color: ${lightTheme.bg3};
`;

export const STHeadTR = styled.tr`
    background: ${lightTheme.bg3};
`;

export const STH = styled.th`
     font-weight: normal;
    padding: 12px;
    color: ${lightTheme.text};
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;  
    :not(:last-of-type) {
        border-right: 1px solid ${lightTheme.bg2};
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    } 
`;

export const STBody = styled.tbody`
    
`;

export const STBodyTR = styled.tr`
    background: ${lightTheme.bg};
    border: 1px solid ${lightTheme.bg};
`;

export const STD = styled.td`
    padding: 6px;
    border: 1px solid ${lightTheme.bg};
    font-size: 14px;
    
`;
