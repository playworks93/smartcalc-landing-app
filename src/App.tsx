import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AppLayout from './components/AppLayout'
import Calculator from './components/Calculator'
import UserAuth from './components/UserAuth'
import CalculationHistory from './components/CalculationHistory'
import SuggestionsPanel from './components/SuggestionsPanel'

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
          <li>User Authentication</li>
          <li>Real-time Collaborative Calculations</li>
          <li>Advanced Analytical Tools</li>
          <li>Personalized Suggestions</li>
          <li>Customizable Interface</li>
          <li>History of Calculations</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App