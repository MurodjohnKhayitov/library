import styled from 'styled-components';
import { ReactComponent as notFount } from "../../assets/notfount.svg";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

`;
export const Container = styled.div`
    max-width: var(--width);
   width: 100%;
   height: 100vh;
   padding: 0 130px;
   display:flex;
   align-items:center;
   justify-content:center;
    border:1px solid red

`;
export const CoverImage = styled.div`
 
   border:1px solid red
  `;
export const CoverBtnGroup = styled.div`
     display:flex;
     align-items:center;
     justify-content:center;
     border:1px solid red;
     gap: 1rem; /* 16px */
     margin-top:70px

  `;

export const Icons = styled.div``;
Icons.NotFound = styled(notFount)``;
