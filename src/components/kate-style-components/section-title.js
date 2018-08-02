import React from 'react'

export default class SectionTitle extends React.Component {
    render() {
        const sectionTitleStyle = {
            margin: "12px",
            fontSize: "26px",
            textAlign: "center",
        }

        return (
            <h3 style={sectionTitleStyle}>{this.props.text}</h3>
        )
    }
}