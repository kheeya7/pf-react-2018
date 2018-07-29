import React from 'react'
import { Image, Col, Row } from 'react-bootstrap'

export default class ProjectPreview extends React.Component {
    render() {
        const itemContainerStyle = {
            border: "1px solid #99AACC",
            padding: "5px",
            cursor: "pointer",
        }

        const titleSylte = {
            fontSize: "20px",
        }

        const subTitleSylte = {
            fontSize: "16px",
            minHeight: "40px",
        }

        const descriptionStyle = {
            fontSize: "14px",
            maxHeight: "80px",
            textOverflow: "ellipsis",
            overflow: "hidden"
        }

        const overlayPanel = {
            position: "relative",
            width: '100%',
            top: "-90px",
            zIndex: "10",
            float: "left",
            padding: "5px",
            background: "rgba(255,255,255,.6)",
        }

        const intersection = this.props.projectTags.filter(value => this.props.selectedTags.indexOf(value) !== -1);
        let isVisible = false;

        if (intersection.length > 0 || this.props.selectedTags.length === 0) {
            isVisible = true;
        }

        if (isVisible) {
            return (
                <Col xs={4}>
                    <div style={itemContainerStyle} >
                        <div>
                            <Image src={this.props.imageUrl} responsive />
                            <div style={overlayPanel}>
                                <div style={titleSylte}>{this.props.title}</div>
                                <div style={subTitleSylte}>{this.props.subtitle}</div>
                            </div>
                        </div>
                    </div>
                </Col>
            )
        } else {
            return (<div />)
        }
    }
}