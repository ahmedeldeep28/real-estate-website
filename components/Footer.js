import React from 'react'
import Link from 'next/link'
import { Col, Container, Row ,Form,InputGroup,Button} from 'react-bootstrap';

function Footer() {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001d38"  d="M0,224L120,213.3C240,203,480,181,720,186.7C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <footer className="py-5 bg-secondary">
            <Container>
                <Row className="g-3">
                    <Col sm={6} md={4}>
                        <h3 className="mb-4 text-white text-capitalize">Besnik</h3>
                        <p className="text-light">While there are countless Trips out there in charity shops and car boot sales, you can also buy refurbished examples, with today replacement </p>
                    </Col>
                    <Col sm={6} md={4}>
                      <Row>
                        <h5 className="mb-4 text-white">Navigation</h5>
                        <Col>
                          <ul className="list-unstyled">
                                <li className="mb-2 text-capitalize">
                                    <Link href="/" className="text-dark d-block">home</Link>
                                </li>
                                <li className="mb-2 text-capitalize">
                                    <Link href="/search?page=1&purpose=for-sale" className="text-dark d-block">Buy</Link>
                                </li>
                                <li className="mb-2 text-capitalize">
                                    <Link href="/search?page=1&purpose=for-rent" className="text-dark d-block">Rent</Link>
                                </li>
                                <li className="mb-2 text-capitalize">
                                    <Link href="/search?page=1" className="text-dark d-block">Properties</Link>
                                </li>
                            </ul>
                             
                        </Col>
                        <Col >
                          <ul className="list-unstyled">
                                <li className="mb-2 text-capitalize">
                                    <Link href="/about" className="text-dark d-block">About Us</Link>
                                </li>
                                <li className="mb-2 text-capitalize">
                                    <Link href="/blog" className="text-dark d-block">blog</Link>
                                </li>
                                <li className="mb-2 text-capitalize">
                                    <Link href="#" className="text-dark d-block">Privacy Policy</Link>
                                </li>
                                <li className="mb-2 text-capitalize">
                                    <Link href="#" className="text-dark d-block">Terms</Link>
                                </li>
                            </ul>
                             
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col sm={6} md={4}>
                        <h5 className="mb-4 text-white">Subscribe newsletter</h5>
                        <p className="text-light">Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
                        <Form action="">
                            <InputGroup className=" mb-3">
                                <Form.Control className="bg-transparent text-light shadow-none"  type="email" placeholder="name@example.com" />
                                <Button type="button">Subscribe </Button>
                            </InputGroup>
                        </Form>
                        <ul className="socail d-flex align-items-center list-unstyled">
                            <li className="socail__item me-3">
                                <Link className="text-dark d-block fs-4"  href="/"> 
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                            </li>
                            <li className="socail__item me-3">
                                <Link className="text-dark d-block fs-4"  href="/"> 
                                           <i className="fa-brands fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="socail__item me-3">
                                <Link className="text-dark d-block fs-4"  href="/"> 
                                           <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>
                            <li className="socail__item me-2 ">
                                <Link className="text-dark d-block fs-4"  href="/"> 
                                           <i className="fa-brands fa-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>

  )
}

export default Footer