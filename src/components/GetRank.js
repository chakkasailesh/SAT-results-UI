import React, { useState } from 'react'
import axios from 'axios'

const GetRank = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    let param = name.replace(' ', '%20')
    if (name === '') setResult('Name is required')
    else
      axios
        .get(`http://localhost:8081/api/results/rank/${param}`)
        .then((result) => {
          if (result.data === -1) setResult('No student found with given name')
          else setResult(result.data)
        })
        .catch((err) => {
          console.error(err)
          setResult('Failed to get rank')
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
          Get Rank
        </button>
      </form>
      {result && <p>Rank: {result}</p>}
    </div>
  )
}

export default GetRank
