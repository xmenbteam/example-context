import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ primary, theme }) =>
    primary ? theme.primary : theme.secondary};
  color: ${({ primary, theme }) => (primary ? theme.secondary : theme.primary)};
`;
