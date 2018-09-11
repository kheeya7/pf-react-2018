import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { AccentSeparator } from '../kate-style-components'
import Icon01 from '../../../dist/assets/researcher-icon.svg'
import Icon02 from '../../../dist/assets/web-dev-icon.svg'
import Icon03 from '../../../dist/assets/graphic-designer-icon.svg'

export function WorkExperience(props) {
    return (
        <div>
            <div className='experience-container'>
                <Row>
                    <h2>
                        Experience
                    </h2>
                </Row>
                <AccentSeparator
                separatorCharacter='♦'
            />
                <Row>
                    <Col xs={12} sm={4} md={4} className="experience-item">
                        <div>
                            <img src={Icon01} className='experience-icon'></img> 
                        </div>
                        <h3 className='experience-role'>
                            UX Researcher &amp; Internship
                        </h3>    
                        <div className='experience-description'>
                        Internship as a user experience researcher at the <a href="http://faculty.washington.edu/michamc/lab/" target="_blank">POC lab</a> at the University of Washington. 
                        </div>
                    </Col>
                    <Col xs={12} sm={4} md={4} className="experience-item">
                        <div>
                            <img src={Icon02} className='experience-icon'></img> 
                        </div>
                        <h3 className='experience-role'>
                            Web Designer
                        </h3>
                        <div className='experience-description'>
                            <a href="http://katesohng.com/portfolio-2015/portfolio_hands_on_bg.html" target="_blank">Web designer</a> at an online e-commerce company.
                        </div>
                    </Col>
                    <Col xs={12} sm={4} md={4} className="experience-item">
                        <div>
                            <img src={Icon03} className='experience-icon'></img> 
                        </div>
                        <h3 className='experience-role'>
                            Graphic Desinger 
                        </h3>
                        <div className='experience-description'>
                            <a href="http://katesohng.com/portfolio-2015/portfolio_posters.html" target="_blank">Graphic designer</a> at e-commerce companies.
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}