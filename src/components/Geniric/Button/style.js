import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #6200EE",
        color: "#6200EE",
      };
    case "primary":
      return {
        background: "#6200EE",
        color: "#ffffff",
        border: "none",
      };
    default:
      return {
        border: "1px solid #6200EE",
        color: "#6200EE",
      };
  }
};

const Container = styled.div`
  display: flex;

  font-family: "Monserrat";
  font-style: normal;
  font-weight: 400px;
  font-size: 14px;
  line-height: 20px;

  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "44px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
  border-radius: 6px;
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export { Container };
