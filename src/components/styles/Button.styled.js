import styled from "styled-components";

import { lightTheme } from "./theme";

export const Button = styled.button`
    border-radius: 15px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};

    &:hover {
        opacity: 0.9;
        transform: scale(1.5px);
        background-color: ${lightTheme.bg3};
    }
`