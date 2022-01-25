import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Account from './pages/Account'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="account/:address" element={<Account />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
)
