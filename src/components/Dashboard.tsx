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
          className={activeTab === 'advanced_arithmetic_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_arithmetic_calculations')}
        >
          Advanced Arithmetic Calculations
        </button>
        <button 
          className={activeTab === 'graphing_and_visualization_tools' ? 'active' : ''}
          onClick={() => setActiveTab('graphing_and_visualization_tools')}
        >
          Graphing And Visualization Tools
        </button>
        <button 
          className={activeTab === 'real_time_collaboration_with_users' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_collaboration_with_users')}
        >
          Real Time Collaboration With Users
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

        {activeTab === 'advanced_arithmetic_calculations' && (
          <div className="tab-content">
            <h2>Advanced Arithmetic Calculations</h2>
            <p>Manage your advanced arithmetic calculations here.</p>
          </div>
        )}

        {activeTab === 'graphing_and_visualization_tools' && (
          <div className="tab-content">
            <h2>Graphing and Visualization Tools</h2>
            <p>Manage your graphing and visualization tools here.</p>
          </div>
        )}

        {activeTab === 'real_time_collaboration_with_users' && (
          <div className="tab-content">
            <h2>Real-time Collaboration with Users</h2>
            <p>Manage your real time collaboration with users here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard