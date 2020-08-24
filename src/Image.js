import React, {Component} from 'react'

const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

class Image extends Component {
  state = {
    imageUrl: ''
  }

  componentDidMount() {
    ipcRenderer.on('image', (event, arg) => {
      this.setState({
        imageUrl: arg
      })
    })
  }

  render() {
    return (
      <img src={this.state.imageUrl}
           alt='img'
           style={{
             maxWidth: '100%'
           }}/>
    )
  }
}

export default Image
