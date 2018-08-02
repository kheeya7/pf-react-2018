import React from 'react'

export default class ProjectDescription extends React.Component {
    render() {
        const ProjectDescriptionStyle = {
            margin: "6px",
            fontSize: "16px",
            color: "rgba(0,0,0,0.8)",
            textAlign: "center",
        }

        return (
            <h4 style={ProjectDescriptionStyle}>{this.props.text}</h4>
        )
    }
}