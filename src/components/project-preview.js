import React from 'react'
import { Image } from 'react-bootstrap'
import Radium from 'radium'

const itemContainerStyle = {
    border: "1px solid #99AACC",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "4px",
    width: "342px",
    height: "470px",
    margin: "15px",
    ":hover": {
        transform: "translate(-0.2rem, -0.2rem)",
        boxShadow: "0px 1px 2px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60,64,67, 0.15)",
        border: "1px solid rgba(255,122,122,0.5)",
        cursor: "pointer",
    }
}

const titleStyle = {
    fontSize: "1.2em",
}

const subTitleStyle = {
    fontSize: "1em",
    minHeight: "40px",
    paddingTop: "5px"
}

const roleStyle = {
    fontSize: "0.8em",
    color: "teal",
}

const descriptionStyle = {
    fontSize: "14px",
    maxHeight: "80px",
    textOverflow: "ellipsis",
    overflow: "hidden"
}

const tagStyle = {
    fontSize: "0.7em",
    color: "#999",
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: "100%",
    whiteSpace: "nowrap",
    position: 'absolute',
    bottom: '0px'
}

const projectPreviewTextContainerStyle = {
    paddingTop: '10px',
    height: '120px',
    position: 'relative',
}

class ProjectPreview extends React.Component {
    render() {

        const intersection = this.props.projectTags.filter(value => this.props.selectedTags.indexOf(value) !== -1);
        let isVisible = false;

        if (intersection.length > 0 || this.props.selectedTags.length === 0) {
            isVisible = true;
        }

        if (isVisible) {
            return (
                <div style={itemContainerStyle} >
                    <div>
                        <Image src={this.props.imageUrl} responsive />
                        <div style={projectPreviewTextContainerStyle}>
                            <div style={roleStyle}>{this.props.role.toUpperCase()}</div>
                            <div style={titleStyle}>{this.props.title}</div>
                            <div style={subTitleStyle}>{this.props.subtitle}</div>
                            <div style={tagStyle}>{this.props.projectTags.join(', ')}</div>
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