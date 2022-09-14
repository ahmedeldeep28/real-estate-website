import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import Card from 'react-bootstrap/Card';
import { MdBed, MdOutlineBathtub, MdLocationOn } from "react-icons/md";
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import DefaultImage from '../public/house.jpg';

function PropertyCard({ property }) {
    let { title, price, coverPhoto,purpose, rooms, baths, externalID, rentFrequency, area, location } = property
    return (
        <Card className="PropertyCard border-0 overflow-hidden rounded-3">
            <div className="card-head">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src={coverPhoto ? coverPhoto.url : DefaultImage}
                    placeholder="blur"
                    blurDataURL={coverPhoto ? coverPhoto.url : DefaultImage}
                    alt="Property image"
                />
                <div className={`${purpose === "for-sale" ? "bg-primary " : "bg-danger "} text-white rounded-pill  px-3 py-2 position-absolute`}>{purpose}</div>
            </div>
            <Card.Body>
                <Card.Title className="text-capitalize" as={"h3"}>
                    <Link href={`/property/${externalID}`}>
                        <a>
                            {title.substring(0, 50)}...
                        </a>
                    </Link>
                </Card.Title>
                <p>
                    <MdLocationOn /> {location[2].name}
                </p>
                <span className="bg-success text-white py-2 px-3 mt-2  rounded-pill d-inline-block">
                    ${millify(price)}{rentFrequency && `/${rentFrequency}`}
                </span>
            </Card.Body>
            <Card.Footer className="bg-white py-3 px-4">
                <ul className="ul_unstyle box-between">
                    <li>
                        <BsGridFill className="fs-5 me-1" /> {millify(area)}  Sqft
                    </li>
                    <li>
                        <MdBed className="fs-5 me-1" /> {rooms} bed
                    </li>
                    <li>
                        <MdOutlineBathtub className="fs-5 me-1" /> {baths} Bath
                    </li>
                </ul>
            </Card.Footer>

        </Card>
    )
}

export default PropertyCard