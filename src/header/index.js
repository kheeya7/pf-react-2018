import React from 'react'
import MainImage from '../../dist/assets/intro-image.jpg'
import { Button, Col, Row } from 'react-bootstrap'

export default class HeaderView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            viewMode: 'default',
        }

        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick() {
        if (this.state.viewMode === 'about') {
            this.setState({
                viewMode: 'default',
            })
        } else if (this.state.viewMode === 'default') {
            this.setState({
                viewMode: 'about',
            })
        }
    }

    render() {
        if (this.state.viewMode === 'about') {
            return (
                <div>
                    <Row className="intro-container">
                        <div className="intro-text-wrap">
                            <h1 className="intro-title">Hello there!</h1>
                            <div className="intro-selfintro">I am Kate Sohng, a recent UW graduate who majored in Interactive Media Design. Through the course, I have studied UX and UI design, Human-Computer Interaction, Human Centered Design, speculative media design. Along with the lessons, I have studied web and iOS application programming by myself as I enjoy to write code for my projects. If you are looking for someone who loves to design and code at the same time, please take a look at my projects down below and let's talk if you want to know me further.</div>
                            <Button className="button" onClick={this.onButtonClick}>Back</Button>
                        </div>
                        <div className="intro-image-container">
                            <img src={MainImage} className="img-responsive"></img>
                        </div>
                    </Row>
                </div >
            )
        }
        return (
            <div>
                <Row className="intro-container">
                    <div className="intro-text-wrap">
                        <h1 className="intro-title">UI/UX Designer &amp;<br />
                            Front-end Developer</h1>
                        <div className="intro-name"> Kate Sohng </div>
                        <div className="intro-selfintro">I'm Kate Sohng. I love to code and design that bring critical ideas into real world issues.</div>
                        <Button className="button" onClick={this.onButtonClick}>About Kate</Button>
                    </div>
                    <div className="intro-image-container">
                        <img src={MainImage} className="img-responsive"></img>
                    </div>
                </Row>
            </div >
        )
    }
}