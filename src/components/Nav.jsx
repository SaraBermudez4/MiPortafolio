import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'

import { Nav, Button, Navbar } from 'react-bootstrap'
import { BodyRegular2 } from '../styles/Body'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const StyleButtonNav = styled.nav`
    margin-left: 40%;
    margin-right: 72px;
    
`
const StyleNavBar = styled(Navbar)`
    height: 96px;
    width:100%;
    background-color: #0F0E17;
    padding: 31px 72px 24px 72px;
    position: fixed;
    z-index: 100;
`

const StyleButton = styled(Button)`
    width: 206px;
    height: 48px;

    &:hover ${StyleButton} {
    background-color: #F25F4C;
  }
`
const StyledNavLink = styled(Nav.Link)`
    &:hover {
    background: #F25F4C;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 35px !important; 
    height: 35px; 
    color: #F25F4C;
`

const NavH = () => {
    return (
        <StyleNavBar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand className="animate__animated animate__heartBeat animate__slower" href="#Hola">
                <StyledIcon icon={faHeart} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <StyledNavLink href="#Hola"><BodyRegular2 name="Hola" /></StyledNavLink>
                    <StyledNavLink href="#Proyectos"><BodyRegular2 name="Proyectos" /></StyledNavLink>
                    <StyledNavLink href="#Servicios"><BodyRegular2 name="Servicios" /></StyledNavLink>
                    <StyledNavLink href="#Testimonios"><BodyRegular2 name="Testimonios" /></StyledNavLink>
                    <StyledNavLink href="#Contacto"><BodyRegular2 name="Contacto" /></StyledNavLink>
                </Nav>
                <StyleButtonNav>
                    <StyleButton variant="outline-danger">Descargar Curriculum</StyleButton>
                </StyleButtonNav>
            </Navbar.Collapse>
        </StyleNavBar>
    )
}

export default NavH