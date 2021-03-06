import styled from 'styled-components';
import cellphone from '../../assets/images/hand_phone.png';
import AnimatedShapes from '../Animations/AnimatedShapes';
import Button from '../Button';

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  position: relative;
`;

const Left = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 85%;
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 840px) {
    img {
      width: 100%;
      bottom: 25%;
      left: -15%;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 3rem;

  @media (max-width: 840px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 0%;
  }
`;

const Wrapper = styled.div`
  max-width: 55.5rem;

  @media (max-width: 840px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

const Subtitle = styled.h2`
  font-weight: lighter;
  font-style: italic;
  color: #333;
  margin-bottom: 3rem;
`;

const Description = styled.div`
  color: #555;

  p {
    margin-bottom: 1rem;
  }

  p:last-child {
    margin-bottom: 3rem;
  }
`;

const ClippedShape = styled.div`
  clip-path: polygon(0 0, 54% 0, 36% 100%, 0% 100%);
  background-color: pink;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const FeaturesPage = () => (
  <Container id='page_features'>
    <Left>
      <img src={cellphone} alt='hand holding a phone' />
    </Left>

    <Right>
      <Wrapper>
        <Title>good design</Title>
        <Subtitle>Lorem ipsum dolor sit amet</Subtitle>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            esse laboriosam veniam! Delectus, molestiae. Atque minima voluptas
            necessitatibus saepe assumenda.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            esse laboriosam veniam! Delectus, molestiae. Atque minima voluptas
            necessitatibus saepe assumenda.
          </p>
        </Description>
        <Button>learn more</Button>
      </Wrapper>
    </Right>

    <ClippedShape />
    <AnimatedShapes />
  </Container>
);

export default FeaturesPage;
