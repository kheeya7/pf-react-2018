import React from 'react'
import {
    Button,
    ToggleButtonGroup,
    ToggleButton,
    ButtonToolbar,
    Row
} from 'react-bootstrap'
import allPossibleTags from '../shared/all-possible-tags'


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

        const modalContainerStyle = {
            display: displayStyle,
            position: "fixed",
            zIndex: 15,
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
            border: "1px solid #888",
            width: "50%",
            borderRadius: '8px',
            maxWidth: '450px',
            minWidth: '300px',
        }

        const filterStatusStyle = {
            marginTop: "12px"
        }

        const filterModalHeaderStyle = {
            backgroundColor: 'tomato',
            width: '100%',
            height: '50px',
            color: '#fff',
            padding: '10px',
            fontSize: '16px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
        }

        const filterModalContentStyle = {
            padding: '20px',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px'
        }

        return (
            <div>
                <div
                    id="modal-container"
                    style={modalContainerStyle}
                    onClick={this.onModalContainerClicked}
                >
                    <div style={modalContentStyle}>
                        <div
                            className='filter-modal-header'
                            style={filterModalHeaderStyle}
                        >
                            <span
                                className="close"
                                onClick={this.props.closeFilter}
                            >
                                &times;
                            </span>
                            <div>Choose skill tag(s) you want to see.</div>
                        </div>
                        <div style={filterModalContentStyle}>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}