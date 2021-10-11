import styled from 'styled-components';
import PriceCard from '../PriceCard';

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    padding: 3rem;
  }
`;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    width: 95%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    div + div {
      margin-top: 1rem;
    }
  }
`;

const ClippedShape = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(36% 0, 100% 0, 100% 100%, 65% 100%);
  background-color: crimson;
  position: absolute;
  z-index: -1;
`;

const PricesPage = () => (
  <Container id='page_prices'>
    <Wrapper>
      <PriceCard plan='Advanced Plan' price='30' />
      <PriceCard plan='Premium Plan' price='20' />
      <PriceCard plan='Basic Plan' price='10' />
    </Wrapper>
    <ClippedShape />
  </Container>
);

export default PricesPage;
