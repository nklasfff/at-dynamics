import { useState } from 'react'
import styles from './Menu.module.css'
import { t } from '../translations'

export default function Menu({ onNavigate, language, onLanguageChange }) {
  const [open, setOpen] = useState(false)

  const navigate = (tab) => {
    setOpen(false)
    if (onNavigate) onNavigate(tab)
  }

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div className={styles.panel}>

            {/* ── Language switcher ── */}
            <div className={styles.langSwitcher}>
              <button
                className={`${styles.langBtn} ${language === 'da' ? styles.langActive : ''}`}
                onClick={() => onLanguageChange('da')}
              >
                DA
              </button>
              <span className={styles.langDivider}>|</span>
              <button
                className={`${styles.langBtn} ${language === 'es' ? styles.langActive : ''}`}
                onClick={() => onLanguageChange('es')}
              >
                ES
              </button>
            </div>

            {/* ── Profile ── */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('menuProfileName', language) || 'Anne Thestrup'}</h2>
              <p className={styles.profileText}>
                {t('menuProfileBio', language) || 'Terapeut og grundlægger af AnThes Dynamics. Specialiseret i AnsigtsLøftningsTeknik (ALT), Wim Hof Metoden, kraniosakral terapi, bindevævsmassage, arvævsterapi og organmassage. En praksis bygget på berøring, tilstedeværelse og kroppens medfødte intelligens.'}
              </p>
            </section>

            {/* ── App overview ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>{t('menuExplore', language) || 'Udforsk'}</h3>
              <nav className={styles.nav}>
                <button onClick={() => navigate('home')}>{t('menuHome', language) || 'Hjem'}</button>
                <button onClick={() => navigate('alt')}>{t('menuAlt', language) || 'ALT — Ansigtsbehandling'}</button>
                <button onClick={() => navigate('whm')}>{t('menuWhm', language) || 'Wim Hof — Åndedræt'}</button>
                <button onClick={() => navigate('cranio')}>{t('menuCranio', language) || 'Kraniosakral — Lytning'}</button>
                <button onClick={() => navigate('deeper')}>{t('menuDeeper', language) || 'Dybere — Øvelser & integration'}</button>
              </nav>
            </section>

            {/* ── WHM Instructor ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>{t('menuWhmInstructor', language) || 'Wim Hof Instruktør'}</h3>
              <p className={styles.profileText}>
                {t('menuWhmInstructorText', language) || 'Anne er certificeret Wim Hof Metode-instruktør og afholder løbende kurser og workshops — både i Danmark og internationalt.'}
              </p>
            </section>

            {/* ── Disciplines ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>{t('menuTreatments', language) || 'Behandlinger'}</h3>
              <ul className={styles.list}>
                <li>{t('menuTreatment1', language) || 'AnsigtsLøftningsTeknik (ALT)'}</li>
                <li>{t('menuTreatment2', language) || 'Wim Hof Metoden'}</li>
                <li>{t('menuTreatment3', language) || 'Kraniosakral terapi'}</li>
                <li>{t('menuTreatment4', language) || 'Bindevævsmassage'}</li>
                <li>{t('menuTreatment5', language) || 'Arvævsterapi'}</li>
                <li>{t('menuTreatment6', language) || 'Organmassage'}</li>
              </ul>
            </section>

            {/* ── Privacy ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>{t('menuPrivacy', language) || 'Privatliv & notifikationer'}</h3>
              <p className={styles.smallText}>
                {t('menuPrivacyText', language) || 'Denne app indsamler ingen persondata. Ingen cookies, ingen tracking. Notifikationer kan til- og frakobles i din enheds indstillinger.'}
              </p>
            </section>

            {/* ── Contact ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>{t('menuContact', language) || 'Kontakt'}</h3>
              <p className={styles.smallText}>
                Anne Thestrup
              </p>
              <a
                href="https://annethestrup.dk/da-dk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                annethestrup.dk
              </a>
            </section>

          </div>
        </>
      )}
    </>
  )
}
