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

  //small devices
  @media (max-width: 48rem) {
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

  //small devices
  @media (max-width: 48rem) {
    display: none;
  }
`;

const TextContent = styled.main`
  width: 60%;

  //small devices
  @media (max-width: 48rem) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

  }
`;

const Title = styled.h1`
  font-size: 5rem;
  text-transform: capitalize;
  padding-bottom: 2rem;

  //small devices
  @media (max-width: 48rem) {
    font-size: 4rem;
  }
`;

const Text = styled.p`
  padding-bottom: 3rem;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  
   //small devices
   @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  p:first-child {
    text-transform: capitalize;
    font-weight: 700;
    color: crimson;
  }

  p:last-child {
    color: #999;
  }
`;

const StyledButton = styled(Button)`
   //small devices
   @media (max-width: 48rem) {
    margin-bottom: 2rem;
  }
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
