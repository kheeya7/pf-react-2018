import React from 'react'
import { Button } from 'react-bootstrap'

export default class FilterControl extends React.Component {
    constructor(props) {
        super(props)

        this.onModalContainerClicked = this.onModalContainerClicked.bind(this)
    }

    onModalContainerClicked(e) {
        if (e.target.id === 'modal-container') {
            this.props.closeFilter()
        }
    }

    render() {
        const displayStyle = this.props.isFilterOpen ? "block" : "none"

        const modalStyle = {
            display: displayStyle,
            position: "fixed",
            zIndex: 10,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.4)",
        }

        const modalContentStyle = {
            backgroundColor: "#fefefe",
            margin: "15% auto",
            padding: "20px",
            border: "1px solid #888",
            width: "50%",
        }

        return (
            <div>
                <Button onClick={this.props.openFilter}>
                    Filter Control
                </Button>
                <div
                    id="modal-container"
                    style={modalStyle}
                    onClick={this.onModalContainerClicked}
                >
                    <div style={modalContentStyle}>
                        <span
                            className="close"
                            onClick={this.props.closeFilter}
                        >
                            &times;
                        </span>
                        <p> Some text in the modal...</p>
                    </div>
                </div>
            </div>
        )
    }
}