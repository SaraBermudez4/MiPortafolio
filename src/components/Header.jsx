import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

import { Col, Image } from 'react-bootstrap';

import { Headline1, Headline4 } from '../styles/Headline'
import {Row2, Container2} from '../styles/RowContainer'

import Img from '../images/perfil.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import '../styles/BodyRegular1.css';

const HeaderStyled = styled(Container2)`
    color:white;
`
const TextHeader = styled(Col)`
    margin-top:50px;
`

const StyledTitulo1 = styled.h1`
    display:block;
    @media (max-width: 768px) {
        display:none;
    }
`
const StyledTitulo2 = styled.h1`
    display:none;
    @media (max-width: 768px) {
        display:block;
    }
`

const StyledImgPerfil = styled(Image)`
    height: 462px;
    margin-top:50px;

    @media (max-width: 768px) {
        height: 298px;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 56px !important; 
    height: 56px; 
    color: #F25F4C;
    margin-top: 32px;
`

const Header = () => {
    return (
        <>
            <HeaderStyled fluid>
                <Row2 xs={1} md={2} >
                    <TextHeader md={{ order: 1 }} xs={{ order: 2 }}>
                        <StyledTitulo1><Headline1 name="¡Hola a todos!" /></StyledTitulo1>
                        <StyledTitulo2><Headline4 name="¡Hola a todos!" /></StyledTitulo2>
                        <StyledTitulo1><Headline1 name="Soy Sara Bermudez" /></StyledTitulo1>
                        <StyledTitulo2><Headline4 name="Soy Sara Bermudez" /></StyledTitulo2>
                        <p className="intento">Programadora que le pone mucho esfuerzo y dedicación a sus trabajos para dejar clientes felices y satisfechos." </p>
                        <a href="#Proyectos" >
                            <StyledIcon icon={faArrowDown} />
                        </a>
                    </TextHeader>
                    <Col xs={{ order: 1 }} md={{ order: 2 }} style = {{textAlign: "center"}}>
                        <StyledImgPerfil src={Img} alt="Imagen de perfil" roundedCircle fluid />
                    </Col>
                </Row2>
            </HeaderStyled>
        </>
    )
}
export default Header