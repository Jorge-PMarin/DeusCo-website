import styled from 'styled-components';
import { FaChessKnight } from 'react-icons/fa';

const Nav = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  padding: 0 1rem;
  height: 6rem;
`;

const Logo = styled.div`
  width: 20%;
  font-size: 2.3rem;
  font-weight: 700;
  text-decoration: underline crimson;
`;

const Menu = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuLink = styled.li`
  text-transform: capitalize;
  color: #616060;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: crimson;
    color: #fff;
  }
`;

const Wrapper = styled.div`
  width: 40%;
  text-align: right;

  button {
    background-color: crimson;
    border: 0.2rem solid #fff;
    font-size: inherit;
    color: #fff;
    padding: 0.4em 0.8em;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>
      <FaChessKnight />
      Deus Co.
    </Logo>
    <Menu>
      <MenuLink>home</MenuLink>
      <MenuLink>features</MenuLink>
      <MenuLink>services</MenuLink>
      <MenuLink>prices</MenuLink>
      <MenuLink>contact</MenuLink>
    </Menu>
    <Wrapper>
      <button>join today</button>
    </Wrapper>
  </Nav>
);

export default Navbar;
