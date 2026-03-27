import styles from './BottomNav.module.css'

const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'alt',
    label: 'ALT',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor">
        <ellipse cx="12" cy="11" rx="6" ry="8" />
        <line x1="12" y1="3" x2="12" y2="19" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'whm',
    label: 'Wim Hof',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor">
        <path d="M4,12 Q8,5 12,12 Q16,19 20,12" />
      </svg>
    ),
  },
  {
    id: 'cranio',
    label: 'Kranio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor">
        <path d="M4,13 Q12,9 20,13" />
        <path d="M4,15 Q12,11 20,15" opacity="0.4" />
        <circle cx="12" cy="12" r="1.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'profile',
    label: 'Profil',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor">
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="12" x2="16" y2="12" opacity="0.5" />
        <line x1="4" y1="16" x2="12" y2="16" opacity="0.3" />
      </svg>
    ),
  },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className={styles.icon}>{tab.icon}</span>
            <span className={styles.label}>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
