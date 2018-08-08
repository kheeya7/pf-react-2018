import React from 'react'
import ProjectPreview from './project-preview'
import tempProjectData from '../shared/temp-project-data.json'
import { Grid, Row, Col } from 'react-bootstrap'

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)

        this.itemClicked = this.itemClicked.bind(this)
    }

    itemClicked(e) {
        console.log(e.currentTarget.id)

        this.props.selectProjectById(e.currentTarget.id)
    }

    render() {
        return (
            <Grid>
                <Row>
                    {/* <h3>
                        {"Selected Tags: " + this.props.selectedTags.join('*')}
                    </h3> */}
                </Row>
                <Row>
                    {
                        tempProjectData.map((projectItem) => {
                            return (
                                <div
                                    key={projectItem.id}
                                    onClick={this.itemClicked}
                                    id={projectItem.id}
                                    style={{ display: 'inline-block' }}
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
            </Grid>
        )
    }
}