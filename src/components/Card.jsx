import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 19px 0px #000000;
  box-shadow: 5px 5px 19px 0px #000000;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;

  @media (max-width: 48rem) {
    padding: 2rem 1rem;
    font-size: 1.2rem;
  }

`;

export default Card;
