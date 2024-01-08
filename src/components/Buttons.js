import styled from "styled-components";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.25rem;
  display: block;
  text-transform: capitalize;
  margin: 1rem auto;
  width: 200px;
`;
export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  border: 1px solid #645cff;
  background: transparent;
  color: #645cff;
`;
