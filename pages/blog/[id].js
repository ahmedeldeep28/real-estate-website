import React from 'react'
import Image from 'next/image'

import { fetchApi } from "../../utils/fetchApi";
import { Container, Row,Col } from 'react-bootstrap';

function BlogDetalis({data}) {

    return (
        <Container className="py-4">
            <Row className="box-center">
                <Col md={9}>
                <Image
                    width={1000} height={700}
                    placeholder="blur"
                    blurDataURL={`/${data.image}`}
                    src={`/${data.image}`}
                    alt="First slide"
                    sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                />
                <p className="mt-3 mb-1">{data.date}</p>
                <h1 >{data.title}</h1>
                <p>{data.desc}</p>

                <p>{data.content}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogDetalis;

export async function getStaticPaths() {
    const blog = await fetchApi(`http://localhost:3000/api/blog`);
    const paths = blog.map(el => {
        return {
            params: { id: el.id.toString() }
        }
    })
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
    const [data] = await fetchApi(`http://localhost:3000/api/blog?id=${params.id}`);
    return {
      props: {
        data,
      }
    }
  }