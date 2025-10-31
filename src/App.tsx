import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import HistoryComponent from './components/HistoryComponent'
import AnalyticsComponent from './components/AnalyticsComponent'
import CollaborationComponent from './components/CollaborationComponent'

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
          <p className="tagline">Revolutionizing Your Calculations</p>
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
          <li>User Authentication & Onboarding</li>
          <li>Basic Arithmetic Operations</li>
          <li>Scientific Calculations</li>
          <li>History of Calculations</li>
          <li>Data Analytics & Visualization</li>
          <li>Real-time Collaboration</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App