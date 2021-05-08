import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Col } from 'react-bootstrap'

import { BodyRegular1 } from '../styles/Body'
import { Headline2, Headline4 } from '../styles/Headline'
import Row2 from '../styles/RowContainer'

const Service = () => {
    return (
        <>
            <h1 style={{ marginBottom: "48px" }}><Headline2 name="Servicios" /></h1>
            <Row2>
                <Col>
                    <Headline4 name="Diseño" />
                    <BodyRegular1 name="Experiencia de usuario" />
                    <BodyRegular1 name="Interfaz de usuario" />
                    <BodyRegular1 name="Aplicaciones web" />
                    <BodyRegular1 name="Prueba de concepto" />
                </Col>
                <Col>
                    <Headline4 name="Desarrollo" />
                    <BodyRegular1 name="Aplicaciones móviles" />
                    <BodyRegular1 name="Sitios web" />
                    <BodyRegular1 name="Aplicaciones web progresivas" />
                </Col>
                <Col>
                    <Headline4 name="Marca" />
                    <BodyRegular1 name="Identidad de la marca" />
                    <BodyRegular1 name="Estrategia de marca" />
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
