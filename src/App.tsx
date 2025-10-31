import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import NumericKeypad from './components/NumericKeypad'
import GraphingComponent from './components/GraphingComponent'
import UserAnalyticsDashboard from './components/UserAnalyticsDashboard'
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
          <li>Advanced Arithmetic Calculations</li>
          <li>Graphing and Visualization Tools</li>
          <li>Real-time Collaboration with Users</li>
          <li>Data Export and Import Capabilities</li>
          <li>User Analytics Dashboard</li>
          <li>Custom Formula and Equation Storage</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App