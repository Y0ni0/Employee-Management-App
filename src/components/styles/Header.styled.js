import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 15px 0;
    border-radius: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1{
        padding-left: 18px;
    }
    div{
        padding-right: 25px;
    }

`


