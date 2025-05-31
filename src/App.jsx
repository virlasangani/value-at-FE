import { useState } from 'react'
import './App.css'
import MainLayout from './components/Layouts/MainLayout'
import { Outlet, RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
