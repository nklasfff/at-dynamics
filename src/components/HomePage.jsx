import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* Ambient glow */}
      <div className={styles.ambientGlow} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>The Practice</p>
        <h1 className={styles.title}>AT Dynamics</h1>
        <p className={styles.subtitle}>
          Three disciplines. One body. The meeting point where ancient
          hands-on wisdom and modern breath science converge — restoring
          the nervous system from the inside out.
        </p>
      </header>

      {/* Hero illustration — three overlapping circles */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 320" className={styles.heroSvg}>
          {/* Subtle grid dots */}
          {Array.from({ length: 5 }).map((_, i) => (
            <circle
              key={`dot-${i}`}
              cx={80 + i * 60}
              cy={160}
              r="1"
              fill="currentColor"
              opacity="0.1"
            />
          ))}

          {/* Three practice circles */}
          <ellipse
            cx="160" cy="155" rx="85" ry="105"
            fill="none"
            stroke="var(--color-alt)"
            strokeWidth="0.8"
            opacity="var(--illustration-opacity)"
          />
          <ellipse
            cx="200" cy="145" rx="70" ry="90"
            fill="none"
            stroke="var(--color-whm)"
            strokeWidth="0.8"
            opacity="var(--illustration-opacity)"
          />
          <ellipse
            cx="240" cy="155" rx="85" ry="105"
            fill="none"
            stroke="var(--color-cst)"
            strokeWidth="0.8"
            opacity="var(--illustration-opacity)"
          />

          {/* Center convergence point */}
          <circle
            cx="200" cy="155" r="3"
            fill="var(--text-primary)"
            opacity="0.15"
          />
          <circle
            cx="200" cy="155" r="1.5"
            fill="var(--text-primary)"
            opacity="0.3"
          />

          {/* Subtle connecting lines */}
          <line
            x1="200" y1="50" x2="200" y2="260"
            stroke="var(--text-primary)"
            strokeWidth="0.3"
            opacity="0.08"
            strokeDasharray="2,8"
          />
        </svg>
      </div>

      {/* Three practice cards */}
      <section className={styles.practicesSection}>
        <div className={styles.practiceCard} data-practice="alt">
          <div className={styles.cardIllustration}>
            <svg viewBox="0 0 120 140" className={styles.cardSvg}>
              {/* Face silhouette — layered ovals */}
              <ellipse cx="60" cy="65" rx="32" ry="45" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.6" />
              <ellipse cx="60" cy="65" rx="25" ry="36" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.4" />
              <ellipse cx="60" cy="65" rx="18" ry="27" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.3" />
              <ellipse cx="60" cy="65" rx="10" ry="16" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.2" />
              {/* Vertical axis */}
              <line x1="60" y1="20" x2="60" y2="110" stroke="var(--color-alt)" strokeWidth="0.3" opacity="0.2" />
            </svg>
          </div>
          <p className={styles.cardLabel}>Ansigtsbehandling</p>
          <h2 className={styles.cardTitle}>ALT</h2>
          <p className={styles.cardSubtitle}>AnsigtsLøftningsTeknik</p>
          <p className={styles.cardDescription}>
            Six layers from skin to soul. Stanley Rosenberg's gentle
            connective tissue technique that restores the face — and
            through five cranial nerves, the entire nervous system.
          </p>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>

        <div className={styles.practiceCard} data-practice="whm">
          <div className={styles.cardIllustration}>
            <svg viewBox="0 0 120 140" className={styles.cardSvg}>
              {/* Breath wave pattern */}
              <path
                d="M20,70 Q35,30 50,70 Q65,110 80,70 Q95,30 100,70"
                fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity="0.6"
              />
              <path
                d="M20,70 Q35,40 50,70 Q65,100 80,70 Q95,40 100,70"
                fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.35"
              />
              {/* Cold — horizontal lines */}
              <line x1="30" y1="45" x2="90" y2="45" stroke="var(--color-whm)" strokeWidth="0.3" opacity="0.15" />
              <line x1="35" y1="95" x2="85" y2="95" stroke="var(--color-whm)" strokeWidth="0.3" opacity="0.15" />
              {/* Center point */}
              <circle cx="60" cy="70" r="2" fill="var(--color-whm)" opacity="0.3" />
            </svg>
          </div>
          <p className={styles.cardLabel}>Åndeværk</p>
          <h2 className={styles.cardTitle}>Wim Hof</h2>
          <p className={styles.cardSubtitle}>Method</p>
          <p className={styles.cardDescription}>
            Breath, cold, mindset. Three pillars that unlock the
            autonomic nervous system — proving that willpower can
            reach where medicine said it could not.
          </p>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>

        <div className={styles.practiceCard} data-practice="cst">
          <div className={styles.cardIllustration}>
            <svg viewBox="0 0 120 140" className={styles.cardSvg}>
              {/* Tide waves — slow, deep */}
              <path
                d="M10,70 Q60,50 110,70"
                fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.5"
              />
              <path
                d="M10,78 Q60,62 110,78"
                fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.35"
              />
              <path
                d="M10,86 Q60,74 110,86"
                fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.2"
              />
              {/* Still point */}
              <circle cx="60" cy="70" r="8" fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.2" />
              <circle cx="60" cy="70" r="1.5" fill="var(--color-cst)" opacity="0.3" />
            </svg>
          </div>
          <p className={styles.cardLabel}>Lytning</p>
          <h2 className={styles.cardTitle}>Kraniosakral</h2>
          <p className={styles.cardSubtitle}>Terapi</p>
          <p className={styles.cardDescription}>
            Three tides, one stillness. From A.T. Still to James Jealous
            — listening to the body's deepest rhythms with five grams
            of pressure and infinite patience.
          </p>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* Divider illustration */}
      <div className={styles.dividerSection}>
        <svg viewBox="0 0 300 60" className={styles.dividerSvg}>
          <line x1="20" y1="30" x2="130" y2="30" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.1" />
          <circle cx="150" cy="30" r="3" fill="none" stroke="var(--text-primary)" strokeWidth="0.4" opacity="0.15" />
          <circle cx="150" cy="30" r="1" fill="var(--text-primary)" opacity="0.15" />
          <line x1="170" y1="30" x2="280" y2="30" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.1" />
        </svg>
      </div>

      {/* The Connection section */}
      <section className={styles.connectionSection}>
        <p className={styles.connectionLabel}>The Common Thread</p>
        <h2 className={styles.connectionTitle}>The Nervous System</h2>
        <p className={styles.connectionText}>
          All three practices share a single axis: the autonomic nervous system.
          ALT works through the five cranial nerves of social engagement.
          Wim Hof trains the shift between sympathetic activation and
          parasympathetic rest. Craniosacral therapy listens to the
          body's primary respiration — the deepest expression of the
          nervous system's innate intelligence.
        </p>
        <p className={styles.connectionText}>
          Different entry points. Same destination: a nervous system
          in balance, a body that remembers its own wholeness.
        </p>
      </section>

      {/* Today section */}
      <section className={styles.todaySection}>
        <div className={styles.todayCard}>
          <p className={styles.todayLabel}>Daily Reading</p>
          <p className={styles.todayQuote}>
            <em>
              The body is not a thing to be fixed — it is a process
              to be listened to. Every breath, every stillness,
              every touch is a conversation with something deeper
              than thought.
            </em>
          </p>
        </div>
      </section>

      {/* Bottom spacer for nav */}
      <div className={styles.bottomSpacer} />
    </main>
  )
}
