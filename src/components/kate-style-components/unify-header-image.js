import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import UnifyProto01 from '../../posting-detail/unify/unify-proto-01.png'
import UnifyProto02 from '../../posting-detail/unify/unify-proto-02.png'
import UnifyProto03 from '../../posting-detail/unify/unify-proto-03.png'

export default class UnifyHeaderImage extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={6} md={4}>
                    <Image src={UnifyProto01} />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={UnifyProto02} />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={UnifyProto03} />
                </Col>
            </Row>
        )
    }
}