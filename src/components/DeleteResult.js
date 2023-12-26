import axios from 'axios'
import React, { useState } from 'react'

const DeleteResult = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    let param = name.replace(' ', '%20')
    if (name === '') setResult('Name is required')
    else
      axios
        .delete(`http://localhost:8081/api/results/${param}`)
        .then(() => setResult('Score deleted successfully'))
        .catch((err) => {
          console.error(err)
          setResult('Failed to delete')
        })
    setName('')
  }
  return (
    <div>
      <form>
        <label htmlFor="name" style={{ marginRight: '4px' }}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          style={{ padding: '4px' }}
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setResult('')
          }}
        />
        <button
          onClick={handleClick}
          style={{
            marginLeft: '10px',
            padding: '4px',
            borderRadius: '9999px',
            cursor: 'pointer',
          }}
        >
          Delete Score
        </button>
      </form>
      {result && <p>{result}</p>}
    </div>
  )
}

export default DeleteResult
