import React from 'react'
import { StyledHeader, Nav } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <h1>Employee management App</h1>
                    <Button>ADD Employee</Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

export default Header