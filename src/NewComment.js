import React, { Component } from 'react'

class NewComment extends Component {
  state = {
    newComment: ''
  }

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  }

  sendComment = () => {
    this.props.sendComment(this.state.newComment)
    this.setState({
      newComment: ''
    })
  }

  clearComment = () => {
    this.setState({
      newComment: ''
    })
  }

  render() {
    return (
      <form className='mt-4'>
        <div className='form-group'>
          <textarea className='form-control form-control-lg' placeholder='Write a message...' rows='3' value={this.state.newComment} onChange={this.handleChange}></textarea>
          <button type='submit' className='btn btn-lg btn-primary mb-2 pull-right mt-1' onClick={this.sendComment}>SEND</button>
          <button type='submit' className='btn btn-lg btn-light mb-2 pull-right mt-1 mr-1' onClick={this.clearComment}>Clear</button>
        </div>
      </form>
    )
  }
}

export default NewComment
