import React from 'react'
import Head from 'next/head';
import BannerPage from '../../components/BannerPage';
import { Container } from "react-bootstrap";
import BlogList from "../../components/BlogList";
import { blogData } from './../../utils/blogData';

function Blog({ blog }) {
  return (
    <>
    <Head>
      <title>blog</title>
    </Head>
      <BannerPage title="our blog" desc="Explore from Apartments, builder floors, villas, and more" />
      <Container>
        <BlogList blogData={blog} />
      </Container>
    </>
  )
}


export async function getStaticProps() {
  const blog = blogData;
  return {
    props: {
      blog,
    }
  }
}


export default Blog
