import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { AccentSeparator } from '../kate-style-components'

export function WorkExperience(props) {
    return (
        <div>
            <AccentSeparator
                separatorCharacter='♦'
            />
            <div className='work-container'>
                <Row>
                    <Col xs={6} md={4}>
                        <div>
                            UX Researcher &amp; Internship
                            </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div>
                            Web Designer
                            </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div>
                            Graphic Desinger
                            </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}