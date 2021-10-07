import styled from 'styled-components';
import Button from '../Button';
import MapIcon from '../../assets/images/map.png';
import PhoneIcon from '../../assets/images/phone.png';
import SendIcon from '../../assets/images/send.png';
import ContactBackground from '../../assets/images/floor-tile.png';

const Container = styled.section`
  height: 90vh;
  background-image: url(${ContactBackground});
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 50%;

  h2 {
    font-size: 3.8rem;
    margin-bottom: 4rem;
    text-transform: capitalize;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FormGroupLeft = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 2rem;

  input {
    width: 100%;
    padding: 2rem;
    font-family: inherit;
    border: 0.1rem solid #888;
    border-radius: 0.5rem;
  }

  input + input {
    margin-top: 3rem;
  }
`;

const FormGroupRight = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    flex-grow: 1;
    margin-bottom: 2rem;
    padding: 2rem;
    font-family: inherit;
    border-radius: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  text-align: center;
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  width: 60%;
  margin-left: auto;
`;

const InfoIcon = styled.img`
  width: 2.5rem;
`;

const InfoText = styled.p`
  margin-left: 1.5rem;
`;

const ContactPage = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <h2>
            Questions?
            <br />
            Let's get in touch
          </h2>
          <Form>
            <FormGroupLeft>
              <input type='text' placeholder='Your name' />
              <input type='text' placeholder='Your email' />
              <input type='text' placeholder='Subject' />
            </FormGroupLeft>
            <FormGroupRight>
              <textarea placeholder='Your message' />
              <StyledButton>Send</StyledButton>
            </FormGroupRight>
          </Form>
        </FormContainer>

        <InfoContainer>
          <InfoItem>
            <InfoIcon src={MapIcon} />
            <InfoText>000 Park Avenue St., New York, USA</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon src={PhoneIcon} />
            <InfoText>+1 631 1234 5678</InfoText>
            <InfoText>+1 631 1234 5678</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon src={SendIcon} />
            <InfoText>contact@marin.dev </InfoText>
          </InfoItem>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ContactPage;
