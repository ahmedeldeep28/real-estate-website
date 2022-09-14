import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import PropertyCard from './PropertyCard';

function PropertyList({ PropertyData }) {
    return (
        <Row className="g-3 mt-4">
            {PropertyData.length == 0 &&  <h1 className="text-center p-2">No results found.</h1>}

            {PropertyData.map((property) => {
                return (
                    <Col key={property.id} sm={6} md={4}>
                        <PropertyCard property={property}/>
                    </Col>
                )
            })}
        </Row>
    )
}

export default PropertyList