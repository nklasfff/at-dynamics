import { useState } from 'react'
import HomePage from './components/HomePage'
import DeeperPage from './components/DeeperPage'
import AltPage from './components/AltPage'
import WhmPage from './components/WhmPage'
import CranioPage from './components/CranioPage'
import BottomNav from './components/BottomNav'
import ThemeToggle from './components/ThemeToggle'
import Menu from './components/Menu'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [activeTab, setActiveTab] = useState('home')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    window.scrollTo(0, 0)
  }

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'alt': return <AltPage />
      case 'whm': return <WhmPage />
      case 'cranio': return <CranioPage />
      case 'deeper': return <DeeperPage />
      default: return <HomePage activeTab={activeTab} onNavigate={handleTabChange} />
    }
  }

  return (
    <div className="app-shell">
      <Menu onNavigate={handleTabChange} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
