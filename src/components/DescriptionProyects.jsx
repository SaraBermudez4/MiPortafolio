import React from 'react'
import { Col } from 'react-bootstrap'
import { BodyRegular1, BodyRegular2 } from '../styles/Body'
import { Headline2, Headline4 } from '../styles/Headline'
import {Row2} from '../styles/RowContainer'
import styled from 'styled-components'

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


const DescriptionProyects = () => {
    return (
        <Row2 style={{ color: "#0F0E17" }}>
            <Col xs={12} md={7}>
                <StyledTitulo1><Headline2 name="Juntos lograremos construir grandiosos proyectos." /></StyledTitulo1>
                <StyledTitulo2><Headline4 name="Juntos lograremos construir grandiosos proyectos." /></StyledTitulo2>

            </Col>
            <Col>
                <StyledTitulo1><BodyRegular1 name="A lo largo de mi aprendizaje de Frontend, he tenido el privilegio de realizar proyectos retadores e increíbles." /></StyledTitulo1>
                <StyledTitulo2><BodyRegular2 name="A lo largo de mi aprendizaje de Frontend, he tenido el privilegio de realizar proyectos retadores e increíbles." /></StyledTitulo2>
            </Col>
        </Row2>
    )
}

export default DescriptionProyects
