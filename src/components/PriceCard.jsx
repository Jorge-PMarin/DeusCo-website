import styled from 'styled-components';
import Button from './Button';

const StyledPriceCard = styled.div`
  width: 30%;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 19px 0px #000000;
  box-shadow: 5px 5px 19px 0px #000000;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 48rem) {
    width: 100%;
    padding: 0rem;
  }
`;

const PriceContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 48rem) {
    margin-bottom: 1rem;

  }
`;

const Price = styled.span`
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 48rem) {
    font-size: 2.5rem;
  }
`;

const Plan = styled.h3`
  border: 0.2rem solid crimson;
  padding: 1rem;
  color: crimson;
  border-radius: 10rem;
  background-color: #fff;
  margin-bottom: 2.5em;

  @media (max-width: 48rem) {
    display: none;
  }
`;

const Features = styled.ul`
  li {
    margin-bottom: 3rem;
  }

  li:last-child {
    margin-bottom: 4rem;
  }

  @media (max-width: 48rem) {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    li {
      margin-bottom: 1rem;
    }

    li:last-child {
      margin-bottom: 1.5rem;
    }
  }
`;

const StyledButton = styled(Button)`
  

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: .7rem;
    margin-bottom: .5rem
  }
`;

const PriceCard = ({ plan, price }) => (
  <StyledPriceCard>
    <PriceContainer>
      $<Price>{price}</Price>/month
    </PriceContainer>
    <Plan>{plan}</Plan>
    <Features>
      <li>200 hand-crafted templates</li>
      <li>200 hand-crafted templates</li>
      <li>200 hand-crafted templates</li>
      <li>200 hand-crafted templates</li>
    </Features>
    <StyledButton>join now</StyledButton>
  </StyledPriceCard>
);

export default PriceCard;
