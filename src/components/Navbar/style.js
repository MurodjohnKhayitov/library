import styled from "styled-components";
import { ReactComponent as search } from "../../assets/search.svg";
import { ReactComponent as notif } from "../../assets/notif.svg";
import { ReactComponent as love } from "../../assets/profile_photo.svg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavbarWrapper = styled.div`
  display: flex;
  height: 64px;
  max-width: var(--width);
  font-family: "Monserrant";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
  padding: 0 130px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left:auto
`;
const Image = styled.img`
   max-height: 36px;
  width: 150px;
`;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;
const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 `;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 `;
const Icons = styled.div``;
Icons.SearchItem = styled(search)``;
Icons.Notification = styled(notif)``;
Icons.Love = styled(love)`
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 4px;
  background: linear-gradient(#e66465, #9198e5);  border-radius: 50%;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00fff5" : "white",
    textDecoration: "none",
    margin: "0 32px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    fontSize: "18px",
  };
};
export { activeStyle, Profile, Container, NavbarSearch, Logo, NavbarWrapper, Icons, Wrapper, Image };
