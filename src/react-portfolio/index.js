import React from 'react'
import { Grid, Row, Col, BottonToolbar, Button } from 'react-bootstrap'
import HeaderView from './header.js'
import PageContentsView from './page-contents'
import FooterView from './footer.js'


export default class ReactPortfolio extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <HeaderView />
        </Row>
        <Row>
          <PageContentsView />
        </Row>
        <Row>
          <FooterView />
        </Row>
      </Grid>
    )
  }
}
