import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

import { Col, Image } from 'react-bootstrap';

import { Headline1 } from '../styles/Headline'
import { BodyRegular1 } from '../styles/Body'
import Row2 from '../styles/RowContainer'

import Img from '../images/perfil.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const HeaderStyled = styled.header`
    color:white;
`
const TextHeader = styled(Col)`
    margin-top:50px;
`
const StyledImgPerfil = styled(Image)`
    height: 462px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 56px !important; 
    height: 56px; 
    color: #F25F4C;
    margin-top: 32px;
`

const Header = () => {
    return (
        <div>
            <HeaderStyled>
                <Row2>
                    <TextHeader xs={7}>
                        <Headline1 name="¡Hola a todos!"/>
                        <Headline1 name="Soy Sara Bermudez"/>
                        <BodyRegular1 name="Programadora que le pone mucho esfuerzo y dedicación a sus trabajos para dejar clientes felices y satisfechos." />
                        <a href="#Proyectos" >
                            <StyledIcon icon={faArrowDown} />
                        </a>
                    </TextHeader>
                    <Col>
                        <StyledImgPerfil src={Img} alt="Imagen de perfil" roundedCircle fluid />
                    </Col>
                </Row2>
            </HeaderStyled>
        </div>
    )
}
export default Header