import React from 'react'
import _ from 'underscore'
import ProjectPreview from './project-preview'
import tempProjectData from '../shared/temp-project-data.json'
import FilterControl from './filter-control'
import { Row, Col, Button } from 'react-bootstrap'
import { AccentSeparator } from './kate-style-components'

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isFilterOpen: false,
            selectedTags: [],
        }

        this.openFilter = this.openFilter.bind(this)
        this.closeFilter = this.closeFilter.bind(this)
        this.setSelectedTags = this.setSelectedTags.bind(this)
        this.itemClicked = this.itemClicked.bind(this)
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

    itemClicked(e) {
        console.log(e.currentTarget.id)

        //this.props.selectProjectById(e.currentTarget.id)
    }

    getNumberOfFilteredProjects() {
        if (this.state.selectedTags.length == 0) {
            return tempProjectData.length
        }

        let count = 0;

        for (var i = 0; i < tempProjectData.length; i++) {
            const project = tempProjectData[i]

            const intersection = _.intersection(project.tags, this.state.selectedTags)

            if (intersection.length > 0) {
                count += 1
            }
        }

        return count;
    }

    showFilterStatus() {
        if (this.state.selectedTags == 0) {
            return (
                <div>
                    All projects are currently shown. You can filter them out with project keywords!
                </div>

            )
        } else {
            return (
                <div>
                    {"Selected tags: " + this.state.selectedTags.join(' ')}
                </div>
            )
        }
    }

    showFilterCard() {
        return (
            <div className="filter-item-container">
                <div style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '1em', padding: '0 10px' }}>
                    ABOUT PROJECTS
            </div>
                <div style={{ fontSize: '1.2em', marginBottom: '100px', lineHeight: '2em', padding: '0 10px' }}>
                    These are my projects over past few years. You can filter them out by skills and techniques I used in projects.
            </div>
                <Button
                    className="edit-filter-button"
                    onClick={this.openFilter}>
                    Edit Filter
                </Button>
            </div>
        )
    }

    render() {
        return (
            <div className="project-list-content">
                <AccentSeparator
                    separatorCharacter='✻'
                />
                <Row className="project-section-title">
                    Projects 
                </Row>
                <Row>
                    {this.getNumberOfFilteredProjects() + " project(s) meet the filter criteria."}
                </Row>
                <Row>
                    {this.showFilterStatus()}
                </Row>
                <Row>
                    <FilterControl
                        selectedTags={this.state.selectedTags}
                        isFilterOpen={this.state.isFilterOpen}
                        setSelectedTags={this.setSelectedTags}
                        closeFilter={this.closeFilter}
                    />
                    <Col xs={12} sm={6} md={4}>
                        {
                            this.showFilterCard()
                        }
                    </Col>
                    {
                        tempProjectData.map((projectItem) => {
                            return (
                                <Col
                                    xs={12} sm={6} md={4}
                                    key={projectItem.id}
                                    onClick={this.itemClicked}
                                    id={projectItem.id}
                                >
                                    <ProjectPreview
                                        title={projectItem.title}
                                        subtitle={projectItem.subtitle}
                                        imageUrl={projectItem.imageUrl}
                                        role={projectItem.role}
                                        ProjectDescription={projectItem.projectDescription}
                                        projectTags={projectItem.tags}
                                        sectionTitle={projectItem.sectionTitle}
                                        sectionSubtitle={projectItem.sectionSubtitle}
                                        paragraph={projectItem.paragraph}
                                        selectedTags={this.state.selectedTags}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}