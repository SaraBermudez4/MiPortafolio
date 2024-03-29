import React from 'react'
import { Button, Container, Image, Row } from 'react-bootstrap'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

//Components
import DescriptionProyects from '../components/DescriptionProyects'
import Header from '../components/Header'
import NavH from '../components/Nav'
import Proyect1 from '../components/Proyect1'
import Service from '../components/Service'
import Testimony from '../components/Testimony'
import Footer from '../components/Footer';

//Containers
import Hero from './Hero'
import Proyects from './Proyects'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact';

//Styles
import { Headline2, Headline4 } from '../styles/Headline'
import { Container2, Row2 } from '../styles/RowContainer'

//Imagenes
import ImgHombre from '../images/perfilHombre.jpeg'
import ImgHombre2 from '../images/perfilHombre2.png'
import ImgHombre3 from '../images/perfilHombre3.png'
import ImgMujer from '../images/perfilMujer.png'
import ImgMujer2 from '../images/perfilMujer2.png'

import Banner from '../images/banner.jpg'
import Contacto from '../components/Contacto';
import Img from '../images/mascotas.jpg'
import Img3 from '../images/cajaMusical.JPG'
import Img4 from '../images/frasesAleatorias.JPG'
import Img5 from '../images/guajolotas.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const StyledImageBanner = styled(Image)`
    width: 100%;
    height: auto;
`

const StyleDivMasProyectos = styled.div`
    text-align : center;
    &:hover {
        color: white; 
    }
`
const StyledButton = styled(Button)`
    width: 297px;
    height: 64px;
    border-color: #A7D9A9;
    color: #A7D9A9;
    background-color: #0F0E17;
    &:hover ${StyledButton} {
        background-color: #A7D9A9;
        border-color: #A7D9A9;
        color: #0F0E17;
    }

    @media (max-width: 768px) {
        width:100%;
        height: 64px;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px; 
    color: #A7D9A9; 
    margin-left: 0px;
    margin-bottom: -5px;
    &:hover{
        color: #0F0E17; 
    }
`

const StyledTitulo1 = styled.h1`
    display:block;
    margin-bottom:48px;
    @media (max-width: 768px) {
        display:none;
    }
`
const StyledTitulo2 = styled.h1`
    display:none;
    @media (max-width: 768px) {
        display:block;
        margin-bottom:24px;
    }
`

const App = () => {
    return (
        <>
            <NavH />
            <Hero>
                <Header />
            </Hero>
            <Proyects>
                <DescriptionProyects />
                <Row2 style={{ textAlign: "center" }}>
                    <Proyect1 proyectos={["Adopción de mascotas", "Adoptar puede ser una de las experiencias más grandiosas de tu...", Img, "https://github.com/SaraBermudez4/Sprint1/tree/main/Sprint1", "https://sarabermudez4.github.io/Sprint1/Sprint1/"]} />
                    <Proyect1 proyectos={["Aplicación Guappjolotes", "Aplicación que te ayudará a ordenar tus guajolotas a domicilio. Platillo típico de....", Img5, "https://github.com/Guajo-Redux/guajolotas-redux", "https://guajo-redux.github.io/guajolotas-redux/"]} />
                    <Proyect1 proyectos={["Frases Aleatorias", "Aplicación que genera frases motivacionales y frases de programación aleatorias...", Img4, "https://github.com/SaraBermudez4/FrasesAleatorias", "https://sarabermudez4.github.io/FrasesAleatorias/"]} />
                    <Proyect1 proyectos={["Caja musical", "Una divertida caja de ritmos, sé todo un DJ creando obras musicales...", Img3, "https://github.com/SaraBermudez4/CajaMusical", "https://sarabermudez4.github.io/CajaMusical/"]} />
                </Row2>
                <StyleDivMasProyectos>
                    <a href="https://github.com/SaraBermudez4" target="_blank"><StyledButton>Ver más proyectos <StyledIcon icon={faArrowRight} /></StyledButton></a>
                </StyleDivMasProyectos>
            </Proyects>
            <Services>
                <Service />
            </Services>
            <Testimonials>
                <StyledTitulo1><Headline2 name="Testimonios" /></StyledTitulo1>
                <StyledTitulo2><Headline4 name="Testimonios" /></StyledTitulo2>
                <Container2 fluid>
                    <Row2>
                        <Testimony personas={["Juana Gomez", "Tengo algunos años trabajando con Javascript y aun así aprendí varias cosas importantes de Sara y como utiliza Javascript en el día a día.", ImgMujer]} />
                        <Testimony personas={["Dilan Maturana", "Me gusto ver el porqué de las cosas del core de React, saber la magia que ocurre por detrás, excelente compañera Sara gran vocación.", ImgHombre]} />
                        <Testimony personas={["Juan Martinez", "Ayuda a entender el porqué de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.", ImgHombre2]} />
                    </Row2>
                    <Row2>
                        <Testimony personas={["Carolina Gutierrez", "La forma como realiza y trabaja los temas Sara, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS.", ImgMujer2]} />
                        <Testimony personas={["Suana Pino", "Sara ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses.", ImgMujer]} />
                        <Testimony personas={["Manuel Orozco", "Sara ha superado mis expectativas desde el diseño hasta el desarrollo.", ImgHombre3]} />
                    </Row2>
                </Container2>
            </Testimonials>
            <StyledImageBanner src={Banner} alt="Imagen de banner representativa" fluid />
            <Contact>
                <Contacto />
            </Contact>
            <Footer />
        </>
    )
}

export default App
