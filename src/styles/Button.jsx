import React from 'react'
import styled from 'styled-components';

const StyleButton = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 0;
`

const StyleCaption = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Cantarell&display=swap');
    font-family: Cantarell;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #A7A9BE;
`

export const Button2 = ({ name }) => <StyleButton> {name} </StyleButton>;
export const Caption = ({ name }) => <StyleCaption> {name} </StyleCaption>;