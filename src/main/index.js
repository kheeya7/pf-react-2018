import React from 'react'
//import Carousel from '../components/carousel'
import ProjectList from '../components/project-list'
import WorkExperience from '../components/work-experience'
import { Grid } from 'react-bootstrap'
import allPossibleTags from '../shared/all-possible-tags'

export default class MainView extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Grid>
                    <WorkExperience />
                    <ProjectList />
                </Grid>
            </div>
        )
    }
}