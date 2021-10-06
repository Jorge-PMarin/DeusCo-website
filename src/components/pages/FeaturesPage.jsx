import styled from 'styled-components';
import cellphone from '../../assets/images/hand_phone.png';
import AnimatedShapes from '../Animations/AnimatedShapes';

const Container = styled.div`
  height: 100vh;
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
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 55.5rem;
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

const Button = styled.button`
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: darkblue;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
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
  <Container>
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
