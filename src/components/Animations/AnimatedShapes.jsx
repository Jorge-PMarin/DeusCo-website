import styled from 'styled-components';

const Square = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -6rem;
  left: -6rem;
  z-index: -2;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(97vw, 90vh);
    }
  }
`;

const Circle = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 10rem;
  background-color: #ff97af;
  opacity: 0.4;
  position: absolute;
  top: 20rem;
  left: -10rem;
  z-index: -2;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(99vw, 90vh);
    }
  }
`;

const Rectangle = styled.div`
  width: 5rem;
  height: 10rem;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 40rem;
  left: -30rem;
  z-index: -2;
  animation: rectangle 25s linear alternate infinite;

  @keyframes rectangle {
    to {
      transform: translate(112vw, -100vh);
    }
  }
`;

const AnimatedShapes = () => (
  <>
    <Square />
    <Circle />
    <Rectangle />
  </>
);

export default AnimatedShapes;
