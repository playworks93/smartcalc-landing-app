import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import InputPad from './components/InputPad'
import HistoryPanel from './components/HistoryPanel'
import SettingsModal from './components/SettingsModal'
import CollaborationPanel from './components/CollaborationPanel'

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
          <p className="tagline">Empowering Your Numerical Tasks</p>
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
          <li>Basic Calculations</li>
          <li>Advanced Analytical Functions</li>
          <li>Real-Time Collaboration</li>
          <li>Customizable User Interface</li>
          <li>History and Save Functionality</li>
          <li>Data Visualization Tools</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App