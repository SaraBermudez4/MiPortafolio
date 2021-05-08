import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

import { Col } from 'react-bootstrap';

import Row2 from '../styles/RowContainer'
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
`
const StyledIcon = styled(FontAwesomeIcon)`
    width: 35px !important; 
    height: 35px; 
`

const Footer = () => {
    return (
        <StyledFooter>
            <Row2 style={{ textAlign: "center" }}>
                <Col xs={1}>
                    <StyledIcon icon={faHeart} style={{ color: "#F25F4C" }} />
                </Col>
                <Col xs={8}>
                    <BodyRegular2 name="Hecho con ❤️ de Sara. Copyright 2021 - Todos los derechos reservados." />
                </Col>
                <Col xs={3}>
                    <Row2>
                        <Col>
                            <a href="https://github.com/SaraBermudez4" target="_blanck">
                                <StyledIcon icon={faGithub} style={{ color: "white" }} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com/repoyito4" target="_blanck">
                                <StyledIcon icon={faInstagram} style={{ color: "white" }} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.facebook.com/sara.bermudezalvarez.4" target="_blanck">
                                <StyledIcon icon={faFacebook} style={{ color: "white" }} />
                            </a>
                        </Col>

                        <Col>
                            <a href="https://twitter.com/Repoyito4" target="_blanck">
                                <StyledIcon icon={faTwitter} style={{ color: "white" }} />
                            </a>
                        </Col>
                    </Row2>
                </Col>
            </Row2>
        </StyledFooter >
    )
}
export default Footer
