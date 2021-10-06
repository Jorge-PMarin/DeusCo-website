import styled from 'styled-components';
import PriceCard from '../PriceCard';

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const ClippedShape = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(37% 0, 100% 0, 100% 100%, 65% 100%);
  background-color: crimson;
  position: absolute;
  z-index: -1;
`;

const PricesPage = () => (
  <Container>
    <Wrapper>
      <PriceCard plan='Advanced Plan' price='30' />
      <PriceCard plan='Premium Plan' price='20' />
      <PriceCard plan='Basic Plan' price='10' />
    </Wrapper>
    <ClippedShape/>
  </Container>
);

export default PricesPage;
