import styled from "styled-components";


export const GrupoDeFiltros = styled.div`

display: flex;
padding: 10px;
padding-top: 95px;
gap: 30px;
flex-direction: column;




input{
    background-color: #d5be2a;
    border-radius: 5px;
    height: 30px;
    color: #383838;
    font-weight: 800;
    font-size: 14px;
    padding-left: 5px;
    outline: none;
    border: none;
    border: 2px solid white;
    font-family: "Fjalla One", sans-serif;
    letter-spacing: 1px;

    
}

.filtros-style{
    color: white;
    font-family: "Fjalla One", sans-serif;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 400;
}


`;


export const Filtros = styled.label`

display: flex;
flex-direction: column;
padding: 10px 0px;
font-family: "Fjalla One", sans-serif;
color: white;
text-transform: uppercase;
letter-spacing: 1px;

`;
