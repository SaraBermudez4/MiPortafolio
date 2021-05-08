import React from 'react'
import styled from 'styled-components';

const MainStyled = styled.div`
    //grid-template-columns: minmax(auto, 1024px);
    //justify-content: center;
    padding: 80px 0px 80px 0px; 
    background: linear-gradient(45deg, #FFD9D9 0%, #FF6450 100%);
    text-align: -webkit-center;
    @media (max-width: 768px) {
        padding: 40px 20px 40px 20px;
    }
`

const Contact = ({ children }) => {
    return (
        <MainStyled id="Contacto">
            {children}
        </MainStyled>
    )
}

export default Contact
