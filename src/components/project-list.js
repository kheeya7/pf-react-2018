import React from 'react'
import { Button } from 'react-bootstrap'

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)

        this.buttonClicked = this.buttonClicked.bind(this)
    }

    buttonClicked(e) {
        console.log(e.currentTarget.id)

        this.props.selectProjectById(e.currentTarget.id)
    }

    render() {
        return (
            <div>
                <Button onClick={this.buttonClicked} id='proj1'>Project One</Button>
                <Button onClick={this.buttonClicked} id='proj2'>Project Two</Button>
                <Button onClick={this.buttonClicked} id='proj3'>Project Three</Button>
            </div>
        )
    }
}