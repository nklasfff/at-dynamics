import { useState } from 'react'
import styles from './DeeperPage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function DeeperPage({ language }) {
  const [expandedCard, setExpandedCard] = useState(null)
  const [activeExercise, setActiveExercise] = useState(null)
  const [breathCount, setBreathCount] = useState(0)
  const [breathPhase, setBreathPhase] = useState(null) // 'in', 'hold', 'out'
  const [breathTimer, setBreathTimer] = useState(null)

  const toggle = (id) => setExpandedCard(expandedCard === id ? null : id)

  const startBreathExercise = (e) => {
    e.stopPropagation()
    if (breathPhase) {
      clearInterval(breathTimer)
      setBreathPhase(null)
      setBreathCount(0)
      setBreathTimer(null)
      return
    }
    setBreathCount(0)
    const phases = ['in', 'hold', 'out']
    let idx = 0
    setBreathPhase('in')
    const timer = setInterval(() => {
      idx = (idx + 1) % 3
      setBreathPhase(phases[idx])
      if (phases[idx] === 'in') setBreathCount((c) => c + 1)
    }, 4000)
    setBreathTimer(timer)
  }

  return (
    <main className={styles.page}>
      <div className={styles.ambientGlow} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t('deeperEyebrow', language) || 'Dybere'}</p>
        <h1 className={styles.title}>{t('deeperTitle', language) || 'Tre veje ind'}</h1>
        <p className={styles.subtitle}>
          {t('deeperSubtitle', language) || 'Udforsk hver disciplin i dybden. Forstå principperne, mærk rytmerne, og prøv øvelserne selv.'}
        </p>
      </header>

      {/* ═══ HERO — Layered depth rings ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 260" className={styles.heroSvg}>
          {/* Three interlocking paths representing the disciplines */}
          <defs>
            <linearGradient id="dAlt" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-alt)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-alt)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="dWhm" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-whm)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-whm)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="dCst" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-cst)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-cst)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* ALT — descending face layers */}
          <ellipse cx="130" cy="110" rx="60" ry="85" fill="none" stroke="url(#dAlt)" strokeWidth="0.8">
            <animateTransform attributeName="transform" type="scale" values="1,1;1.045,0.97;1,1" dur="11s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          <ellipse cx="130" cy="110" rx="42" ry="60" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.3">
            <animateTransform attributeName="transform" type="scale" values="1,1;0.955,1.03;1,1" dur="9s" repeatCount="indefinite" additive="sum" />
          </ellipse>
          <ellipse cx="130" cy="110" rx="24" ry="35" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.2" />
          {/* Meridian lines */}
          <line x1="130" y1="25" x2="130" y2="195" stroke="var(--color-alt)" strokeWidth="0.3" opacity="0.15" />
          <line x1="70" y1="110" x2="190" y2="110" stroke="var(--color-alt)" strokeWidth="0.2" opacity="0.1" />

          {/* WHM — breath spiral */}
          <path d="M200,50 Q240,80 200,130 Q160,180 200,210" fill="none" stroke="url(#dWhm)" strokeWidth="1">
            <animate attributeName="d" values="M200,50 Q260,80 200,130 Q140,180 200,210;M200,50 Q210,100 200,130 Q190,160 200,210;M200,50 Q260,80 200,130 Q140,180 200,210" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M200,70 Q230,95 200,130 Q170,165 200,190" fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="d" values="M200,70 Q250,95 200,130 Q150,165 200,190;M200,70 Q208,108 200,130 Q192,152 200,190;M200,70 Q250,95 200,130 Q150,165 200,190" dur="7s" repeatCount="indefinite" />
          </path>
          {/* Breath dots */}
          <circle cx="200" cy="130" r="3" fill="var(--color-whm)" opacity="0.25">
            <animate attributeName="r" values="3;9;3" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" />
          </circle>

          {/* CST — tidal waves */}
          <path d="M260,80 Q310,130 260,180" fill="none" stroke="url(#dCst)" strokeWidth="0.8">
            <animate attributeName="d" values="M260,67 Q325,130 260,193;M260,100 Q288,130 260,160;M260,67 Q325,130 260,193" dur="14.5s" repeatCount="indefinite" />
          </path>
          <path d="M275,90 Q315,130 275,170" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="d" values="M275,78 Q330,130 275,182;M275,105 Q293,130 275,155;M275,78 Q330,130 275,182" dur="14.5s" repeatCount="indefinite" />
          </path>
          <path d="M290,100 Q320,130 290,160" fill="none" stroke="var(--color-cst)" strokeWidth="0.3" opacity="0.2">
            <animate attributeName="d" values="M290,88 Q335,130 290,172;M290,112 Q303,130 290,148;M290,88 Q335,130 290,172" dur="14.5s" repeatCount="indefinite" />
          </path>
          {/* Still point at center */}
          <circle cx="290" cy="130" r="2" fill="var(--color-cst)" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="14.5s" repeatCount="indefinite" />
          </circle>

          {/* Connecting threads between disciplines */}
          <path d="M170,110 Q200,100 200,130" fill="none" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.08" strokeDasharray="2,6" />
          <path d="M200,130 Q230,140 260,130" fill="none" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.08" strokeDasharray="2,6" />
        </svg>
      </div>

      {/* ═══ ALT — DEEP DIVE ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'alt' ? styles.expanded : ''}`}
          onClick={() => toggle('alt')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <ellipse cx="24" cy="22" rx="14" ry="18" fill="none" stroke="var(--color-alt)" strokeWidth="0.8" opacity="0.6">
                  <animateTransform attributeName="transform" type="scale" values="1,1;1.06,0.955;1,1" dur="10s" repeatCount="indefinite" additive="sum" />
                </ellipse>
                <ellipse cx="24" cy="22" rx="9" ry="12" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.3" />
                <ellipse cx="24" cy="22" rx="4" ry="6" fill="none" stroke="var(--color-alt)" strokeWidth="0.3" opacity="0.2" />
                <line x1="24" y1="4" x2="24" y2="40" stroke="var(--color-alt)" strokeWidth="0.3" opacity="0.15" />
                <line x1="10" y1="22" x2="38" y2="22" stroke="var(--color-alt)" strokeWidth="0.2" opacity="0.1" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('deeperAltLabel', language) || 'Ansigtsbehandling i dybden'}</p>
              <h2 className={styles.cardTitle}>{t('deeperAltTitle', language) || 'AnsigtsLøftningsTeknik'}</h2>
              <p className={styles.cardSubtitle}>{t('deeperAltSubtitle', language) || 'Seks lag, fem nerver, én forvandling'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'alt' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('deeperAltText', language) || 'Hvad sker der egentlig, når fingerspidserne møder ansigtets væv? Under huden ligger et komplekst landskab af bindevæv, muskelfibre og nervebaner, der fungerer som en direkte kommunikationskanal mellem periferi og hjernestamme. Rosenbergs tilgang adskiller sig fra konventionel ansigtsbehandling ved at respektere hvert anatomisk lag som et selvstændigt system med sin egen rytme og sin egen modstandsgrænse.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('deeperAltTextExtra', language) || 'De fem kranienerver, der forgrener sig gennem ansigtet — trigeminus, facialis, glossopharyngeus, vagus og accessorius — danner tilsammen en sensorisk bro til hjernestammens autonome reguleringscentre. Det er derfor, at et skånsomt tryk på kæbelinjen kan ændre hjertefrekvens, og en blid berøring ved tindingen kan løsne spændingen i mellemgulvet. Behandlingsforløbet strækker sig over seks uger, og med hver session trænger arbejdet dybere ind i lagene — fra overflade mod knogle, fra spænding mod frihed.'}
              </p>
              <ul className={styles.bullets}>
                {(t('deeperAltBullets', language) || [
                  'Hvert lag har sin egen berøringskvalitet og responstid',
                  'Kranienerverne bærer sensorisk information begge veje',
                  'Kæbelinjen er en nøgle til vagusnerven og parasympatisk regulering',
                  'Forandringen akkumuleres over seks sessioner i stigende dybde',
                  'Ansigtet afspejler nervesystemets tilstand — og kan ændre den',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ ALT ILLUSTRATION — Layers ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 180" className={styles.heroSvg}>
          {/* Six concentric face layers */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ellipse
              key={i}
              cx="200"
              cy="90"
              rx={20 + i * 18}
              ry={25 + i * 22}
              fill="none"
              stroke="var(--color-alt)"
              strokeWidth={0.3 + (7 - i) * 0.1}
              opacity={0.08 + (7 - i) * 0.05}
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values={`1,1;${1 + i * 0.008},${1 - i * 0.005};1,1`}
                dur={`${7.2 + i * 1.8}s`}
                repeatCount="indefinite"
                additive="sum"
              />
            </ellipse>
          ))}
          {/* Nerve pathways */}
          <path d="M200,10 Q180,50 160,90 Q150,120 155,160" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.2" strokeDasharray="3,6">
            <animate attributeName="stroke-dashoffset" values="0;-27" dur="5.5s" repeatCount="indefinite" />
          </path>
          <path d="M200,10 Q220,50 240,90 Q250,120 245,160" fill="none" stroke="var(--color-alt)" strokeWidth="0.4" opacity="0.2" strokeDasharray="3,6">
            <animate attributeName="stroke-dashoffset" values="0;-27" dur="5.5s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* ═══ WHM — DEEP DIVE ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'whm' ? styles.expanded : ''}`}
          onClick={() => toggle('whm')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M6,24 Q14,8 24,24 Q34,40 42,24" fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.6">
                  <animate attributeName="d" values="M6,24 Q14,0 24,24 Q34,48 42,24;M6,24 Q14,17 24,21 Q34,27 42,24;M6,24 Q14,0 24,24 Q34,48 42,24" dur="5.5s" repeatCount="indefinite" />
                </path>
                <path d="M10,24 Q18,14 24,24 Q30,34 38,24" fill="none" stroke="var(--color-whm)" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="d" values="M10,24 Q18,6 24,24 Q30,42 38,24;M10,24 Q18,19 24,22 Q30,27 38,24;M10,24 Q18,6 24,24 Q30,42 38,24" dur="5.5s" repeatCount="indefinite" />
                </path>
                <circle cx="24" cy="24" r="2" fill="var(--color-whm)" opacity="0.3">
                  <animate attributeName="r" values="2;6;2" dur="3.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('deeperWhmLabel', language) || 'Åndedræt i dybden'}</p>
              <h2 className={styles.cardTitle}>{t('deeperWhmTitle', language) || 'Wim Hof Metoden'}</h2>
              <p className={styles.cardSubtitle}>{t('deeperWhmSubtitle', language) || 'Åndedræt, kulde og viljens kraft'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'whm' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('deeperWhmText', language) || 'Bag de 30 kraftfulde indåndinger ligger en præcis fysiologisk mekanisme. Når blodets CO\u2082-niveau falder under den hurtige vejrtrækning, stiger pH-værdien og udløser en kaskade: blodkarrene trækker sig sammen, iltafgivelsen til vævene ændres, og hjernen registrerer en midlertidig iltmangel. Det er i retentionsfasen \u2014 med tomme lunger og lukket mund \u2014 at det interessante sker: kroppen møder sin egen stressrespons uden ekstern trussel.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('deeperWhmTextExtra', language) || 'Kulden er den anden søjle, og dens virkning er dybt fysiologisk. Koldt vand under 15 grader aktiverer kroppens brune fedtvæv, frigiver noradrenalin og skærper det vaskulære system. Men den egentlige træning handler ikke om kulden selv \u2014 den handler om øjeblikket lige inden. Det øjeblik, hvor viljen møder ubehaget og vælger at blive. Radboud-studiet fra 2014 dokumenterede, at trænede udøvere kunne modulere deres medfødte immunrespons viljestyret \u2014 noget der indtil da blev anset for umuligt.'}
              </p>
              <ul className={styles.bullets}>
                {(t('deeperWhmBullets', language) || [
                  'pH-stigningen i blodet udløser en kontrolleret alarmreaktion',
                  'Retentionsfasen er mødet med kroppens egen overlevelsesmekanisme',
                  'Brunt fedtvæv aktiveres og øger kroppens varmeproduktion',
                  'Noradrenalin-frigivelsen skærper opmærksomhed og immunfunktion',
                  'Viljen til at forblive i ubehag træner nervesystemets omstillingsevne',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ WHM ILLUSTRATION — Breath waves ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 160" className={styles.heroSvg}>
          {/* Multiple breath waves at different amplitudes */}
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M${20 + i * 10},80 Q${100 + i * 5},${30 + i * 12} 200,80 Q${300 - i * 5},${130 - i * 12} ${380 - i * 10},80`}
              fill="none"
              stroke="var(--color-whm)"
              strokeWidth={0.8 - i * 0.12}
              opacity={0.5 - i * 0.08}
            >
              <animate
                attributeName="d"
                values={`M${20 + i * 10},80 Q${100 + i * 5},${15 + i * 14} 200,80 Q${300 - i * 5},${145 - i * 14} ${380 - i * 10},80;M${20 + i * 10},80 Q${100 + i * 5},${58 + i * 5} 200,77 Q${300 - i * 5},${102 - i * 5} ${380 - i * 10},80;M${20 + i * 10},80 Q${100 + i * 5},${15 + i * 14} 200,80 Q${300 - i * 5},${145 - i * 14} ${380 - i * 10},80`}
                dur={`${5.4 + i * 0.9}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
          {/* Retention circle */}
          <circle cx="200" cy="80" r="8" fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="5;26;5" dur="11s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.22;0.05;0.22" dur="11s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* ═══ CST — DEEP DIVE ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'cst' ? styles.expanded : ''}`}
          onClick={() => toggle('cst')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M8,26 Q24,16 40,26" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.5">
                  <animate attributeName="d" values="M8,26 Q24,8 40,26;M8,26 Q24,23 40,26;M8,26 Q24,8 40,26" dur="12.5s" repeatCount="indefinite" />
                </path>
                <path d="M12,30 Q24,22 36,30" fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="d" values="M12,30 Q24,14 36,30;M12,30 Q24,27 36,30;M12,30 Q24,14 36,30" dur="12.5s" repeatCount="indefinite" />
                </path>
                <path d="M16,34 Q24,28 32,34" fill="none" stroke="var(--color-cst)" strokeWidth="0.3" opacity="0.2" />
                <circle cx="24" cy="26" r="2" fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="r" values="2;7;2" dur="12.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="26" r="0.8" fill="var(--color-cst)" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('deeperCstLabel', language) || 'Kraniosakral i dybden'}</p>
              <h2 className={styles.cardTitle}>{t('deeperCstTitle', language) || 'Kraniosakral Terapi'}</h2>
              <p className={styles.cardSubtitle}>{t('deeperCstSubtitle', language) || 'Tre rytmer, én stilhed'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'cst' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('deeperCstText', language) || 'I begyndelsen af det 20. århundrede bemærkede osteopaten William Garner Sutherland noget bemærkelsesværdigt: kraniets knogler er ikke fuldstændig fusionerede hos voksne, men bevæger sig i et subtilt, rytmisk mønster. Denne observation førte ham på en årtier lang undersøgelse, der afslørede et helt nyt fysiologisk system \u2014 drevet af cerebrospinalvæskens produktion og reabsorption mellem hjernens ventrikler og rygmarvskanalen.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('deeperCstTextExtra', language) || 'James Jealous videreførte denne tradition og formaliserede den biodynamiske tilgang, hvor behandleren ikke manipulerer men lytter. Der er tre perceptuelle niveauer: den hurtigste rytme er kroppens mekaniske respons, den mellemste er det organiserende felt der former væv og struktur, og den langsomste er en universel energetisk bevægelse der forbinder individet med noget større. Mellem og under disse tre lag findes stilhedszonen \u2014 det felt hvorfra reorganisering spontant opstår, når systemet mødes med tilstrækkelig ro og tilstedeværelse.'}
              </p>
              <ul className={styles.bullets}>
                {(t('deeperCstBullets', language) || [
                  'Sutherlands opdagelse: kranieknoglerne bevæger sig hele livet',
                  'Cerebrospinalvæsken pulserer uafhængigt af hjerte og lunger',
                  'Tre perceptuelle lag svarer til tre niveauer af organisering',
                  'Behandleren lytter med hænderne \u2014 uden at tilføje kraft eller retning',
                  'Stilhed er ikke fravær af bevægelse men kilden til al bevægelse',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* ═══ CST ILLUSTRATION — Three tides ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 180" className={styles.heroSvg}>
          {/* CRI — fast rhythm */}
          <path d="M40,60 Q80,40 120,60 Q160,80 200,60 Q240,40 280,60 Q320,80 360,60" fill="none" stroke="var(--color-cst)" strokeWidth="0.7" opacity="0.45">
            <animate attributeName="d" values="M40,60 Q80,23 120,60 Q160,97 200,60 Q240,23 280,60 Q320,97 360,60;M40,60 Q80,48 120,60 Q160,72 200,60 Q240,48 280,60 Q320,72 360,60;M40,60 Q80,23 120,60 Q160,97 200,60 Q240,23 280,60 Q320,97 360,60" dur="4.5s" repeatCount="indefinite" />
          </path>
          {/* Mid-Tide — slower */}
          <path d="M40,100 Q120,75 200,100 Q280,125 360,100" fill="none" stroke="var(--color-cst)" strokeWidth="0.9" opacity="0.35">
            <animate attributeName="d" values="M40,100 Q120,55 200,100 Q280,145 360,100;M40,100 Q120,86 200,100 Q280,114 360,100;M40,100 Q120,55 200,100 Q280,145 360,100" dur="11s" repeatCount="indefinite" />
          </path>
          {/* Long Tide — slowest */}
          <path d="M40,140 Q200,115 360,140" fill="none" stroke="var(--color-cst)" strokeWidth="1.1" opacity="0.2">
            <animate attributeName="d" values="M40,140 Q200,98 360,140;M40,140 Q200,134 360,140;M40,140 Q200,98 360,140" dur="22s" repeatCount="indefinite" />
          </path>
          {/* Labels */}
          <text x="370" y="62" fill="var(--color-cst)" fontSize="7" opacity="0.3" fontFamily="Inter, sans-serif">CRI</text>
          <text x="370" y="102" fill="var(--color-cst)" fontSize="7" opacity="0.25" fontFamily="Inter, sans-serif">Mid-Tide</text>
          <text x="370" y="142" fill="var(--color-cst)" fontSize="7" opacity="0.18" fontFamily="Inter, sans-serif">Long Tide</text>
          {/* Still point */}
          <circle cx="200" cy="165" r="2" fill="var(--text-primary)" opacity="0.15">
            <animate attributeName="opacity" values="0.05;0.45;0.05" dur="22s" repeatCount="indefinite" />
          </circle>
          <text x="200" y="178" fill="var(--text-primary)" fontSize="6" opacity="0.12" fontFamily="Inter, sans-serif" textAnchor="middle">{t('deeperSvgStillness', language) || 'Stilhed'}</text>
        </svg>
      </div>

      {/* ═══ INTEGRATION — Where they meet ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${expandedCard === 'integration' ? styles.expanded : ''}`}
          onClick={() => toggle('integration')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="16" fill="none" stroke="var(--text-primary)" strokeWidth="0.4" opacity="0.15" strokeDasharray="2,4">
                  <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="36s" repeatCount="indefinite" />
                </circle>
                <circle cx="16" cy="20" r="4" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.4" />
                <circle cx="32" cy="20" r="4" fill="none" stroke="var(--color-whm)" strokeWidth="0.5" opacity="0.4" />
                <circle cx="24" cy="32" r="4" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.4" />
                <circle cx="24" cy="24" r="1.5" fill="var(--text-primary)" opacity="0.2" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('deeperIntegrationLabel', language) || 'De tre som én'}</p>
              <h2 className={styles.cardTitle}>{t('deeperIntegrationTitle', language) || 'Integration'}</h2>
              <p className={styles.cardSubtitle}>{t('deeperIntegrationSubtitle', language) || 'Når disciplinerne smelter sammen'}</p>
            </div>
            <span className={styles.cardChevron}>{expandedCard === 'integration' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('deeperIntegrationText', language) || 'De tre discipliner er ikke separate praksisser — de er tre indgange til det samme territorium. ALT arbejder udefra-ind gennem vævet og nerverne. Wim Hof arbejder indefra-ud gennem åndedrættet og kemien. Kraniosakral terapi lytter til det, der allerede bevæger sig, uden at tilføje noget.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('deeperIntegrationTextExtra', language) || 'Når de tre kombineres, opstår der en synergi: ansigtsbehandlingen åbner de kranielle nerver, så åndedrættet kan bevæge sig frit. Åndedrættet aktiverer nervesystemet, så den kraniosakrale rytme kan udfolde sig fuldt. Og den kraniosakrale lytning skaber det stille rum, hvor alt det andet kan integreres. Det er en spiral, ikke en linje — hver praksis forstærker de andre, og over tid bliver grænsen mellem dem umulig at finde.'}
              </p>
              <ul className={styles.bullets}>
                {(t('deeperIntegrationBullets', language) || [
                  'ALT åbner nervevejene, åndedræt fylder dem med energi',
                  'Kuldeeksponering skærper det, som berøringen blødgør',
                  'Kraniosakral lytning integrerer alt i stilhed',
                  'Nervesystemet er den fælles akse for alle tre',
                  'Over tid opleves de tre som én sammenhængende praksis',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EXERCISES SECTION ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 120" className={styles.heroSvg}>
          {/* Hands/practice symbol */}
          <path d="M160,60 Q180,30 200,60 Q220,30 240,60" fill="none" stroke="var(--text-primary)" strokeWidth="0.6" opacity="0.15">
            <animate attributeName="d" values="M160,60 Q180,14 200,60 Q220,14 240,60;M160,60 Q180,44 200,53 Q220,44 240,60;M160,60 Q180,14 200,60 Q220,14 240,60" dur="9s" repeatCount="indefinite" />
          </path>
          <circle cx="200" cy="60" r="20" fill="none" stroke="var(--text-primary)" strokeWidth="0.3" opacity="0.08">
            <animate attributeName="r" values="15;35;15" dur="9s" repeatCount="indefinite" />
          </circle>
          <text x="200" y="95" fill="var(--text-primary)" fontSize="8" opacity="0.15" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" fontStyle="italic">{t('deeperSvgExercises', language) || 'Øvelser'}</text>
        </svg>
      </div>

      {/* ═══ EXERCISE 1 — Breath (WHM) ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${styles.exerciseCard} ${activeExercise === 'breath' ? styles.expanded : ''}`}
          onClick={() => setActiveExercise(activeExercise === 'breath' ? null : 'breath')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r={breathPhase ? (breathPhase === 'in' ? 16 : breathPhase === 'hold' ? 16 : 8) : 10} fill="none" stroke="var(--color-whm)" strokeWidth="0.8" opacity="0.5">
                  {!breathPhase && <animate attributeName="r" values="6;18;6" dur="7s" repeatCount="indefinite" />}
                </circle>
                <circle cx="24" cy="24" r="2" fill="var(--color-whm)" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('deeperBreathExLabel', language) || 'Øvelse — Åndedræt'}</p>
              <h2 className={styles.cardTitle}>{t('deeperBreathExTitle', language) || 'Bevidst vejrtrækning'}</h2>
              <p className={styles.cardSubtitle}>{t('deeperBreathExSubtitle', language) || '4-4-4 boks-åndedræt'}</p>
            </div>
            <span className={styles.cardChevron}>{activeExercise === 'breath' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('deeperBreathExText', language) || 'Denne øvelse bruger boks-åndedræt (box breathing) til at balancere nervesystemet. Indånd i 4 sekunder, hold i 4 sekunder, udånd i 4 sekunder. Øvelsen aktiverer den ventrale vagale vej og bringer dig fra stress til tilstedeværelse. Brug den som forberedelse til dybere praksis.'}
              </p>
              <div className={styles.exerciseArea} onClick={(e) => e.stopPropagation()}>
                <div className={styles.breathCircle}>
                  <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-whm)" strokeWidth="1" opacity="0.15" />
                    <circle
                      cx="60" cy="60"
                      r={breathPhase === 'in' ? 50 : breathPhase === 'hold' ? 50 : breathPhase === 'out' ? 25 : 35}
                      fill="none"
                      stroke="var(--color-whm)"
                      strokeWidth="1.5"
                      opacity="0.5"
                      style={{ transition: 'r 3.8s ease-in-out' }}
                    />
                    <text x="60" y="58" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontFamily="'Cormorant Garamond', serif" opacity="0.6">
                      {breathPhase === 'in' ? (t('deeperBreathIn', language) || 'Indånd') : breathPhase === 'hold' ? (t('deeperBreathHold', language) || 'Hold') : breathPhase === 'out' ? (t('deeperBreathOut', language) || 'Udånd') : (t('deeperBreathStart', language) || 'Start')}
                    </text>
                    <text x="60" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.4">
                      {breathPhase ? `${t('deeperBreathCycle', language) || 'Cyklus'} ${breathCount + 1}` : (t('deeperBreathPressBelow', language) || 'Tryk herunder')}
                    </text>
                  </svg>
                </div>
                <button className={styles.exerciseBtn} onClick={startBreathExercise}>
                  {breathPhase ? (t('deeperBreathStop', language) || 'Stop') : (t('deeperBreathBegin', language) || 'Begynd øvelsen')}
                </button>
              </div>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ EXERCISE 2 — Face (ALT) ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${styles.exerciseCard} ${activeExercise === 'face' ? styles.expanded : ''}`}
          onClick={() => setActiveExercise(activeExercise === 'face' ? null : 'face')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <ellipse cx="24" cy="22" rx="10" ry="14" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.5" />
                <circle cx="19" cy="19" r="1" fill="var(--color-alt)" opacity="0.4" />
                <circle cx="29" cy="19" r="1" fill="var(--color-alt)" opacity="0.4" />
                <path d="M20,27 Q24,30 28,27" fill="none" stroke="var(--color-alt)" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('deeperFaceExLabel', language) || 'Øvelse — Ansigt'}</p>
              <h2 className={styles.cardTitle}>{t('deeperFaceExTitle', language) || 'Ansigtets kort'}</h2>
              <p className={styles.cardSubtitle}>{t('deeperFaceExSubtitle', language) || 'Selvberøring og bevidst kontakt'}</p>
            </div>
            <span className={styles.cardChevron}>{activeExercise === 'face' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('deeperFaceExText', language) || 'Denne øvelse hjælper dig med at mærke dit eget ansigt med nye hænder. Luk øjnene. Placer begge hænders fingerspidser let på kinderne — så let at du kun lige mærker kontakten. Bliv der i 30 sekunder uden at bevæge dig.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('deeperFaceExTextExtra', language) || 'Mærk nu langsomt opefter mod tindingeregionen. Læg mærke til temperatur, spænding, blødhed. Bevæg dig ned langs kæbelinjen. Afslut med fingerspidserne let placeret på panden. Hele rejsen tager 3-5 minutter. Du træner ikke musklerne — du genoptager kontakten mellem hænderne og nervesystemet.'}
              </p>
              <div className={styles.exerciseSteps}>
                {(t('deeperFaceSteps', language) || [
                  'Luk øjnene. Placer fingerspidserne på kinderne med minimal berøring.',
                  'Bliv i 30 sekunder. Mærk varme, puls, spænding.',
                  'Glid langsomt opefter til tindingerne. Bliv der 20 sekunder.',
                  'Følg kæbelinjen ned med langsomme fingerspidser.',
                  'Afslut på panden. Mærk stilheden under hænderne.',
                ]).map((step, i) => (
                  <div key={i} className={styles.step}><span className={styles.stepNum}>{i + 1}</span><span>{step}</span></div>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-alt)' }} />
        </div>
      </section>

      {/* ═══ EXERCISE 3 — Craniosacral listening ═══ */}
      <section className={styles.cardSection}>
        <div
          className={`${styles.deepCard} ${styles.exerciseCard} ${activeExercise === 'listen' ? styles.expanded : ''}`}
          onClick={() => setActiveExercise(activeExercise === 'listen' ? null : 'listen')}
        >
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="12" fill="none" stroke="var(--color-cst)" strokeWidth="0.5" opacity="0.25">
                  <animate attributeName="r" values="8;20;8" dur="14.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.28;0.06;0.28" dur="14.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="6" fill="none" stroke="var(--color-cst)" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="r" values="4;12;4" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="1.5" fill="var(--color-cst)" opacity="0.4">
                  <animate attributeName="opacity" values="0.15;0.6;0.15" dur="7s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('deeperListenExLabel', language) || 'Øvelse — Lytning'}</p>
              <h2 className={styles.cardTitle}>{t('deeperListenExTitle', language) || 'Stilhedens hånd'}</h2>
              <p className={styles.cardSubtitle}>{t('deeperListenExSubtitle', language) || 'Mærk den kraniosakrale rytme'}</p>
            </div>
            <span className={styles.cardChevron}>{activeExercise === 'listen' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('deeperListenExText', language) || 'Denne øvelse introducerer dig til den kraniosakrale lytning. Sæt dig behageligt. Placer én hånd på toppen af dit hoved (vertex) med blød, åben kontakt. Tryk ikke — forestil dig at din hånd flyder på vandoverfladen.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('deeperListenExTextExtra', language) || 'Vent. Lyt med hånden. Efter 1-2 minutter kan du muligvis mærke en subtil, langsom bevægelse — en ekspansion og kontraktion der ikke følger dit åndedræt. Det er CRI, den kraniosakrale rytme. Døm den ikke. Analyser den ikke. Mærk den bare. Denne kvalitet af tilstedeværelse — at lytte uden at ville ændre — er kernen i al kraniosakral praksis.'}
              </p>
              <div className={styles.exerciseSteps}>
                {(t('deeperListenSteps', language) || [
                  'Sæt dig behageligt. Luk øjnene. Lad åndedrættet falde til ro.',
                  'Placer én hånd blidt på toppen af hovedet. Minimal kontakt.',
                  'Forestil dig at hånden flyder. Giv slip på al intention.',
                  'Vent 2-3 minutter. Mærk eventuelle subtile bevægelser.',
                  'Afslut langsomt. Mærk hele kroppen i stilhed et øjeblik.',
                ]).map((step, i) => (
                  <div key={i} className={styles.step}><span className={styles.stepNum}>{i + 1}</span><span>{step}</span></div>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-cst)' }} />
        </div>
      </section>

      {/* Bottom spacer */}
      <ScrollToTop language={language} />
      <div className={styles.bottomSpacer} />
    </main>
  )
}
