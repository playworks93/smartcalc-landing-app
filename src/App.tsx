import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Calculator from './components/Calculator'
import HistoryLog from './components/HistoryLog'
import GraphDisplay from './components/GraphDisplay'
import CollaborationPanel from './components/CollaborationPanel'
import Settings from './components/Settings'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>SmartCalc</h1>
          <p className="tagline">Revolutionizing Calculations</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Basic Arithmetic Operations</li>
          <li>Advanced Scientific Functions</li>
          <li>Graphing Capabilities</li>
          <li>Collaborative Calculation Sessions</li>
          <li>History Log for Past Calculations</li>
          <li>Customizable User Interface</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App