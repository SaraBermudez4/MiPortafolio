import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import '../styles/BodyRegular1.css';

import { Col, Image} from 'react-bootstrap'
import { BodyBold2 } from '../styles/Body'
import {Row2} from '../styles/RowContainer'
const StyledPerfiles = styled(Image)`
    width: 48px;
    height: 48px;
    border-radius:100%;
`

class Testimony extends Component {

    constructor({ personas }) {
        super()
        this.state = {
            names: personas[0],
            testimonios: personas[1],
            imagen: personas[2]
        }
    }

    render() {
        return (
            <>
                <Col xs = {12} md={4}>
                    <Row2 >
                        <Col md={2} xs={2} style={{ marginBottom: "16px" }} >
                            <StyledPerfiles src={this.state.imagen} alt="Imagen de usuario" />
                        </Col>
                        <Col>
                            <h1 style={{ color: "#F25F4C"}}><BodyBold2 name={this.state.names} /></h1>
                        </Col>
                    </Row2>
                    <p className = "intento">{this.state.testimonios} </p>
                    
                </Col>
            </>
        )
    }
}

export default Testimony
