import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 5px 5px 14px 5px rgba(0,0,0,0.29);
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    font-size: 1.2rem;
  }
`;

export default Card;
