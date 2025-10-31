import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import HistoryComponent from './components/HistoryComponent'
import AnalyticsComponent from './components/AnalyticsComponent'
import SettingsComponent from './components/SettingsComponent'

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
          <p className="tagline">Your Intelligent Calculation Companion</p>
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
          <li>Advanced Calculation Functions</li>
          <li>Smart Analytics & Visualizations</li>
          <li>Collaboration Tools for Sharing Results</li>
          <li>History of Calculations & Favorites</li>
          <li>Customizable User Interface</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App