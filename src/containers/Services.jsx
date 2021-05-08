import React from 'react'
import styled from 'styled-components';

const MainStyled = styled.div`
    //grid-template-columns: minmax(auto, 1024px);
    //justify-content: center;
    padding: 80px 72px 80px 72px; 
    background: linear-gradient(45deg, #FFD9D9 0%, #FF6450 100%);
`;

const Services = ({ children }) => {
    return (
        <MainStyled id="Servicios">
            {children}
        </MainStyled>
    )
}

export default Services