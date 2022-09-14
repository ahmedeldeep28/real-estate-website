import React from 'react'
import Link from 'next/link'
import { Container, Row, Col, Button } from "react-bootstrap";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import PropertyList from './../components/PropertyList';
import TeamList from './../components/TeamList';
import BlogList from './../components/BlogList';
import { teamData } from './../utils/teamData';
import { blogDataHome } from './../utils/blogData';

export default function Home({ propertyForSale, propertyForRent,team,blog }) {

  return (
    <>

      <div className="bradcam_area d-flex align-items-center">
        <Container>
          <Row className="box-center">
            <Col md={10} className="text-center">
              <h1 className="display-1 fw-bold text-white">Find Your Best Property</h1>
              <p className="lead text-light">Illum repudiandae ratione facere explicabo. Consequatur dolor optio iusto, quos autem voluptate ea? Sunt laudantium fugiat, mollitia voluptate? Modi blanditiis veniam nesciunt architecto odit voluptatum tempore impedit magnam itaque natus!</p>
            </Col>
          </Row>
        </Container>
      </div>

      <section className='py-5 bg-light'>
        <Container>
          <div className="box-between">
            <div>
              <h2 className="displa h1 fw-bold text-capitalize">real estate for sale</h2>
              <p className="lead">
                Explore from Apartments, builder floors, villas and more
              </p>
            </div>

            <Link href="/search?page=1&purpose=for-sale" >
              <Button variant="secondary">Explore Buying</Button>
            </Link>
          </div>
          <PropertyList PropertyData={propertyForSale} />
        </Container>
      </section>

      <section className='py-5 bg-light'>
        <Container>
          <div className="box-between">
            <div>
              <h2 className="displa h1 fw-bold text-capitalize">real estate for rent</h2>
              <p className="lead">
                Explore from Apartments, builder floors, villas, and more
              </p>
            </div>
            <Link href="/search?page=1&purpose=for-rent" >
              <Button variant="secondary">Explore Renting</Button>
            </Link>
          </div>
          <PropertyList PropertyData={propertyForRent} />
        </Container>
      </section>
      <section className='py-5'>
        <Container>
          <div className="text-center">
              <h2 className="displa h1 fw-bold text-capitalize">Our Agents</h2>
          </div>
          <TeamList teamData={team} />
        </Container>
      </section>

      <section className='py-5 bg-light'>
        <Container className="py-4">
          <div className="text-center">
              <h2 className="displa h1 fw-bold text-capitalize">Our blog</h2>
          </div>
          <BlogList blogData={blog} />
        </Container>
      </section>

    </>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  const team = teamData;
  const blog = blogDataHome;
  
  return {
    props: {
      propertyForSale: propertyForSale.hits,
      propertyForRent: propertyForRent.hits,
      team,
      blog,
    }
  }
} 
