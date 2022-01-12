import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  height: 2em;
  width: 2em;
  margin-bottom: 1em !important;
  background-color: lightblue !important;
  right: 20px !important;
  left: 95% !important;
`;
