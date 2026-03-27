import { useState } from 'react'
import HomePage from './components/HomePage'
import DeeperPage from './components/DeeperPage'
import BottomNav from './components/BottomNav'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [activeTab, setActiveTab] = useState('home')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <div className="app-shell">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {activeTab === 'deeper' ? (
        <DeeperPage />
      ) : (
        <HomePage activeTab={activeTab} onNavigate={setActiveTab} />
      )}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
