import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'basic_arithmetic_functions' ? 'active' : ''}
          onClick={() => setActiveTab('basic_arithmetic_functions')}
        >
          Basic Arithmetic Functions
        </button>
        <button 
          className={activeTab === 'graphing_and_visualization_tools' ? 'active' : ''}
          onClick={() => setActiveTab('graphing_and_visualization_tools')}
        >
          Graphing And Visualization Tools
        </button>
        <button 
          className={activeTab === 'advanced_statistical_analysis' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_statistical_analysis')}
        >
          Advanced Statistical Analysis
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'basic_arithmetic_functions' && (
          <div className="tab-content">
            <h2>Basic Arithmetic Functions</h2>
            <p>Manage your basic arithmetic functions here.</p>
          </div>
        )}

        {activeTab === 'graphing_and_visualization_tools' && (
          <div className="tab-content">
            <h2>Graphing and Visualization Tools</h2>
            <p>Manage your graphing and visualization tools here.</p>
          </div>
        )}

        {activeTab === 'advanced_statistical_analysis' && (
          <div className="tab-content">
            <h2>Advanced Statistical Analysis</h2>
            <p>Manage your advanced statistical analysis here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard