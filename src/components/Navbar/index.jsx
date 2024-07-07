import React, { useState } from "react";
import {
  activeStyle,
  Container,
  NavbarSearch,
  Logo,
  NavbarWrapper,
  Wrapper,
  Image,
  Profile,
  Icons,
} from "./style";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../Geniric/Button";
import { logo } from "../../assets";
import { Input } from "../Geniric";
export const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  
  return (
    <Wrapper className="nocopy">
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Image src={logo} alt="house img" />
          </Logo>
          <NavbarSearch className=" ">
            <Icons.SearchItem />
            <Input
              onChange={({ target: { value } }) => {
                setSearch(value);
              }}
              width={"300px"}
              value={search}
              placeholder={"Search for any training you want "}
              name=" "
            />
          </NavbarSearch>
          <Profile>
            <Icons.Notification />
            <Icons.Love />
          </Profile>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};
