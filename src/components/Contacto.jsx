import React, { Component } from 'react'
import styled from 'styled-components'

import { Form, Button } from 'react-bootstrap'

import { BodyRegular2 } from '../styles/Body'
import { Headline2 } from '../styles/Headline'
import { Button2 } from '../styles/Button'

const StyledDiv = styled.div`
    background-color:#0F0E17;
    width: 546px;
    height: 733px;
    padding: 48px;
`

const StyledFormControl = styled(Form.Control)`
    width: 450px;
    height: 64px;
    margin-bottom: 16px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;  
`
const StyledButtonForm = styled(Button)`
    width: 450px;
    height: 64px;
`
class Contacto extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const email = target.email;
        const message = target.message;

        this.setState({
            [name]: event.target.value,
            [email]: event.target.value,
            [message]: event.target.value
        });
    }

    handleSubmit(event) {
        const enviarMail = document.querySelector("#correo")
        event.preventDefault()
        enviarMail.setAttribute('href', `mailto:bermudezalvarezsaraestefania@gmail.com?subject=Hola me gustaria trabajar contigo&body=${this.state.message}`)
        enviarMail.click()
    }

    render() {
        return (
            <StyledDiv>
                <h1 style={{ color: "white" }}><Headline2 name="Contacto" /></h1>
                <h2 style={{ marginBottom: "48px" }}><BodyRegular2 name="Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto." /></h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <StyledFormControl type="text" placeholder="Nombre completo" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} required />
                        <StyledFormControl type="email" placeholder="Correo electronico" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} required />
                        <StyledFormControl style={{ height: "181px", padding: "0.375rem 0.75rem" }} as="textarea" rows={7} placeholder="Mensaje" id="message" name="message" value={this.state.message} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <StyledButtonForm variant="danger" type="submit">
                        <Button2 name="Mensaje" />
                    </StyledButtonForm>
                </Form>
                <a href="mailto:me@bermudezalvarezsaraestefania@gmail.com" id="correo" style={{ display: "none" }}>link
                </a>
            </StyledDiv>
        )
    }
}

export default Contacto
