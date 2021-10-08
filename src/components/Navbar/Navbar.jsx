import styled from 'styled-components';
import { FaChessKnight } from 'react-icons/fa';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 0 1rem;
  height: 6rem;

  @media (min-width: 857px) {
    justify-content: flex-start;
  }

`;

const Logo = styled.div`
  min-width: 13rem;
  font-size: 2.3rem;
  font-weight: 700;
  text-decoration: underline crimson;
`;

const Menu = styled.div`
  height: 100%;
  display: none;
  align-items: center;

  @media (min-width: 857px) {
    display: flex;
  }
`;

const MenuLink = styled.li`
  text-transform: capitalize;
  color: #616060;
  cursor: pointer;
  width: 8rem;
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
