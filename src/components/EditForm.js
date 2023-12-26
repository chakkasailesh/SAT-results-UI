import React, { useState } from 'react'
import axios from 'axios'

const EditForm = () => {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const [result, setResult] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    if (name === '') setResult('Name is required')
    else if (score === '') setResult('Score is required')
    else if (score < 0 || score > 100)
      setResult('Score should be between 0 and 100')
    else
      axios
        .put(`http://localhost:8081/api/results`, {
          name,
          satScore: score,
        })
        .then(() => setResult('Score updated successfully'))
        .catch((err) => {
          console.error(err)
          setResult('Failed to update the score')
        })
    setName('')
    setScore('')
  }
  return (
    <div>
      <form>
        <label htmlFor="name" style={{ marginRight: '6px' }}>
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
        <label htmlFor="score" style={{ marginInline: '6px' }}>
          Score:
        </label>
        <input
          type="number"
          name="score"
          id="score"
          style={{ padding: '4px' }}
          value={score}
          onChange={(e) => {
            setScore(e.target.value)
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
          Update Score
        </button>
      </form>
      <p>{result}</p>
    </div>
  )
}

export default EditForm
