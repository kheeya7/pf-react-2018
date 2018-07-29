import React from 'react'
import {
    Button,
    ToggleButtonGroup,
    ToggleButton,
    ButtonToolbar
} from 'react-bootstrap'
import allPossibleTags from '../shared/all-possible-tags'
import ProjectPreview from './project-preview'

export default class FilterControl extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.onModalContainerClicked = this.onModalContainerClicked.bind(this)
    }

    onModalContainerClicked(e) {
        if (e.target.id === 'modal-container') {
            this.props.closeFilter()
        }
    }

    handleChange(e) {
        this.props.setSelectedTags(e)
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
                <p>{"Selected tags: " + this.props.selectedTags.join(' ')}</p>
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
                        <ButtonToolbar>
                            <ToggleButtonGroup
                                type="checkbox"
                                value={this.props.selectedTags}
                                onChange={this.handleChange}>
                                {
                                    allPossibleTags.map((tag) => {
                                        return (
                                            <ToggleButton
                                                key={tag}
                                                value={tag}>
                                                {tag}
                                            </ToggleButton>
                                        )
                                    })
                                }
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <p>Choose skill tag(s) you want to see.</p>
                    </div>
                </div>
            </div>
        )
    }
}