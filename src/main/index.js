import React from 'react'
import Carousel from '../components/carousel'
import ProjectList from '../components/project-list'
import FilterControl from '../components/filter-control'

export default class MainView extends React.Component {
    render() {
        return (
            <div>
                <Carousel />
                <FilterControl />
                <ProjectList selectProjectById={this.props.selectProjectById} />
            </div>
        )
    }
}