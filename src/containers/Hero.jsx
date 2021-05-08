import React from 'react'
import styled from 'styled-components'

const MainStyled = styled.div`
    //grid-template-columns: minmax(auto, 1024px);
    //justify-content: center;
    padding: 100px 72px 80px 72px;
    background-color: #0F0E17;
    @media (max-width: 768px) {
        padding: 100px 20px 24px 20px;
    }
`;

const Hero = ({ children }) => {
    return (
        <MainStyled id="Hola">
            {children}
        </MainStyled>
    )
}
export default Hero