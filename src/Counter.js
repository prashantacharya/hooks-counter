import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>A simple counter application using Hooks.</h2>
      <div className='btn-group'>
        <button className='btn btn-lg btn-outline-danger' onClick={decrement}>-</button>
        <button className='btn btn-lg btn-outline-danger'>{count}</button>
        <button className='btn btn-lg btn-outline-danger' onClick={increment}>+ </button>
      </div>
    </div>
  )
}

export default Counter