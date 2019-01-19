import React from 'react'

const Comment = ({c}) => {
  let comment = 'empty'

  if(c && c.comment) {
    comment = c.comment
  }

  return (
    <div className='card text-white bg-dark mb-3'>
      <div className='card-body'>
        <blockquote className='blockquote mb-0'>
          <p className='card-text'>
            {comment}
          </p>
          <footer className='blockquote-footer'>Someone famous in <cite title='Source Title'>User</cite></footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Comment
