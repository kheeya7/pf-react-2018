import React from 'react'
import PropTypes from 'prop-types'

export function ProjectDescription(props) {

    const ProjectDescriptionStyle = {
        margin: "6px",
        fontSize: "16px",
        color: "rgba(0,0,0,0.8)",
        textAlign: "center",
    }

    return (
        <h4 style={ProjectDescriptionStyle}>{props.text}</h4>
    )
}

ProjectDescription.propTypes = {
    text: PropTypes.string,
}

ProjectDescription.propTypes = {
    text: '',
}
