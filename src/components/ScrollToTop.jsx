import styles from './ScrollToTop.module.css'

export default function ScrollToTop() {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Til toppen
      </button>
    </div>
  )
}
