import React from 'react'

export default class Title extends React.Component {
    render() {
        const titleStyle = {
            margin: "12px",
            fontSize: "58px",
            textAlign: "center",
        }

        return (
            <h2 style={titleStyle}>{this.props.text}</h2>
        )
    }
}