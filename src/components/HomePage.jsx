import { useState } from 'react'
import styles from './HomePage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function HomePage({ onNavigate, language }) {
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
        <p className={styles.eyebrow}>{t('homeEyebrow', language) || 'Praksis'}</p>
        <h1 className={styles.title}>{t('homeTitle', language) || 'AnThes Dynamics'}</h1>
        <p className={styles.subtitle}>
          {t('homeSubtitle', language) || 'Tre discipliner. Én krop. Hvor gammel visdom og moderne åndedrætsforskning mødes.'}
        </p>
      </header>

      {/* ═══ HERO ILLUSTRATION 1 — Three converging forms ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 300" className={styles.heroSvg}>
          <defs>
            <linearGradient id="gAlt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-alt)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--color-alt)" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="gWhm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-whm)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-whm)" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="gCst" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-cst)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-cst)" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {/* ALT — layered face form */}
          <ellipse cx="150" cy="150" rx="75" ry="100" fill="none" stroke="url(#gAlt)" strokeWidth="1.2">
            <animateTransform attributeName="transform" type="scale" values="1,1;1.065,0.955;1,1" dur="9s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          <ellipse cx="150" cy="150" rx="55" ry="78" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.4">
            <animateTransform attributeName="transform" type="scale" values="1,1;0.94,1.05;1,1" dur="8s" repeatCount="indefinite" additive="sum" />
          </ellipse>

          {/* WHM — breath wave */}
          <path d="M80,150 Q130,80 200,150 Q270,220 320,150" fill="none" stroke="url(#gWhm)" strokeWidth="1.4">
            <animate attributeName="d" values="M80,150 Q130,50 200,150 Q270,250 320,150;M80,150 Q130,115 200,130 Q270,165 320,150;M80,150 Q130,50 200,150 Q270,250 320,150" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M100,150 Q150,100 200,150 Q250,200 300,150" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.3">
            <animate attributeName="d" values="M100,150 Q150,78 200,150 Q250,222 300,150;M100,150 Q150,125 200,138 Q250,162 300,150;M100,150 Q150,78 200,150 Q250,222 300,150" dur="7s" repeatCount="indefinite" />
          </path>

          {/* CST — rhythm arcs */}
          <path d="M60,165 Q200,125 340,165" fill="none" stroke="url(#gCst)" strokeWidth="1.2">
            <animate attributeName="d" values="M60,165 Q200,105 340,165;M60,165 Q200,155 340,165;M60,165 Q200,105 340,165" dur="12.5s" repeatCount="indefinite" />
          </path>
          <path d="M80,180 Q200,150 320,180" fill="none" stroke="var(--color-cst)" strokeWidth="0.6" opacity="0.3">
            <animate attributeName="d" values="M80,180 Q200,132 320,180;M80,180 Q200,172 320,180;M80,180 Q200,132 320,180" dur="12.5s" repeatCount="indefinite" />
          </path>

          {/* Center convergence */}
          <circle cx="200" cy="150" r="4" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="3;10;3" dur="9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.5;0.15" dur="9s" repeatCount="indefinite" />
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
                  <animateTransform attributeName="transform" type="scale" values="1,1;1.08,0.94;1,1" dur="8s" repeatCount="indefinite" additive="sum" />
                </ellipse>
                <ellipse cx="24" cy="22" rx="8" ry="11" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.35" />
                <line x1="24" y1="6" x2="24" y2="38" stroke="var(--color-alt)" strokeWidth="0.3" opacity="0.2" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('homeAltLabel', language) || 'Ansigtsbehandling'}</p>
              <h2 className={styles.cardTitle}>{t('homeAltTitle', language) || 'ALT'}</h2>
              <p className={styles.cardSubtitle}>{t('homeAltSubtitle', language) || 'AnsigtsLøftningsTeknik'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'alt' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              {t('homeAltDesc', language) || 'Seks lag fra hud til sjæl. Stanley Rosenbergs skånsomme bindevævsteknik arbejder gennem fem kranienerver — og genopretter ansigtet og, via den polyvagale forbindelse, hele nervesystemet. 97 muskler. Seks sessioner. Én forvandling.'}
            </p>
            <p className={styles.cardDescription2}>
              {t('homeAltDesc2', language) || 'Ansigtet er kroppens mest nerveforbundne område. Når bindevævet i de seks lag løsnes, frigøres ikke blot spænding — der åbnes en direkte kanal til det parasympatiske nervesystem. Resultatet er en forandring der kan ses udenpå og mærkes indeni.'}
            </p>
            <ul className={styles.cardBullets}>
              {(t('homeAltBullets', language) || [
                'Arbejder med fem kranienerver der styrer ansigt og hals',
                'Seks lag: hud, subkutant fedt, SMAS, muskler, dybt fedt, periost',
                'Aktiverer den ventrale vagusnerve via ansigtsmuskulaturen',
                '97 ansigtsmuskler engageres i en systematisk protokol',
                'Forbinder fysisk vævsarbejde med polyvagal regulering',
              ]).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
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
                  <animate attributeName="d" values="M8,24 Q16,2 24,24 Q32,46 40,24;M8,24 Q16,19 24,21 Q32,27 40,24;M8,24 Q16,2 24,24 Q32,46 40,24" dur="6s" repeatCount="indefinite" />
                </path>
                <circle cx="24" cy="24" r="2" fill="var(--color-whm)" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('homeWhmLabel', language) || 'Åndedræt'}</p>
              <h2 className={styles.cardTitle}>{t('homeWhmTitle', language) || 'Wim Hof'}</h2>
              <p className={styles.cardSubtitle}>{t('homeWhmSubtitle', language) || 'Metoden'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'whm' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              {t('homeWhmDesc', language) || 'Åndedræt, kulde, mindset. Tre søjler der åbner det autonome nervesystem — og beviser at viljen kan nå derhen, hvor medicinen sagde det var umuligt. Kontrolleret hyperventilation ændrer blodkemien. Kuldeeksponering træner det sympatiske respons. Dialektikken mellem komfort og stress skaber en ny kapacitet.'}
            </p>
            <p className={styles.cardDescription2}>
              {t('homeWhmDesc2', language) || 'Wim Hof-metoden er mere end vejrtrækningsøvelser. Det er et system der træner nervesystemets evne til at skifte mellem aktivering og ro — og dermed opbygger en resiliens der rækker langt ud over selve praksis. Videnskabelige studier har vist målbar påvirkning af immunforsvaret og inflammationsmarkører.'}
            </p>
            <ul className={styles.cardBullets}>
              {(t('homeWhmBullets', language) || [
                'Kontrolleret hyperventilation øger blodets pH og sænker CO₂',
                'Kuldeeksponering aktiverer brunt fedtvæv og noradrenalin',
                'Retentionsfasen træner kroppens tolerans for stress',
                'Bevidst mindset forbinder de fysiske teknikker med mental fokus',
                'Dokumenteret effekt på immunrespons i kliniske studier',
              ]).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
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
                  <animate attributeName="d" values="M6,24 Q24,9 42,24;M6,24 Q24,22 42,24;M6,24 Q24,9 42,24" dur="11s" repeatCount="indefinite" />
                </path>
                <path d="M10,28 Q24,22 38,28" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.3" />
                <circle cx="24" cy="23" r="2.5" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.25">
                  <animate attributeName="r" values="2;5.5;2" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="23" r="1" fill="var(--color-cst)" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('homeCstLabel', language) || 'Lytning'}</p>
              <h2 className={styles.cardTitle}>{t('homeCstTitle', language) || 'Kraniosakral'}</h2>
              <p className={styles.cardSubtitle}>{t('homeCstSubtitle', language) || 'Terapi'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'cst' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              {t('homeCstDesc', language) || 'Tre rytmer, én stilhed. Fra A.T. Still til James Jealous — at lytte til kroppens dybeste rytmer med fem grams tryk og uendelig tålmodighed. Det kraniosakrale system pulserer med Primary Respiration, en ufrivillig rytme uafhængig af hjerteslag og lungeåndedræt. Det er livets mest grundlæggende udtryk i form.'}
            </p>
            <p className={styles.cardDescription2}>
              {t('homeCstDesc2', language) || 'Kraniosakral terapi hviler på princippet om at kroppen besidder en medfødt selvregulerende intelligens. Ved at lytte med ekstrem sensitivitet kan behandleren opfange subtile bevægelsesmønstre der afslører, hvor systemet holder fast — og hvor det er klar til at slippe.'}
            </p>
            <ul className={styles.cardBullets}>
              {(t('homeCstBullets', language) || [
                'CRI: Den fysiske krop — 8–12 cykler/min',
                'Mid-Tide: Væskekroppen — 2–3 cykler/min',
                'Long Tide: Den energetiske bevægelse — ca. 1 cyklus/100 sek.',
                'Still point: Øjeblikke af fuldstændig stilhed og reorganisering',
                '5 grams berøring — lettere end en sommerfugls landing',
              ]).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ HERO ILLUSTRATION 2 — Nervous system convergence ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 280" className={styles.heroSvg}>
          {/* Spine / vagus trunk */}
          <path d="M200,30 Q198,140 200,250" fill="none" stroke="var(--text-primary)" strokeWidth="0.7" opacity="0.18">
            <animate attributeName="d" values="M200,30 Q190,140 200,250;M200,30 Q210,140 200,250;M200,30 Q190,140 200,250" dur="14.5s" repeatCount="indefinite" />
          </path>

          {/* Branching nerves — left */}
          <path d="M200,60 Q160,70 120,55" fill="none" stroke="var(--color-alt)" strokeWidth="1" opacity="0.55">
            <animate attributeName="d" values="M200,60 Q160,82 108,43;M200,60 Q160,58 130,63;M200,60 Q160,82 108,43" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M200,100 Q150,115 100,105" fill="none" stroke="var(--color-whm)" strokeWidth="1" opacity="0.5">
            <animate attributeName="d" values="M200,100 Q150,130 88,95;M200,100 Q150,102 110,115;M200,100 Q150,130 88,95" dur="12s" repeatCount="indefinite" />
          </path>
          <path d="M200,150 Q145,170 90,160" fill="none" stroke="var(--color-cst)" strokeWidth="1" opacity="0.45">
            <animate attributeName="d" values="M200,150 Q145,185 78,148;M200,150 Q145,155 100,170;M200,150 Q145,185 78,148" dur="13.5s" repeatCount="indefinite" />
          </path>

          {/* Branching nerves — right */}
          <path d="M200,60 Q240,70 280,55" fill="none" stroke="var(--color-alt)" strokeWidth="1" opacity="0.55">
            <animate attributeName="d" values="M200,60 Q240,82 292,43;M200,60 Q240,58 270,63;M200,60 Q240,82 292,43" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M200,100 Q250,115 300,105" fill="none" stroke="var(--color-whm)" strokeWidth="1" opacity="0.5">
            <animate attributeName="d" values="M200,100 Q250,130 312,95;M200,100 Q250,102 290,115;M200,100 Q250,130 312,95" dur="12s" repeatCount="indefinite" />
          </path>
          <path d="M200,150 Q255,170 310,160" fill="none" stroke="var(--color-cst)" strokeWidth="1" opacity="0.45">
            <animate attributeName="d" values="M200,150 Q255,185 322,148;M200,150 Q255,155 300,170;M200,150 Q255,185 322,148" dur="13.5s" repeatCount="indefinite" />
          </path>

          {/* Pulse points */}
          {[60, 100, 150].map((y) => (
            <circle key={y} cx="200" cy={y} r="3" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="r" values="2;9;2" dur={`${7.3 + y / 33}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.15;0.55;0.15" dur={`${7.3 + y / 33}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Lower body arc */}
          <path d="M140,230 Q200,200 260,230" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.1">
            <animate attributeName="d" values="M140,230 Q200,185 260,230;M140,230 Q200,220 260,230;M140,230 Q200,185 260,230" dur="14.5s" repeatCount="indefinite" />
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
              <p className={styles.cardLabel}>{t('homeNsLabel', language) || 'Den røde tråd'}</p>
              <h2 className={styles.cardTitle}>{t('homeNsTitle', language) || 'Nervesystemet'}</h2>
              <p className={styles.cardSubtitle}>{t('homeNsSubtitle', language) || 'Hvor alle tre mødes'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedNerve === 'ns' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              {t('homeNsDesc', language) || 'Alle tre praksisser deler én akse: det autonome nervesystem. ALT arbejder gennem de fem kranienerver for social kontakt. Wim Hof træner skiftet mellem sympatisk aktivering og parasympatisk hvile. Kraniosakral terapi lytter til Primary Respiration — nervesystemets dybeste udtryk for medfødt intelligens. Forskellige indgange. Samme destination.'}
            </p>
            <p className={styles.cardDescription2}>
              {t('homeNsDesc2', language) || 'Det autonome nervesystem er kroppens usynlige dirigent. Det styrer hjerterytme, fordøjelse, immunrespons og følelsesmæssig regulering — alt sammen uden bevidst kontrol. Når de tre praksisser mødes her, skabes en synergi der overstiger summen af de enkelte dele.'}
            </p>
            <ul className={styles.cardBullets}>
              {(t('homeNsBullets', language) || [
                'Vagusnerven forbinder hjerne, hjerte, lunger og tarm',
                '80% af vagus\' fibre sender information opad — fra krop til hjerne',
                'Ansigtsnerven (CN VII) er direkte koblet til trygheds-signalering',
                'Åndedræt er den eneste autonome funktion vi bevidst kan styre',
                'De tre praksisser tilgår det samme system fra tre forskellige vinkler',
              ]).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
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
                  <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="27s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="8" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.3" strokeDasharray="2,3">
                  <animateTransform attributeName="transform" type="rotate" from="360 24 24" to="0 24 24" dur="18s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="2" fill="var(--text-primary)" opacity="0.15" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('homeLoopLabel', language) || 'Feedback-kredsløbet'}</p>
              <h2 className={styles.cardTitle}>{t('homeLoopTitle', language) || 'Krop ⇄ Sind'}</h2>
              <p className={styles.cardSubtitle}>{t('homeLoopSubtitle', language) || 'Tovejs-intelligens'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedNerve === 'loop' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              {t('homeLoopDesc', language) || 'Ansigtet former nervesystemet. Nervesystemet former følelsen. Følelsen former relationen. Og relationen omformer kroppen. Dette tovejs-kredsløb er motoren i alle tre praksisser — vævsarbejde ændrer følelse, åndedræt ændrer kemi, lytning ændrer alt.'}
            </p>
            <p className={styles.cardDescription2}>
              {t('homeLoopDesc2', language) || 'Denne tovejs-intelligens er ikke abstrakt filosofi — den er fysiologisk virkelighed. Kroppens fascia-netværk, nervebaner og væskestrømme danner et kommunikationssystem der konstant sender information i begge retninger. At arbejde med kroppen er at arbejde med sindet, og omvendt.'}
            </p>
            <ul className={styles.cardBullets}>
              {(t('homeLoopBullets', language) || [
                'Bottom-up: Kropslige ændringer påvirker følelser og tanker',
                'Top-down: Mental intention påvirker vævstilstand og kemi',
                'Fascia forbinder alle strukturer i én kontinuerlig vævsmatrix',
                'Interoception — evnen til at mærke kroppen indefra — er nøglen',
                'Regulering sker i relationen mellem terapeut og klient',
              ]).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ HERO ILLUSTRATION 3 — Rhythmic stillness ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 240" className={styles.heroSvg}>
          {/* Concentric rhythm rings */}
          <circle cx="200" cy="120" r="90" fill="none" stroke="var(--color-cst)" strokeWidth="0.6" opacity="0.2">
            <animate attributeName="r" values="82;106;82" dur="16s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="65" fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity="0.25">
            <animate attributeName="r" values="57;80;57" dur="12.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="40" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="r" values="33;53;33" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="18" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.18">
            <animate attributeName="r" values="13;28;13" dur="7s" repeatCount="indefinite" />
          </circle>

          {/* Still point */}
          <circle cx="200" cy="120" r="3" fill="var(--text-primary)" opacity="0.12">
            <animate attributeName="opacity" values="0.08;0.45;0.08" dur="9s" repeatCount="indefinite" />
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
                  <animate attributeName="d" values="M12,34 Q18,18 24,8 Q30,18 36,34;M12,34 Q18,30 24,22 Q30,30 36,34;M12,34 Q18,18 24,8 Q30,18 36,34" dur="9s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('homePolyvagalLabel', language) || 'Gå dybere'}</p>
              <h2 className={styles.cardTitle}>{t('homePolyvagalTitle', language) || 'Polyvagal teori'}</h2>
              <p className={styles.cardSubtitle}>{t('homePolyvagalSubtitle', language) || 'Videnskaben om tryghed'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedDepth === 'polyvagal' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              {t('homePolyvagalDesc', language) || 'Stephen Porges\' polyvagale teori afdækker tre tilstande i det autonome nervesystem: ventral vagal (social kontakt, tryghed), sympatisk (kamp/flugt) og dorsal vagal (frys, nedlukning). Alle tre praksisser i AT Dynamics arbejder på at genoprette ventral vagal funktion — den tilstand hvor heling, forbindelse og vækst bliver mulig.'}
            </p>
            <p className={styles.cardDescription2}>
              {t('homePolyvagalDesc2', language) || 'Den polyvagale forståelse revolutionerede synet på trauma og regulering. Det handler ikke om at undgå stress — men om at opbygge nervesystemets kapacitet til at bevæge sig fleksibelt mellem tilstande og vende tilbage til tryghed. Det er præcis det, de tre praksisser træner.'}
            </p>
            <ul className={styles.cardBullets}>
              {(t('homePolyvagalBullets', language) || [
                'Ventral vagal: Tryghed, social kontakt, kreativitet og heling',
                'Sympatisk: Mobilisering, kamp-eller-flugt, handling under pres',
                'Dorsal vagal: Nedlukning, frys, energibesparelse, dissociation',
                'Neuroception: Nervesystemets ubevidste scanning af sikkerhed',
                'Co-regulering: Vi regulerer hinanden gennem nærvær og stemmeklang',
              ]).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
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
                  <animate attributeName="r" values="7;18;7" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="1.5" fill="var(--color-cst)" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('homePrimaryLabel', language) || 'Den dybeste rytme'}</p>
              <h2 className={styles.cardTitle}>{t('homePrimaryTitle', language) || 'Primary Respiration'}</h2>
              <p className={styles.cardSubtitle}>{t('homePrimarySubtitle', language) || 'Livets åndedræt under åndedrættet'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedDepth === 'primary' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <p className={styles.cardDescription}>
              {t('homePrimaryDesc', language) || 'Under lungeåndedrættet og under hjerteSlaget findes en langsommere, finere rytme. Primary Respiration — den kraniosakrale puls — bevæger sig med 6–12 cykler i minuttet. Det er kroppens mest grundlæggende udtryk for liv, til stede fra den embryologiske udvikling til døden. Når denne rytme er fri, følger sundhed.'}
            </p>
            <p className={styles.cardDescription2}>
              {t('homePrimaryDesc2', language) || 'William Garner Sutherland opdagede denne rytme i begyndelsen af 1900-tallet og kaldte den "Breath of Life". Senere udviklede James Jealous den biodynamiske tilgang, der betragter denne rytme som et udtryk for kroppens iboende sundhed — ikke en mekanisk bevægelse, men en levende kraft.'}
            </p>
            <ul className={styles.cardBullets}>
              {(t('homePrimaryBullets', language) || [
                'Opdaget af W.G. Sutherland — elev af osteopatiens grundlægger',
                'Cerebrospinalvæsken pulserer uafhængigt af hjerte og lunger',
                'Rytmen er til stede fra embryonalperioden til efter døden',
                'Biodynamisk tilgang: At lytte til sundhed frem for at fixe sygdom',
                'Still point-induktion kan nulstille hele nervesystemets tonus',
              ]).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ DAILY READING ═══ */}
      <section className={styles.todaySection}>
        <div className={styles.todayCard}>
          <p className={styles.todayLabel}>{t('homeTodayLabel', language) || 'Dagens læsning'}</p>
          <p className={styles.todayQuote}>
            <em>
              {t('homeTodayQuote', language) || 'Kroppen er ikke noget der skal repareres — den er en proces der skal lyttes til. Hvert åndedræt, hver stilhed, hver berøring er en samtale med noget dybere end tanken.'}
            </em>
          </p>
        </div>
      </section>

      {/* ═══ DEEPER TEASER ═══ */}
      <section className={styles.deeperTeaser}>
        <div className={styles.deeperTeaserCard} onClick={() => onNavigate && onNavigate('deeper')}>
          <div className={styles.deeperTeaserIcon}>
            <svg viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="18" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="r" values="15;22;15" dur="12.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="24" cy="24" r="12" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.25">
                <animate attributeName="r" values="9;16;9" dur="9s" repeatCount="indefinite" />
              </circle>
              <circle cx="24" cy="24" r="6" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.35">
                <animate attributeName="r" values="3.5;9.5;3.5" dur="6s" repeatCount="indefinite" />
              </circle>
              <circle cx="24" cy="24" r="2" fill="var(--text-primary)" opacity="0.3" />
            </svg>
          </div>
          <div className={styles.deeperTeaserContent}>
            <p className={styles.deeperTeaserLabel}>{t('homeDeeperTeaserLabel', language) || 'Udforsk i dybden'}</p>
            <h2 className={styles.deeperTeaserTitle}>{t('homeDeeperTeaserTitle', language) || 'Gå dybere ind i de tre praksisser'}</h2>
            <p className={styles.deeperTeaserSub}>
              {t('homeDeeperTeaserSub', language) || 'Detaljeret viden, interaktive øvelser og den fulde sammenhæng mellem ansigt, åndedræt og kraniosakral terapi.'}
            </p>
          </div>
          <span className={styles.deeperTeaserArrow}>→</span>
        </div>
      </section>

      {/* ═══ PILLS — Navigate to dedicated screens ═══ */}
      <section className={styles.pillsSection}>
        <div className={styles.pill} onClick={() => onNavigate && onNavigate('session-plan')}>
          <span className={styles.pillDot} style={{ background: 'var(--color-alt)' }} />
          <span className={styles.pillText}>{t('homePill1', language) || 'Din sessionsplan'}</span>
        </div>
        <div className={styles.pill} onClick={() => onNavigate && onNavigate('breath-practice')}>
          <span className={styles.pillDot} style={{ background: 'var(--color-whm)' }} />
          <span className={styles.pillText}>{t('homePill2', language) || 'Åndedrætspraksis'}</span>
        </div>
        <div className={styles.pill} onClick={() => onNavigate && onNavigate('three-rhythms')}>
          <span className={styles.pillDot} style={{ background: 'var(--color-cst)' }} />
          <span className={styles.pillText}>{t('homePill3', language) || 'De tre rytmer'}</span>
        </div>
        <div className={styles.pill} onClick={() => onNavigate && onNavigate('deeper')}>
          <span className={styles.pillDot} style={{ background: 'var(--text-secondary)' }} />
          <span className={styles.pillText}>{t('homePill4', language) || 'Dyk dybere'}</span>
        </div>
      </section>

      {/* Bottom spacer for nav */}
      <ScrollToTop language={language} />
      <div className={styles.bottomSpacer} />
    </main>
  )
}
