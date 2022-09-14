import React from 'react'
import { Row, Col } from "react-bootstrap";
import BlogCard from './BlogCard';

function BlogList({blogData}) {
  return (
    <Row className="g-3 mt-4">
    {blogData.length == 0 && <h1 className="text-center p-2">No results found.</h1>}
    {blogData.map((blog) => {
        return (
            <Col key={blog.id} sm={6} md={4}>
                <BlogCard {...blog}/>
            </Col>
        )
    })}
</Row>
  )
}

export default BlogList