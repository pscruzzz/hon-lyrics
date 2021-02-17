import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import Prismic from 'prismic-javascript'
// import { RichText } from 'prismic-reactjs'
import { client } from '../utils/prismic-configuration'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import { GetStaticProps } from 'next'

interface PropTypes {
  posts: ApiSearchResponse
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'lyrics_post'),
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

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Songs by hon.</h1>
      <h2>Songs by hon.</h2>
      <h3>Songs by hon.</h3>
      <h4>@hon.music</h4>
      <p>Songs by hon.</p>
    </Container>
  )
}

export default Home
