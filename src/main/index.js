import React from 'react'
import Carousel from '../components/carousel'
import ProjectList from '../components/project-list'
import FilterControl from '../components/filter-control'

export default class MainView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isFilterOpen: false,
        }
        this.openFilter = this.openFilter.bind(this)
        this.closeFilter = this.closeFilter.bind(this)
    }

    openFilter() {
        this.setState({
            isFilterOpen: true,
        })
    }

    closeFilter() {
        this.setState({
            isFilterOpen: false,
        })
    }

    render() {
        return (
            <div>
                <Carousel />
                <FilterControl
                    isFilterOpen={this.state.isFilterOpen}
                    openFilter={this.openFilter}
                    closeFilter={this.closeFilter}
                />
                <ProjectList selectProjectById={this.props.selectProjectById} />
            </div>
        )
    }
}