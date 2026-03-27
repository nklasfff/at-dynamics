import { useState } from 'react'
import styles from './HomePage.module.css'

export default function HomePage() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [expandedNerve, setExpandedNerve] = useState(null)
  const [expandedDepth, setExpandedDepth] = useState(null)

  const toggle = (id, current, setter) => setter(current === id ? null : id)

  return (
    <main className={styles.page}>
      {/* Ambient glow */}
      <div className={styles.ambientGlow} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>The Practice</p>
        <h1 className={styles.title}>AT Dynamics</h1>
        <p className={styles.subtitle}>
          Three disciplines. One body. Where ancient hands-on wisdom
          and modern breath science converge.
        </p>
      </header>

      {/* ═══ HERO ILLUSTRATION 1 — Three converging forms ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 300" className={styles.heroSvg}>
          <defs>
            <linearGradient id="gAlt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-alt)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-alt)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gWhm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-whm)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-whm)" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="gCst" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-cst)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-cst)" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* ALT — layered face form */}
          <ellipse cx="150" cy="150" rx="75" ry="100" fill="none" stroke="url(#gAlt)" strokeWidth="1">
            <animateTransform attributeName="transform" type="scale" values="1,1;1.02,0.99;1,1" dur="8s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          <ellipse cx="150" cy="150" rx="55" ry="78" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.3">
            <animateTransform attributeName="transform" type="scale" values="1,1;0.98,1.01;1,1" dur="7s" repeatCount="indefinite" additive="sum" />
          </ellipse>

          {/* WHM — breath wave */}
          <path d="M80,150 Q130,80 200,150 Q270,220 320,150" fill="none" stroke="url(#gWhm)" strokeWidth="1.2">
            <animate attributeName="d" values="M80,150 Q130,80 200,150 Q270,220 320,150;M80,150 Q130,100 200,140 Q270,180 320,150;M80,150 Q130,80 200,150 Q270,220 320,150" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M100,150 Q150,100 200,150 Q250,200 300,150" fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.25">
            <animate attributeName="d" values="M100,150 Q150,100 200,150 Q250,200 300,150;M100,150 Q150,115 200,145 Q250,175 300,150;M100,150 Q150,100 200,150 Q250,200 300,150" dur="6s" repeatCount="indefinite" />
          </path>

          {/* CST — tide arcs */}
          <path d="M60,165 Q200,130 340,165" fill="none" stroke="url(#gCst)" strokeWidth="1">
            <animate attributeName="d" values="M60,165 Q200,130 340,165;M60,165 Q200,145 340,165;M60,165 Q200,130 340,165" dur="12s" repeatCount="indefinite" />
          </path>
          <path d="M80,180 Q200,155 320,180" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.25">
            <animate attributeName="d" values="M80,180 Q200,155 320,180;M80,180 Q200,165 320,180;M80,180 Q200,155 320,180" dur="12s" repeatCount="indefinite" />
          </path>

          {/* Center convergence */}
          <circle cx="200" cy="150" r="4" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="4;6;4" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.35;0.2" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="150" r="1.5" fill="var(--text-primary)" opacity="0.4" />

          {/* Vertical axis */}
          <line x1="200" y1="40" x2="200" y2="260" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.06" strokeDasharray="2,10" />
        </svg>
      </div>

      {/* ═══ THREE PRACTICE CARDS ═══ */}
      <section className={styles.practicesSection}>
        {/* ALT */}
        <div
          className={`${styles.practiceCard} ${expandedCard === 'alt' ? styles.expanded : ''}`}
          onClick={() => toggle('alt', expandedCard, setExpandedCard)}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <ellipse cx="24" cy="22" rx="12" ry="16" fill="none" stroke="var(--color-alt)" strokeWidth="1" opacity="0.7">
                  <animateTransform attributeName="transform" type="scale" values="1,1;1.03,0.98;1,1" dur="7s" repeatCount="indefinite" additive="sum" />
                </ellipse>
                <ellipse cx="24" cy="22" rx="8" ry="11" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.35" />
                <line x1="24" y1="6" x2="24" y2="38" stroke="var(--color-alt)" strokeWidth="0.3" opacity="0.2" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>Ansigtsbehandling</p>
              <h2 className={styles.cardTitle}>ALT</h2>
              <p className={styles.cardSubtitle}>AnsigtsLøftningsTeknik</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'alt' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              Six layers from skin to soul. Stanley Rosenberg's gentle connective tissue
              technique works through five cranial nerves — restoring the face and,
              through the polyvagal connection, the entire nervous system. 97 muscles.
              Six sessions. One transformation.
            </p>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>

        {/* WHM */}
        <div
          className={`${styles.practiceCard} ${expandedCard === 'whm' ? styles.expanded : ''}`}
          onClick={() => toggle('whm', expandedCard, setExpandedCard)}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M8,24 Q16,10 24,24 Q32,38 40,24" fill="none" stroke="var(--color-whm)" strokeWidth="1" opacity="0.7">
                  <animate attributeName="d" values="M8,24 Q16,10 24,24 Q32,38 40,24;M8,24 Q16,16 24,22 Q32,28 40,24;M8,24 Q16,10 24,24 Q32,38 40,24" dur="5s" repeatCount="indefinite" />
                </path>
                <circle cx="24" cy="24" r="2" fill="var(--color-whm)" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>Åndeværk</p>
              <h2 className={styles.cardTitle}>Wim Hof</h2>
              <p className={styles.cardSubtitle}>Method</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'whm' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              Breath, cold, mindset. Three pillars that unlock the autonomic nervous
              system — proving that willpower can reach where medicine said it could
              not. Controlled hyperventilation shifts blood chemistry. Cold exposure
              trains the sympathetic response. The dialectic of comfort and stress
              creates a new capacity.
            </p>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>

        {/* CST */}
        <div
          className={`${styles.practiceCard} ${expandedCard === 'cst' ? styles.expanded : ''}`}
          onClick={() => toggle('cst', expandedCard, setExpandedCard)}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M6,24 Q24,16 42,24" fill="none" stroke="var(--color-cst)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="d" values="M6,24 Q24,16 42,24;M6,24 Q24,20 42,24;M6,24 Q24,16 42,24" dur="10s" repeatCount="indefinite" />
                </path>
                <path d="M10,28 Q24,22 38,28" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.3" />
                <circle cx="24" cy="23" r="2.5" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.25">
                  <animate attributeName="r" values="2.5;3.5;2.5" dur="10s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="23" r="1" fill="var(--color-cst)" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>Lytning</p>
              <h2 className={styles.cardTitle}>Kraniosakral</h2>
              <p className={styles.cardSubtitle}>Terapi</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'cst' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              Three tides, one stillness. From A.T. Still to James Jealous — listening
              to the body's deepest rhythms with five grams of pressure and infinite
              patience. The craniosacral system pulses with primary respiration, an
              involuntary rhythm independent of heartbeat and lung breath. It is life's
              most fundamental expression in form.
            </p>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ HERO ILLUSTRATION 2 — Nervous system convergence ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 280" className={styles.heroSvg}>
          {/* Spine / vagus trunk */}
          <path d="M200,30 Q198,140 200,250" fill="none" stroke="var(--text-primary)" strokeWidth="0.6" opacity="0.15">
            <animate attributeName="d" values="M200,30 Q198,140 200,250;M200,30 Q202,140 200,250;M200,30 Q198,140 200,250" dur="14s" repeatCount="indefinite" />
          </path>

          {/* Branching nerves — left */}
          <path d="M200,60 Q160,70 120,55" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.5">
            <animate attributeName="d" values="M200,60 Q160,70 120,55;M200,60 Q160,65 118,58;M200,60 Q160,70 120,55" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M200,100 Q150,115 100,105" fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.45">
            <animate attributeName="d" values="M200,100 Q150,115 100,105;M200,100 Q150,108 98,108;M200,100 Q150,115 100,105" dur="11s" repeatCount="indefinite" />
          </path>
          <path d="M200,150 Q145,170 90,160" fill="none" stroke="var(--color-cst)" strokeWidth="0.8" opacity="0.4">
            <animate attributeName="d" values="M200,150 Q145,170 90,160;M200,150 Q145,162 88,163;M200,150 Q145,170 90,160" dur="13s" repeatCount="indefinite" />
          </path>

          {/* Branching nerves — right */}
          <path d="M200,60 Q240,70 280,55" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.5">
            <animate attributeName="d" values="M200,60 Q240,70 280,55;M200,60 Q240,65 282,58;M200,60 Q240,70 280,55" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M200,100 Q250,115 300,105" fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.45">
            <animate attributeName="d" values="M200,100 Q250,115 300,105;M200,100 Q250,108 302,108;M200,100 Q250,115 300,105" dur="11s" repeatCount="indefinite" />
          </path>
          <path d="M200,150 Q255,170 310,160" fill="none" stroke="var(--color-cst)" strokeWidth="0.8" opacity="0.4">
            <animate attributeName="d" values="M200,150 Q255,170 310,160;M200,150 Q255,162 312,163;M200,150 Q255,170 310,160" dur="13s" repeatCount="indefinite" />
          </path>

          {/* Pulse points */}
          {[60, 100, 150].map((y) => (
            <circle key={y} cx="200" cy={y} r="3" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="r" values="3;5;3" dur={`${6 + y / 30}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur={`${6 + y / 30}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Lower body arc */}
          <path d="M140,230 Q200,200 260,230" fill="none" stroke="var(--text-primary)" strokeWidth="0.4" opacity="0.08">
            <animate attributeName="d" values="M140,230 Q200,200 260,230;M140,230 Q200,210 260,230;M140,230 Q200,200 260,230" dur="14s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* ═══ NERVOUS SYSTEM CARD ═══ */}
      <section className={styles.practicesSection}>
        <div
          className={`${styles.practiceCard} ${expandedNerve === 'ns' ? styles.expanded : ''}`}
          onClick={() => toggle('ns', expandedNerve, setExpandedNerve)}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <line x1="24" y1="6" x2="24" y2="42" stroke="var(--text-primary)" strokeWidth="0.6" opacity="0.3" />
                <path d="M24,14 Q16,18 10,14" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.5" />
                <path d="M24,14 Q32,18 38,14" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.5" />
                <path d="M24,26 Q14,32 8,28" fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity="0.4" />
                <path d="M24,26 Q34,32 40,28" fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity="0.4" />
                <circle cx="24" cy="14" r="2" fill="var(--text-primary)" opacity="0.2" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>The Common Thread</p>
              <h2 className={styles.cardTitle}>The Nervous System</h2>
              <p className={styles.cardSubtitle}>Where all three meet</p>
            </div>
            <span className={styles.cardChevron}>{expandedNerve === 'ns' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              All three practices share a single axis: the autonomic nervous system.
              ALT works through the five cranial nerves of social engagement. Wim Hof
              trains the shift between sympathetic activation and parasympathetic rest.
              Craniosacral therapy listens to primary respiration — the deepest
              expression of the nervous system's innate intelligence. Different entry
              points. Same destination.
            </p>
          </div>
        </div>

        {/* Bidirectional loop card */}
        <div
          className={`${styles.practiceCard} ${expandedNerve === 'loop' ? styles.expanded : ''}`}
          onClick={() => toggle('loop', expandedNerve, setExpandedNerve)}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="14" fill="none" stroke="var(--color-cst)" strokeWidth="0.6" opacity="0.3" strokeDasharray="3,4">
                  <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="30s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="8" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.3" strokeDasharray="2,3">
                  <animateTransform attributeName="transform" type="rotate" from="360 24 24" to="0 24 24" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="2" fill="var(--text-primary)" opacity="0.15" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>The Feedback Loop</p>
              <h2 className={styles.cardTitle}>Body ⇄ Mind</h2>
              <p className={styles.cardSubtitle}>Bidirectional intelligence</p>
            </div>
            <span className={styles.cardChevron}>{expandedNerve === 'loop' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              The face shapes the nervous system. The nervous system shapes emotion.
              Emotion shapes relationship. And relationship reshapes the body. This
              bidirectional loop is the engine of all three practices — tissue work
              changes feeling, breath changes chemistry, listening changes everything.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ HERO ILLUSTRATION 3 — Tidal stillness ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 240" className={styles.heroSvg}>
          {/* Concentric tide rings */}
          <circle cx="200" cy="120" r="90" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="r" values="90;95;90" dur="16s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="65" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.2">
            <animate attributeName="r" values="65;70;65" dur="12s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="40" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.3">
            <animate attributeName="r" values="40;44;40" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="18" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="r" values="18;21;18" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* Still point */}
          <circle cx="200" cy="120" r="3" fill="var(--text-primary)" opacity="0.12">
            <animate attributeName="opacity" values="0.12;0.3;0.12" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="1" fill="var(--text-primary)" opacity="0.5" />

          {/* Radiating lines */}
          {[0, 45, 90, 135].map((angle) => (
            <line
              key={angle}
              x1="200" y1="120"
              x2={200 + Math.cos(angle * Math.PI / 180) * 105}
              y2={120 + Math.sin(angle * Math.PI / 180) * 105}
              stroke="var(--text-primary)"
              strokeWidth="0.2"
              opacity="0.06"
            />
          ))}
        </svg>
      </div>

      {/* ═══ DEPTH CARDS ═══ */}
      <section className={styles.practicesSection}>
        <div
          className={`${styles.practiceCard} ${expandedDepth === 'polyvagal' ? styles.expanded : ''}`}
          onClick={() => toggle('polyvagal', expandedDepth, setExpandedDepth)}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M12,34 Q18,24 24,14 Q30,24 36,34" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.5">
                  <animate attributeName="d" values="M12,34 Q18,24 24,14 Q30,24 36,34;M12,34 Q18,26 24,16 Q30,26 36,34;M12,34 Q18,24 24,14 Q30,24 36,34" dur="8s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>Going Deeper</p>
              <h2 className={styles.cardTitle}>Polyvagal Theory</h2>
              <p className={styles.cardSubtitle}>The science of safety</p>
            </div>
            <span className={styles.cardChevron}>{expandedDepth === 'polyvagal' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              Stephen Porges' polyvagal theory reveals three states of the autonomic
              nervous system: ventral vagal (social engagement, safety), sympathetic
              (fight/flight), and dorsal vagal (freeze, shutdown). All three practices
              in AT Dynamics work to restore ventral vagal function — the state where
              healing, connection, and growth become possible.
            </p>
          </div>
        </div>

        <div
          className={`${styles.practiceCard} ${expandedDepth === 'primary' ? styles.expanded : ''}`}
          onClick={() => toggle('primary', expandedDepth, setExpandedDepth)}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="10" fill="none" stroke="var(--color-cst)" strokeWidth="0.6" opacity="0.3">
                  <animate attributeName="r" values="10;13;10" dur="10s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="1.5" fill="var(--color-cst)" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>The Deepest Rhythm</p>
              <h2 className={styles.cardTitle}>Primary Respiration</h2>
              <p className={styles.cardSubtitle}>Life's breath beneath breath</p>
            </div>
            <span className={styles.cardChevron}>{expandedDepth === 'primary' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              Beneath the lung breath and beneath the heartbeat, there is a slower,
              subtler rhythm. Primary respiration — the craniosacral pulse — moves at
              6–12 cycles per minute. It is the body's most fundamental expression of
              life, present from embryological development until death. When this
              rhythm is free, health follows.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DAILY READING ═══ */}
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

      {/* ═══ PILLS — Preview of other screens ═══ */}
      <section className={styles.pillsSection}>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--color-alt)' }} />
          <span className={styles.pillText}>Your Session Plan</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--color-whm)' }} />
          <span className={styles.pillText}>Breathing Protocol</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--color-cst)' }} />
          <span className={styles.pillText}>The Three Tides</span>
        </div>
      </section>

      {/* Bottom spacer for nav */}
      <div className={styles.bottomSpacer} />
    </main>
  )
}
