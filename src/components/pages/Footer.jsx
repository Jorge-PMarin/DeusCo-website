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
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 2rem;
  text-transform: capitalize;
  cursor: pointer;
`;

const Copyright = styled.span`
display: flex;
align-items: center;
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
