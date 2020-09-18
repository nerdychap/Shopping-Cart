import styled from "styled-components";

export const FooterStyle = styled.footer`
position: fixed;
bottom: 0;
width: 100%;
display: grid;
padding: 10px;
background-color: white;
box-shadow: 0 0px 5px red;
`
export const Header = styled.h2`
font-size: 2em;
text-align:center;
color: white;
background-color: grey;
margin: 0px;
padding: 10px;
position: fixed;
top: 0;
width: 100%;
`;
export const Total = styled.div`
text-align: center;
font-size: 1.3em;
`
export const ItemStyle = styled.div`
background-color: white;
box-shadow: 0 0 5px green;
margin: 10px 0;
padding: 5px;
display: grid;
font-size: 1.2em;
font-weight: bold;
gap: 5px;
span{
    text-transform: capitalize;
}
div{
    margin: 3px 0;
}
`;
export const ItemsWrapper = styled.article`
max-width: 500px;
width: 90%;
margin: 0 auto 100px;
`;

export const LoaderWrapper = styled.div`
display: grid;
justify-content: center;
`;
