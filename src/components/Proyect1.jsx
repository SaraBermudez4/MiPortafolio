import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'

import { Button, Col, Image } from 'react-bootstrap';

import { Headline5 } from '../styles/Headline';
import { BodyRegular1 } from '../styles/Body';

const StyledDivImage = styled.div`
   height: 520px;
   margin-bottom:112px;
`
const StyledDivI = styled.div`
    background-color:#0F0E17;
    width:511px;
    height:316px;
    position: relative;
    bottom: 265px;
    padding: 64px 24px 24px 24px;
    text-align:left;
    right: 10px;
`

const StyledImg = styled(Image)`
    width: 575px;
    margin-top: 96px;
`

class Proyect1 extends Component {

    constructor({ proyectos }) {
        super()
        this.state = {
            titulo: proyectos[0],
            description: proyectos[1],
            imagen: proyectos[2],
            linkRepositorio: proyectos[3],
            linkPagina: proyectos[4]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('this is:', this);
    }

    render() {
        return (
            <>
                <Col>
                    <StyledDivImage>
                        <StyledImg src={this.state.imagen} alt="aaaa" />
                        <StyledDivI>
                            <div style={{ color: "white" }}>
                                <Headline5 name={this.state.titulo} />
                            </div>
                            <div style={{ color: "#A7A9BE", marginBottom: "48px" }}>
                                <BodyRegular1 name={this.state.description} />
                            </div>
                            <a href={this.state.linkPagina} target="_blanck"><Button variant="danger" className="me-5">Ver proyecto completo</Button>
                            </a>
                            <a href={this.state.linkRepositorio} target="_blanck"></a><Button variant="outline-danger">Ver codigo</Button>
                        </StyledDivI>
                    </StyledDivImage>
                </Col>
            </>
        )
    }
}

export default Proyect1
