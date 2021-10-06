import styled from 'styled-components';
import woman from '../../assets/images/woman.png';
import AnimatedShapes from '../Animations/AnimatedShapes';
import Navbar from '../Navbar/Navbar';

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
`;

const Right = styled.div`
  width: 40%;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

const TextContent = styled.main`
  width: 60%;
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
`;

const ContactBtn = styled.button`
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: darkblue;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;

const ContactInfo = styled.div`
  p:first-child {
    text-transform: capitalize;
    font-weight: 700;
    color: crimson;
  }

  p:last-child {
    color: #beb8b8;
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
            <ContactBtn>start a project</ContactBtn>
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
