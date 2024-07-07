import styled from "styled-components";


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:100%;

`;

const Wrapper = styled.div`
width:430px;
height:fit-content;
background-color: #FFFFFF; 
margin:64px 0px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding:24px 30px;
`;

const Info = styled.div`
display:flex;
justify-content: space-between;
margin-top:17px;
`
const InfoText = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
margin-top:12px;
display:flex;
justify-content: center;
 `
const Error = styled.div`
color:red;
`
export { Container, Wrapper, Info, Error, InfoText };
