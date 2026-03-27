import { useState } from 'react'
import styles from './DeeperPage.module.css'
import ScrollToTop from './ScrollToTop'
import { t } from '../translations'

export default function WhmPage({ language }) {
  const [expanded, setExpanded] = useState(null)
  const toggle = (id) => setExpanded(expanded === id ? null : id)

  return (
    <main className={styles.page}>
      <div className={styles.ambientGlow} />

      <header className={styles.header}>
        <p className={styles.eyebrow}>{t('whmEyebrow', language) || 'Åndedræt'}</p>
        <h1 className={styles.title}>{t('whmTitle', language) || 'Wim Hof'}</h1>
        <p className={styles.subtitle}>
          {t('whmSubtitle', language) || 'Metoden der forvandler åndedræt til et redskab for fysiologisk kontrol og indre modstandskraft.'}
        </p>
      </header>

      {/* ═══ HERO — Breath wave system ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 300" className={styles.heroSvg}>
          {/* Breath wave layers */}
          {[0,1,2,3,4,5,6].map(i => (
            <path
              key={i}
              d={`M30,${150+i*3} Q110,${100+i*8} 200,${150+i*3} Q290,${200-i*8} 370,${150+i*3}`}
              fill="none"
              stroke="var(--color-whm)"
              strokeWidth={1.8-i*0.18}
              opacity={0.7-i*0.07}
            >
              <animate
                attributeName="d"
                values={`M30,${150+i*3} Q110,${75+i*14} 200,${150+i*3} Q290,${225-i*14} 370,${150+i*3};M30,${150+i*3} Q110,${138+i*3} 200,${147+i*3} Q290,${162-i*3} 370,${150+i*3};M30,${150+i*3} Q110,${75+i*14} 200,${150+i*3} Q290,${225-i*14} 370,${150+i*3}`}
                dur={`${4+i*0.65}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
          {/* Retention void */}
          <circle cx="200" cy="150" r="20" fill="none" stroke="var(--color-whm)" strokeWidth="0.9" opacity="0.25">
            <animate attributeName="r" values="10;45;10" dur="13s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.05;0.3" dur="13s" repeatCount="indefinite" />
          </circle>
          {/* Ice crystal structure */}
          {[0,60,120,180,240,300].map(angle => (
            <line
              key={angle}
              x1="200" y1="150"
              x2={200+Math.cos(angle*Math.PI/180)*40}
              y2={150+Math.sin(angle*Math.PI/180)*40}
              stroke="var(--color-whm)"
              strokeWidth="0.55"
              opacity="0.16"
            />
          ))}
          {/* Breath count markers */}
          {[1,2,3].map(i => (
            <circle key={i} cx={130+i*45} cy="250" r="4" fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity={0.2+i*0.14}>
              <animate attributeName="r" values={`2;${7+i*1.5};2`} dur={`${6.5+i*1.6}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <text x="175" y="270" fill="var(--color-whm)" fontSize="6" opacity="0.25" fontFamily="Inter, sans-serif">{t('whmSvgRound1', language) || 'Runde 1'}</text>
          <text x="220" y="270" fill="var(--color-whm)" fontSize="6" opacity="0.3" fontFamily="Inter, sans-serif">{t('whmSvgRound2', language) || 'Runde 2'}</text>
          <text x="265" y="270" fill="var(--color-whm)" fontSize="6" opacity="0.4" fontFamily="Inter, sans-serif">{t('whmSvgRound3', language) || 'Runde 3'}</text>
        </svg>
      </div>

      {/* ═══ CARD 1 — The breath ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'breath' ? styles.expanded : ''}`} onClick={() => toggle('breath')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <path d="M8,24 Q16,8 24,24 Q32,40 40,24" fill="none" stroke="var(--color-whm)" strokeWidth="1.3" opacity="0.7">
                  <animate attributeName="d" values="M8,24 Q16,0 24,24 Q32,48 40,24;M8,24 Q16,20 24,23 Q32,26 40,24;M8,24 Q16,0 24,24 Q32,48 40,24" dur="5s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('whmBreathLabel', language) || 'Søjle 1'}</p>
              <h2 className={styles.cardTitle}>{t('whmBreathTitle', language) || 'Åndedrættet'}</h2>
              <p className={styles.cardSubtitle}>{t('whmBreathSubtitle', language) || '30 åndedrag der ændrer kemien'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'breath' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('whmBreathText', language) || 'Grundøvelsen er enkel i sin form men dybtgående i sin virkning. Tredive til fyrre dybe indåndinger gennem næsen, med passive udåndinger, skaber en tilstand af respiratorisk alkalose. Blodets kuldioxidniveau falder, iltbindingen til hæmoglobin strammes (Bohr-effekten), og cellernes faktiske iltforsyning ændrer paradoksalt karakter.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('whmBreathTextExtra', language) || 'Efter de tredive åndedrag kommer udåndingen — og så holder man vejret med tomme lunger. Det er her, den egentlige transformation finder sted. Uden luft i lungerne og med ændret blodkemi oplever kroppen en kontrolleret dykning i iltmætning. Milten frigiver ekstra røde blodlegemer. Hjernen skifter til en tilstand af skærpet opmærksomhed. Det sympatiske nervesystem aktiveres — men uden panik, fordi konteksten er frivillig.'}
              </p>
              <ul className={styles.bullets}>
                {(t('whmBreathBullets', language) || [
                  'Respiratorisk alkalose: pH stiger fra 7.4 mod 7.75 under øvelsen',
                  'Bohr-effekten: ilt bindes strammere til hæmoglobin ved lav CO₂',
                  'Milten kontraherer og frigiver ekstra røde blodlegemer',
                  'Retentionen er frivillig stress — nervesystemet lærer forskellen',
                  'Tre runder fordyber effekten progressivt med hver cyklus',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ CARD 2 — The cold ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'cold' ? styles.expanded : ''}`} onClick={() => toggle('cold')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                {[0,60,120,180,240,300].map(angle => (
                  <line key={angle} x1="24" y1="24" x2={24+Math.cos(angle*Math.PI/180)*14} y2={24+Math.sin(angle*Math.PI/180)*14} stroke="var(--color-whm)" strokeWidth="0.9" opacity="0.65" />
                ))}
                <circle cx="24" cy="24" r="4" fill="none" stroke="var(--color-whm)" strokeWidth="1.0" opacity="0.7">
                  <animate attributeName="r" values="2;9;2" dur="6.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('whmColdLabel', language) || 'Søjle 2'}</p>
              <h2 className={styles.cardTitle}>{t('whmColdTitle', language) || 'Kulden'}</h2>
              <p className={styles.cardSubtitle}>{t('whmColdSubtitle', language) || 'Kroppens ældste træningspartner'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'cold' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('whmColdText', language) || 'Mennesket er evolutionært designet til temperaturvariation. Moderne komfortkultur — konstant 21 grader, aldrig for koldt, aldrig for varmt — har bedøvet et helt fysiologisk system. Kuldeeksponering genaktiverer det. Når huden registrerer temperaturer under 15 grader, udløser det en kaskade af vaskulære og hormonelle responser.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('whmColdTextExtra', language) || 'Det perifere karsystem trækker sig sammen for at bevare kerntemperaturen. Brunt fedtvæv — et metabolisk aktivt væv de fleste voksne har i begrænset mængde — aktiveres og begynder at producere varme direkte fra fedt. Noradrenalin udskilles i mængder der er tre til fem gange over baseline. Denne neurotransmitter påvirker opmærksomhed, stemningsleje og immunfunktion. Over tid udvider kroppen sin komfortzone bogstaveligt — den tåler mere, reagerer hurtigere og restituerer bedre.'}
              </p>
              <ul className={styles.bullets}>
                {(t('whmColdBullets', language) || [
                  'Vaskulær gymnastik: karrene træner kontraktion og dilatation',
                  'Brunt fedtvæv producerer varme og øger metabolisk rate',
                  'Noradrenalin stiger 200-500% under kuldepåvirkning',
                  'Gradvis progression: fra kolde afslutninger til isbad',
                  'Komfortzonen udvides med praksis — ikke kun mentalt, men fysiologisk',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ MID ILLUSTRATION — Ice crystal / temperature gradient ═══ */}
      <div className={styles.heroVisual}>
        <svg viewBox="0 0 400 200" className={styles.heroSvg}>
          {/* Temperature gradient — warm to cold */}
          <line x1="60" y1="100" x2="340" y2="100" stroke="var(--text-primary)" strokeWidth="0.55" opacity="0.12" />
          {/* Warm side */}
          <circle cx="80" cy="100" r="20" fill="none" stroke="var(--color-alt)" strokeWidth="0.7" opacity="0.3">
            <animate attributeName="r" values="15;29;15" dur="6.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="100" r="10" fill="none" stroke="var(--color-alt)" strokeWidth="0.55" opacity="0.2" />
          {/* Cold side — ice crystal */}
          {[0,60,120,180,240,300].map(angle => (
            <g key={angle}>
              <line
                x1="320" y1="100"
                x2={320+Math.cos(angle*Math.PI/180)*30}
                y2={100+Math.sin(angle*Math.PI/180)*30}
                stroke="var(--color-whm)" strokeWidth="0.9" opacity="0.45"
              />
              <line
                x1={320+Math.cos(angle*Math.PI/180)*15}
                y1={100+Math.sin(angle*Math.PI/180)*15}
                x2={320+Math.cos((angle+40)*Math.PI/180)*22}
                y2={100+Math.sin((angle+40)*Math.PI/180)*22}
                stroke="var(--color-whm)" strokeWidth="0.55" opacity="0.3"
              />
            </g>
          ))}
          <circle cx="320" cy="100" r="4" fill="none" stroke="var(--color-whm)" strokeWidth="0.9" opacity="0.55">
            <animate attributeName="r" values="2;12;2" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="8s" repeatCount="indefinite" />
          </circle>
          {/* Transition waves between warm and cold */}
          {[0,1,2].map(i => (
            <path
              key={i}
              d={`M${140+i*30},${85+i*10} Q${180+i*15},${100} ${220+i*10},${115-i*10}`}
              fill="none"
              stroke="var(--color-whm)"
              strokeWidth={0.9-i*0.18}
              opacity={0.4-i*0.08}
            >
              <animate
                attributeName="d"
                values={`M${140+i*30},${73+i*10} Q${180+i*15},${90} ${220+i*10},${127-i*10};M${140+i*30},${95+i*10} Q${180+i*15},${110} ${220+i*10},${105-i*10};M${140+i*30},${73+i*10} Q${180+i*15},${90} ${220+i*10},${127-i*10}`}
                dur={`${5+i*1.6}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
          {/* Labels */}
          <text x="80" y="140" fill="var(--color-alt)" fontSize="6" opacity="0.3" fontFamily="Inter, sans-serif" textAnchor="middle">{t('whmSvgComfort', language) || 'Komfort'}</text>
          <text x="320" y="140" fill="var(--color-whm)" fontSize="6" opacity="0.4" fontFamily="Inter, sans-serif" textAnchor="middle">{t('whmSvgCold', language) || 'Kulde'}</text>
          <text x="200" y="160" fill="var(--text-primary)" fontSize="7" opacity="0.2" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" fontStyle="italic">{t('whmSvgWill', language) || 'Viljen'}</text>
        </svg>
      </div>

      {/* ═══ CARD 3 — The mindset ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'mind' ? styles.expanded : ''}`} onClick={() => toggle('mind')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="10" fill="none" stroke="var(--color-whm)" strokeWidth="0.9" opacity="0.55">
                  <animate attributeName="r" values="5;19;5" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="24" cy="24" r="3" fill="var(--color-whm)" opacity="0.45" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('whmMindLabel', language) || 'Søjle 3'}</p>
              <h2 className={styles.cardTitle}>{t('whmMindTitle', language) || 'Mindset'}</h2>
              <p className={styles.cardSubtitle}>{t('whmMindSubtitle', language) || 'Viljen som fysiologisk kraft'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'mind' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('whmMindText', language) || 'Det tredje element i Wim Hof Metoden er det mindst synlige men måske det mest afgørende. Mindset er ikke positiv tænkning — det er evnen til at forblive tilstede med ubehag uden at flygte ind i reaktion. Det er forskellen mellem at mærke kulden og at blive overtaget af kulden.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('whmMindTextExtra', language) || 'Denne kapacitet er direkte knyttet til præfrontal cortex\' kontrol over amygdala — hjernens alarmcentral. Med gentagen øvelse styrkes de neurale forbindelser, der tillader bevidst regulering af stressresponsen. Det handler ikke om at undertrykke frygten, men om at skabe et rum mellem stimulus og respons. I det rum ligger friheden — og det rum vokser med praksis. Mange udøvere rapporterer, at denne evne overføres til andre livsområder: vanskelige samtaler, præstationspres, kroniske smerter.'}
              </p>
              <ul className={styles.bullets}>
                {(t('whmMindBullets', language) || [
                  'Præfrontal regulering af amygdala styrkes med praksis',
                  'Rummet mellem stimulus og respons kan trænes og udvides',
                  'Ubehagstolerance overføres til alle livets stressorer',
                  'Bevidst fokus ændrer den neurochemiske respons på kulde',
                  'Viljen er ikke undertrykkelse men tilstedeværelse med det der er',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ CARD 4 — The science ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'science' ? styles.expanded : ''}`} onClick={() => toggle('science')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <rect x="14" y="10" width="20" height="28" rx="2" fill="none" stroke="var(--color-whm)" strokeWidth="0.9" opacity="0.55" />
                <line x1="18" y1="18" x2="30" y2="18" stroke="var(--color-whm)" strokeWidth="0.55" opacity="0.4" />
                <line x1="18" y1="22" x2="28" y2="22" stroke="var(--color-whm)" strokeWidth="0.55" opacity="0.4" />
                <line x1="18" y1="26" x2="26" y2="26" stroke="var(--color-whm)" strokeWidth="0.55" opacity="0.3" />
                <line x1="18" y1="30" x2="24" y2="30" stroke="var(--color-whm)" strokeWidth="0.55" opacity="0.3" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('whmScienceLabel', language) || 'Forskningen'}</p>
              <h2 className={styles.cardTitle}>{t('whmScienceTitle', language) || 'Videnskaben bag'}</h2>
              <p className={styles.cardSubtitle}>{t('whmScienceSubtitle', language) || 'Fra skepsis til peer-reviewed evidens'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'science' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('whmScienceText', language) || 'I 2011 begyndte forskere ved Radboud University Medical Center i Nijmegen at undersøge Wim Hofs påstande videnskabeligt. Resultaterne overraskede det medicinske establishment. Hof demonstrerede under kontrollerede laboratorieforhold, at han kunne påvirke sit medfødte immunsystem viljestyret — noget der blev anset for fysiologisk umuligt.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('whmScienceTextExtra', language) || 'I 2014 publicerede Matthijs Kox og kollegaer et banebrydende studie i Proceedings of the National Academy of Sciences. Tolv trænede frivillige blev injiceret med endotoxin (et bakterielt komponent der normalt udløser influenzalignende symptomer). De trænede deltagere viste signifikant lavere niveauer af proinflammatoriske cytokiner og rapporterede færre symptomer end kontrolgruppen. Studiet etablerede for første gang, at det autonome nervesystem og immunresponsen kan påvirkes gennem bevidst praksis.'}
              </p>
              <ul className={styles.bullets}>
                {(t('whmScienceBullets', language) || [
                  'Radboud-studiet 2014: viljestyret modulering af immunrespons',
                  'Proinflammatoriske cytokiner reduceret signifikant hos trænede',
                  'Adrenalin-niveauer steg markant under åndedrættsprotokollen',
                  'Endotoxin-symptomer halveret sammenlignet med kontrolgruppe',
                  'Publiceret i PNAS — et af verdens mest respekterede tidsskrifter',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      {/* ═══ CARD 5 — Daily practice ═══ */}
      <section className={styles.cardSection}>
        <div className={`${styles.deepCard} ${expanded === 'daily' ? styles.expanded : ''}`} onClick={() => toggle('daily')}>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" className={styles.cardIconSvg}>
                <circle cx="24" cy="24" r="14" fill="none" stroke="var(--color-whm)" strokeWidth="0.7" opacity="0.4" />
                <path d="M24,10 L24,24 L32,28" fill="none" stroke="var(--color-whm)" strokeWidth="0.9" opacity="0.7" />
                <circle cx="24" cy="24" r="1.5" fill="var(--color-whm)" opacity="0.55" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{t('whmDailyLabel', language) || 'Praksis'}</p>
              <h2 className={styles.cardTitle}>{t('whmDailyTitle', language) || 'Daglig rytme'}</h2>
              <p className={styles.cardSubtitle}>{t('whmDailySubtitle', language) || 'Sådan ser en morgenrutine ud'}</p>
            </div>
            <span className={styles.cardChevron}>{expanded === 'daily' ? '−' : '+'}</span>
          </div>
          <div className={styles.cardExpandable}>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {t('whmDailyText', language) || 'En typisk Wim Hof-morgen begynder på tom mave. Sæt dig eller læg dig behageligt. Tre runder åndedræt: tredive dybe indåndinger, derefter retention med tomme lunger (start med 1-2 minutter, byg op over uger), efterfulgt af en genopfyldningsindånding der holdes i 15 sekunder.'}
              </p>
              <p className={styles.cardTextExtra}>
                {t('whmDailyTextExtra', language) || 'Efter åndedrættet følger kulden. For begyndere er to minutter med koldt brusebad tilstrækkeligt. Med tiden kan det udbygges til isbad, vinterbadning eller længere eksponering. Det vigtige er progressionen — aldrig tvang, altid respekt for kroppens aktuelle grænse. Hele rutinen tager 15-20 minutter og efterlader de fleste udøvere med en følelse af klarhed, energi og indre varme der kan mærkes i timevis.'}
              </p>
              <ul className={styles.bullets}>
                {(t('whmDailyBullets', language) || [
                  'Morgen på tom mave giver den reneste fysiologiske respons',
                  'Tre runder: 30 åndedrag → retention → genopfyldning',
                  'Retentionstiden vokser naturligt med praksis',
                  'Kuldeeksponering fra 30 sekunder og op — aldrig forceret',
                  '15-20 minutters investering med effekt der varer hele dagen',
                ]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cardAccent} style={{ background: 'var(--color-whm)' }} />
        </div>
      </section>

      <ScrollToTop language={language} />
      <div className={styles.bottomSpacer} />
    </main>
  )
}
