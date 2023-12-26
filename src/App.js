import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Header,
  InsertForm,
  DeleteResult,
  EditForm,
  ViewAll,
  GetRank,
} from './components'

const App = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/insert" element={<InsertForm />} />
          <Route path="/delete" element={<DeleteResult />} />
          <Route path="/edit" element={<EditForm />} />
          <Route path="/view" element={<ViewAll />} />
          <Route path="/rank" element={<GetRank />} />
          <Route path="/" element={<InsertForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
