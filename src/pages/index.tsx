import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import {
  Container,
  LeftSide,
  ImageContainer,
  Glass,
  RightSide
} from '../styles/pages/Home'

import Prismic from 'prismic-javascript'
// import { RichText } from 'prismic-reactjs'
import { client } from '../utils/prismic-configuration'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import { GetStaticProps } from 'next'
import { FiChevronsRight } from 'react-icons/fi'

interface PropTypes {
  posts: ApiSearchResponse
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'song'),
    { orderings: '[my.post.date desc]' }
  )

  return {
    props: {
      posts
    }
  }
}

const Home: React.FC<PropTypes> = ({ posts }) => {
  console.log(posts)

  useEffect(() => {
    const card: any = document.querySelector('.imageContainerCard')
    const container = document.querySelector('.leftSideClass')
    const spanClass: any = document.querySelector('.spanClass')

    const first: any = document.querySelector('.first')
    const second: any = document.querySelector('.second')
    const third: any = document.querySelector('.third')

    const glasses: any = document.querySelector('.glasses')

    container.addEventListener('mousemove', (e: any) => {
      const xAxis = (window.innerWidth / 2.6 - e.pageX) / 40
      const yAxis = (window.innerHeight / 2 - e.pageY / 1.8) / 40

      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

      glasses.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(50px)`
    })

    container.addEventListener('mouseover', e => {
      spanClass.style.transform = 'translate3d(70%, -50%, 100px)'

      first.style.backdropFilter = 'none'
      second.style.backdropFilter = 'none'
      third.style.backdropFilter = 'none'

      first.style.borderRadius = '2rem'
      second.style.borderRadius = '2rem'
      third.style.borderRadius = '2rem'

      first.style.border = '1px solid transparent'
      second.style.border = '1px solid transparent'
      third.style.border = '1px solid transparent'
    })

    container.addEventListener('mouseleave', (e: any) => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)'
      glasses.style.transform = 'rotateY(0deg) rotateX(0deg)'

      first.style.backdropFilter = 'blur(5px)'
      second.style.backdropFilter = 'blur(5px)'
      third.style.backdropFilter = 'blur(5px)'

      spanClass.style.transform = 'translate3d(50%, -50%, 0px)'

      first.style.borderRadius = '2rem 0rem 0rem 2rem'
      second.style.borderRadius = '0rem'
      third.style.borderRadius = '0rem 2rem 2rem 0rem'

      first.style.border = 'none'
      second.style.border = 'none'
      third.style.border = 'none'
    })
  }, [])

  return (
    <Container>
      <Head>
        <title>by hon.</title>
      </Head>
      <header>
        <p>written by hon.</p>
      </header>
      <div className="main">
        <LeftSide className="leftSideClass">
          <nav className="navBar">
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Contact</li>
            </ul>
          </nav>
          <ImageContainer className="imageContainerCard">
            <img src="https://images.prismic.io/songs/96185bfd-03c5-4ff4-b7e5-359e5878d93d_pexels-ian-beckley-2440061.jpg?auto=compress,format" />
          </ImageContainer>
          <div className="glasses">
            <Glass className="first"></Glass>
            <Glass className="second"></Glass>
            <Glass className="third"></Glass>
          </div>
          <span className="spanClass">
            <h1 className="songs">Songs</h1>
            <h4 className="byHon">by hon.</h4>
          </span>
        </LeftSide>
        <RightSide>
          <div className="track">
            <div className="upper">
              <h4>Wake Up</h4>
              <Link href="./song/Wake-Up">
                <FiChevronsRight size={40} />
              </Link>
            </div>
            <div className="Divider"></div>
            <div className="downer">
              <p className="date">20 fev 2021</p>
            </div>
          </div>
          <div className="track">
            <div className="upper">
              <h4>Wake Up</h4>
              <Link href="./song/Wake-Up">
                <FiChevronsRight size={40} />
              </Link>
            </div>
            <div className="Divider"></div>
            <div className="downer">
              <p className="date">20 fev 2021</p>
            </div>
          </div>
          <div className="track">
            <div className="upper">
              <h4>Wake Up</h4>
              <Link href="./song/Wake-Up">
                <FiChevronsRight size={40} />
              </Link>
            </div>
            <div className="Divider"></div>
            <div className="downer">
              <p className="date">20 fev 2021</p>
            </div>
          </div>
          <div className="track">
            <div className="upper">
              <h4>Wake Up</h4>
              <Link href="./song/Wake-Up">
                <FiChevronsRight size={40} />
              </Link>
            </div>
            <div className="Divider"></div>
            <div className="downer">
              <p className="date">20 fev 2021</p>
            </div>
          </div>
          <div className="track">
            <div className="upper">
              <h4>Wake Up</h4>
              <Link href="./song/Wake-Up">
                <FiChevronsRight size={40} />
              </Link>
            </div>
            <div className="Divider"></div>
            <div className="downer">
              <p className="date">20 fev 2021</p>
            </div>
          </div>
        </RightSide>
      </div>
      <footer>
        <p>developed by Pedro Cruz</p>
      </footer>
    </Container>
  )
}

export default Home
