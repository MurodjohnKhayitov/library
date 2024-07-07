import styled from 'styled-components';
import { ReactComponent as edit } from "../../assets/edit.svg";
import { ReactComponent as deleteIcon } from "../../assets/trash.svg";

const getType = (type) => {
  switch (type) {
    case "finish":
      return {
        backgroundColor: "#00FF29"

      };
    case "reading":
      return {
        backgroundColor: "#FFEC43"

      };
    default:
      return {
        backgroundColor: "red"

      };
  }
};
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
    max-width: var(--width);
   width: 100%;
   padding: 0 130px;
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   gap: 1rem; /* 16px */
`;
export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
   width:100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  position: relative;
  background:white;
  cursor:pointer
`;

export const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  font-weight: bold;
`;

export const Text = styled.p`
  margin: 5px 0;
`;
export const SectionItem = styled.div`
  border:1px solid red;
  display:flex;
  align-items:center;
  justify-content:space-between
 `;
export const NewBadge = styled.div`
  width:fit-content;
  color: white;
  padding: 2px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  height:fit-content;
  ${({ type }) => getType(type)}

`;
Card.ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
   `;
Card.BtnDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
border-radius:4px;
background: var(--deleteColor);

  `;
Card.BtnEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius:4px;
  background: #6200EE;
  margin-top:2px

  `;
export const Icons = styled.div``;
Icons.Edit = styled(edit)``;
Icons.Delete = styled(deleteIcon)``;
export const ModalContainer = styled.div`
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  border:1px solid red
  width: 32px;
  height: 66px;
  position: absolute;
  top:16px;
  width: ${(props) => (props.visible ? '0px' : '32px')};
   right: ${(props) => (props.visible ? '0px' : '-32px')};
   transition: opacity 0.3s ease;

`;