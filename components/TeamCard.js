import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function TeamCard({ image, name, job }) {
    return (
        <div className='cardTeam'>
            <div className="cardTeam_head mb-3">
                <Image
                    width="100%" height="100%" layout="fill" objectFit="cover"
                    src={`/${image}`}
                    placeholder="blur"
                    blurDataURL={`/${image}`}
                    alt="team card image"
                />
                <div className="cardTeam_socail box-center">
                    <ul className='ul_unstyle d-flex'>
                        <li className="me-3">
                            <Link href="/">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li className="me-3">
                            <Link href="/">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <FaInstagram />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cardTeam_info text-center">
                <h4 className="mb-1">{name}</h4>
                <p>{job}</p>
            </div>

        </div>
    )
}

export default TeamCard