import React from 'react'

export default class SectionTitle extends React.Component {
    render() {
        const sectionTitleStyle = {
            margin: "65px 0px 10px 0px",
            fontSize: "26px",
            textAlign: "center",
        }

        return (
            <h3
                className="section-title"
                style={sectionTitleStyle}>
                {this.props.text}
            </h3>
        )
    }
}