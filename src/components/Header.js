import React from 'react'
import { StyledHeader, Nav } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import PropTypes from 'prop-types'


const Header = ({ setIsAdding }) => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <h1>Employee management App</h1>
                    <div><Button onClick={() => setIsAdding(true)}>ADD Employee</Button></div>
                </Nav>
            </Container>
        </StyledHeader>
    )
}


export default Header