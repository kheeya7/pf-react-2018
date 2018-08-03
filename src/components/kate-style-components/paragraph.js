import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Paragraph extends React.Component {
    render() {
        const paragraphStyle = {
            margin: "12px",
            fontSize: "15px",
            textAlign: "left",
        }

        return (
            <p style={paragraphStyle}>{this.props.text}</p>
        )
    }
}