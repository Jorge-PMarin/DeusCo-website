import styled from 'styled-components';
import Button from '../Button';
import Card from '../Card';
import Icon from '../../assets/images/play.png';
import ServicesVideo from '../../assets/videos/services.mp4';

const Container = styled.section`
  height: 100vh;
  display: flex;
  position: relative;
`;
const Left = styled.div`
  width: 50%;

  @media (max-width: 48rem) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 80%;

  @media (max-width: 48rem) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 3.3rem;
  margin-bottom: 2rem;
  text-transform: capitalize;

  @media (max-width: 48rem) {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 3rem;
`;

const CardContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;

  div + div {
    margin-left: 2rem;
  }
`;

const PlayIcon = styled.img`
  width: 2.5rem;
  margin-right: 1rem;
`;

const ClippedShape = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 36% 0, 36% 100%, 0% 100%);
  background-color: #f87b90;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;

  @media {
    display: none;
  }
`;

const Video = styled.video`
  width: 85%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border: none;
  border-radius: 0.5rem;
`;

const ServicesPage = () => {
  return (
    <Container>
      <Left>
        <Video autoPlay loop controls src={ServicesVideo} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple proccess to start</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nisi velit veritatis quaerat harum hic et! Harum ducimus
            exercitationem consequatur. Minus repudiandae laudantium nulla,
            sapiente beatae totam delectus cumque, qui deserunt at in tenetur
            dignissimos!
          </Description>
          <CardContainer>
            <Card>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Card>
            <Card>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Card>
            <Card>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Card>
          </CardContainer>
          <Button>
            <PlayIcon src={Icon} alt='play icon' />
            how it works
          </Button>
        </Wrapper>
      </Right>
      <ClippedShape />
    </Container>
  );
};

export default ServicesPage;
