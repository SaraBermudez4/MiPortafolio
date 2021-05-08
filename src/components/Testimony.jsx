import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import { Col, Image, Row } from 'react-bootstrap'
import { BodyBold2, BodyRegular1 } from '../styles/Body'

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
                <Col>
                    <Row style={{ marginTop: "48px" }}>
                        <Col sm={2} style={{ marginBottom: "16px" }} >
                            <StyledPerfiles src={this.state.imagen} alt="Imagen de usuario" />
                        </Col>
                        <Col>
                            <h1 style={{ color: "#F25F4C" }}><BodyBold2 name={this.state.names} /></h1>
                        </Col>
                    </Row>
                    <BodyRegular1 name={this.state.testimonios} />
                </Col>
            </>
        )
    }
}

export default Testimony
