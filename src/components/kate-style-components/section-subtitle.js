import React from 'react'

export default class SectionSubtitle extends React.Component {
    render() {
        const sectionSubtitleStyle = {
            margin: "12px",
            fontSize: "19px",
            textAlign: "left",
        }

        return (
            <p style={sectionSubtitleStyle}>{this.props.text}</p>
        )
    }
}