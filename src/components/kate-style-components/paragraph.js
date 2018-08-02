import React from 'react'

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