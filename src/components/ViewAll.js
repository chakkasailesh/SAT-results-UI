import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewAll.css'

const ViewAll = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8081/api/results')
      .then((result) => setData(result.data))
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>SAT Score</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr key={x.name}>
              <td>{x.name}</td>
              <td>{x.address}</td>
              <td>{x.city}</td>
              <td>{x.country}</td>
              <td>{x.pincode}</td>
              <td>{x.satScore}</td>
              <td>{x.passed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewAll
