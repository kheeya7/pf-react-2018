import React from 'react'
import _ from 'underscore'
import ProjectPreview from './project-preview'
import tempProjectData from '../shared/temp-project-data.json'
import FilterControl from './filter-control'
import { Row, Button } from 'react-bootstrap'
import { AccentSeparator } from './kate-style-components'

const filterItemContainerStyle = {
    border: "1px solid #99AACC",
    backgroundColor: "#8490E6",
    color: "#fff",
    padding: "30px 15px 20px 15px",
    cursor: "pointer",
    borderRadius: "4px",
    width: "302px",
    height: "430px",
    margin: "10px",
    ":hover": {
        transform: "translate(-0.2rem, -0.2rem)",
        boxShadow: "0px 1px 2px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60,64,67, 0.15)",
        border: "1px solid rgba(255,122,122,0.5)",
        cursor: "pointer",
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
}

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
            <div style={{ float: 'left' }}>
                <div style={filterItemContainerStyle}>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1em' }}>
                        ABOUT PROJECTS
                    </div>
                    <div style={{ fontSize: '1em', marginBottom: '150px' }}>
                        My projects over past few years. You can filter these projects by the skills and techniques that were used in my projects.
                    </div>
                    <Button onClick={this.openFilter}>
                        Edit Filter
                    </Button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <AccentSeparator />
                <Row>
                    {this.getNumberOfFilteredProjects() + " project(s) meet the filter criteria."}
                </Row>
                <Row>
                    {this.showFilterStatus()}
                </Row>
                <FilterControl
                    selectedTags={this.state.selectedTags}
                    isFilterOpen={this.state.isFilterOpen}
                    setSelectedTags={this.setSelectedTags}
                    closeFilter={this.closeFilter}
                />
                {
                    this.showFilterCard()
                }
                {
                    tempProjectData.map((projectItem) => {
                        return (
                            <div
                                key={projectItem.id}
                                onClick={this.itemClicked}
                                id={projectItem.id}
                                style={{ float: 'left' }}
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
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}