import React from 'react'

export default class AccentSeparator extends React.Component {
    render() {
        const separatorStyle = {
            margin: "0 auto 20px",
            maxWidth: "240px",
            textAlign: "center",
            position: "relative",
            display: "block",
            width: "40%",
            content: " ",
            border: "1px solid #e78b90",
            color: "#e78b90"
        }

        return (
            <div style={separatorStyle}>✻</div>
        )
    }
}