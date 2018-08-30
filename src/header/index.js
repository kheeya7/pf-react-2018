import React from 'react'
import MainImage from '../../dist/assets/intro-image.jpg'
import { Button, Col, Row } from 'react-bootstrap'
import './index.less'

export default class HeaderView extends React.Component {
    render() {
        return (
            <div>
                <Row className="intro-container">
                    <Col xs={6} md={6}>
                        <img src={MainImage} className="img-responsive"></img>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="intro-text-wrap">
                            <h1 className="intro-title">UI/UX Designer &amp;
                            Front-end Developer</h1>
                            <div className="intro-name"> Kate Sohng </div>
                            <div className="intro-selfintro">Lalala La La Love Song Lalala La La Love Song Lalala La La Love Song Lalala La La Love Song</div>
                            <Button className="button">About Kate</Button>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}