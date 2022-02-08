import styled from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;
