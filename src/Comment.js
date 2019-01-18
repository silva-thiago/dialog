import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div className='card text-white bg-dark mb-3'>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p className='card-text'>
              {this.props.c.comment}
            </p>
            <footer className='blockquote-footer'>Someone famous in <cite title='Source Title'>User</cite></footer>
          </blockquote>
        </div>
      </div>
    )
  }
}

export default Comment
