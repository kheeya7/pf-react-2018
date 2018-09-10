import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { AccentSeparator } from '../kate-style-components'
import Icon01 from '../../../dist/assets/place-holder-work-exp.png'

export function WorkExperience(props) {
    return (
        <div>
            <AccentSeparator
                separatorCharacter='♦'
            />
            <div className='experience-container'>
                <Row className='experience-section-title'>
                    Experience
                </Row>
                <Row>
                    <Col xs={12} sm={4} md={4}>
                        <div>
                            <img src={Icon01} className='experience-icon'></img> 
                        </div>
                        <div className='experience-role'>
                            UX Researcher &amp; Internship
                        </div>    
                        <div>
                            Internship as a user experience researcher for real world problems.
                        </div>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                        <div>
                            <img src={Icon01} className='experience-icon'></img> 
                        </div>
                        <div className='experience-role'>
                            Web Designer
                        </div>
                        <div>
                            Web/graphic designer for a web development department
                        </div>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                        <div>
                            <img src={Icon01} className='experience-icon'></img> 
                        </div>
                        <div className='experience-role'>
                            Graphic Desinger
                        </div>
                        <div>
                            Graphic designer at hunya.com
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}