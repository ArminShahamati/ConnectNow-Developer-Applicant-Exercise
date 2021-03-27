import React,{useEffect} from 'react'
import Routes from './routes/index'
import './assets/css/global.css'

function App() {
  
  useEffect(() => {
    console.clear();
  }, [])

  return (
    <div className="app-wrapper">
    <Routes />
  </div>
  )
}

export default App
