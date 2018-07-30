import React from 'react'

export default class SubTitle extends React.Component {
    render() {
        const subTitleStyle = {
            margin: "6px",
            fontSize: "18px",
            color: "rgba(0,0,0,0.8)",
        }

        return (
            <h2 style={subTitleStyle}>{this.props.text}</h2>
        )
    }
}