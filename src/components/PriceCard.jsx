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
`;

const PriceContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;

const Plan = styled.h3`
  border: 0.2rem solid crimson;
  padding: 1rem;
  color: crimson;
  border-radius: 10rem;
  background-color: #fff;
  margin-bottom: 2.5em;
`;

const Features = styled.ul`

  li {
    margin-bottom: 3rem;
    list-style-type: circle;
  }

  li:last-child {
    margin-bottom: 4rem;
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
    <Button>join now</Button>
  </StyledPriceCard>
);

export default PriceCard;
