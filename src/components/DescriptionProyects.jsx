import React from 'react'
import { Col } from 'react-bootstrap'
import { BodyRegular1 } from '../styles/Body'
import { Headline2 } from '../styles/Headline'
import Row2 from '../styles/RowContainer'
import styled from 'styled-components'

const StyledText = styled.h1`
    color:#0F0E17;
`

const DescriptionProyects = () => {
    return (
        <Row2>
            <Col>
                <StyledText><Headline2 name="Juntos lograremos construir grandiosos proyectos." /></StyledText>
            </Col>
            <Col>
                <StyledText><BodyRegular1 name="A lo largo de mi aprendizaje de Frontend, he tenido el privilegio de realizar proyectos retadores e increíbles." /></StyledText>
            </Col>
        </Row2>
    )
}

export default DescriptionProyects
