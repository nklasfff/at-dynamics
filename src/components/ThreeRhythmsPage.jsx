import { useState } from 'react'
import styles from './DeeperPage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function ThreeRhythmsPage({ language }) {
  const [expanded, setExpanded] = useState(null)
  const toggle = (id) => setExpanded(expanded === id ? null : id)

  return (
    <main className={styles.page}>
      <div className={styles.ambientGlow} />

      <header className={styles.header}>
        <p className={styles.eyebrow}>{t('rhythmEyebrow', language) || 'Tre bevægelser'}</p>
        <h1 className={styles.title}>{t('rhythmTitle', language) || 'De tre rytmer'}</h1>
        <p className={styles.subtitle}>
          {t('rhythmSubtitle', language) || 'Berøring, åndedræt og den kraniosakrale puls — tre sprog for den samme intelligens. Når de mødes, opstår noget større end summen.'}
        </p>
      </header>

      {/* ═══ HERO — Three overlapping wave rhythms ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 280" className={styles.heroSvg}>
          {/* Central vertical axis */}
          <line x1="200" y1="20" x2="200" y2="260" stroke="var(--text-primary)" strokeWidth="0.4" opacity="0.08" />

          {/* ALT rhythm — medium-fast, tactile */}
          <path d="M40,90 Q80,70 120,90 Q160,110 200,90 Q240,70 280,90 Q320,110 360,90" fill="none" stroke="var(--color-alt)" strokeWidth="1.4" opacity="0.6">
            <animate attributeName="d" values="M40,90 Q80,60 120,90 Q160,120 200,90 Q240,60 280,90 Q320,120 360,90;M40,90 Q80,80 120,90 Q160,100 200,90 Q240,80 280,90 Q320,100 360,90;M40,90 Q80,60 120,90 Q160,120 200,90 Q240,60 280,90 Q320,120 360,90" dur="5.5s" repeatCount="indefinite" />
          </path>
          <path d="M40,100 Q80,80 120,100 Q160,120 200,100 Q240,80 280,100 Q320,120 360,100" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.25">
            <animate attributeName="d" values="M40,100 Q80,74 120,100 Q160,126 200,100 Q240,74 280,100 Q320,126 360,100;M40,100 Q80,92 120,100 Q160,108 200,100 Q240,92 280,100 Q320,108 360,100;M40,100 Q80,74 120,100 Q160,126 200,100 Q240,74 280,100 Q320,126 360,100" dur="5.5s" repeatCount="indefinite" />
          </path>

          {/* WHM rhythm — breath cycle, medium */}
          <path d="M40,140 Q120,110 200,140 Q280,170 360,140" fill="none" stroke="var(--color-whm)" strokeWidth="1.4" opacity="0.55">
            <animate attributeName="d" values="M40,140 Q120,96 200,140 Q280,184 360,140;M40,140 Q120,130 200,140 Q280,150 360,140;M40,140 Q120,96 200,140 Q280,184 360,140" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M40,150 Q120,120 200,150 Q280,180 360,150" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.2">
            <animate attributeName="d" values="M40,150 Q120,112 200,150 Q280,188 360,150;M40,150 Q120,140 200,150 Q280,160 360,150;M40,150 Q120,112 200,150 Q280,188 360,150" dur="9s" repeatCount="indefinite" />
          </path>

          {/* CST rhythm — slow tide */}
          <path d="M40,200 Q200,165 360,200" fill="none" stroke="var(--color-cst)" strokeWidth="1.6" opacity="0.5">
            <animate attributeName="d" values="M40,200 Q200,145 360,200;M40,200 Q200,195 360,200;M40,200 Q200,145 360,200" dur="20s" repeatCount="indefinite" />
          </path>
          <path d="M40,210 Q200,178 360,210" fill="none" stroke="var(--color-cst)" strokeWidth="0.6" opacity="0.18">
            <animate attributeName="d" values="M40,210 Q200,160 360,210;M40,210 Q200,205 360,210;M40,210 Q200,160 360,210" dur="20s" repeatCount="indefinite" />
          </path>

          {/* Synchronization pulse at center */}
          <circle cx="200" cy="145" r="4" fill="none" stroke="var(--text-primary)" strokeWidth="0.6" opacity="0.15">
            <animate attributeName="r" values="1;18;1" dur="20s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.03;0.3" dur="20s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="145" r="2" fill="var(--text-primary)" opacity="0.2">
            <animate attributeName="opacity" values="0.08;0.5;0.08" dur="20s" repeatCount="indefinite" />
          </circle>

          {/* Labels */}
          <text x="30" y="82" fill="var(--color-alt)" fontSize="7" opacity="0.4" fontFamily="'Cormorant Garamond', serif" fontStyle="italic">{t('rhythmSvgTouch', language) || 'Berøring'}</text>
          <text x="30" y="133" fill="var(--color-whm)" fontSize="7" opacity="0.4" fontFamily="'Cormorant Garamond', serif" fontStyle="italic">{t('rhythmSvgBreath', language) || 'Åndedræt'}</text>
          <text x="30" y="195" fill="var(--color-cst)" fontSize="7" opacity="0.4" fontFamily="'Cormorant Garamond', serif" fontStyle="italic">{t('rhythmSvgTide', language) || 'Kraniosakral'}</text>
        </svg>
      </div>

      {/* ═══ CARD 1 — Rhythm of Touch ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'touch' ? styles.expanded : ''}`} onClick={() => toggle('touch')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M14,28 Q18,22 24,28 Q30,22 34,28" fill="none" stroke="var(--color-alt)" strokeWidth="0.9" opacity="0.6">
                  <animate attributeName="d" values="M14,28 Q18,15 24,28 Q30,15 34,28;M14,28 Q18,27 24,28 Q30,27 34,28;M14,28 Q18,15 24,28 Q30,15 34,28" dur="5.5s" repeatCount="indefinite" />
                </path>
                <path d="M16,22 Q20,16 24,22 Q28,16 32,22" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.35" />
                <circle cx="24" cy="34" r="2" fill="var(--color-alt)" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('rhythmTouchLabel', language) || 'ALT'}</p>
              <h2 className={styles.cardTitle}>{t('rhythmTouchTitle', language) || 'Berøringens rytme'}</h2>
              <p className={styles.cardSubtitle}>{t('rhythmTouchSubtitle', language) || 'Hændernes samtale med vævet'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'touch' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('rhythmTouchText', language) || 'I ALT bevæger behandlerens hænder sig gennem ansigtets seks lag i en specifik rytme — ikke for hurtigt, hvilket udløser beskyttelsesreflekser, og ikke for langsomt, hvilket mister vævets engagement. Rytmen er levende; den responderer på det, vævet tilbyder. Når en fasciel restriktion mødes, sænker hænderne farten. Når vævet slipper, ændres rytmen. Det er ikke massage — det er en samtale ført udelukkende gennem berøring.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('rhythmTouchTextExtra', language) || 'Berøringsrytmen i ALT er direkte koblet til behandlerens eget nervesystem. En stresset terapeut skaber stressede vævsreaktioner. Behandleren må først regulere sit eget system — gennem bevidst åndedræt og indre stilhed — før hænderne virkelig kan lytte. De bedste ALT-behandlere beskriver deres arbejde ikke som noget de gør ved vævet, men som noget de bliver bevæget af.'}
              </p>
              <ul className={styles.bullets}>
                {(t('rhythmTouchBullets', language) || [
                  'Hænderne tilpasser hastighed til vævets respons i realtid',
                  'For hurtig berøring aktiverer sympatisk beskyttelse',
                  'For langsom berøring mister kontakten med vævets levende kvalitet',
                  'Behandlerens nervesystem sætter tonen for hele sessionen',
                  'Den dygtigste berøring føles som om hænderne bliver ført af vævet selv',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ CARD 2 — Rhythm of Breath ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'breath' ? styles.expanded : ''}`} onClick={() => toggle('breath')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M8,24 Q16,14 24,24 Q32,34 40,24" fill="none" stroke="var(--color-whm)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="d" values="M8,24 Q16,5 24,24 Q32,43 40,24;M8,24 Q16,20 24,24 Q32,28 40,24;M8,24 Q16,5 24,24 Q32,43 40,24" dur="7s" repeatCount="indefinite" />
                </path>
                {/* Retention gap */}
                <line x1="18" y1="32" x2="30" y2="32" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
                <circle cx="24" cy="24" r="2" fill="var(--color-whm)" opacity="0.35" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('rhythmBreathLabel', language) || 'Wim Hof'}</p>
              <h2 className={styles.cardTitle}>{t('rhythmBreathTitle', language) || 'Åndedrættets rytme'}</h2>
              <p className={styles.cardSubtitle}>{t('rhythmBreathSubtitle', language) || 'Fra kaos til kontrol til overgivelse'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'breath' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('rhythmBreathText', language) || 'Wim Hof-åndedrættets rytme har tre distinkte faser, hver med sin egen karakter. Hyperventilationsfasen er hurtig og kraftfuld — tredive dybe åndedrag der bevidst overskriver kroppens CO₂-regulering. Retentionsfasen er absolut stilhed — vejret holdt på tomme lunger, overgivet til kroppens visdom. Genopretningsåndedraget er ét enkelt dybt indåndingsdrag holdt i femten sekunder — integration. Mønsteret gentages tre til fire gange, og hver runde fordybes.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('rhythmBreathTextExtra', language) || 'Det der gør Wim Hof-rytmen unik er dens bevidste brug af ekstremer. I modsætning til de fleste åndedrætspraksisser der søger ro og balance, skaber WHM bevidst fysiologisk stress — og opløser det derefter. Kroppen lærer at den kan bevæge sig gennem intensitet og vende tilbage til tryghed. Det er essensen af resiliens-træning: ikke at undgå stress, men at udvide det spektrum nervesystemet kan tolerere og komme sig fra.'}
              </p>
              <ul className={styles.bullets}>
                {(t('rhythmBreathBullets', language) || [
                  'Tredive kraftfulde åndedrag ændrer blodets pH på under to minutter',
                  'Retentionen på tomme lunger aktiverer dykkerrefleksen',
                  'Genopretningsåndedraget konsoliderer de fysiologiske ændringer',
                  'Hver runde tager systemet dybere ind i tilpasningsresponsen',
                  'Bevidst stress efterfulgt af bevidst hvile opbygger nervesystemets kapacitet',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ ILLUSTRATION 2 — Convergence at still point ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 220" className={styles.heroSvg}>
          {/* Three waves converging to center */}
          <path d="M60,70 Q130,50 200,110" fill="none" stroke="var(--color-alt)" strokeWidth="1.2" opacity="0.45">
            <animate attributeName="d" values="M60,70 Q130,35 200,110;M60,70 Q130,68 200,110;M60,70 Q130,35 200,110" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M60,130 Q130,115 200,110" fill="none" stroke="var(--color-whm)" strokeWidth="1.2" opacity="0.4">
            <animate attributeName="d" values="M60,130 Q130,100 200,110;M60,130 Q130,128 200,110;M60,130 Q130,100 200,110" dur="11s" repeatCount="indefinite" />
          </path>
          <path d="M60,180 Q130,170 200,110" fill="none" stroke="var(--color-cst)" strokeWidth="1.2" opacity="0.35">
            <animate attributeName="d" values="M60,180 Q130,158 200,110;M60,180 Q130,178 200,110;M60,180 Q130,158 200,110" dur="18s" repeatCount="indefinite" />
          </path>

          {/* Emerging unified waves */}
          <path d="M200,110 Q270,90 340,110" fill="none" stroke="var(--text-primary)" strokeWidth="1.3" opacity="0.3">
            <animate attributeName="d" values="M200,110 Q270,75 340,110;M200,110 Q270,103 340,110;M200,110 Q270,75 340,110" dur="12.5s" repeatCount="indefinite" />
          </path>
          <path d="M200,110 Q270,130 340,110" fill="none" stroke="var(--text-primary)" strokeWidth="0.7" opacity="0.15">
            <animate attributeName="d" values="M200,110 Q270,145 340,110;M200,110 Q270,117 340,110;M200,110 Q270,145 340,110" dur="12.5s" repeatCount="indefinite" />
          </path>

          {/* Central convergence point */}
          <circle cx="200" cy="110" r="8" fill="none" stroke="var(--color-cst)" strokeWidth="0.8" opacity="0.3">
            <animate attributeName="r" values="4;20;4" dur="12.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.04;0.35" dur="12.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="110" r="3" fill="var(--color-cst)" opacity="0.35">
            <animate attributeName="opacity" values="0.12;0.6;0.12" dur="12.5s" repeatCount="indefinite" />
          </circle>

          {/* Radiating harmony circles */}
          <circle cx="200" cy="110" r="30" fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.1">
            <animate attributeName="r" values="22;55;22" dur="12.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.02;0.15" dur="12.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="110" r="55" fill="none" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.05">
            <animate attributeName="r" values="40;80;40" dur="12.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* ═══ CARD 3 — Rhythm of Tide ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'tide' ? styles.expanded : ''}`} onClick={() => toggle('tide')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="14" fill="none" stroke="var(--color-cst)" strokeWidth="0.6" opacity="0.3">
                  <animate attributeName="r" values="9;21;9" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="8" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.25">
                  <animate attributeName="r" values="5;14;5" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="2" fill="var(--color-cst)" opacity="0.4">
                  <animate attributeName="opacity" values="0.15;0.65;0.15" dur="20s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('rhythmTideLabel', language) || 'Kraniosakral'}</p>
              <h2 className={styles.cardTitle}>{t('rhythmTideTitle', language) || 'Den kraniosakrale rytme'}</h2>
              <p className={styles.cardSubtitle}>{t('rhythmTideSubtitle', language) || 'Krop, væske og energi i bevægelse'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'tide' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('rhythmTideText', language) || 'Den kraniosakrale rytme har tre lag. CRI — den hurtigste — afspejler den fysiske krops bevægelse: knogler, membraner, væv. Mid-Tide hører til væskekroppen — her mærker behandleren ikke strukturer men strømme og organiseringskræfter. Long Tide er den langsomste og dybeste: en energetisk bevægelse der transcenderer det individuelle. Behandleren måler ikke disse — de perciperes gennem opmærksomhedens kvalitet.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('rhythmTideTextExtra', language) || 'I modsætning til berøringens og åndedrættets rytmer kan den kraniosakrale rytme ikke kontrolleres eller dirigeres. Den kan kun modtages. Det kræver en fundamentalt anderledes orientering: fra aktiv til receptiv, fra at gøre til at være. Behandleren synker ind i et bredt, blødt opmærksomhedsfelt og venter. Rytmen viser sig ikke fordi behandleren leder efter den, men fordi de bliver stille nok til at opdage det der altid har været der.'}
              </p>
              <ul className={styles.bullets}>
                {(t('rhythmTideBullets', language) || [
                  'CRI afspejler den fysiske krop — knogler, membraner og væv',
                  'Mid-Tide hører til væskekroppen — strømme og organiseringskræfter',
                  'Long Tide er energetisk — den transcenderer det individuelle',
                  'Rytmen kan ikke styres — kun modtages gennem stille opmærksomhed',
                  'At lytte til kroppen kræver at behandleren selv bliver stille',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ CARD 4 — Synchronization ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'sync' ? styles.expanded : ''}`} onClick={() => toggle('sync')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="18" cy="20" r="8" fill="none" stroke="var(--color-alt)" strokeWidth="0.6" opacity="0.4" />
                <circle cx="30" cy="20" r="8" fill="none" stroke="var(--color-whm)" strokeWidth="0.6" opacity="0.4" />
                <circle cx="24" cy="30" r="8" fill="none" stroke="var(--color-cst)" strokeWidth="0.6" opacity="0.4" />
                <circle cx="24" cy="23" r="2" fill="var(--text-primary)" opacity="0.3">
                  <animate attributeName="opacity" values="0.1;0.6;0.1" dur="9s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('rhythmSyncLabel', language) || 'Sammensmeltning'}</p>
              <h2 className={styles.cardTitle}>{t('rhythmSyncTitle', language) || 'Synkronisering'}</h2>
              <p className={styles.cardSubtitle}>{t('rhythmSyncSubtitle', language) || 'Når de tre bliver én'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'sync' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('rhythmSyncText', language) || 'I avanceret praksis begynder de tre rytmer at synkronisere. Behandlerens hænder finder en rytme der samtidig er responsiv over for vævet (ALT), koordineret med åndedrættet (WHM) og afstemt med den kraniosakrale puls. Det er ikke noget der kan tvinges eller planlægges — det opstår når behandleren er dybt nærværende og alle tre færdigheder er internaliseret.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('rhythmSyncTextExtra', language) || 'Synkronisering er kendetegnet på mesterskab i AnThes Dynamics. Det er øjeblikket hvor de tre separate discipliner opløses i ét samlet praksisfelt. Hænderne bevæger sig, åndedrættet flyder, den kraniosakrale puls bærer det hele — og alle tre er udtryk for den samme intelligens. Behandlere der når denne tilstand beskriver den som ubesværet — ikke fordi arbejdet er let, men fordi adskillelsen mellem behandler, teknik og klient forsvinder.'}
              </p>
              <ul className={styles.bullets}>
                {(t('rhythmSyncBullets', language) || [
                  'Synkronisering kan ikke tvinges — den opstår fra dybt nærvær',
                  'De tre færdigheder må først mestres enkeltvis inden de kan fusionere',
                  'Behandleren mærker ét samlet felt frem for tre separate praksisser',
                  'Klienten oplever en dyb sammenhæng de sjældent kan sætte ord på',
                  'Adskillelsen mellem behandler og klient opløses i det synkrone felt',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      <ScrollToTop language={language} />
      <div className={styles.bottomSpacer} />
    </main>
  )
}
