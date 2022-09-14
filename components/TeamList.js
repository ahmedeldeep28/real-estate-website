import React from 'react'
import { Row, Col } from "react-bootstrap";
import TeamCard from './TeamCard';

function TeamList({ teamData }) {
    return (
        <Row className="g-3 mt-4">
            {teamData.length == 0 &&  <h1 className="text-center p-2">No results found.</h1>}
            {teamData.map((team) => {
                return (
                    <Col key={team.id} sm={6} md={3}>
                        <TeamCard {...team}/>
                    </Col>
                )
            })}
        </Row>
    )
}

export default TeamList