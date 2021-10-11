import styled from 'styled-components';

const Button = styled.button`
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: darkblue;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #0505dd;
  }
`;

export default Button;
