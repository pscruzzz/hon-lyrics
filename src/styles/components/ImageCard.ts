import styled from 'styled-components'

export const ImageContainer = styled.div`
  height: 80vh;
  position: relative;
  transform-style: preserve-3d;
  width: 100%;
  transition: transform 0.2s linear;
`

export const Glass = styled.div`
  z-index: 7;
  width: 25%;
  height: 80vh;
  position: absolute;
  bottom: 0%;
  backdrop-filter: blur(5px);
  background-clip: padding-box;
  box-shadow: 5px 5px 20px rgba(46, 54, 68, 0.05);
`

export const Glasses = styled.div`
  transform-style: preserve-3d;
  width: 100%;
  transition: linear 0.1s all;
  z-index: 8;

  .firstGlass {
    position: absolute;
    left: 0%;
    border-radius: 2rem 0rem 0rem 2rem;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.3)
    );
  }
  .secondGlass {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.2)
    );
  }
  .thirdGlass {
    border-radius: 0rem 2rem 2rem 0rem;
    position: absolute;
    right: 0%;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1)
    );
  }
`

interface IStyledImageProps {
  isImageSelected: number
}

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  transition: opacity 0.2s ease-out;
`
