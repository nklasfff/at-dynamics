import { useState } from 'react'
import styles from './DeeperPage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function BreathPracticePage({ language }) {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggle = (id) => setExpandedCard(expandedCard === id ? null : id)

  return (
    <main className={styles.page}>
      <div className={styles.ambientGlow} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t('breathEyebrow', language) || 'Praksis'}</p>
        <h1 className={styles.title}>{t('breathTitle', language) || 'Åndedrætspraksis'}</h1>
        <p className={styles.subtitle}>
          {t('breathSubtitle', language) || 'Åndedrættet er broen mellem bevidst og ubevidst — den eneste autonome funktion, vi kan styre med viljen. Udforsk det som grundlag for alle tre discipliner.'}
        </p>
      </header>

      {/* ═══ HERO — Breath wave transformation ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 240" className={styles.heroSvg}>
          <defs>
            <linearGradient id="bpWhm" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-whm)" stopOpacity="0.7" />
              <stop offset="50%" stopColor="var(--color-whm)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-whm)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="bpAlt" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-alt)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-alt)" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="bpCst" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-cst)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-cst)" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Fast shallow waves — left side */}
          <path d="M20,120 Q35,100 50,120 Q65,140 80,120 Q95,100 110,120 Q125,140 140,120" fill="none" stroke="url(#bpWhm)" strokeWidth="1.2">
            <animate attributeName="d" values="M20,120 Q35,92 50,120 Q65,148 80,120 Q95,92 110,120 Q125,148 140,120;M20,120 Q35,108 50,120 Q65,132 80,120 Q95,108 110,120 Q125,132 140,120;M20,120 Q35,92 50,120 Q65,148 80,120 Q95,92 110,120 Q125,148 140,120" dur="3.5s" repeatCount="indefinite" />
          </path>

          {/* Deep slow wave — center */}
          <path d="M130,120 Q175,55 220,120 Q265,185 310,120" fill="none" stroke="var(--color-whm)" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="d" values="M130,120 Q175,30 220,120 Q265,210 310,120;M130,120 Q175,75 220,120 Q265,165 310,120;M130,120 Q175,30 220,120 Q265,210 310,120" dur="7s" repeatCount="indefinite" />
          </path>

          {/* Dissolving into stillness — right side */}
          <path d="M300,120 Q330,110 360,120 Q380,125 400,120" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.25">
            <animate attributeName="d" values="M300,120 Q330,102 360,120 Q380,132 400,120;M300,120 Q330,116 360,120 Q380,124 400,120;M300,120 Q330,102 360,120 Q380,132 400,120" dur="12.5s" repeatCount="indefinite" />
          </path>

          {/* ALT undertone wave */}
          <path d="M60,135 Q130,125 200,135 Q270,145 340,135" fill="none" stroke="url(#bpAlt)" strokeWidth="0.5">
            <animate attributeName="d" values="M60,135 Q130,116 200,135 Q270,154 340,135;M60,135 Q130,131 200,134 Q270,137 340,135;M60,135 Q130,116 200,135 Q270,154 340,135" dur="11s" repeatCount="indefinite" />
          </path>

          {/* CST undertone wave */}
          <path d="M80,150 Q180,140 280,150 Q340,155 380,150" fill="none" stroke="url(#bpCst)" strokeWidth="0.4">
            <animate attributeName="d" values="M80,150 Q180,131 280,150 Q340,163 380,150;M80,150 Q180,146 280,149 Q340,152 380,150;M80,150 Q180,131 280,150 Q340,163 380,150" dur="16s" repeatCount="indefinite" />
          </path>

          {/* Lung-like expansion shapes — left lung */}
          <ellipse cx="170" cy="120" rx="28" ry="45" fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="ry" values="38;62;38" dur="6s" repeatCount="indefinite" />
            <animate attributeName="rx" values="24;38;24" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.32;0.1" dur="6s" repeatCount="indefinite" />
          </ellipse>

          {/* Lung-like expansion shapes — right lung */}
          <ellipse cx="230" cy="120" rx="28" ry="45" fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="ry" values="38;62;38" dur="6s" repeatCount="indefinite" />
            <animate attributeName="rx" values="24;38;24" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.32;0.1" dur="6s" repeatCount="indefinite" />
          </ellipse>

          {/* Diaphragm line between lungs */}
          <path d="M140,155 Q200,170 260,155" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.2">
            <animate attributeName="d" values="M140,155 Q200,185 260,155;M140,155 Q200,157 260,155;M140,155 Q200,185 260,155" dur="6s" repeatCount="indefinite" />
          </path>

          {/* Central breath dot */}
          <circle cx="200" cy="120" r="3" fill="var(--color-whm)" opacity="0.3">
            <animate attributeName="r" values="1;10;1" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* Breath cycle arrows — inhale */}
          <path d="M200,85 L200,70" fill="none" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.2" markerEnd="none">
            <animate attributeName="opacity" values="0.05;0.45;0.05" dur="6s" repeatCount="indefinite" />
          </path>
          {/* Breath cycle arrows — exhale */}
          <path d="M200,155 L200,170" fill="none" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.2">
            <animate attributeName="opacity" values="0.45;0.05;0.45" dur="6s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* ═══ CARD 1 — Det bevidste åndedræt ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'conscious' ? styles.expanded : ''}`}
          onClick={() => toggle('conscious')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M6,24 Q15,10 24,24 Q33,38 42,24" fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.6">
                  <animate attributeName="d" values="M6,24 Q15,2 24,24 Q33,46 42,24;M6,24 Q15,18 24,24 Q33,30 42,24;M6,24 Q15,2 24,24 Q33,46 42,24" dur="5s" repeatCount="indefinite" />
                </path>
                <ellipse cx="24" cy="24" rx="10" ry="14" fill="none" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.2">
                  <animate attributeName="ry" values="11;22;11" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="rx" values="8;16;8" dur="5s" repeatCount="indefinite" />
                </ellipse>
                <circle cx="24" cy="24" r="2" fill="var(--color-whm)" opacity="0.35">
                  <animate attributeName="r" values="1;6;1" dur="5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('breathConsciousLabel', language) || 'Grundlaget'}</p>
              <h2 className={styles.cardTitle}>{t('breathConsciousTitle', language) || 'Det bevidste åndedræt'}</h2>
              <p className={styles.cardSubtitle}>{t('breathConsciousSubtitle', language) || 'Porten mellem vilje og autonomi'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'conscious' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('breathConsciousText', language) || 'Åndedrættet er den eneste autonome funktion, vi bevidst kan styre. Det gør det til den mest kraftfulde bro mellem det viljestyrte og det ufrivillige nervesystem. Hver tradition — fra yogisk pranayama til moderne klinisk vejrtrækning — anerkender dette. Når du bevidst ændrer dit åndedrætssmønster, ændrer du direkte din neurokemi, din hjertefrekvensvariabilitet og din emotionelle tilstand.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('breathConsciousTextExtra', language) || 'Mellemgulvet er ikke bare en åndedrætsmuskel — det er kroppens centrale pumpe. Det masserer hjertet nedefra, bevæger indvoldene rytmisk, skaber de trykændringer der driver cerebrospinalvæskens flow, og er direkte innerveret af nervus phrenicus (C3-C5). Et fastlåst mellemgulv fastlåser alt.'}
              </p>
              <ul className={styles.bullets}>
                {(t('breathConsciousBullets', language) || [
                  'Åndedrættet er den eneste bevidste adgang til det autonome nervesystem',
                  'Hvert åndedrag ændrer blodets pH, hjerterytmen og det emotionelle grundlag',
                  'Mellemgulvet masserer hjertet, leveren og maven med hver indånding',
                  'Nervus phrenicus forbinder halshvirvlerne direkte med åndedrætscentret',
                  'Et frit åndedræt er forudsætningen for al dybere kropslig forandring',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ CARD 2 — Åndedræt i de tre praksisser ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'three' ? styles.expanded : ''}`}
          onClick={() => toggle('three')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M6,18 Q15,10 24,18 Q33,26 42,18" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.5">
                  <animate attributeName="d" values="M6,18 Q15,3 24,18 Q33,33 42,18;M6,18 Q15,14 24,18 Q33,22 42,18;M6,18 Q15,3 24,18 Q33,33 42,18" dur="6s" repeatCount="indefinite" />
                </path>
                <path d="M6,24 Q15,16 24,24 Q33,32 42,24" fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity="0.5">
                  <animate attributeName="d" values="M6,24 Q15,8 24,24 Q33,40 42,24;M6,24 Q15,20 24,24 Q33,28 42,24;M6,24 Q15,8 24,24 Q33,40 42,24" dur="5s" repeatCount="indefinite" />
                </path>
                <path d="M6,30 Q15,22 24,30 Q33,38 42,30" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.5">
                  <animate attributeName="d" values="M6,30 Q15,15 24,30 Q33,45 42,30;M6,30 Q15,26 24,30 Q33,34 42,30;M6,30 Q15,15 24,30 Q33,45 42,30" dur="12.5s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('breathThreeLabel', language) || 'Tre perspektiver'}</p>
              <h2 className={styles.cardTitle}>{t('breathThreeTitle', language) || 'Åndedræt i de tre praksisser'}</h2>
              <p className={styles.cardSubtitle}>{t('breathThreeSubtitle', language) || 'Samme luft, tre sprog'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'three' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('breathThreeText', language) || 'I Wim Hof er åndedrættet et redskab — kontrolleret hyperventilation efterfulgt af retention skaber målbare ændringer i blodets pH, adrenalin og immunrespons. I ALT understøtter åndedrættet vævsarbejdet — behandleren koordinerer berøringen med klientens åndedræt og bruger udåndingen til at frigøre fascielle restriktioner. I kraniosakral terapi lyttes der til åndedrættet — ikke lungeåndedrættet, men Primær Respiration, den dybere kraniosakrale bevægelse.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('breathThreeTextExtra', language) || 'Disse tre relationer til åndedrættet — at kommandere det, at koordinere med det og at lytte til det — repræsenterer en progression fra aktiv til receptiv. Mesterskab i åndedrætsarbejde betyder at beherske alle tre tilstande og vide, hvornår hver er passende. Nogle gange skal du drive systemet; nogle gange skal du følge det; nogle gange skal du blot bevidne det.'}
              </p>
              <ul className={styles.bullets}>
                {(t('breathThreeBullets', language) || [
                  'Wim Hof bruger åndedrættet som aktivt værktøj til at ændre blodkemi',
                  'ALT synkroniserer berøring med klientens udåndingsfase for at løsne væv',
                  'Kraniosakral terapi lytter til Primær Respiration bag lungeåndedrættet',
                  'Progressionen fra kommando til lytning afspejler nervesystemets modning',
                  'Den fuldstændige behandler behersker alle tre åndedrætsrelationer',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ ILLUSTRATION 2 — Vagal tone and breath-heart coherence ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 200" className={styles.heroSvg}>
          {/* Heart rhythm baseline */}
          <path d="M40,100 L120,100 L135,70 L145,130 L155,60 L165,110 L175,100 L260,100 L275,70 L285,130 L295,60 L305,110 L315,100 L380,100" fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="opacity" values="0.15;0.55;0.15" dur="3.5s" repeatCount="indefinite" />
          </path>

          {/* Breath wave modulating the heart */}
          <path d="M30,100 Q110,60 200,100 Q290,140 370,100" fill="none" stroke="var(--color-whm)" strokeWidth="1.2" opacity="0.2">
            <animate attributeName="d" values="M30,100 Q110,38 200,100 Q290,162 370,100;M30,100 Q110,78 200,100 Q290,122 370,100;M30,100 Q110,38 200,100 Q290,162 370,100" dur="7s" repeatCount="indefinite" />
          </path>

          {/* Vagus nerve suggestion — descending path */}
          <path d="M200,30 Q195,50 200,70 Q205,90 200,110 Q195,130 200,150 Q205,170 200,185" fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.15" strokeDasharray="3,5">
            <animate attributeName="stroke-dashoffset" values="0;-24" dur="3.5s" repeatCount="indefinite" />
          </path>

          {/* Heart center pulse */}
          <circle cx="200" cy="100" r="8" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.2">
            <animate attributeName="r" values="5;18;5" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.12;0.45;0.12" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="100" r="3" fill="var(--color-whm)" opacity="0.3">
            <animate attributeName="r" values="2;7;2" dur="3.5s" repeatCount="indefinite" />
          </circle>

          {/* Inhale label — left */}
          <text x="110" y="55" fill="var(--color-whm)" fontSize="7" opacity="0.2" fontFamily="Inter, sans-serif" textAnchor="middle">{t('breathSvgInhale', language) || 'Indånding'}</text>
          {/* Exhale label — right */}
          <text x="290" y="150" fill="var(--color-whm)" fontSize="7" opacity="0.2" fontFamily="Inter, sans-serif" textAnchor="middle">{t('breathSvgExhale', language) || 'Udånding'}</text>

          {/* Coherence wave — outer gentle ring */}
          <ellipse cx="200" cy="100" rx="160" ry="60" fill="none" stroke="var(--color-whm)" strokeWidth="0.3" opacity="0.08">
            <animate attributeName="ry" values="52;78;52" dur="7s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>

      {/* ═══ CARD 3 — Vagal tone og åndedrættet ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'vagal' ? styles.expanded : ''}`}
          onClick={() => toggle('vagal')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {/* Heart rate pulse */}
                <path d="M4,24 L14,24 L17,16 L21,32 L25,12 L29,28 L32,24 L44,24" fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" />
                </path>
                {/* Vagus nerve line descending */}
                <path d="M24,6 Q22,14 24,20 Q26,26 24,34 Q22,40 24,44" fill="none" stroke="var(--color-whm)" strokeWidth="0.35" opacity="0.2" strokeDasharray="2,3">
                  <animate attributeName="stroke-dashoffset" values="0;-15" dur="3.5s" repeatCount="indefinite" />
                </path>
                <circle cx="24" cy="24" r="2" fill="var(--color-whm)" opacity="0.3">
                  <animate attributeName="r" values="0.8;4.5;0.8" dur="3.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('breathVagalLabel', language) || 'Nervesystemet'}</p>
              <h2 className={styles.cardTitle}>{t('breathVagalTitle', language) || 'Vagal tone'}</h2>
              <p className={styles.cardSubtitle}>{t('breathVagalSubtitle', language) || 'Åndedrættets direkte linje til nervesystemet'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'vagal' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('breathVagalText', language) || 'Hjertefrekvensvariabilitet (HRV) — den subtile variation i tid mellem hjerteslag — er guldstandarden for måling af vagal tone. Høj HRV betyder et fleksibelt, modstandsdygtigt nervesystem. Lav HRV korrelerer med stress, inflammation og sygdom. Langsom, dyb vejrtrækning med forlænget udånding er den mest direkte vej til at øge vagal tone og skifte nervesystemet mod hvile og reparation.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('breathVagalTextExtra', language) || 'Mekanismen er elegant: under indånding accelererer hjertet en smule (sympatisk). Under udånding bremser det (parasympatisk via vagus). Ved at forlænge udåndingen (f.eks. indånd 4 sekunder, udånd 6-8 sekunder) tilbringer du mere tid i parasympatisk aktivering. Over uger af praksis omformer dette faktisk vagusbanerne og skaber varig forandring i den grundlæggende regulering.'}
              </p>
              <ul className={styles.bullets}>
                {(t('breathVagalBullets', language) || [
                  'HRV er det mest pålidelige mål for nervesystemets fleksibilitet',
                  'Indånding aktiverer det sympatiske, udånding det parasympatiske',
                  'Forlænget udånding er den simpleste vej til parasympatisk aktivering',
                  'Vagal tone kan trænes — nervesystemet omformes med konsistent praksis',
                  'Lav HRV korrelerer med inflammation, angst og hjerte-kar-sygdom',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ CARD 4 — Daglig praksis ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'daily' ? styles.expanded : ''}`}
          onClick={() => toggle('daily')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {/* Sunrise arc */}
                <path d="M8,34 Q24,10 40,34" fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity="0.5" />
                {/* Horizon line */}
                <line x1="4" y1="34" x2="44" y2="34" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.25" />
                {/* Sun rays */}
                <circle cx="24" cy="28" r="5" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.4">
                  <animate attributeName="r" values="3;10;3" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
                </circle>
                {/* Breath wave through sunrise */}
                <path d="M10,28 Q17,22 24,28 Q31,34 38,28" fill="none" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="d" values="M10,28 Q17,16 24,28 Q31,40 38,28;M10,28 Q17,25 24,27 Q31,29 38,28;M10,28 Q17,16 24,28 Q31,40 38,28" dur="5.5s" repeatCount="indefinite" />
                </path>
                <circle cx="24" cy="28" r="1.5" fill="var(--color-whm)" opacity="0.35" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('breathDailyLabel', language) || 'Implementering'}</p>
              <h2 className={styles.cardTitle}>{t('breathDailyTitle', language) || 'Daglig praksis'}</h2>
              <p className={styles.cardSubtitle}>{t('breathDailySubtitle', language) || 'Fem minutter der ændrer alt'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'daily' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('breathDailyText', language) || 'Du behøver ikke en time. Fem minutters bevidst vejrtrækning hver morgen skaber en kaskadeeffekt gennem hele dagen. Nøglen er konsistens, ikke varighed. Begynd med kohærensvejrtrækning: lige lang indånding og udånding i et tempo på 5,5 åndedrag per minut (ca. 5,5 sekunder ind, 5,5 sekunder ud). Denne specifikke frekvens maksimerer hjerte-lunge-synkroniseringen og er dokumenteret til at optimere HRV på tværs af populationer.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('breathDailyTextExtra', language) || 'Byg din praksis i lag. Uge 1-2: 5 minutters kohærensvejrtrækning morgen og aften. Uge 3-4: Tilføj 2 minutters forlænget udånding (4 ind, 7 ud). Uge 5+: Begynd at eksperimentere med åndedrætspauser efter udånding. Denne progressive tilgang respekterer nervesystemets behov for gradvis tilpasning og forebygger den angst, der kan opstå ved aggressive vejrtrækningspraksisser.'}
              </p>
              <ul className={styles.bullets}>
                {(t('breathDailyBullets', language) || [
                  'Kohærensvejrtrækning ved 5,5 åndedrag/minut optimerer HRV',
                  'Konsistens slår intensitet — fem minutter dagligt overgår en time ugentligt',
                  'Forlænget udånding (4 ind, 7 ud) aktiverer vagusnerven direkte',
                  'Progressiv opbygning forebygger angst og respekterer nervesystemet',
                  'Morgenåndedrættet sætter den autonome grundtone for hele dagen',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* Bottom spacer */}
      <ScrollToTop language={language} />
      <div className={styles.bottomSpacer} />
    </main>
  )
}
