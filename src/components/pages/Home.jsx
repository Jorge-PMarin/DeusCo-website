import styled from 'styled-components';
import woman from '../../assets/images/woman.png';
import AnimatedShapes from '../Animations/AnimatedShapes';
import Navbar from '../Navbar/Navbar';
import Button from '../Button';

const Container = styled.div`
  height: calc(100vh - 6rem);
  display: flex;
  position: relative;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 840px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 40%;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

const TextContent = styled.main`
  width: 60%;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  text-transform: capitalize;
  padding-bottom: 2rem;
`;

const Text = styled.p`
  padding-bottom: 3rem;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    display: block;
  }
`;

const ContactInfo = styled.div`
  p:first-child {
    text-transform: capitalize;
    font-weight: 700;
    color: #f15f7d;
  }

  p:last-child {
    color: #999;
  }

  @media (max-width: 600px) {
    margin-top: 2em;
  }
`;

const StyledButton = styled(Button)`
  min-width: 14.1rem;
  margin-right: 1rem;
`;

export const ClippedShape = styled.div`
  clip-path: polygon(66% 0, 100% 0, 100% 100%, 54% 100%);
  background-color: crimson;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const Home = () => (
  <>
    <Navbar />
    <Container>
      <Left>
        <TextContent>
          <Title>adventures in creative age</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            consectetur exercitationem quia laudantium error. Ducimus numquam
            aspernatur quidem quas iure.
          </Text>
          <Contact>
            <StyledButton>start a project</StyledButton>
            <ContactInfo>
              <p>call us (012) 345 6789</p>
              <p>For any questions or concern</p>
            </ContactInfo>
          </Contact>
        </TextContent>
      </Left>
      <Right>
        <img src={woman} alt='woman' />
      </Right>
    </Container>
    <ClippedShape />
    <AnimatedShapes />
  </>
);

export default Home;
