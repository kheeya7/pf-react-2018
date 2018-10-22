import React from 'react'
import { Button } from 'react-bootstrap'
import Unify from './unify'
import Ecs from './ecs'
import ProjectYuri from './project-yuri'

export default class PostingDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var componentToRender = null;

        if (this.props.selectedProjectId === 'unify') {
            componentToRender = () =>
                <Unify />
        } else if (this.props.selectedProjectId === 'project-yuri') {
            componentToRender = () =>
                <ProjectYuri />
        } else if (this.props.selectedProjectId === 'ecs') {
            componentToRender = () =>
                <Ecs />
        }

        return (
            <div>
                {componentToRender()}
            </div>
        )
    }
}