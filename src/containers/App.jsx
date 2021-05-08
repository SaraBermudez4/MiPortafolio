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
import { Headline2 } from '../styles/Headline'

//Imagenes
import ImgHombre from '../images/perfilHombre.jpeg'
import ImgHombre2 from '../images/perfilHombre2.png'
import ImgHombre3 from '../images/perfilHombre3.png'
//import ImgHombre4 from '../images/perfilHombre4.png'
//import ImgHombre5 from '../images/perfilHombre5.png'
import ImgMujer from '../images/perfilMujer.png'
import ImgMujer2 from '../images/perfilMujer2.png'

import Banner from '../images/banner.jpg'
import Contacto from '../components/Contacto';
import Img from '../images/mascotas.jpg'
import Img2 from '../images/principeFresco.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const StyledImageBanner = styled(Image)`
    width: 1330px;
    height: 700px;
`

const StyleButtonMasProyectos = styled.div`
    text-align : center;
    &:hover {
        color: white; 
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px; 
    color: #F25F4C; 
    margin-left: 0px;
    margin-bottom: -5px;
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
                <Row style={{ textAlign: "center" }}>
                    <Proyect1 proyectos={["Adopción de mascotas", "Adoptar puede ser una de las experiencias más grandiosas de tu...", Img, "https://github.com/SaraBermudez4/Sprint1/tree/main/Sprint1", "https://sarabermudez4.github.io/Sprint1/Sprint1/"]} />
                    <Proyect1 proyectos={["Príncipe fresco", "La serie está protagonizada por Will Smith como una versión ficticia de sí...", Img2, "https://github.com/SaraBermudez4/paginaPrincipeFresco", "https://sarabermudez4.github.io/paginaPrincipeFresco/build/index.html"]} />
                </Row>
                <StyleButtonMasProyectos>
                    <a href="https://github.com/SaraBermudez4" target="_blanck"><Button variant="outline-danger"> Ver más proyectos<StyledIcon icon={faArrowRight} /></Button></a>
                </StyleButtonMasProyectos>
            </Proyects>
            <Services>
                <Service />
            </Services>
            <Testimonials>
                <Headline2 name="Testimonios" />
                <Container fluid>
                    <Row>
                        <Testimony personas={["Juana Gomez", "Tengo algunos años trabajando con Javascript y aún así aprendí varias cosas importantes de Sara y como utiliza Javascript en el día a día.", ImgMujer]} />
                        <Testimony personas={["Dilan Maturana", "Me gusto ver el porqué de las cosas del core de React, saber la magia que ocurre por detrás, excelente compañera Sara gran vocación.", ImgHombre]} />
                        <Testimony personas={["Juan Martinez", "Ayuda a entender el porqué de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.", ImgHombre2]} />
                    </Row>
                    <Row>
                        <Testimony personas={["Carolina Gutierrez", "La forma como realiza y trabaja los temas Sara, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS.", ImgMujer2]} />
                        <Testimony personas={["Suana Pino", "Sara ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses.", ImgMujer]} />
                        <Testimony personas={["Manuel Orozco", "Sara ha superado mis expectativas desde el diseño hasta el desarrollo.", ImgHombre3]} />
                    </Row>
                </Container>
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
