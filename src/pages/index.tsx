import React, { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import {
  Container,
  LeftSide,
  ImageContainer,
  Glass,
  RightSide,
  SongTitle,
  StyledImage
} from '../styles/pages/Home'

import Prismic from 'prismic-javascript'
// import { RichText } from 'prismic-reactjs'
import { client } from '../utils/prismic-configuration'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'

import { FiChevronsRight } from 'react-icons/fi'

import listeners from '../hooks/HomeListeners'
import ImageCard from '../components/ImageCard'

interface PropTypes {
  posts: ApiSearchResponse
  images: string[]
  colors: string[]
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'song'),
    { orderings: '[my.post.date desc]' }
  )

  const images: string[] = posts.results.map(result => {
    const colorArray = result.data.body.filter(types => {
      if (types.slice_type === 'color_theme') {
        return true
      } else {
        return false
      }
    })
    return colorArray[0].items[0].main_image.url
  })

  const colors: string[] = posts.results.map(result => {
    const colorArray = result.data.body.filter(types => {
      if (types.slice_type === 'color_theme') {
        return true
      } else {
        return false
      }
    })

    return colorArray[0].items[0].main_color
  })

  return {
    props: {
      posts,
      images,
      colors
    },
    revalidate: 10
  }
}

const Home: React.FC<PropTypes> = ({ posts, images, colors }) => {
  console.log(posts)

  const [selectedColor, setSelectedColor] = useState('#f28705')
  const [selectedImage, setSelectedImage] = useState(2)

  const handleMouseOverTrack = useCallback((color: string, image: number) => {
    setSelectedColor(color)
    setSelectedImage(image)
  }, [])

  return (
    <Container backgroundColor={selectedColor}>
      <Head>
        <title>by hon.</title>
      </Head>
      <div className="main">
        <LeftSide className="leftSide" color={selectedColor}>
          <nav className="navBar">
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Contact</li>
            </ul>
          </nav>
          <ImageCard images={images} selectedImage={selectedImage} />
        </LeftSide>
        <RightSide>
          {posts.results.map((result, index) => {
            return (
              <div
                className={`track${index} track`}
                key={index}
                onMouseOver={() => handleMouseOverTrack(colors[index], index)}
              >
                <div className="backgroundTrack"></div>
                <div className="upper">
                  <SongTitle color={selectedColor}>
                    {result.data.song_title[0].text}
                  </SongTitle>
                  <Link href={`./song/${result.slugs[0]}`}>
                    <FiChevronsRight size={40} />
                  </Link>
                </div>
                <div className="divider"></div>
                <div className="downer">
                  <p className="date">{result.data.date}</p>
                </div>
              </div>
            )
          })}
        </RightSide>
      </div>
      <footer>
        <p>developed by Pedro Cruz</p>
        <p>written by hon.</p>
      </footer>
    </Container>
  )
}

export default Home
