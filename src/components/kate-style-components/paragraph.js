import React from 'react'
import PropTypes from 'prop-types'

export function Paragraph(props) {
    const paragraphStyle = {
        margin: "12px",
        fontSize: "15px",
        textAlign: "left",
    }

    return (
        <p style={paragraphStyle}>{props.text}</p>
    )
}

Paragraph.propTypes = {
    text: PropTypes.string,
}

Paragraph.defaultProps = {
    text: '',
}