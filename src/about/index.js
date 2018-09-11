import React from 'react'
import MainImage from '../../dist/assets/intro-image.jpg'
import { Button, Col, Row } from 'react-bootstrap'

export default class AboutView extends React.Component {
    render() {
        return (
            <div>
                <Row className="about-container">
                    <div className="about-text-wrap">
                        <h1 className="about-title">Hello, there!</h1>
                        <div className="about-selfintro">Hello, there! I am Kate Sohng, a recent UW graduate who majored in Interactive Media Design. I have studied user experience and interface design, Human-Computer Interaction, Human Centered Design, speculative media design in the program. Along with the lessons, I have studied web and application (iOS) coding as I love to code. If you are looking for someone who loves to design and code at the same time,please take a look at my projects down below and let's talk if you want to know me further. Thank you for visiting my portfolio. I wish you a good day. </div>
                        <Button className="button">Home</Button>
                    </div>
                    <div className="about-image-container">
                        <img src={MainImage} className="img-responsive"></img>
                    </div>
                </Row>
            </div >
        )
    }
}