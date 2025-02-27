import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061df",
        color: "#ffffff",
        border: "none",
      };
    default:
      return {
        border: "1px solid none",
        color: "#FEFEFE",
       };
  }
};

const Container = styled.input`
  display: flex;
  height: ${({ height }) => height || "44px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 6px;
  padding-left: ${({ pl }) => pl || "15px"};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  border: 1px solid #e6e9ec;
  /* ${({ type }) => getType(type)} */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  position: relative;
  width: 100%;

  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;
const Label = styled.div`
text-transform: capitalize;
`;

const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 30px;
`;
export { Container, Wrapper, Icon, Label };
