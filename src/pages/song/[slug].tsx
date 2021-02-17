import React from 'react'

import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'

import { client } from '../../utils/prismic-configuration'
import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents'

interface ISongProps {
  uniquePostPost: Document
}

export const getStaticPaths: GetStaticPaths = async () => {
  const songs = await client.query(
    Prismic.Predicates.at('document.type', 'lyrics_post'),
    { orderings: '[my.post.date desc]' }
  )

  const paths = songs.results.map(result => {
    return { params: { slug: result.slugs[0] } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params

  const strinfiedSlug = typeof slug === 'string' ? slug : slug[0]

  const uniquePostPost = await client.getByUID('lyrics_post', strinfiedSlug, {
    lang: 'pt-br'
  })

  return {
    props: {
      uniquePostPost
    }
  }
}

const Song: React.FC<ISongProps> = ({ uniquePostPost }) => {
  const router = useRouter()

  console.log(uniquePostPost)

  return <div>{`hello ${router.query.slug}!`}</div>
}

export default Song
