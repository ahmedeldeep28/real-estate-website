import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Card } from 'react-bootstrap';

function BlogCard({ title, desc, image, date,id }) {
    return (
        <Link href={`/blog/${id}`}>
            <Card className="blogCard border-0 shadow">
                <Image
                    width="100%" height="100%" layout="responsive" objectFit="contain"
                    src={`/${image}`}
                    placeholder="blur"
                    blurDataURL={`/${image}`}
                    alt="team card image"
                />
                <Card.Body>
                    <p className="fw-light mb-1">{date}</p>
                    <Card.Title className="text-primary h1">{title}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                </Card.Body>
            </Card>
        </Link>

    )
}

export default BlogCard