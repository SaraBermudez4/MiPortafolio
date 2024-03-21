import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

import { Col } from 'react-bootstrap';

import {Row2} from '../styles/RowContainer'
import { BodyRegular2 } from '../styles/Body';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
    position: absolute;
    width: 100%;
    height: 145px;
    background: #0F0E17;
    padding: 48px 72px 48px 72px;

    @media (max-width: 768px) {
        padding: 40px 20px 40px 20px;
        width: 100%;
        height: 391px;
    }
`
const StyledIcon = styled(FontAwesomeIcon)`
    width: 35px !important; 
    height: 35px; 
`

const StyeledCol = styled(Col)`
    @media (max-width: 768px) {
        margin-bottom:32px;
    }
`


const Footer = () => {
    return (
        <StyledFooter>
            <Row2 style={{ textAlign: "center", color: "#A7A9BE"}}>
                <StyeledCol md={1} mx={1}>
                    <StyledIcon icon={faHeart} style={{ color: "#A7D9A9" }} />
                </StyeledCol>
                <StyeledCol md={3} mx={3}>
                    <BodyRegular2 name="Hecho con ❤️ de Sara. " />
                </StyeledCol>
                <StyeledCol md={5} mx={3}>
                    <BodyRegular2 name="Copyright 2021 - Todos los derechos reservados." />
                </StyeledCol>
                <StyeledCol md={3} mx={4}>
                    <Row2>
                        <Col>
                            <a href="https://github.com/SaraBermudez4" target="_blank">
                                <StyledIcon icon={faGithub} style={{ color: "white" }} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com/sara.bermudez_44" target="_blank" id="profile-link">
                                <StyledIcon icon={faInstagram} style={{ color: "white" }}/>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.facebook.com/sara.bermudezalvarez.4" target="_blank">
                                <StyledIcon icon={faFacebook} style={{ color: "white" }} />
                            </a>
                        </Col>

                        <Col>
                            <a href="https://twitter.com/Repoyito4" target="_blank">
                                <StyledIcon icon={faTwitter} style={{ color: "white" }} />
                            </a>
                        </Col>
                    </Row2>
                </StyeledCol>
            </Row2>
        </StyledFooter >
    )
}
export default Footer
