import React from 'react'
import Carousel from '../components/carousel'
import ProjectList from '../components/project-list'
import FilterControl from '../components/filter-control'
import allPossibleTags from '../shared/all-possible-tags'

export default class MainView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isFilterOpen: false,
            selectedTags: allPossibleTags,
        }

        this.openFilter = this.openFilter.bind(this)
        this.closeFilter = this.closeFilter.bind(this)
        this.setSelectedTags = this.setSelectedTags.bind(this)
    }

    setSelectedTags(newSelectedTags) {
        this.setState({
            selectedTags: newSelectedTags
        })
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
                    selectedTags={this.state.selectedTags}
                    isFilterOpen={this.state.isFilterOpen}
                    setSelectedTags={this.setSelectedTags}
                    openFilter={this.openFilter}
                    closeFilter={this.closeFilter}
                />
                <ProjectList
                    selectedTags={this.state.selectedTags}
                    selectProjectById={this.props.selectProjectById} />
            </div>
        )
    }
}