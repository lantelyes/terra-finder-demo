import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootswatch/dist/solar/bootstrap.min.css'
import SearchBar from './pages/Search'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ToastContainer />
    </div>
  )
}

export default App
