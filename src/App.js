import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  componentDidMount() {
    axios.get('https://reddit.com/r/aww.json').then(response => {
      console.log(response.data.data.children)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='App'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Cras justo odio</li>
        </ul>
      </div>
    )
  }
}

export default App
