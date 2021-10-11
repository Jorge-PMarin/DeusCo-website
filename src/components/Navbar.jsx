import styled from 'styled-components';
import { FaChessKnight } from 'react-icons/fa';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 0 1rem;
  height: 6rem;
`;

const Logo = styled.div`
  min-width: 13rem;
  font-size: 2.3rem;
  font-weight: 700;
  text-decoration: underline crimson;
`;

const Menu = styled.div`
  height: 100%;
  min-width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 840px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  text-transform: capitalize;
  color: #616060;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  flex-grow: 1;

  &:hover {
    background-color: crimson;
    color: #fff;
  }
`;

const Wrapper = styled.div`
  width: 40%;
  text-align: right;
`;

const Button = styled.button`
  background-color: crimson;
  border: 0.2rem solid #fff;
  font-size: inherit;
  color: #fff;
  padding: 0.4em 0.8em;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #d83656;
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>
      <FaChessKnight />
      Deus Co.
    </Logo>
    <Menu>
      <MenuLink href='#page_features'>features</MenuLink>
      <MenuLink href='#page_services'>services</MenuLink>
      <MenuLink href='#page_prices'>prices</MenuLink>
      <MenuLink href='#page_contact'>contact</MenuLink>
    </Menu>
    <Wrapper>
      <Button>join today</Button>
    </Wrapper>
  </Nav>
);

export default Navbar;
