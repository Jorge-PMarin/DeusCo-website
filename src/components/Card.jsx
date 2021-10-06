import styled from 'styled-components';

const Card = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 19px 0px #000000;
  box-shadow: 5px 5px 19px 0px #000000;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
`;

export default Card;
