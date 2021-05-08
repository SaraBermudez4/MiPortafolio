import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'

import { Nav, Button, Navbar } from 'react-bootstrap'
import { BodyRegular2 } from '../styles/Body'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const StyleButtonNav = styled.nav`
    margin-left: 40%;
    margin-right: 72px;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        display:none;
    } 
`
const StyleNavBar = styled(Navbar)`
    height: 96px;
    width:100%;
    background-color: #0F0E17;
    padding: 31px 72px 24px 72px;
    position: fixed;
    z-index: 100;
    @media (max-width: 768px) {
        padding:10px;
    }
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

const StyledNavCollapse = styled(Navbar.Collapse)`
    @media (max-width: 768px) {
        background-color: #0F0E17 !important;
        padding: 15px;
        margin-left: -10px;
        margin-right: -10px;
    }
`

const StyledNavBarHeart = styled(Navbar.Brand)`
    @media (max-width: 768px) {
        margin-left: 20%;
    }
`
const StyleButtonCollapse = styled(Button)`
    width: 206px;
    height: 48px;
    display:none;
    &:hover ${StyleButtonCollapse} {
    background-color: #F25F4C;
    }
    @media (max-width: 768px) {
        display: block;
    }
`

class NavH extends Component {

    fbShare() {
        window.open('Hojadevida.pdf');
    }

    render() {
        return (
            <StyleNavBar collapseOnSelect expand="lg" variant="dark" id="navbar">
                <StyledNavBarHeart className="animate__animated animate__heartBeat animate__slower" href="#welcome-section">
                    <StyledIcon icon={faHeart} />
                </StyledNavBarHeart>
                <Navbar.Brand>
                    <a href="Hojadevida.pdf" download="" style={{textDecoration:"none"}}>
                        <StyleButtonCollapse variant="outline-danger">Descargar Curriculum</StyleButtonCollapse>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ position: "absolute" }} />
                <StyledNavCollapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <StyledNavLink href="#welcome-section"><BodyRegular2 name="Hola" /></StyledNavLink>
                        <StyledNavLink href="#projects"><BodyRegular2 name="Proyectos" /></StyledNavLink>
                        <StyledNavLink href="#Servicios"><BodyRegular2 name="Servicios" /></StyledNavLink>
                        <StyledNavLink href="#Testimonios"><BodyRegular2 name="Testimonios" /></StyledNavLink>
                        <StyledNavLink href="#Contacto"><BodyRegular2 name="Contacto" /></StyledNavLink>
                    </Nav>
                    <StyleButtonNav>
                        <a href="Hojadevida.pdf" download="" style={{textDecoration:"none"}}>
                            <StyleButton variant="outline-danger">Descargar Curriculum</StyleButton>
                        </a>
                    </StyleButtonNav>
                </StyledNavCollapse>
            </StyleNavBar>
        )
    }
}

/*
<a href="../images/Hojadevida.pdf" download="" target="_blank">
                        <StyleButton variant="outline-danger">Descargar Curriculum</StyleButton>
                    </a>

                    <form method="get" action="../images/Hojadevida.pdf">
                        <StyleButton type="submit" variant="outline-danger">Download!</StyleButton>
                    </form>
*/
export default NavH