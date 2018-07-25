import React from 'react'
import JakeTheDog from '../assets/jake.png'
import ReactPortfolio from './react-portfolio'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isJakeVisible: false
    }

    this.showJake = this.showJake.bind(this)
    this.hideJake = this.hideJake.bind(this)
  }

  showJake() {
    this.setState({
      isJakeVisible: true
    })
  }

  hideJake() {
    this.setState({
      isJakeVisible: false
    })
  }

  render() {
    const showJakeComponent = () => {
      if (this.state.isJakeVisible) {
        return (
          <img src={JakeTheDog} onClick={this.hideJake}></img>
        )
      } else {
        return (
          <button onClick={this.showJake}>Show Jake</button>
        )
      }
    }

    return (
      <div>
        {/* <h1 className="tomato-color">
          {this.props.title}
        </h1> */}
        {/* {showJakeComponent()} */}
        <ReactPortfolio />
      </div>
    )
  }
}

export default App
