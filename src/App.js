import React from 'react'
import './app.css'
import Sidebar from './Commponents/SideBar Section/Sidebar'
import Body from './Commponents/Body Section/Body'

const App = () => {
  return (
    <div className="container">
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App
