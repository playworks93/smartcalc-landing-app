import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import NumericKeypad from './components/NumericKeypad'
import GraphingArea from './components/GraphingArea'
import HistoryPanel from './components/HistoryPanel'
import CollaborationModal from './components/CollaborationModal'

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
          <p className="tagline">Intelligent Calculations, Seamless Collaboration</p>
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
          <li>Basic Arithmetic Functions</li>
          <li>Graphing and Visualization Tools</li>
          <li>Advanced Statistical Analysis</li>
          <li>Real-time Collaboration with Sharing Capabilities</li>
          <li>User-friendly Interface with Customization Options</li>
          <li>Intelligent Insights and Recommendations</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App