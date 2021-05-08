import React from 'react'
import styled from 'styled-components'

const MainStyle = styled.div`
    //grid-template-columns: minmax(auto, 1024px);
    //justify-content: center;
    padding: 80px 72px 80px 72px; 
    background-color: #0F0E17;
    color:white;
`

const Testimonials = ({ children }) => {
    return (
        <MainStyle id="Testimonios">
            {children}
        </MainStyle>
    )
}

export default Testimonials
