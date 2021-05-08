import React from 'react'
import styled from 'styled-components';

const MainStyled = styled.div`
    //grid-template-columns: minmax(auto, 1024px);
    //justify-content: center;
    padding: 76px 62px 80px 62px; 
`;

const Proyects = ({ children }) => {
    return (
        <MainStyled id="Proyectos">
            {children}
        </MainStyled>
    )
}

export default Proyects