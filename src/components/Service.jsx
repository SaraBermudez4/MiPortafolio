import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

import { BodyRegular2 } from '../styles/Body'
import { Headline2, Headline4, Headline5 } from '../styles/Headline'
import { Row2 } from '../styles/RowContainer'

import '../styles/BodyRegular1.css';

const StyledTitulo1 = styled.h1`
    display:block;
    margin-bottom : 28px;
    color:#0F0E17;
    @media (max-width: 768px) {
        display:none;
    }
`
const StyledTitulo2 = styled.h1`
    display:none;
    @media (max-width: 768px) {
        display:block;
        margin-bottom:16px;
        color:#0F0E17;
    }
`

const Service = () => {
    return (
        <>
            <StyledTitulo1><Headline2 name="Servicios" /></StyledTitulo1>
            <StyledTitulo2><Headline4 name="Servicios" /></StyledTitulo2>
            <Row2>
                <Col xs={12} md={4}>
                    <StyledTitulo1><Headline4 name="Diseño" /></StyledTitulo1>
                    <StyledTitulo2><Headline5 name="Diseño" /></StyledTitulo2>

                    <StyledTitulo1><p className="intento">Experiencia de usuario</p></StyledTitulo1>
                    <StyledTitulo1><p className="intento">Interfaz de usuario</p></StyledTitulo1>
                    <StyledTitulo1><p className="intento">Aplicaciones web</p></StyledTitulo1>
                    <StyledTitulo1><p className="intento">Prueba de concepto</p></StyledTitulo1>

                    <StyledTitulo2><BodyRegular2 name="Experiencia de usuario" /></StyledTitulo2>
                    <StyledTitulo2><BodyRegular2 name="Interfaz de usuario" /></StyledTitulo2>
                    <StyledTitulo2><BodyRegular2 name="Aplicaciones web" /></StyledTitulo2>
                    <StyledTitulo2 style={{ marginBottom: "56px" }}><BodyRegular2 name="Prueba de concepto" /></StyledTitulo2>
                </Col>
                <Col xs={12} md={4}>
                    <StyledTitulo1><Headline4 name="Desarrollo" /></StyledTitulo1>
                    <StyledTitulo2><Headline5 name="Desarrollo" /></StyledTitulo2>

                    <StyledTitulo1><p className="intento">Aplicaciones móviles</p></StyledTitulo1>
                    <StyledTitulo1><p className="intento">Sitios web</p></StyledTitulo1>
                    <StyledTitulo1><p className="intento">Aplicaciones web progresivas</p></StyledTitulo1>

                    <StyledTitulo2><BodyRegular2 name="Aplicaciones móviles" /></StyledTitulo2>
                    <StyledTitulo2><BodyRegular2 name="Sitios web" /></StyledTitulo2>
                    <StyledTitulo2 style={{ marginBottom: "56px" }}><BodyRegular2 name="Aplicaciones web progresivas" /></StyledTitulo2>
                </Col>
                <Col xs={12} md={4}>
                    <StyledTitulo1><Headline4 name="Marca" /></StyledTitulo1>
                    <StyledTitulo2><Headline5 name="Marca" /></StyledTitulo2>

                    <StyledTitulo1><p className="intento">Identidad de la marca</p></StyledTitulo1>
                    <StyledTitulo1><p className="intento">Estrategia de marca</p></StyledTitulo1>

                    <StyledTitulo2><BodyRegular2 name="Identidad de la marca" /></StyledTitulo2>
                    <StyledTitulo2 style={{ marginBottom: "56px" }}><BodyRegular2 name="Estrategia de marca" /></StyledTitulo2>
                </Col>
            </Row2>
        </>
    )
}

/*
<Button variant="dark" className="me-5">Ver servicios de diseño</Button>
                <Button variant="dark" className="me-5">Ver servicios de desarrollo</Button>
                <Button variant="dark" className="me-5">Ver servicios de marca</Button>
*/

export default Service
