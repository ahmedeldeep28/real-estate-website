import React from 'react'
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { Carousel, Col, Button, Card, Form, Container, Row } from 'react-bootstrap';

import { MdBed, MdOutlineBathtub, MdLocationOn, MdPhone } from "react-icons/md";
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';


function Property({ propertyData }) {
    let { title, price, rooms, baths, area, photos, location, description, amenities, geography, purpose, type, furnishingStatus, coverVideo } = propertyData
    const photoList = photos.map(({ url, id }) => {
        return (
            <Carousel.Item key={id}>
                <Image
                    width={1000} height={500}
                    placeholder="blur"
                    blurDataURL={url}
                    src={url}
                    alt="First slide"
                    sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                />
            </Carousel.Item>
        )
    })
    return (
        <>
        <Head>
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
            <section className="py-3">
                <Container>
                    <Carousel>
                        {photoList}
                    </Carousel>
                </Container>
            </section>
            <div className='property_details'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 className="mb-3">{title}</h2>
                            <p className="fs-6 mb-3">
                                <MdLocationOn className="fs-5" /> 
                                {location.map((el,idx) => {
                                    return  `${idx < 3 ?  el.name + '/' : el.name}` 
                                }) }
                            </p>
                            <ul className="ul_unstyle d-flex">
                                <li className="me-3">
                                    <BsGridFill className="fs-5 me-1" /> {millify(area)}  Sqft
                                </li>
                                <li className="me-3">
                                    <MdBed className="fs-5 me-1" /> {rooms} bed
                                </li>
                                <li>
                                    <MdOutlineBathtub className="fs-5 me-1" /> {baths} Bath
                                </li>
                            </ul>
                        </Col>
                        <Col md={6} className="text-end">
                            <h3 className="mb-3 text-success">${millify(price)}</h3>
                            {coverVideo &&
                                <Link href={coverVideo.url} >
                                    <Button variant="danger">youtub watching</Button>
                                </Link>
                            }

                        </Col>
                    </Row>
                    <Row className="mt-4 py-3 border-top border-bottom">
                        <Col md={6} className="px-4" >
                            <div className="box-between mb-2">
                                <p className="fs-5 mb-0">type:</p>
                                <p className="fs-5 mb-0 fw-bold">{type}</p>
                            </div>
                            <div className="box-between">
                                <p className="fs-5 mb-0">purpose:</p>
                                <p className="fs-5 mb-0 fw-bold">{purpose}</p>
                            </div>
                        </Col>
                        <Col md={6} className="px-4">
                            <div className="box-between">
                                <p className="fs-5 mb-0">furnishing:</p>
                                <p className="fs-5 mb-0">{furnishingStatus ? "Available":"Unavailable"}</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        <h3 className="mb-3">Description</h3>
                        {description}
                    </div>
                    {amenities.length != 0 &&
                        <div className="mt-4">
                            <h3 className="mb-3">Facilites</h3>
                            {amenities.map(({ text, externalGroupID, amenities }) => {
                                return (
                                    <>
                                        <span key={externalGroupID} className="d-inline-block text-white bg-secondary p-2 m-1 rounded">{text}</span>
                                        {amenities.map(el => <span key={el.externalID} className="d-inline-block text-white bg-secondary p-2 m-1 rounded">{el.text}</span>)}
                                    </>
                                )
                            })}
                        </div>
                    }

                    <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3428.8846409430103!2d${geography.lng}!3d${geography.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1652308954227!5m2!1sar!2seg`} className="w-100 mt-5" height="600" allowFullScreen="" loading="lazy" ></iframe>
                    <Row className="mt-4 justify-content-center">
                        <Col md={9}>
                            <Card className="p-3 rounded-4">
                                <h3 className="mb-3">Contact Form</h3>

                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Full Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="Email" placeholder="Enter Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Property


export async function getServerSideProps({ params }) {
    let { id } = params
    const propertyData = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    return {
        props: {
            propertyData,
        }
    }
}