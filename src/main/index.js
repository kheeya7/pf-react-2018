import React from 'react'
import { Grid } from 'react-bootstrap'
import ProjectList from '../components/project-list'
import { WorkExperience } from '../components/work-experience'
import { BlogPosts } from '../components/blog-posts'

export default class MainView extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Grid>
                    <WorkExperience />
                    <ProjectList
                        selectProjectById={this.props.selectProjectById}
                    />
                    <BlogPosts />
                </Grid>
            </div>
        )
    }
}