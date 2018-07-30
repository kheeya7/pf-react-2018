import React from 'react'
import { Button } from 'react-bootstrap'
import ProjectYuri from './project-yuri'
import Unify from './unify'

export default class PostingDetail extends React.Component {
    constructor(props) {
        super(props)

        this.buttonClicked = this.buttonClicked.bind(this)
    }

    buttonClicked() {
        this.props.selectProjectById(null)
    }

    render() {
        var componentToRender = null;

        if (this.props.selectedProjectId === 'unify') {
            componentToRender = () =>
                <Unify />
        } else if (this.props.selectedProjectId === 'project-yuri') {
            componentToRender = () =>
                <ProjectYuri />
        }

        return (
            <div>
                <div>
                    Selected Project Id={this.props.selectedProjectId}
                </div>
                <Button onClick={this.buttonClicked}>
                    Go back
                </Button>
                {componentToRender()}
            </div>
        )
    }
}