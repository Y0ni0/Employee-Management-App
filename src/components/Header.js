import React from 'react'
import { StyledHeader } from './styles/Header.styled'
import { Container } from './styles/Container.styled'

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <h1>Hubble</h1>
            </Container>
        </StyledHeader>
    )
}

export default Header