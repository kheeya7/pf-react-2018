import React from 'react'
import HeaderView from './header'
import FooterView from './footer'
import MainView from './main'
import PostingDetail from './posting-detail'
import { ContactMeSection } from './components/contact-me-section'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedProjectId: null
    }

    this.selectProjectById = this.selectProjectById.bind(this)
  }

  selectProjectById(projectId) {
    this.setState({
      selectedProjectId: projectId
    })
  }

  render() {
    if (this.state.selectedProjectId) {
      return (
        <div>
          <HeaderView />
          <PostingDetail
            selectedProjectId={this.state.selectedProjectId}
            selectProjectById={this.selectProjectById} />
          <FooterView />
        </div>
      )
    } else {
      return (
        <div className='portfolio-top-container'>
          <HeaderView />
          <MainView selectProjectById={this.selectProjectById} />
          <ContactMeSection />
          <FooterView />
        </div>
      )
    }
  }
}

export default App
