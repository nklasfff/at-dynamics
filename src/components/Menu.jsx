import { useState } from 'react'
import styles from './Menu.module.css'

export default function Menu({ onNavigate }) {
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

            {/* ── Profile ── */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Anne Thestrup</h2>
              <p className={styles.profileText}>
                Terapeut og grundlægger af AnThes Dynamics. Specialiseret i
                AnsigtsLøftningsTeknik (ALT), Wim Hof Metoden, kraniosakral terapi,
                bindevævsmassage, arvævsterapi og organmassage. En praksis bygget på
                berøring, tilstedeværelse og kroppens medfødte intelligens.
              </p>
            </section>

            {/* ── App overview ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>Udforsk</h3>
              <nav className={styles.nav}>
                <button onClick={() => navigate('home')}>Hjem</button>
                <button onClick={() => navigate('alt')}>ALT — Ansigtsbehandling</button>
                <button onClick={() => navigate('whm')}>Wim Hof — Åndedræt</button>
                <button onClick={() => navigate('cranio')}>Kraniosakral — Lytning</button>
                <button onClick={() => navigate('deeper')}>Dybere — Øvelser &amp; integration</button>
              </nav>
            </section>

            {/* ── WHM Instructor ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>Wim Hof Instruktør</h3>
              <p className={styles.profileText}>
                Anne er certificeret Wim Hof Metode-instruktør og afholder løbende
                kurser og workshops — både i Danmark og internationalt.
              </p>
            </section>

            {/* ── Disciplines ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>Behandlinger</h3>
              <ul className={styles.list}>
                <li>AnsigtsLøftningsTeknik (ALT)</li>
                <li>Wim Hof Metoden</li>
                <li>Kraniosakral terapi</li>
                <li>Bindevævsmassage</li>
                <li>Arvævsterapi</li>
                <li>Organmassage</li>
              </ul>
            </section>

            {/* ── Privacy ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>Privatliv &amp; notifikationer</h3>
              <p className={styles.smallText}>
                Denne app indsamler ingen persondata. Ingen cookies, ingen tracking.
                Notifikationer kan til- og frakobles i din enheds indstillinger.
              </p>
            </section>

            {/* ── Contact ── */}
            <section className={styles.section}>
              <h3 className={styles.sectionLabel}>Kontakt</h3>
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
