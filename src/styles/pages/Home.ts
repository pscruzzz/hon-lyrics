import styled, { css } from 'styled-components'

import { shade, lighten } from 'polished'

interface IContainerProps {
  backgroundColor: string
}

export const Container = styled.div<IContainerProps>`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props =>
    css`
      background: linear-gradient(
        to bottom,
        ${shade(0.7, props.backgroundColor)},
        #0d0d0d
      );
    `}

  .main {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 90%;
    max-width: 1440px;
  }

  header,
  footer {
    font-weight: 300;
    ${props =>
      css`
        background: -webkit-linear-gradient(
          right,
          #f2c3a7,
          ${lighten(0.3, props.backgroundColor)} 70%
        );
      `}
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

interface ILeftSideProps {
  color: string
}

export const LeftSide = styled.div<ILeftSideProps>`
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

        ${props =>
          css`
            background: -webkit-linear-gradient(
              right,
              #f2c3a7,
              ${lighten(0.3, props.color)} 70%
            );
          `}
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .glasses {
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
  }

  > span {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 10;
    transition: all 0.5s linear;

    ${props =>
      css`
        background: -webkit-linear-gradient(
          right,
          ${shade(0.2, props.color)},
          ${lighten(0.3, props.color)} 70%
        );
      `}
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

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

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80vh;

  > div + div {
    margin-top: 8%;
  }

  .track {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    padding: 2%;
    border-radius: 1rem;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    );

    -webkit-transition: background-position 1s ease-out;
    -moz-transition: background-position 1s ease-out;
    -o-transition: background-position 1s ease-out;
    transition: background-position 1s ease-out;

    &:hover {
      background-position: 200px;
    }

    .upper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .divider {
      width: 100%;
      height: 1px;
      background: #fff;
    }

    .downer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
    }
  }
`

interface ISongTitleProps {
  color: string
}

export const SongTitle = styled.h4<ISongTitleProps>`
  font-weight: 300;
  ${props =>
    css`
      background: -webkit-linear-gradient(right, #f2c3a7, ${props.color} 70%);
    `}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s linear;
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
