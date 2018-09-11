import React from 'react'
import MainImage from '../../dist/assets/intro-image.jpg'
import { Button, Col, Row } from 'react-bootstrap'

export default class HeaderView extends React.Component {
    render() {
        return (
            <div>
                <Row className="intro-container">
                    <div className="intro-text-wrap">
                        <h1 className="intro-title">UI/UX Designer &amp;
                            Front-end Developer</h1>
                        <div className="intro-name"> Kate Sohng </div>
                        <div className="intro-selfintro">I'm Kate Sohng. I love to code and design that bring critical ideas into real world issues.</div>
                        <Button className="button">About Kate</Button>
                    </div>
                    <div className="intro-image-container">
                        <img src={MainImage} className="img-responsive"></img>
                    </div>
                </Row>
            </div >
        )
    }
}