import React from 'react'

import {
  ImageContainer,
  Glass,
  Glasses,
  StyledImage
} from '../styles/components/ImageCard'

interface ImageCardProps {
  images: string[]
  selectedImage: number
}

const ImageCard: React.FC<ImageCardProps> = ({ images, selectedImage }) => {
  return (
    <>
      <ImageContainer className="imageCard">
        {images.map((image, index) => {
          return (
            <StyledImage
              src={image}
              key={index}
              style={selectedImage === index ? { opacity: 1 } : { opacity: 0 }}
              className={`image${index}`}
            />
          )
        })}
      </ImageContainer>
      <Glasses className="glasses">
        <Glass className="firstGlass"></Glass>
        <Glass className="secondGlass"></Glass>
        <Glass className="thirdGlass"></Glass>
      </Glasses>
      <span className="mainTitle">
        <h1 className="songs">Songs</h1>
        <h4 className="byHon">by hon.</h4>
      </span>
    </>
  )
}

export default ImageCard
