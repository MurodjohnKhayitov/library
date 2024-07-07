import React from "react";
import { Container, Icon, Label, Wrapper } from "./style";

export const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  ml,
  mr,
  mt,
  mb,
  pl,
  onChange,
  placeholder,
  defaultValue,
  name,
  value
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
      {/* <Icon>{children}</Icon> */}
      <Label className="smSize">{name}</Label>
      <Container
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        pl={pl}
        type={type}
        height={height}
        width={width}
        onClick={onClick}
        name={name}
      />
    </Wrapper>
  );
};
export default Input;
