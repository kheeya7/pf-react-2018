import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './index.less'

export default class FooterView extends React.Component {
    render() {
        return (
            <div className='footer-container'>
                <Grid>
                    <Row className='footer-row'>
                        <Col xs={4} md={4}>
                            <div className='title'>
                                Links from Kate
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a href='/'>Home</a>
                                    </li>
                                    <li>
                                        <a href='/about'>About Me</a>
                                    </li>
                                    <li>
                                        <a href='http://katesohng.com/blog' target='_blank'>Blog </a>
                                    </li>
                                    <li>
                                        <a href='http://katesohng.com/' target='_blank'>Portfolio 2013</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={4} md={4}>
                            <div className='title'>
                                Latest Updates
                            </div>
                            <ul>
                                <li>
                                    <a href='/about'>Blog: an annotated portfolio Unify</a>
                                </li>
                                <li>
                                    <a href='http://katesohng.com/blog' target='_blank'>YouTube: Project Yuri video</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={4} md={4}>
                            <div className='title'>
                                Follow Me on
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a href='https://github.com/kheeya7' className='btn btn-social btn-github btn-simple' target='_blank'>
                                            <i className="fa fa-github"></i> GitHub</a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/in/kate-sohng/' className='btn btn-social btn-linkedin btn-simple' target='_blank'>
                                            <i className="fa fa-linkedin"></i> LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href='http://katesohng.com/blog' className='btn btn-social btn-linkedin btn-simple' target='_blank'><i className="fa fa-instagram"></i> Instagram </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className='copyright'>
                        @2018 Kate Sohng
                    </Row>
                </Grid>
            </div>
        )
    }
}