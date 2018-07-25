import React from 'react'
import { Button } from 'react-bootstrap'

export default class PostingDetail extends React.Component {
    constructor(props) {
        super(props)

        this.buttonClicked = this.buttonClicked.bind(this)
    }

    buttonClicked() {
        this.props.selectProjectById(null)
    }

    render() {
        return (
            <div>
                <div>
                    Selected Project Id={this.props.selectedProjectId}
                </div>
                <Button onClick={this.buttonClicked}>
                    Go back
                </Button>
            </div>
        )
    }
}