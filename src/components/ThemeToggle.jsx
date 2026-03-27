import styles from './ThemeToggle.module.css'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="10" cy="10" r="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="10" y1="16" x2="10" y2="18" />
          <line x1="2" y1="10" x2="4" y2="10" />
          <line x1="16" y1="10" x2="18" y2="10" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14,3 A7,7 0 1,0 14,17 A5,5 0 1,1 14,3" />
        </svg>
      )}
    </button>
  )
}
