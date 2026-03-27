import { useState } from 'react'
import styles from './DeeperPage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function AltPage({ language }) {
  const [expanded, setExpanded] = useState(null)
  const toggle = (id) => setExpanded(expanded === id ? null : id)

  return (
    <main className={styles.page}>
      <div className={styles.ambientGlow} />

      <header className={styles.header}>
        <p className={styles.eyebrow}>{t('altEyebrow', language) || 'Ansigtsbehandling'}</p>
        <h1 className={styles.title}>{t('altTitle', language) || 'ALT'}</h1>
        <p className={styles.subtitle}>
          {t('altSubtitle', language) || 'AnsigtsLøftningsTeknik. Seks lag af væv, fem kranienerver og en direkte linje til nervesystemets kerne.'}
        </p>
      </header>

      {/* ═══ HERO — Face meridian map ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 320" className={styles.heroSvg}>
          {/* Outer face contour */}
          <ellipse cx="200" cy="155" rx="95" ry="130" fill="none" stroke="var(--color-alt)" strokeWidth="1.4" opacity="0.55">
            <animateTransform attributeName="transform" type="scale" values="1,1;1.035,0.985;1,1" dur="12.5s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          {/* Mid layers */}
          <ellipse cx="200" cy="155" rx="72" ry="100" fill="none" stroke="var(--color-alt)" strokeWidth="1" opacity="0.4">
            <animateTransform attributeName="transform" type="scale" values="1,1;0.97,1.025;1,1" dur="11s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          <ellipse cx="200" cy="155" rx="50" ry="70" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.3" />
          <ellipse cx="200" cy="155" rx="28" ry="40" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.2" />

          {/* Meridian/nerve lines */}
          <path d="M200,25 Q195,80 185,130 Q178,170 182,220 Q185,260 200,285" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.4" strokeDasharray="3,6">
            <animate attributeName="stroke-dashoffset" values="0;-27" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M200,25 Q205,80 215,130 Q222,170 218,220 Q215,260 200,285" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.4" strokeDasharray="3,6">
            <animate attributeName="stroke-dashoffset" values="0;-27" dur="7s" repeatCount="indefinite" />
          </path>
          {/* Horizontal nerve branches */}
          <path d="M140,100 Q170,95 200,100 Q230,95 260,100" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.3" strokeDasharray="2,5">
            <animate attributeName="stroke-dashoffset" values="0;21" dur="5.5s" repeatCount="indefinite" />
          </path>
          <path d="M130,155 Q165,148 200,155 Q235,148 270,155" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.3" strokeDasharray="2,5">
            <animate attributeName="stroke-dashoffset" values="0;21" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M150,200 Q175,194 200,200 Q225,194 250,200" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.25" strokeDasharray="2,5">
            <animate attributeName="stroke-dashoffset" values="0;21" dur="7s" repeatCount="indefinite" />
          </path>
          {/* Nerve junction points */}
          {[[170,90],[230,90],[155,150],[245,150],[175,200],[225,200]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.4">
              <animate attributeName="r" values="1;9;1" dur={`${6.3 + i * 0.9}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${6.3 + i * 0.9}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {/* Center axis */}
          <line x1="200" y1="25" x2="200" y2="285" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.12" />
        </svg>
      </div>

      {/* ═══ CARD 1 — The six layers ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'layers' ? styles.expanded : ''}`} onClick={() => toggle('layers')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {[1,2,3,4,5,6].map(i => (
                  <ellipse key={i} cx="24" cy="23" rx={4+i*3} ry={5+i*4} fill="none" stroke="var(--color-alt)" strokeWidth={0.6-i*0.06} opacity={0.5-i*0.06} />
                ))}
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('altLayersLabel', language) || 'Anatomi'}</p>
              <h2 className={styles.cardTitle}>{t('altLayersTitle', language) || 'De seks lag'}</h2>
              <p className={styles.cardSubtitle}>{t('altLayersSubtitle', language) || 'Fra overflade til dybde'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'layers' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('altLayersText', language) || 'Ansigtets arkitektur er lagdelt som en geologisk formation. Yderst ligger epidermis og dermis — den synlige hud, der bærer mærker af tid og vind. Derunder hviler det subkutane fedtlag, der giver ansigtet dets volumen og blødhed, men som også huser et tæt netværk af nerver og blodkar.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('altLayersTextExtra', language) || 'Det tredje lag er SMAS — det superficielle muskuloaponeurotiske system — et sammenhængende bindevævsark der forbinder alle ansigtsmuskler til ét funktionelt hele. Under SMAS ligger den dybe muskulatur, derefter det dybe fedtlag (som adskiller muskler fra knogle), og endelig periosten — den levende hinde der omslutter selve knoglen. Hvert lag har sin egen konsistens, sin egen nervation og sin egen respons på berøring.'}
              </p>
              <ul className={styles.bullets}>
                {(t('altLayersBullets', language) || [
                  'Hud: den sensoriske grænseflade — registrerer temperatur, tryk, smerte',
                  'Subkutant fedt: volumen og nervenetværk i ét',
                  'SMAS: bindevævsarket der forener alle ansigtsmuskler',
                  'Dyb muskulatur: tyggemuskler, mimiske muskler, udtrykkets motor',
                  'Periost og knogle: den stille base alt andet hviler på'
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ CARD 2 — The five cranial nerves ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'nerves' ? styles.expanded : ''}`} onClick={() => toggle('nerves')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="14" r="6" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.3" />
                <path d="M24,20 L18,32" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.4" />
                <path d="M24,20 L30,32" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.4" />
                <path d="M24,20 L14,28" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.3" />
                <path d="M24,20 L34,28" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.3" />
                <path d="M24,20 L24,36" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('altNervesLabel', language) || 'Neuroanatomi'}</p>
              <h2 className={styles.cardTitle}>{t('altNervesTitle', language) || 'Fem kranienerver'}</h2>
              <p className={styles.cardSubtitle}>{t('altNervesSubtitle', language) || 'Ansigtet som nervesystemets spejl'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'nerves' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('altNervesText', language) || 'Trigeminus (V) er ansigtet store sensoriske nerve — den registrerer alt fra let berøring til dyb smerte og dækker pande, kinder og kæbe i tre forgreninger. Facialis (VII) styrer mimikken: hvert smil, hver rynken, hvert løftet øjenbryn er facialis\' værk.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('altNervesTextExtra', language) || 'Glossopharyngeus (IX) innerverer svælget og tungens bageste del og er involveret i synkerefleksen og smagssansen. Vagus (X) — den længste kranienerve — sender forgreninger til øret, strubehovedet og derfra videre til hjerte, lunger og tarmkanal. Accessorius (XI) styrer nakke- og skuldermuskulaturen. Tilsammen danner disse fem nerver en sensorisk-motorisk bro mellem ansigtet og hjernestammens autonome centre.'}
              </p>
              <ul className={styles.bullets}>
                {(t('altNervesBullets', language) || [
                  'Trigeminus (V): tre grene dækker hele ansigtet sensorisk',
                  'Facialis (VII): 42 mimiske muskler under én nerves kommando',
                  'Glossopharyngeus (IX): svælg, smag og synkekoordination',
                  'Vagus (X): den lange vandrer — fra øre til tarmkanal',
                  'Accessorius (XI): nakke og skulder — spændingens arnested'
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ MID ILLUSTRATION — Nerve branching tree ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 200" className={styles.heroSvg}>
          {/* Central trunk */}
          <path d="M200,10 Q198,100 200,190" fill="none" stroke="var(--color-alt)" strokeWidth="1.2" opacity="0.4">
            <animate attributeName="d" values="M200,10 Q193,100 200,190;M200,10 Q207,100 200,190;M200,10 Q193,100 200,190" dur="12.5s" repeatCount="indefinite" />
          </path>
          {/* Left branches — five nerves */}
          <path d="M200,40 Q170,50 130,35" fill="none" stroke="var(--color-alt)" strokeWidth="1" opacity="0.45">
            <animate attributeName="d" values="M200,40 Q158,56 118,28;M200,40 Q180,40 148,42;M200,40 Q158,56 118,28" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M200,70 Q160,82 120,72" fill="none" stroke="var(--color-alt)" strokeWidth="0.9" opacity="0.4">
            <animate attributeName="d" values="M200,70 Q148,90 108,63;M200,70 Q174,72 138,76;M200,70 Q148,90 108,63" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M200,100 Q155,115 110,105" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="d" values="M200,100 Q142,124 97,95;M200,100 Q172,104 128,108;M200,100 Q142,124 97,95" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M200,130 Q160,145 120,138" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.3" />
          <path d="M200,155 Q165,168 130,162" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.25" />
          {/* Right branches — mirrored */}
          <path d="M200,40 Q230,50 270,35" fill="none" stroke="var(--color-alt)" strokeWidth="1" opacity="0.45">
            <animate attributeName="d" values="M200,40 Q242,56 282,28;M200,40 Q220,40 252,42;M200,40 Q242,56 282,28" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M200,70 Q240,82 280,72" fill="none" stroke="var(--color-alt)" strokeWidth="0.9" opacity="0.4">
            <animate attributeName="d" values="M200,70 Q252,90 292,63;M200,70 Q226,72 262,76;M200,70 Q252,90 292,63" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M200,100 Q245,115 290,105" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="d" values="M200,100 Q258,124 303,95;M200,100 Q228,104 272,108;M200,100 Q258,124 303,95" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M200,130 Q240,145 280,138" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.3" />
          <path d="M200,155 Q235,168 270,162" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.25" />
          {/* Junction pulses */}
          {[40,70,100,130,155].map((y,i) => (
            <circle key={i} cx="200" cy={y} r="3" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.4">
              <animate attributeName="r" values="1;9;1" dur={`${6.3+i*1.35}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${6.3+i*1.35}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      </div>

      {/* ═══ CARD 3 — Rosenberg's method ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'method' ? styles.expanded : ''}`} onClick={() => toggle('method')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <ellipse cx="24" cy="22" rx="12" ry="16" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.4">
                  <animateTransform attributeName="transform" type="scale" values="1,1;1.05,0.965;1,1" dur="8s" repeatCount="indefinite" additive="sum" />
                </ellipse>
                <path d="M16,18 Q20,16 24,18 Q28,16 32,18" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.3" />
                <path d="M19,28 Q24,31 29,28" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.25" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('altMethodLabel', language) || 'Metoden'}</p>
              <h2 className={styles.cardTitle}>{t('altMethodTitle', language) || 'Stanley Rosenberg'}</h2>
              <p className={styles.cardSubtitle}>{t('altMethodSubtitle', language) || 'En livstids forskning i berøring'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'method' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('altMethodText', language) || 'Stanley Rosenberg tilbragte over fire årtier med at studere sammenhængen mellem ansigtsbehandling og nervesystemet. Hans centrale indsigt var, at konventionel ansigtsbehandling overser nervesystemets rolle — og at ægte, varig forandring i ansigtets struktur kun kan opnås ved at adressere det autonome nervesystems tilstand samtidig med vævet.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('altMethodTextExtra', language) || 'Hans protokol følger en bestemt sekvens: først overfladen, derefter de dybere lag, altid med respekt for vævets egen modtagelighed. Der presses aldrig igennem modstand. I stedet venter behandleren på, at vævet inviterer til den næste dybde. Denne tilgang — tålmodig, lyttende, lagdelt — adskiller ALT fundamentalt fra kosmetisk ansigtsbehandling. Det er ikke reparation. Det er genoprettelse af en samtale mellem væv og nerve.'}
              </p>
              <ul className={styles.bullets}>
                {(t('altMethodBullets', language) || [
                  'Over 40 års klinisk erfaring med ansigt og nervesystem',
                  'Behandlingssekvensen følger vævets egen parathed',
                  'Modstand mødes med tålmodighed, aldrig med kraft',
                  'Ansigtsbehandling som nervesystemsregulering — ikke kosmetik',
                  'Resultater der holder fordi de adresserer årsag, ikke symptom'
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ CARD 4 — The polyvagal connection ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'vagal' ? styles.expanded : ''}`} onClick={() => toggle('vagal')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M24,8 Q20,20 24,32 Q28,40 24,44" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.4">
                  <animate attributeName="d" values="M24,8 Q14,20 24,32 Q34,40 24,44;M24,8 Q32,20 24,32 Q16,40 24,44;M24,8 Q14,20 24,32 Q34,40 24,44" dur="10s" repeatCount="indefinite" />
                </path>
                <circle cx="24" cy="8" r="3" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('altVagalLabel', language) || 'Den polyvagale bro'}</p>
              <h2 className={styles.cardTitle}>{t('altVagalTitle', language) || 'Ansigt og vagusnerve'}</h2>
              <p className={styles.cardSubtitle}>{t('altVagalSubtitle', language) || 'Hvorfor ansigtet regulerer kroppen'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'vagal' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('altVagalText', language) || 'Stephen Porges\' polyvagale teori forklarer, hvorfor ansigtet har så stor indflydelse på hele kroppens tilstand. Den ventrale vagusnerve — den nyeste evolutionært — innerverer ansigtsmuskulaturen, mellemøret, strubehovedet og hjertet i ét sammenhængende kredsløb. Porges kalder dette systemet for social engagement — vores evne til forbindelse.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('altVagalTextExtra', language) || 'Når ansigtsmuskulaturen er spændt eller immobil, sender det afferente signaler til hjernestammen om, at der ikke er trygt. Hjertet accelererer, åndedrættet bliver overfladisk, fordøjelsen bremser. Omvendt: når ansigtet blødgøres, mellemøremusklerne slapper af og stemmen finder sin naturlige dybde, fortolker nervesystemet det som tryghed. ALT arbejder direkte med denne mekanisme — ikke gennem samtale, men gennem vævet selv.'}
              </p>
              <ul className={styles.bullets}>
                {(t('altVagalBullets', language) || [
                  'Den ventrale vagus forbinder ansigt, øre, stemme og hjerte',
                  'Ansigtets tonus signalerer tryghed eller trussel til hjernestammen',
                  'Mellemøremusklerne påvirker evnen til at filtrere menneskestemmer',
                  'Social engagement-systemet er kroppens nyeste reguleringsmekanisme',
                  'Blødgøring af ansigtet aktiverer hele den ventrale vagale kæde'
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ CARD 5 — The six sessions ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'sessions' ? styles.expanded : ''}`} onClick={() => toggle('sessions')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {[1,2,3,4,5,6].map(i => (
                  <circle key={i} cx={8+i*6} cy="24" r="2.5" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity={0.15+i*0.07} />
                ))}
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('altSessionsLabel', language) || 'Forløbet'}</p>
              <h2 className={styles.cardTitle}>{t('altSessionsTitle', language) || 'Seks sessioner'}</h2>
              <p className={styles.cardSubtitle}>{t('altSessionsSubtitle', language) || 'En rejse gennem lagene'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'sessions' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('altSessionsText', language) || 'Et komplet ALT-forløb består af seks sessioner med cirka en uges mellemrum. Første session fokuserer på de ydre lag — hud og overfladisk bindevæv. Berøringen er let, næsten svævende. Kroppen skal først lære at tage imod, før dybere arbejde kan begynde.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('altSessionsTextExtra', language) || 'Med hver session øges dybden gradvist. Session to og tre arbejder med SMAS og den superficielle muskulatur. Session fire og fem når de dybe fedtlag og den profunde muskulatur — her begynder de gamle spændingsmønstre at vise sig og løsne. Sjette session integrerer alle lag og afslutter med periosten, den mest stille og dybe berøring. Mange oplever en mærkbar forandring i ansigtsudtryk, holdning og indre ro efter forløbet.'}
              </p>
              <ul className={styles.bullets}>
                {(t('altSessionsBullets', language) || [
                  'Session 1-2: overflade — hud, subkutant væv, tillid',
                  'Session 3-4: mellemlag — SMAS, muskulatur, gamle mønstre',
                  'Session 5-6: dybde — periost, integration, varig forandring',
                  'Cirka en uge mellem sessioner giver vævet tid til at integrere',
                  'Forandringen er kumulativ — hvert lag forbereder det næste'
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      <ScrollToTop language={language} />
      <div className={styles.bottomSpacer} />
    </main>
  )
}
