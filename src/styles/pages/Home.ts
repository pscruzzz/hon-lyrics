import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  .main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
    max-width: 1440px;
  }

  header,
  footer {
    font-weight: 300;
  }
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 50%;
  position: relative;
  flex: 1;
  nav {
    width: 100%;
    z-index: 5;
    transition: 0.5s all linear;
    margin: 10px 0px;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 300;
        font-size: 2.2rem;
      }
    }
  }

  .glasses {
    transform-style: preserve-3d;
    width: 100%;
    transition: linear 0.1s all;
    z-index: 8;

    .first {
      position: absolute;
      left: 0%;
      border-radius: 2rem 0rem 0rem 2rem;
      background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.3)
      );
    }
    .second {
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.2)
      );
    }
    .third {
      border-radius: 0rem 2rem 2rem 0rem;
      position: absolute;
      right: 0%;
      background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1)
      );
    }
  }

  > span {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 10;
    transition: all 0.5s linear;

    h1 {
      font-weight: 300;
      text-align: center;
      transition: all 0.2s linear;
    }

    h4 {
      font-weight: 300;
      text-align: center;
      transition: all 0.2s linear;
    }
  }
`

export const ImageContainer = styled.div`
  height: 80vh;
  position: relative;
  transform-style: preserve-3d;

  transition: transform 0.2s linear;

  z-index: 1;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }
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

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`
