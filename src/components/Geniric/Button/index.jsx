import React from "react";
import { Container } from "./style";

export const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  ml,
  mr,
  mt,
  mb,
}) => {
  return (
    <Container
      className="nocopy"
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      type={type}
      height={height}
      width={width}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};
export default Button;
