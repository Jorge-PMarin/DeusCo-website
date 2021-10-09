import styled from 'styled-components';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Container = styled.div`
  height: 10vh;
  background-color: #111;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 0;
  }
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 2rem;
  text-transform: capitalize;
  cursor: pointer;

  @media (max-width: 480px) {
    margin-left: 0.6em;
  }
`;

const Copyright = styled.span`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    margin-right: 0.6em;
  }
`;

const CopyrightIcon = styled(AiOutlineCopyrightCircle)`
  margin-left: 1rem;
`;

const Footer = () => (
  <Container>
    <List>
      <ListItem>guide</ListItem>
      <ListItem>support</ListItem>
      <ListItem>API</ListItem>
      <ListItem>community</ListItem>
    </List>
    <Copyright>
      Marin Dev <CopyrightIcon />
    </Copyright>
  </Container>
);

export default Footer;
