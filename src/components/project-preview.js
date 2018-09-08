import React from 'react'
import { Image } from 'react-bootstrap'
import Radium from 'radium'

class ProjectPreview extends React.Component {
    render() {
        const intersection = this.props.projectTags.filter(value => this.props.selectedTags.indexOf(value) !== -1);
        let isVisible = false;

        if (intersection.length > 0 || this.props.selectedTags.length === 0) {
            isVisible = true;
        }

        if (isVisible) {
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
        } else {
            return (<div />)
        }
    }
}

export default Radium(ProjectPreview)