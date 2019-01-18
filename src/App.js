import React, { Component } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

import Comments from './Comments'
import NewComment from './NewComment'
import './scss/App.css'

class App extends Component {
  state = {
    comments: [
      'Comment 1',
      'Comment 2',
      'Comment 3',
      'Comment 4'
    ]
  }

  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment],
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h3>Dialog</h3>
        </header>
        
        <div className='container'>
          <NewComment sendComment={this.sendComment} />
          <Comments comments={this.state.comments} />
        </div>
      </div>
    )
  }
}

export default App
