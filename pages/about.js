import React from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import BannerPage from './../components/BannerPage';
import Image from 'next/image';
import TeamList from './../components/TeamList';
import { teamData } from './../utils/teamData';

function About({ team }) {
  return (
    <>
      <BannerPage title="about us" desc="Explore from Apartments, builder floors, villas, and more" />
      <Container>
        <Row className="mt-5 g-4">
          <Col md={6}>
            <Image
              src="/about.webp"
              width="100%" height="100%"
              className="rounded-5"
              layout='responsive'
              objectFit='cover'
              alt='about image'
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="about_text ps-0 px-md-5">
              <h2 className="display-5 fw-bold">OUR COMPANY</h2>
              <p>While there are countless Trips out there in charity shops and car boot sales, you can also buy refurbished examples, with today replacement leatherette available in all colors. I love my Trip and use it regularly something so refreshing about its simplicity.</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="d-flex align-items-center">
            <div className="w-100">
              <h2 className="display-5 fw-bold">Frequently Ask</h2>
              <Accordion className="mt-5" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Adieus who direct esteem </Accordion.Header>
                  <Accordion.Body>
                    Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Who direct esteem It esteems?</Accordion.Header>
                  <Accordion.Body>
                    Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Duis consectetur feugiat auctor?</Accordion.Header>
                  <Accordion.Body>
                    Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                <Accordion.Header>Who direct esteem It esteems?</Accordion.Header>
                  <Accordion.Body>
                    Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col md={6} className="ps-0 ps-md-5">
            <Image
              src="/ask.png"
              width="100%" height="100%"
              className="rounded-5"
              layout='responsive'
              objectFit='cover'
              alt='about image'
            />
          </Col>
        </Row>
      </Container>
      <section className='py-5 mt-5 bg-light'>
        <Container>
          <div className="text-center">
            <h2 className="displa h1 fw-bold text-capitalize">Our Agents</h2>
          </div>
          <TeamList teamData={team} />
        </Container>
      </section>
    </>
  )
}

export default About


export async function getStaticProps() {
  const team = teamData;
  return {
    props: {
      team,
    }
  }
} 