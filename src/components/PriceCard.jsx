import styled from 'styled-components';
import Button from './Button';

const StyledPriceCard = styled.div`
  width: 31%;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 19px 0px #000000;
  box-shadow: 5px 5px 19px 0px #000000;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 840px) {
    width: 32%;
  }

  @media (max-width: 600px) {
    width: auto;
    padding: 1em;
    font-size: 1.3rem;
  }
`;

const PriceContainer = styled.div`
  margin-bottom: 1.5em;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    margin-bottom: 1em;
  }
`;

const Price = styled.span`
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const Plan = styled.h4`
  border: 0.2rem solid crimson;
  padding: 1rem;
  color: crimson;
  border-radius: 10rem;
  background-color: #fff;
  margin-bottom: 2.5em;
  text-align: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Features = styled.ul`
  li {
    margin-bottom: 2em;
  }

  li:last-child {
    margin-bottom: 2em;
  }

  @media (max-width: 600px) {
    li {
      margin-bottom: 0.5em;
    }

    li:last-child {
      margin-bottom: 1em;
    }
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 1em;
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
