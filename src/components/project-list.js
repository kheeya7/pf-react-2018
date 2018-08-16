import React from 'react'
import _ from 'underscore'
import ProjectPreview from './project-preview'
import tempProjectData from '../shared/temp-project-data.json'
import { Row } from 'react-bootstrap'

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)

        this.itemClicked = this.itemClicked.bind(this)
    }

    itemClicked(e) {
        console.log(e.currentTarget.id)

        this.props.selectProjectById(e.currentTarget.id)
    }

    getNumberOfFilteredProjects() {
        if (this.props.selectedTags.length == 0) {
            return tempProjectData.length
        }

        let count = 0;

        for (var i = 0; i < tempProjectData.length; i++) {
            const project = tempProjectData[i]

            const intersection = _.intersection(project.tags, this.props.selectedTags)

            if (intersection.length > 0) {
                count += 1
            }
        }

        return count;
    }

    render() {
        return (
            <div>
                <Row>
                    {this.getNumberOfFilteredProjects() + " project(s) meet the filter criteria."}
                </Row>
                <Row style={{ height: '240px' }}>
                    {
                        tempProjectData.map((projectItem) => {
                            return (
                                <div
                                    key={projectItem.id}
                                    onClick={this.itemClicked}
                                    id={projectItem.id}
                                    style={{ display: 'inline-block', height: '240px' }}
                                >
                                    <ProjectPreview
                                        title={projectItem.title}
                                        subtitle={projectItem.subtitle}
                                        imageUrl={projectItem.imageUrl}
                                        ProjectDescription={projectItem.projectDescription}
                                        projectTags={projectItem.tags}
                                        sectionTitle={projectItem.sectionTitle}
                                        sectionSubtitle={projectItem.sectionSubtitle}
                                        paragraph={projectItem.paragraph}
                                        selectedTags={this.props.selectedTags}
                                    />
                                </div>
                            )
                        })
                    }
                </Row>
                {/* <Button onClick={this.buttonClicked} id='proj1'>Project One</Button>
                <Button onClick={this.buttonClicked} id='proj2'>Project Two</Button>
                <Button onClick={this.buttonClicked} id='proj3'>Project Three</Button> */}
            </div>
        )
    }
}