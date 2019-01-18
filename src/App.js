import React, { Component } from 'react'
import logo from './logo.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import { database } from './firebase'

import Comments from './Comments'
import NewComment from './NewComment'
import './scss/App.css'

class App extends Component {
  state = {
    comments: {},
    loading: false
  }

  sendComment = comment => {
    const id = database.ref().child('comments').push().key
    const comments = {}
    comments['comments/' + id] = {
      comment
    }
    database.ref().update(comments)
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        loading: false
      })
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
          <div className='row'>
            <div className='col-lg-12'>
              <NewComment sendComment={this.sendComment} />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <Comments comments={this.state.comments} />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              {
                this.state.loading && <p className='text-center'>Loading messages...</p>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
