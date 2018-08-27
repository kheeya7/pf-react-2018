import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const footerContainerStyle = {

    backgroundColor: "rgba(0,0,0,0.9)",
    color: "#fff",
}

const footerRowStyle = {
    margin: "20px 0 0 0",
}

const footerCopyrightStyle = {
    margin: "20px 0 0 0",
    paddingTop: "20px",
    textAligh: "center",
    borderTop: '1px solid #fff'
}

const footerColTitleStyle = {
    fontSize: '1.2em',
    fontWeight: '800'
}

const footerColBodyStyle = {
    fintWeight: 'normal',
}

export default class FooterView extends React.Component {
    render() {
        return (
            <div style={footerContainerStyle}>
                <Grid>
                    <Row style={footerRowStyle}>
                        <Col xs={6} md={4} style={footerColTitleStyle}>
                            Links from Kate
                            <Row>
                                magazine? what happened?
                            </Row>
                        </Col>
                        <Col xs={6} md={4} style={footerColTitleStyle}>
                            Place holder text abcd
                        </Col>
                        <Col xs={6} md={4} style={footerColTitleStyle}>
                            Follow me on
                        </Col>
                    </Row>
                    <Row style={footerCopyrightStyle}>
                        @2018 Kate Sohng
                    </Row>
                </Grid>
            </div>
        )
    }
}