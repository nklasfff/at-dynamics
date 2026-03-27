import styles from './ScrollToTop.module.css'
import { t } from '../translations'

export default function ScrollToTop({ language }) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {t('scrollToTop', language) || '↑ Til toppen'}
      </button>
    </div>
  )
}
