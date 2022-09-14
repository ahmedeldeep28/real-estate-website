import React from 'react'
import BannerPage from '../../components/BannerPage';
import { Container } from "react-bootstrap";
import BlogList from "../../components/BlogList";
import { fetchApi } from "../../utils/fetchApi";

function Blog({ blog }) {
  return (
    <>
      <BannerPage title="our blog" desc="Explore from Apartments, builder floors, villas, and more" />
      <Container>
        <BlogList blogData={blog} />
      </Container>
    </>
  )
}


export async function getStaticProps() {
  const blog = await fetchApi(`http://localhost:3000/api/blog`);
  return {
    props: {
      blog,
    }
  }
}


export default Blog
