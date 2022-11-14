import React from 'react'
import { StyledHeader, Nav } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import PropTypes from 'prop-types'


const Header = ({ setIsAdding }) => {
    const onClick = () => {
        console.log('add clicked')
    }
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <h1>Employee management App</h1>
                    <Button onClick={onClick}>ADD Employee</Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

Header.propTypes = {
    setIsAdding: PropTypes.bool,
    onClick: PropTypes.func,
}
export default Header