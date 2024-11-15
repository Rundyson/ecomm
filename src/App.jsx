import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/homepage/HomePage'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route index element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
