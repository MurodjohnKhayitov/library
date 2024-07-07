import styled from "styled-components";
import { ReactComponent as plus } from "../../assets/icons.svg";
import { ReactComponent as LinksIsbn } from "../../assets/links.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:50px;
  margin-bottom:36px
`;
const NavbarWrapper = styled.div`
  display: flex;
   font-family: "Monserrant";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
  padding: 0 130px;
  justify-content:space-between
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--width);
width:100%
 `;


const MainItem = styled.div`
   display:flex;
   flex-direction:column
`;

const MainText = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
`;

const HighlightText = styled.span`
  color: #6200EE; /* Purple color */
   font-size: 36px;
  font-weight: 700;
`;

const SubText = styled.p`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 400px;

  color: #fff; /* Light grey color */
`;
const ModalInput = styled.div`
   display:flex;
   flex-direction:column;
   position:relative;
   border:1px solid red
   height:fit-content

`;
const Icons = styled.div``;
Icons.Plus = styled(plus)`
margin-right:16px
`;
Icons.LinksIsbn = styled(LinksIsbn)`
position:absolute;
top:50px;
z-index:10;
left:10px;
  `;
const CoverBtnGroup = styled.div`
     display:flex;
     align-items:center;
     justify-content:space-between;
      gap: 1rem; /* 16px */
     margin-top:28px

  `;
export { Container, NavbarWrapper, Wrapper, ModalInput, MainItem, CoverBtnGroup, MainText, HighlightText, SubText, Icons };
