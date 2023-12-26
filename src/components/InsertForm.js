import React, { useState } from 'react'
import axios from 'axios'

const InsertForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    satScore: '',
  })
  const [result, setResult] = useState('')
  const validateForm = () => {
    if (formValues.name === '') {
      setResult('Name is required')
      return false
    } else if (formValues.address === '') {
      setResult('Address is required')
      return false
    } else if (formValues.city === '') {
      setResult('City is required')
      return false
    } else if (formValues.country === '') {
      setResult('Country is required')
      return false
    } else if (formValues.pincode === '') {
      setResult('Pincode is required')
      return false
    } else if (formValues.satScore === '') {
      setResult('Score is required')
      return false
    } else if (formValues.satScore < 0 || formValues.satScore > 100) {
      setResult('Score should be between 0 and 100')
      return false
    }
    return true
  }
  const handleClick = (e) => {
    e.preventDefault()
    if (validateForm()) {
      axios
        .post(`http://localhost:8081/api/results`, {
          ...formValues,
        })
        .then(() => setResult('Score inserted successfully'))
        .catch((err) => {
          console.error(err)
          setResult('Failed to insert the score')
        })
      setFormValues({
        name: '',
        address: '',
        city: '',
        country: '',
        pincode: '',
        satScore: '',
      })
    }
  }
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
    setResult('')
  }
  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '5px solid grey',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <div style={{ margin: '10px' }}>
          <label
            htmlFor="name"
            style={{ width: '100px', display: 'inline-block' }}
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            style={{ padding: '4px' }}
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label
            htmlFor="address"
            style={{ width: '100px', display: 'inline-block' }}
          >
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            style={{ padding: '4px' }}
            value={formValues.address}
            onChange={handleChange}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label
            htmlFor="city"
            style={{ width: '100px', display: 'inline-block' }}
          >
            City:
          </label>
          <input
            type="text"
            name="city"
            id="city"
            style={{ padding: '4px' }}
            value={formValues.city}
            onChange={handleChange}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label
            htmlFor="country"
            style={{ width: '100px', display: 'inline-block' }}
          >
            Country:
          </label>
          <input
            type="text"
            name="country"
            id="country"
            style={{ padding: '4px' }}
            value={formValues.country}
            onChange={handleChange}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label
            htmlFor="pincode"
            style={{ width: '100px', display: 'inline-block' }}
          >
            Pincode:
          </label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            style={{ padding: '4px' }}
            value={formValues.pincode}
            onChange={handleChange}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label
            htmlFor="satScore"
            style={{ width: '100px', display: 'inline-block' }}
          >
            Score:
          </label>
          <input
            type="number"
            name="satScore"
            id="satScore"
            style={{ padding: '4px' }}
            value={formValues.satScore}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleClick}
          style={{
            marginInline: '100px',
            padding: '4px',
            borderRadius: '9999px',
            cursor: 'pointer',
          }}
        >
          Insert Score
        </button>
        <p>{result}</p>
      </form>
    </div>
  )
}

export default InsertForm
