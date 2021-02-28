import React, { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Container, LeftSide, RightSide, SongTitle } from '../styles/pages/Home'

import Prismic from 'prismic-javascript'
// import { RichText } from 'prismic-reactjs'
import { client } from '../utils/prismic-configuration'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'

import { FiChevronsRight } from 'react-icons/fi'

import listeners from '../hooks/HomeListeners'
import ImageCard from '../components/ImageCard'
import { lighten, shade } from 'polished'

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
  // console.log(posts)

  const [selectedColor, setSelectedColor] = useState('#f28705')
  const [selectedImage, setSelectedImage] = useState(2)

  useEffect(() => {
    listeners()
  }, [])

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
        <RightSide color={selectedColor}>
          {posts.results.map((result, index) => {
            return (
              <Link href={`./song/${result.slugs[0]}`} key={index}>
                <div
                  className={`track${index} track`}
                  onMouseOver={() => handleMouseOverTrack(colors[index], index)}
                >
                  <div className="backgroundTrack"></div>
                  <div className="upper">
                    <SongTitle color={selectedColor}>
                      {result.data.song_title[0].text}
                    </SongTitle>
                    <svg width="0" height="0">
                      <linearGradient
                        id="gradient"
                        x1="100%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop stopColor={selectedColor} offset="0%" />
                        <stop
                          stopColor={lighten(0.5, selectedColor)}
                          offset="100%"
                        />
                      </linearGradient>
                    </svg>

                    <FiChevronsRight
                      size={40}
                      style={{ stroke: 'url(#gradient)' }}
                    />
                  </div>

                  <div className="divider"></div>
                  <div className="downer">
                    <p className="date">{result.data.date}</p>
                  </div>
                </div>
              </Link>
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
