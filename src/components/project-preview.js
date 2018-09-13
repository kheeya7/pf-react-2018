import React from 'react'
import { Image } from 'react-bootstrap'
import Radium from 'radium'

class ProjectPreview extends React.Component {
    render() {
        return (
            <div className="project-preview-item">
                <div>
                    <Image src={this.props.imageUrl} responsive />
                    <div className="project-preview-text-container">
                        <div className="role">{this.props.role.toUpperCase()}</div>
                        <div className="title">{this.props.title}</div>
                        <div className="subtitle">{this.props.subtitle}</div>
                        <div className="tags">{this.props.projectTags.join(', ')}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Radium(ProjectPreview)