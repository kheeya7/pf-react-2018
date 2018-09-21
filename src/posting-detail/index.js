import React from 'react'
import { Button } from 'react-bootstrap'
import ProjectYuri from './project-yuri'
import Unify from './unify'

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
        }

        return (
            <div>
                {componentToRender()}
            </div>
        )
    }
}