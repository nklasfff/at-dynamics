import { useState } from 'react'
import styles from './DeeperPage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function SessionPlanPage({ language }) {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggle = (id) => setExpandedCard(expandedCard === id ? null : id)

  return (
    <main className={styles.page}>
      <div className={styles.ambientGlow} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t('sessionPlanEyebrow', language) || 'Praksis'}</p>
        <h1 className={styles.title}>{t('sessionPlanTitle', language) || 'Din sessionsplan'}</h1>
        <p className={styles.subtitle}>
          {t('sessionPlanSubtitle', language) || 'En guide til at strukturere din personlige praksis \u2014 fra forberedelse til integration.'}
        </p>
      </header>

      {/* ═══ HERO — Session timeline flow ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 200" className={styles.heroSvg}>
          <defs>
            <linearGradient id="spAlt" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-alt)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-alt)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="spWhm" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-whm)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-whm)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="spCst" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-cst)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-cst)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Baseline timeline */}
          <line x1="30" y1="140" x2="370" y2="140" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.1" />

          {/* Phase markers */}
          <circle cx="60" cy="140" r="3" fill="var(--text-primary)" opacity="0.15" />
          <circle cx="150" cy="140" r="3" fill="var(--color-whm)" opacity="0.3" />
          <circle cx="250" cy="140" r="3" fill="var(--color-alt)" opacity="0.3" />
          <circle cx="340" cy="140" r="3" fill="var(--color-cst)" opacity="0.3" />

          {/* Preparation — quiet entry */}
          <path d="M30,140 Q45,135 60,130" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.15" />

          {/* Wim Hof phase — energy rise */}
          <path d="M60,130 Q90,60 120,50 Q135,48 150,70" fill="none" stroke="url(#spWhm)" strokeWidth="1.2">
            <animate attributeName="d" values="M60,130 Q90,60 120,50 Q135,48 150,70;M60,130 Q90,65 120,55 Q135,52 150,74;M60,130 Q90,60 120,50 Q135,48 150,70" dur="8s" repeatCount="indefinite" />
          </path>
          {/* Breath pulse dots */}
          <circle cx="105" cy="55" r="2" fill="var(--color-whm)" opacity="0.3">
            <animate attributeName="r" values="2;5;2" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* ALT phase — sustained plateau */}
          <path d="M150,70 Q180,55 200,60 Q220,65 250,80" fill="none" stroke="url(#spAlt)" strokeWidth="1.2">
            <animate attributeName="d" values="M150,70 Q180,55 200,60 Q220,65 250,80;M150,73 Q180,58 200,63 Q220,68 250,83;M150,70 Q180,55 200,60 Q220,65 250,80" dur="10s" repeatCount="indefinite" />
          </path>
          {/* ALT work pulse */}
          <circle cx="200" cy="60" r="2" fill="var(--color-alt)" opacity="0.25">
            <animate attributeName="r" values="2;4;2" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.45;0.25" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* CST phase — settling descent */}
          <path d="M250,80 Q280,100 310,120 Q330,132 350,138" fill="none" stroke="url(#spCst)" strokeWidth="1.2">
            <animate attributeName="d" values="M250,80 Q280,100 310,120 Q330,132 350,138;M250,83 Q280,103 310,122 Q330,134 350,139;M250,80 Q280,100 310,120 Q330,132 350,138" dur="14s" repeatCount="indefinite" />
          </path>
          {/* Still point at end */}
          <circle cx="345" cy="138" r="2" fill="var(--color-cst)" opacity="0.2">
            <animate attributeName="opacity" values="0.15;0.4;0.15" dur="16s" repeatCount="indefinite" />
          </circle>

          {/* Energy envelope — faint arc over the whole session */}
          <path d="M40,140 Q120,20 200,40 Q280,60 360,140" fill="none" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.06" strokeDasharray="4,8">
            <animate attributeName="stroke-dashoffset" values="0;-24" dur="10s" repeatCount="indefinite" />
          </path>

          {/* Phase labels — small dots along the arc */}
          {[80, 120, 160, 200, 240, 280, 320].map((x, i) => (
            <circle key={i} cx={x} cy={140} r="0.8" fill="var(--text-primary)" opacity="0.08" />
          ))}
        </svg>
      </div>

      {/* ═══ CARD 1 — Forberedelse ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'prep' ? styles.expanded : ''}`}
          onClick={() => toggle('prep')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {/* Doorway / threshold */}
                <rect x="14" y="8" width="20" height="32" rx="1" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.6" />
                <line x1="14" y1="8" x2="14" y2="40" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.5" />
                <line x1="34" y1="8" x2="34" y2="40" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.5" />
                <line x1="14" y1="8" x2="34" y2="8" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.5" />
                {/* Threshold light */}
                <path d="M18,40 L24,28 L30,40" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.3">
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="8s" repeatCount="indefinite" />
                </path>
                {/* Dot of intention */}
                <circle cx="24" cy="24" r="1.5" fill="var(--color-alt)" opacity="0.3">
                  <animate attributeName="r" values="1.5;3;1.5" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="10s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('sessionPrepLabel', language) || 'F\u00f8r du begynder'}</p>
              <h2 className={styles.cardTitle}>{t('sessionPrepTitle', language) || 'Forberedelse'}</h2>
              <p className={styles.cardSubtitle}>{t('sessionPrepSubtitle', language) || 'Rum, krop og intention'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'prep' ? '\u2212' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('sessionPrepText', language) || 'Skab det rette rum, f\u00f8r du begynder. D\u00e6mp lyset, find en behagelig temperatur, og fjern forstyrrelser. Kroppen har brug for et signal om, at noget andet er ved at ske. Fem minutters stilhed \u2014 bare at sidde og m\u00e6rke dig selv \u2014 er nok til at skabe overgangen fra hverdagens tempo til praksisens langsommere rytme.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('sessionPrepTextExtra', language) || 'Overgangen fra hverdagsliv til praksis er vigtigere, end de fleste tror. Nervesystemet har brug for en bro. Et par bevidste \u00e5ndedrag, f\u00f8lelsen af gulvet under dig, og en bl\u00f8d intention \u2014 ikke et m\u00e5l, men en retning. Lad kroppen vide, at her er det sikkert at \u00e5bne sig. Det handler ikke om perfekte omgivelser, men om en indre beslutning om at v\u00e6re til stede.'}
              </p>
              <ul className={styles.bullets}>
                {(t('sessionPrepBullets', language) || [
                  'Find et stille sted og d\u00e6mp lyset \u2014 signaler til kroppen at det er tid',
                  'S\u00e6t telefonen p\u00e5 lydl\u00f8s og fjern synlige forstyrrelser',
                  'Sid eller l\u00e6g dig ned og m\u00e6rk kontakten med underlaget',
                  'Tag tre langsomme \u00e5ndedrag og lad skuldrene falde',
                  'S\u00e6t en bl\u00f8d intention for sessionen \u2014 ikke et m\u00e5l, men en retning',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ CARD 2 — Sessionsflow ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'flow' ? styles.expanded : ''}`}
          onClick={() => toggle('flow')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {/* Flowing arrow / wave pattern */}
                <path d="M8,32 Q16,16 24,24 Q32,32 40,16" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.6">
                  <animate attributeName="d" values="M8,32 Q16,16 24,24 Q32,32 40,16;M8,28 Q16,20 24,24 Q32,28 40,20;M8,32 Q16,16 24,24 Q32,32 40,16" dur="7s" repeatCount="indefinite" />
                </path>
                <path d="M8,36 Q16,24 24,28 Q32,32 40,24" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="d" values="M8,36 Q16,24 24,28 Q32,32 40,24;M8,33 Q16,27 24,28 Q32,29 40,27;M8,36 Q16,24 24,28 Q32,32 40,24" dur="7s" repeatCount="indefinite" />
                </path>
                {/* Arrow tip */}
                <path d="M37,14 L40,16 L37,18" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.5" />
                {/* Flow dots */}
                <circle cx="12" cy="30" r="1.2" fill="var(--color-whm)" opacity="0.4" />
                <circle cx="24" cy="24" r="1.2" fill="var(--color-alt)" opacity="0.4" />
                <circle cx="36" cy="18" r="1.2" fill="var(--color-cst)" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('sessionFlowLabel', language) || 'R\u00e6kkef\u00f8lgen'}</p>
              <h2 className={styles.cardTitle}>{t('sessionFlowTitle', language) || 'Sessionsflow'}</h2>
              <p className={styles.cardSubtitle}>{t('sessionFlowSubtitle', language) || 'Fra aktivering til integration'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'flow' ? '\u2212' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('sessionFlowText', language) || 'Den anbefalede r\u00e6kkef\u00f8lge: Begynd med Wim Hof-\u00e5ndedrag (10\u201315 minutter) for at aktivere nervesystemet og ilte v\u00e6vene. Forts\u00e6t med ALT-ansigtsarbejde (15\u201320 minutter) mens kroppen er energisk. Afslut med craniosacral selvlytning (10\u201315 minutter) for at integrere det hele.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('sessionFlowTextExtra', language) || 'Hvorfor denne r\u00e6kkef\u00f8lge virker: \u00c5ndedr\u00e6ttet f\u00f8rst skaber en opm\u00e6rksom men reguleret tilstand. ALT-arbejdet drager fordel af \u00f8get blodoml\u00f8b og v\u00e6vssmidighed. Craniosacral lytning til sidst giver nervesystemet mulighed for at bearbejde og integrere al stimulation. T\u00e6nk p\u00e5 det som en b\u00f8lge \u2014 den bygger op, n\u00e5r sin top, og falder naturligt til ro.'}
              </p>
              <ul className={styles.bullets}>
                {(t('sessionFlowBullets', language) || [
                  'Wim Hof f\u00f8rst: aktiverer nervesystemet og \u00f8ger v\u00e6vets blodgennemstr\u00f8mning',
                  'ALT i midten: udnyt den \u00f8gede cirkulation og v\u00e6vssmidighed',
                  'Craniosacral sidst: lad nervesystemet finde sin nye balance',
                  'Hold korte pauser mellem disciplinerne \u2014 et minut er nok',
                  'Lyt til kroppen: nogle dage kalder p\u00e5 en anden v\u00e6gtning',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ ILLUSTRATION 2 — Circular integration ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 220" className={styles.heroSvg}>
          {/* Three practice circles merging at center */}
          <defs>
            <radialGradient id="spCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-alt)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--color-alt)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center glow */}
          <circle cx="200" cy="110" r="40" fill="url(#spCenterGlow)">
            <animate attributeName="r" values="35;45;35" dur="12s" repeatCount="indefinite" />
          </circle>

          {/* WHM orbit — top left */}
          <circle cx="145" cy="75" r="45" fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="r" values="43;47;43" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="145" cy="75" r="30" fill="none" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.15" />
          <circle cx="145" cy="75" r="4" fill="var(--color-whm)" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* ALT orbit — top right */}
          <circle cx="255" cy="75" r="45" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="r" values="45;41;45" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="255" cy="75" r="30" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.15" />
          <circle cx="255" cy="75" r="4" fill="var(--color-alt)" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* CST orbit — bottom center */}
          <circle cx="200" cy="155" r="45" fill="none" stroke="var(--color-cst)" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="r" values="44;46;44" dur="14s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="155" r="30" fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.15" />
          <circle cx="200" cy="155" r="4" fill="var(--color-cst)" opacity="0.3">
            <animate attributeName="opacity" values="0.15;0.4;0.15" dur="16s" repeatCount="indefinite" />
          </circle>

          {/* Connecting flows between practices */}
          <path d="M170,95 Q200,105 200,110" fill="none" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.15" strokeDasharray="2,5">
            <animate attributeName="stroke-dashoffset" values="0;-14" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M230,95 Q200,105 200,110" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.15" strokeDasharray="2,5">
            <animate attributeName="stroke-dashoffset" values="0;-14" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M200,130 Q200,120 200,110" fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.15" strokeDasharray="2,5">
            <animate attributeName="stroke-dashoffset" values="0;-14" dur="8s" repeatCount="indefinite" />
          </path>

          {/* Center integration point */}
          <circle cx="200" cy="110" r="3" fill="var(--text-primary)" opacity="0.12">
            <animate attributeName="r" values="3;6;3" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* ═══ CARD 3 — Tidsforbrug ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'timing' ? styles.expanded : ''}`}
          onClick={() => toggle('timing')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {/* Clock-like circular element */}
                <circle cx="24" cy="24" r="16" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.5" />
                <circle cx="24" cy="24" r="12" fill="none" stroke="var(--color-alt)" strokeWidth="0.3" opacity="0.2" />
                {/* Clock hands */}
                <line x1="24" y1="24" x2="24" y2="14" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" values="0 24 24;360 24 24" dur="60s" repeatCount="indefinite" />
                </line>
                <line x1="24" y1="24" x2="30" y2="24" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.35">
                  <animateTransform attributeName="transform" type="rotate" values="0 24 24;360 24 24" dur="12s" repeatCount="indefinite" />
                </line>
                {/* Three time markers */}
                <circle cx="24" cy="9" r="1" fill="var(--color-alt)" opacity="0.3" />
                <circle cx="38" cy="24" r="1" fill="var(--color-alt)" opacity="0.3" />
                <circle cx="24" cy="39" r="1" fill="var(--color-alt)" opacity="0.3" />
                {/* Center dot */}
                <circle cx="24" cy="24" r="1.5" fill="var(--color-alt)" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('sessionTimingLabel', language) || 'Tid og rytme'}</p>
              <h2 className={styles.cardTitle}>{t('sessionTimingTitle', language) || 'Tidsforbrug'}</h2>
              <p className={styles.cardSubtitle}>{t('sessionTimingSubtitle', language) || 'Tre formater til tre livssituationer'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'timing' ? '\u2212' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('sessionTimingText', language) || 'Tre sessionsformater: Kort (20 min) til travle dage \u2014 v\u00e6lg \u00c9N disciplin og v\u00e6r fuldt til stede. Standard (45 min) \u2014 den fulde tre-delte sekvens. Dyb (75+ min) \u2014 forl\u00e6ngede hold, l\u00e6ngere lytning, dybere stilhed. V\u00e6lg det format, der passer til din dag.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('sessionTimingTextExtra', language) || 'Regelm\u00e6ssighed betyder mere end varighed. En daglig 20-minutters praksis bygger mere end en ugentlig 90-minutters session. Lyt til din krop. Nogle dage kalder p\u00e5 aktivering (mere Wim Hof), andre p\u00e5 bl\u00f8dhed (mere craniosacral). Stol p\u00e5 det, du m\u00e6rker. Praksissen er ikke et program \u2014 den er en samtale med dit nervesystem.'}
              </p>
              <ul className={styles.bullets}>
                {(t('sessionTimingBullets', language) || [
                  'Kort format (20 min): \u00e9n disciplin med fuld tilstedev\u00e6relse',
                  'Standard format (45 min): den komplette tre-delte sekvens',
                  'Dybt format (75+ min): udvidede hold og l\u00e6ngere stilhed',
                  'Regelm\u00e6ssighed sl\u00e5r varighed \u2014 daglig kort praksis er bedre end sjælden lang',
                  'Lad kroppens behov bestemme v\u00e6gtningen mellem de tre discipliner',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ CARD 4 — Integration ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'integrate' ? styles.expanded : ''}`}
          onClick={() => toggle('integrate')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {/* Settling / stillness — concentric rings fading inward */}
                <circle cx="24" cy="24" r="18" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.2">
                  <animate attributeName="r" values="18;16;18" dur="14s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.3;0.2" dur="14s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="12" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.25">
                  <animate attributeName="r" values="12;11;12" dur="12s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="6" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="r" values="6;5.5;6" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Still center point */}
                <circle cx="24" cy="24" r="2" fill="var(--color-alt)" opacity="0.35">
                  <animate attributeName="opacity" values="0.25;0.5;0.25" dur="16s" repeatCount="indefinite" />
                </circle>
                {/* Settling particles */}
                <circle cx="18" cy="16" r="0.8" fill="var(--color-alt)" opacity="0.15">
                  <animate attributeName="cy" values="16;20;16" dur="10s" repeatCount="indefinite" />
                </circle>
                <circle cx="30" cy="18" r="0.8" fill="var(--color-alt)" opacity="0.15">
                  <animate attributeName="cy" values="18;22;18" dur="12s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="14" r="0.8" fill="var(--color-alt)" opacity="0.15">
                  <animate attributeName="cy" values="14;19;14" dur="11s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('sessionIntegrateLabel', language) || 'Afslutningen'}</p>
              <h2 className={styles.cardTitle}>{t('sessionIntegrateTitle', language) || 'Integration'}</h2>
              <p className={styles.cardSubtitle}>{t('sessionIntegrateSubtitle', language) || 'De sidste fem minutter'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'integrate' ? '\u2212' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('sessionIntegrateText', language) || 'Skynd dig aldrig med afslutningen. De sidste fem minutter er d\u00e9r, hvor forandringen konsolideres. Lig stille, h\u00e6nderne hviler p\u00e5 kroppen, og l\u00e6g blot m\u00e6rke til. Hvad har \u00e6ndret sig? Hvad f\u00f8les anderledes? Hvor er der rum, som ikke var der f\u00f8r?'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('sessionIntegrateTextExtra', language) || 'Integration er ikke passiv \u2014 det er nervesystemets aktive proces af reorganisering. Som en snekugle der falder til ro efter at v\u00e6re blevet rystet, har kroppen brug for tid til at finde sin nye ligevægt. Disse minutter er ikke spildtid \u2014 de er m\u00e5ske den vigtigste del af hele sessionen. Lad dem v\u00e6re. Lad kroppen g\u00f8re sit arbejde.'}
              </p>
              <ul className={styles.bullets}>
                {(t('sessionIntegrateBullets', language) || [
                  'L\u00e6g dig p\u00e5 ryggen med h\u00e6nderne p\u00e5 maven eller brystet',
                  'Luk \u00f8jnene og m\u00e6rk kroppens nye tilstand uden at analysere',
                  'Giv nervesystemet mindst fem minutter til at finde ligevægt',
                  'L\u00e6g m\u00e6rke til hvad der har \u00e6ndret sig \u2014 uden at bed\u00f8mme det',
                  'Rejs dig langsomt og bevar fornemmelsen ind i resten af dagen',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* Bottom spacer */}
      <ScrollToTop language={language} />
      <div className={styles.bottomSpacer} />
    </main>
  )
}
