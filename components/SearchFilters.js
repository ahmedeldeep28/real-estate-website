import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import { Row, Form, Spinner, Accordion, FloatingLabel, Col, Dropdown } from 'react-bootstrap';
import { filterData } from '../utils/filterData';
import { baseUrl, fetchApi } from "../utils/fetchApi";


function SearchFilters() {

    const router = useRouter();
    const path = router.pathname;
    const { query } = router;

    let [data, setData] = useState({
        purpose: "",
        rentFrequency: "",
        categoryExternalID: "",
        minPrice: "",
        maxPrice: "",
        areaMax: "",
        roomsMin: "",
        bathsMin: "",
        sort: "",
        locationExternalIDs: "",
    })
    const [searchTerm, setSearchTerm] = useState('');
    const [locationData, setLocationData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (searchTerm !== '') {

            const fetchData = async () => {
                setLoading(true);
                const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
                setLoading(false);
                setLocationData(data.hits);
            };

            fetchData();
        }
    }, [searchTerm]);


    function searchProperties(dataFilter) {
        for (const item in dataFilter) {
            if (dataFilter[item]) {
                query[item] = dataFilter[item]
            }
        }
        query.page = 1

        router.push({ pathname: path, query: query });
        setData(dataFilter)

    }



    let handelChange = (e) => {
        searchProperties({ ...data, [e.target.name]: e.target.value })
    }

    let handelClick = (data, keyword) => {
        searchProperties(data)
        setSearchTerm(keyword)
    }

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>search for Property</Accordion.Header>
                    <Accordion.Body>
                        <Row className="g-2">
                            {filterData.map((filter) => {
                                return (
                                    <Col key={filter.queryName} sm={4} md={3}>
                                        <FloatingLabel controlId="floatingSelect" label={filter.placeholder}>
                                            <Form.Select onChange={handelChange} name={filter.queryName} placeholder={filter.placeholder}  >
                                                {filter.items.map((item) => (
                                                    <option value={item.value} key={item.value}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                )
                            })}
                            <Col sm={4} md={3}>

                                <Dropdown className="h-100" >
                                    <Dropdown.Toggle
                                        className="p-0 bg-transparent border-0 w-100 h-100">
                                        <Form.Control
                                            id="locationExternalIDs"
                                            name="locationExternalIDs"
                                            rol="button"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            list="location"
                                            placeholder="search location" />
                                            <Dropdown.Menu className="px-3" variant="primary">
                                        {loading &&
                                        <>
                                            <Spinner animation="border" size="sm" role="status">
                                                <span className="visually-hidden">Loading...</span> 
                                            </Spinner>
                                            Loading
                                        </>
                                        }
                                        {(locationData.length == 0 && !loading) ? "No results found." :
                                        locationData.map((item) => (
                                            <Dropdown.Item
                                                key={item.externalID}
                                                as="button"
                                                onClick={() => handelClick({ ...data, locationExternalIDs: item.externalID }, item.name)}>
                                                {item.name}
                                            </Dropdown.Item>
                                        ))
                                        }

                                    </Dropdown.Menu>
                                    </Dropdown.Toggle>

                                    
                                </Dropdown>

                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </>
    )
}

export default SearchFilters