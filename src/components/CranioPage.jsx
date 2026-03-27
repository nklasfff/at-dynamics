import { useState } from 'react'
import styles from './DeeperPage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function CranioPage({ language }) {
  const [expanded, setExpanded] = useState(null)
  const toggle = (id) => setExpanded(expanded === id ? null : id)

  return (
    <main className={styles.page}>
      <div className={styles.ambientGlow} />

      <header className={styles.header}>
        <p className={styles.eyebrow}>{t('cranioEyebrow', language) || 'Lytning'}</p>
        <h1 className={styles.title}>{t('cranioTitle', language) || 'Kraniosakral'}</h1>
        <p className={styles.subtitle}>
          {t('cranioSubtitle', language) || 'Terapi bygget på stilhed, berøring og kroppens ældste rytmer. At lytte til det, der allerede ved.'}
        </p>
      </header>

      {/* ═══ HERO — Three tidal rhythms ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 320" className={styles.heroSvg}>
          {/* Spinal column */}
          <path d="M200,30 Q198,160 200,290" fill="none" stroke="var(--text-primary)" strokeWidth="0.9" opacity="0.2">
            <animate attributeName="d" values="M200,30 Q192,160 200,290;M200,30 Q208,160 200,290;M200,30 Q192,160 200,290" dur="16s" repeatCount="indefinite" />
          </path>
          {/* Cranium */}
          <ellipse cx="200" cy="60" rx="50" ry="40" fill="none" stroke="var(--color-cst)" strokeWidth="1.2" opacity="0.45">
            <animateTransform attributeName="transform" type="scale" values="1,1;1.04,0.97;1,1" dur="10s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          <ellipse cx="200" cy="60" rx="35" ry="28" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.3" />
          {/* Sacrum */}
          <path d="M185,260 Q200,275 215,260 Q210,285 200,290 Q190,285 185,260" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.4">
            <animateTransform attributeName="transform" type="scale" values="1,1;0.96,1.025;1,1" dur="10s" repeatCount="indefinite" additive="sum" />
          </path>
          {/* CRI wave — fast */}
          <path d="M120,120 Q160,105 200,120 Q240,135 280,120" fill="none" stroke="var(--color-cst)" strokeWidth="1" opacity="0.55">
            <animate attributeName="d" values="M120,120 Q160,90 200,120 Q240,150 280,120;M120,120 Q160,117 200,120 Q240,123 280,120;M120,120 Q160,90 200,120 Q240,150 280,120" dur="4s" repeatCount="indefinite" />
          </path>
          {/* Mid-tide — medium */}
          <path d="M100,170 Q200,145 300,170" fill="none" stroke="var(--color-cst)" strokeWidth="1.2" opacity="0.4">
            <animate attributeName="d" values="M100,170 Q200,125 300,170;M100,170 Q200,165 300,170;M100,170 Q200,125 300,170" dur="10s" repeatCount="indefinite" />
          </path>
          {/* Long tide — slow */}
          <path d="M80,220 Q200,195 320,220" fill="none" stroke="var(--color-cst)" strokeWidth="1.5" opacity="0.3">
            <animate attributeName="d" values="M80,220 Q200,175 320,220;M80,220 Q200,215 320,220;M80,220 Q200,175 320,220" dur="20s" repeatCount="indefinite" />
          </path>
          {/* Still point */}
          <circle cx="200" cy="160" r="3" fill="var(--color-cst)" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.7;0.1" dur="20s" repeatCount="indefinite" />
            <animate attributeName="r" values="1;9;1" dur="20s" repeatCount="indefinite" />
          </circle>
          {/* Cerebrospinal flow indicators */}
          <circle cx="200" cy="80" r="2" fill="var(--color-cst)" opacity="0.3">
            <animate attributeName="cy" values="60;260;60" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.05;0.5" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="180" r="1.5" fill="var(--color-cst)" opacity="0.2">
            <animate attributeName="cy" values="200;60;200" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.04;0.4" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* ═══ CARD 1 — Origins ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'origins' ? styles.expanded : ''}`} onClick={() => toggle('origins')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M16,36 Q24,10 32,36" fill="none" stroke="var(--color-cst)" strokeWidth="1" opacity="0.7" />
                <circle cx="24" cy="14" r="4" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.55" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('cranioOriginsLabel', language) || 'Historien'}</p>
              <h2 className={styles.cardTitle}>{t('cranioOriginsTitle', language) || 'Fra Still til Jealous'}</h2>
              <p className={styles.cardSubtitle}>{t('cranioOriginsSubtitle', language) || '150 år med at lytte til kroppen'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'origins' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('cranioOriginsText', language) || 'Andrew Taylor Still grundlagde osteopatien i 1874 ud fra en radikal overbevisning: kroppen besidder en iboende selvhelbredende intelligens, og lægens opgave er at fjerne hindringerne for denne intelligens. Hans elev William Garner Sutherland bragte denne tanke videre til kraniet og opdagede i 1899, at de kranielle suturer er designet til bevægelse — ikke sammenvoksning.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('cranioOriginsTextExtra', language) || 'Sutherland brugte de næste femti år på at forfine sin palpation og udvide sin forståelse. Han gik fra en mekanisk model (kraniel osteopati) til en levende, biodynamisk forståelse, hvor behandleren samarbejder med kroppens egne kræfter snarere end at manipulere dem. James Jealous arvede denne tradition og formaliserede den biodynamiske tilgang i 1990erne — en praksis hvor hænderne ikke gør, men modtager. Hvor stilhed ikke er fravær, men den mest aktive tilstand af alle.'}
              </p>
              <ul className={styles.bullets}>
                {(t('cranioOriginsBullets', language) || [
                  'A.T. Still (1874): kroppen som selvregulerende organisme',
                  'Sutherland (1899): kranieknoglerne er designet til bevægelse',
                  '50 års palpation: fra mekanik til biodynamik',
                  'James Jealous (1990erne): formalisering af den biodynamiske tilgang',
                  'Tre generationers arv: fra manipulation til lytning',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ CARD 2 — The three rhythms ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'rhythms' ? styles.expanded : ''}`} onClick={() => toggle('rhythms')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M8,20 Q24,12 40,20" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.7">
                  <animate attributeName="d" values="M8,20 Q24,5 40,20;M8,20 Q24,18 40,20;M8,20 Q24,5 40,20" dur="4s" repeatCount="indefinite" />
                </path>
                <path d="M8,28 Q24,22 40,28" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.55">
                  <animate attributeName="d" values="M8,28 Q24,16 40,28;M8,28 Q24,27 40,28;M8,28 Q24,16 40,28" dur="10s" repeatCount="indefinite" />
                </path>
                <path d="M8,36 Q24,32 40,36" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.4">
                  <animate attributeName="d" values="M8,36 Q24,27 40,36;M8,36 Q24,35 40,36;M8,36 Q24,27 40,36" dur="20s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('cranioRhythmsLabel', language) || 'De tre bevægelser'}</p>
              <h2 className={styles.cardTitle}>{t('cranioRhythmsTitle', language) || 'CRI, Mid-Tide, Long Tide'}</h2>
              <p className={styles.cardSubtitle}>{t('cranioRhythmsSubtitle', language) || 'Krop, væske og energi'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'rhythms' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('cranioRhythmsText', language) || 'Den hurtigste rytme — Cranial Rhythmic Impulse — bevæger sig med otte til tolv cykler i minuttet. Det er denne rytme, de fleste behandlere først lærer at palpere. Den afspejler den mekaniske bevægelse af cerebrospinalvæsken og knoglerne. CRI er kroppens fysiologiske kommentar — den fortæller, hvor der er frihed og hvor der er restriktion.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('cranioRhythmsTextExtra', language) || 'Mid-Tide er langsommere — omkring to en halv cyklus i minuttet — og tilhører væskekroppen. Her mærker behandleren ikke strukturer men kræfter. Det er det organiserende princip der former og opretholder vævets arkitektur. Long Tide er den langsomste: én cyklus på hundrede sekunder. Den opleves som en universel energetisk bevægelse der transcenderer det individuelle. Sutherland kaldte den "Breath of Life" — livets åndedræt, der var til stede før det første lungeåndedrag.'}
              </p>
              <ul className={styles.bullets}>
                {(t('cranioRhythmsBullets', language) || [
                  'CRI: den fysiske krop — den mest håndgribelige rytme',
                  'Mid-Tide: væskekroppen — det felt der former vævet',
                  'Long Tide: den energetiske bevægelse — livets grundpuls',
                  'Behandleren skifter perceptuelt niveau, ikke teknik',
                  'Dybere lytning afslører dybere lag af sundhed',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ MID ILLUSTRATION — Craniosacral axis ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 200" className={styles.heroSvg}>
          {/* Cranium at top */}
          <ellipse cx="200" cy="35" rx="40" ry="30" fill="none" stroke="var(--color-cst)" strokeWidth="1" opacity="0.4">
            <animateTransform attributeName="transform" type="scale" values="1,1;1.04,0.975;1,1" dur="10s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          {/* Spinal membranes — dural tube */}
          <path d="M190,65 Q188,100 190,140 Q192,160 195,175" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.3">
            <animate attributeName="d" values="M190,65 Q183,100 190,140 Q194,160 195,175;M190,65 Q195,100 190,140 Q185,160 195,175;M190,65 Q183,100 190,140 Q194,160 195,175" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M210,65 Q212,100 210,140 Q208,160 205,175" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.3">
            <animate attributeName="d" values="M210,65 Q217,100 210,140 Q206,160 205,175;M210,65 Q205,100 210,140 Q215,160 205,175;M210,65 Q217,100 210,140 Q206,160 205,175" dur="10s" repeatCount="indefinite" />
          </path>
          {/* Sacrum at bottom */}
          <path d="M192,175 Q200,192 208,175" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.4">
            <animateTransform attributeName="transform" type="scale" values="1,1;0.96,1.025;1,1" dur="10s" repeatCount="indefinite" additive="sum" />
          </path>
          {/* CSF flow particles */}
          {[0,1,2].map(i => (
            <circle key={i} cx="200" cy={70+i*10} r="1.5" fill="var(--color-cst)" opacity={0.3-i*0.06}>
              <animate attributeName="cy" values={`${55+i*10};${175-i*5};${55+i*10}`} dur={`${8+i*1.6}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`${0.45-i*0.08};${0.05};${0.45-i*0.08}`} dur={`${8+i*1.6}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {/* Expansion/contraction field */}
          <ellipse cx="200" cy="105" rx="60" ry="50" fill="none" stroke="var(--color-cst)" strokeWidth="0.55" opacity="0.16">
            <animate attributeName="rx" values="50;78;50" dur="10s" repeatCount="indefinite" />
            <animate attributeName="ry" values="40;65;40" dur="10s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="200" cy="105" rx="35" ry="28" fill="none" stroke="var(--color-cst)" strokeWidth="0.45" opacity="0.12">
            <animate attributeName="rx" values="28;48;28" dur="10s" repeatCount="indefinite" />
            <animate attributeName="ry" values="21;40;21" dur="10s" repeatCount="indefinite" />
          </ellipse>
          {/* Still point at center */}
          <circle cx="200" cy="105" r="2" fill="var(--color-cst)" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.7;0.1" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* ═══ CARD 3 — Cerebrospinal fluid ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'csf' ? styles.expanded : ''}`} onClick={() => toggle('csf')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <ellipse cx="24" cy="18" rx="10" ry="8" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.55" />
                <path d="M24,26 Q23,34 24,42" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.45" />
                <circle cx="24" cy="18" r="3" fill="var(--color-cst)" opacity="0.2">
                  <animate attributeName="r" values="1;7;1" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.12;0.55;0.12" dur="5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('cranioCsfLabel', language) || 'Væsken'}</p>
              <h2 className={styles.cardTitle}>{t('cranioCsfTitle', language) || 'Cerebrospinalvæsken'}</h2>
              <p className={styles.cardSubtitle}>{t('cranioCsfSubtitle', language) || 'Nervesystemets indre ocean'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'csf' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('cranioCsfText', language) || 'Cerebrospinalvæsken (CSF) omgiver hjernen og rygmarven som et beskyttende vandlag. Den produceres primært i hjernens ventrikler af choroid plexus — små karvævsstrukturer der filtrerer blodet og skaber en klar, næringsrig væske. Dagligt produceres omkring 500 milliliter, og hele volumen udskiftes tre til fire gange i døgnet.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('cranioCsfTextExtra', language) || 'CSF transporterer næringsstoffer til hjernevævet, fjerner stofskifteaffald (inklusive de amyloidproteiner der forbindes med Alzheimers), og fungerer som en hydraulisk stødpude. I kraniosakral forståelse er CSF mere end en passiv væske — den bærer en dynamisk potens, en livskraft som Sutherland anså for at være selve drivkraften bag den kraniosakrale rytme. Når CSF-flowet er frit, afspejler det sig i hele kroppens vitalitet og reguleringsevne.'}
              </p>
              <ul className={styles.bullets}>
                {(t('cranioCsfBullets', language) || [
                  '500 ml produceres dagligt — hele volumen udskiftes 3-4 gange',
                  'Fjerner stofskifteaffald fra hjernen, særligt under søvn',
                  'Hydraulisk beskyttelse mod stød og tryk',
                  'Bærer ifølge Sutherland en potens — en livskraft',
                  'Frit CSF-flow korrelerer med vitalitet og selvregulering',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ CARD 4 — Dynamic Stillness ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'stillness' ? styles.expanded : ''}`} onClick={() => toggle('stillness')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="14" fill="none" stroke="var(--color-cst)" strokeWidth="0.55" opacity="0.25">
                  <animate attributeName="r" values="9;22;9" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="2" fill="var(--color-cst)" opacity="0.4">
                  <animate attributeName="opacity" values="0.1;0.85;0.1" dur="20s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('cranioStillnessLabel', language) || 'Kernen'}</p>
              <h2 className={styles.cardTitle}>{t('cranioStillnessTitle', language) || 'Dynamic Stillness'}</h2>
              <p className={styles.cardSubtitle}>{t('cranioStillnessSubtitle', language) || 'Hvor bevægelse og stilhed mødes'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'stillness' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('cranioStillnessText', language) || 'Under alle tre rytmer — under CRI, under Mid-Tide, under Long Tide — findes et felt af fuldstændig stilhed. Ikke tomhed, men en stilhed der vibrerer af potentiale. Sutherland og Jealous kaldte det Dynamic Stillness. Det er det punkt, hvorfra reorganisering spontant opstår i kroppen.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('cranioStillnessTextExtra', language) || 'I den biodynamiske tradition er behandlerens dybeste opgave at facilitere kontakt med dette felt. Det kræver ikke handling men tilstedeværelse — en kvalitet af opmærksomhed der er bred nok til at rumme hele systemet og stille nok til ikke at forstyrre det. Når klienten og behandleren sammen når dette felt, sker der ofte spontane frigørelser: vævsspændinger opløses, åndedrættet fordybes, og der opstår en følelse af dyb hvile der er anderledes end søvn. Det er kroppens eget integrationspunkt.'}
              </p>
              <ul className={styles.bullets}>
                {(t('cranioStillnessBullets', language) || [
                  'Stilhed er ikke fravær men et aktivt felt af potentiale',
                  'Spontan reorganisering opstår fra stilhedspunktet',
                  'Behandleren faciliterer kontakt — handler ikke',
                  'Klient og behandler når feltet sammen i resonans',
                  'Kroppens dybeste heling sker fra dette stille centrum',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ CARD 5 — A session ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'session' ? styles.expanded : ''}`} onClick={() => toggle('session')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M14,30 Q20,24 24,30 Q28,24 34,30" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.65" />
                <path d="M18,26 Q24,20 30,26" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.45" />
                <circle cx="24" cy="18" r="6" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('cranioSessionLabel', language) || 'I praksis'}</p>
              <h2 className={styles.cardTitle}>{t('cranioSessionTitle', language) || 'En session'}</h2>
              <p className={styles.cardSubtitle}>{t('cranioSessionSubtitle', language) || 'Hvad sker der på briksen'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'session' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('cranioSessionText', language) || 'Du ligger fuldt påklædt på en behandlingsbriks. Behandleren placerer hænderne forsigtigt — typisk under hovedet, ved fødderne eller langs rygsøjlen. Trykket er minimalt: omkring fem gram, svarende til vægten af en femøre. De første minutter handler om kontakt — at lade nervesystemet vænne sig til en tilstedeværelse uden agenda.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('cranioSessionTextExtra', language) || 'Efterhånden som tilliden etableres, begynder behandleren at palpere de kraniosakrale rytmer. Der lyttens efter restriktioner — steder hvor bevægelsen er begrænset eller asymmetrisk. Behandleren følger vævets egne bevægelsesmønstre, og i den proces opstår der ofte naturlige stilhedspunkter — øjeblikke hvor hele systemet holder pause og reorganiserer. En session varer typisk 45-60 minutter. Mange oplever en dyb afslapning der minder om tilstanden lige før søvn, mens andre mærker subtile bevægelser, varme eller en følelse af udvidelse.'}
              </p>
              <ul className={styles.bullets}>
                {(t('cranioSessionBullets', language) || [
                  'Fuldt påklædt — ingen olier, ingen krævende stillinger',
                  'Fem grams berøring — blødere end de fleste kan forestille sig',
                  'Behandleren lytter med hænderne efter bevægelse og restriktion',
                  'Stilhedspunkter opstår spontant og er tegn på reorganisering',
                  '45-60 minutter i en tilstand mellem vågen og sovende',
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
