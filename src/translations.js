// translations.js — Spanish translations for AnThes Dynamics
// Danish text lives in the JSX as default. Only Spanish is stored here.
// Usage: t(key, language) returns Spanish string or null (meaning: use JSX default)

const es = {
  // ── Nav & UI ──
  navHome: 'Inicio',
  navAlt: 'ALT',
  navWhm: 'Wim Hof',
  navCranio: 'Cráneo',
  navDeeper: 'Profundo',
  scrollToTop: '↑ Arriba',

  // ── Menu ──
  menuProfileName: 'Anne Thestrup',
  menuProfileBio: 'Terapeuta y fundadora de AnThes Dynamics. Especializada en AnsigtsLøftningsTeknik (ALT), el Método Wim Hof, terapia craneosacral, masaje de tejido conectivo, terapia de cicatrices y masaje visceral. Una práctica construida sobre el tacto, la presencia y la inteligencia innata del cuerpo.',
  menuExplore: 'Explorar',
  menuHome: 'Inicio',
  menuAlt: 'ALT — Tratamiento facial',
  menuWhm: 'Wim Hof — Respiración',
  menuCranio: 'Craneosacral — Escucha',
  menuDeeper: 'Profundo — Ejercicios e integración',
  menuWhmInstructor: 'Instructora Wim Hof',
  menuWhmInstructorText: 'Anne es instructora certificada del Método Wim Hof e imparte cursos y talleres de forma regular, tanto en Dinamarca como a nivel internacional.',
  menuTreatments: 'Tratamientos',
  menuTreatment1: 'AnsigtsLøftningsTeknik (ALT)',
  menuTreatment2: 'Método Wim Hof',
  menuTreatment3: 'Terapia craneosacral',
  menuTreatment4: 'Masaje de tejido conectivo',
  menuTreatment5: 'Terapia de cicatrices',
  menuTreatment6: 'Masaje visceral',
  menuPrivacy: 'Privacidad y notificaciones',
  menuPrivacyText: 'Esta aplicación no recopila datos personales. Sin cookies, sin rastreo. Las notificaciones se pueden activar o desactivar en los ajustes de tu dispositivo.',
  menuContact: 'Contacto',

  // ── HomePage — Header ──
  homeEyebrow: 'Práctica',
  homeTitle: 'AnThes Dynamics',
  homeSubtitle: 'Tres disciplinas. Un solo cuerpo. Donde la sabiduría ancestral y la ciencia moderna de la respiración convergen.',

  // ── HomePage — ALT card ──
  homeAltLabel: 'Tratamiento facial',
  homeAltTitle: 'ALT',
  homeAltSubtitle: 'AnsigtsLøftningsTeknik',
  homeAltDesc: 'Seis capas, de la piel al alma. La técnica gentil de tejido conectivo de Stanley Rosenberg trabaja a través de cinco nervios craneales, restaurando el rostro y, mediante la conexión polivagal, todo el sistema nervioso. 97 músculos. Seis sesiones. Una transformación.',
  homeAltDesc2: 'El rostro es la zona del cuerpo con mayor densidad nerviosa. Cuando el tejido conectivo de sus seis capas se libera, no solo se disuelve la tensión: se abre un canal directo hacia el sistema nervioso parasimpático. El resultado es un cambio visible por fuera y perceptible por dentro.',
  homeAltBullets: [
    'Trabaja con cinco nervios craneales que gobiernan rostro y garganta',
    'Seis capas: piel, grasa subcutánea, SMAS, músculos, grasa profunda, periostio',
    'Activa el nervio vago ventral a través de la musculatura facial',
    '97 músculos faciales se integran en un protocolo sistemático',
    'Conecta el trabajo tisular con la regulación polivagal',
  ],

  // ── HomePage — WHM card ──
  homeWhmLabel: 'Respiración',
  homeWhmTitle: 'Wim Hof',
  homeWhmSubtitle: 'El Método',
  homeWhmDesc: 'Respiración, frío, mentalidad. Tres pilares que abren el sistema nervioso autónomo y demuestran que la voluntad puede llegar donde la medicina decía que era imposible. La hiperventilación controlada transforma la química sanguínea. La exposición al frío entrena la respuesta simpática. La dialéctica entre confort y estrés forja una nueva capacidad.',
  homeWhmDesc2: 'El Método Wim Hof va más allá de simples ejercicios respiratorios. Es un sistema que entrena la capacidad del sistema nervioso para alternar entre activación y calma, construyendo una resiliencia que trasciende la práctica misma. Estudios científicos han demostrado efectos medibles sobre el sistema inmunitario y los marcadores inflamatorios.',
  homeWhmBullets: [
    'La hiperventilación controlada eleva el pH sanguíneo y reduce el CO₂',
    'La exposición al frío activa el tejido adiposo marrón y la noradrenalina',
    'La fase de retención entrena la tolerancia corporal al estrés',
    'La mentalidad consciente conecta las técnicas físicas con el enfoque mental',
    'Efectos documentados sobre la respuesta inmune en estudios clínicos',
  ],

  // ── HomePage — CST card ──
  homeCstLabel: 'Escucha',
  homeCstTitle: 'Craneosacral',
  homeCstSubtitle: 'Terapia',
  homeCstDesc: 'Tres ritmos, un silencio. Desde A.T. Still hasta James Jealous: escuchar los ritmos más profundos del cuerpo con cinco gramos de presión y una paciencia infinita. El sistema craneosacral pulsa con la Respiración Primaria, un ritmo involuntario independiente del latido cardíaco y de la respiración pulmonar. Es la expresión más fundamental de la vida en forma.',
  homeCstDesc2: 'La terapia craneosacral se fundamenta en el principio de que el cuerpo posee una inteligencia autorreguladora innata. Al escuchar con extrema sensibilidad, el terapeuta puede percibir patrones sutiles de movimiento que revelan dónde el sistema se aferra y dónde está listo para soltar.',
  homeCstBullets: [
    'CRI: Impulso rítmico craneal — 8–12 ciclos/min',
    'Mid-Tide: Ritmo más lento — 2–3 ciclos/min',
    'Long Tide: El ritmo más profundo — aprox. 1 ciclo/100 seg.',
    'Still point: Momentos de quietud absoluta y reorganización',
    '5 gramos de contacto — más leve que el aterrizaje de una mariposa',
  ],

  // ── HomePage — Nervous system card ──
  homeNsLabel: 'El hilo conductor',
  homeNsTitle: 'El sistema nervioso',
  homeNsSubtitle: 'Donde las tres se encuentran',
  homeNsDesc: 'Las tres prácticas comparten un eje: el sistema nervioso autónomo. ALT trabaja a través de los cinco nervios craneales del contacto social. Wim Hof entrena la alternancia entre activación simpática y reposo parasimpático. La terapia craneosacral escucha la Respiración Primaria — la expresión más profunda de la inteligencia innata del sistema nervioso. Entradas distintas. Mismo destino.',
  homeNsDesc2: 'El sistema nervioso autónomo es el director invisible del cuerpo. Gobierna el ritmo cardíaco, la digestión, la respuesta inmunitaria y la regulación emocional — todo ello sin control consciente. Cuando las tres prácticas convergen aquí, surge una sinergia que supera la suma de sus partes.',
  homeNsBullets: [
    'El nervio vago conecta cerebro, corazón, pulmones e intestinos',
    'El 80% de las fibras vagales envían información ascendente — del cuerpo al cerebro',
    'El nervio facial (CN VII) está directamente vinculado a la señalización de seguridad',
    'La respiración es la única función autónoma que podemos controlar conscientemente',
    'Las tres prácticas acceden al mismo sistema desde tres ángulos distintos',
  ],

  // ── HomePage — Loop card ──
  homeLoopLabel: 'Circuito de retroalimentación',
  homeLoopTitle: 'Cuerpo ⇄ Mente',
  homeLoopSubtitle: 'Inteligencia bidireccional',
  homeLoopDesc: 'El rostro moldea el sistema nervioso. El sistema nervioso moldea la emoción. La emoción moldea la relación. Y la relación transforma el cuerpo. Este circuito bidireccional es el motor de las tres prácticas — el trabajo tisular cambia el sentir, la respiración cambia la química, la escucha lo cambia todo.',
  homeLoopDesc2: 'Esta inteligencia bidireccional no es filosofía abstracta — es realidad fisiológica. La red fascial, las vías nerviosas y las corrientes de líquido del cuerpo forman un sistema de comunicación que envía información constantemente en ambas direcciones. Trabajar con el cuerpo es trabajar con la mente, y viceversa.',
  homeLoopBullets: [
    'Bottom-up: Los cambios corporales influyen en emociones y pensamientos',
    'Top-down: La intención mental influye en el estado tisular y la química',
    'La fascia conecta todas las estructuras en una matriz tisular continua',
    'Interocepción — la capacidad de sentir el cuerpo desde dentro — es la clave',
    'La regulación ocurre en la relación entre terapeuta y cliente',
  ],

  // ── HomePage — Polyvagal card ──
  homePolyvagalLabel: 'Ir más profundo',
  homePolyvagalTitle: 'Teoría polivagal',
  homePolyvagalSubtitle: 'La ciencia de la seguridad',
  homePolyvagalDesc: 'La teoría polivagal de Stephen Porges revela tres estados del sistema nervioso autónomo: vagal ventral (contacto social, seguridad), simpático (lucha/huida) y vagal dorsal (congelación, cierre). Las tres prácticas de AT Dynamics trabajan para restaurar la función vagal ventral — el estado donde la sanación, la conexión y el crecimiento se hacen posibles.',
  homePolyvagalDesc2: 'La comprensión polivagal revolucionó la visión del trauma y la regulación. No se trata de evitar el estrés, sino de construir la capacidad del sistema nervioso para moverse con flexibilidad entre estados y regresar a la seguridad. Eso es exactamente lo que entrenan las tres prácticas.',
  homePolyvagalBullets: [
    'Vagal ventral: Seguridad, contacto social, creatividad y sanación',
    'Simpático: Movilización, lucha o huida, acción bajo presión',
    'Vagal dorsal: Cierre, congelación, ahorro de energía, disociación',
    'Neurocepción: El escaneo inconsciente del sistema nervioso en busca de seguridad',
    'Co-regulación: Nos regulamos mutuamente a través de la presencia y el tono de voz',
  ],

  // ── HomePage — Primary Respiration card ──
  homePrimaryLabel: 'El ritmo más profundo',
  homePrimaryTitle: 'Primary Respiration',
  homePrimarySubtitle: 'El aliento de la vida bajo la respiración',
  homePrimaryDesc: 'Bajo la respiración pulmonar y bajo el latido cardíaco existe un ritmo más lento, más sutil. La Primary Respiration — el pulso craneosacral — se mueve a 6–12 ciclos por minuto. Es la expresión más fundamental de la vida en el cuerpo, presente desde el desarrollo embrionario hasta la muerte. Cuando este ritmo es libre, la salud sigue.',
  homePrimaryDesc2: 'William Garner Sutherland descubrió este ritmo a principios del siglo XX y lo llamó "Breath of Life". Más tarde, James Jealous desarrolló el enfoque biodinámico, que considera este ritmo como una expresión de la salud inherente del cuerpo — no un movimiento mecánico, sino una fuerza viva.',
  homePrimaryBullets: [
    'Descubierto por W.G. Sutherland — alumno del fundador de la osteopatía',
    'El líquido cefalorraquídeo pulsa independientemente del corazón y los pulmones',
    'El ritmo está presente desde el período embrionario hasta después de la muerte',
    'Enfoque biodinámico: Escuchar la salud en lugar de arreglar la enfermedad',
    'La inducción de still point puede reiniciar el tono de todo el sistema nervioso',
  ],

  // ── HomePage — Daily reading ──
  homeTodayLabel: 'Lectura del día',
  homeTodayQuote: 'El cuerpo no es algo que deba repararse — es un proceso que pide ser escuchado. Cada respiración, cada silencio, cada contacto es una conversación con algo más profundo que el pensamiento.',

  // ── HomePage — Deeper teaser ──
  homeDeeperTeaserLabel: 'Explora en profundidad',
  homeDeeperTeaserTitle: 'Adéntrate en las tres prácticas',
  homeDeeperTeaserSub: 'Conocimiento detallado, ejercicios interactivos y la conexión completa entre rostro, respiración y terapia craneosacral.',

  // ── HomePage — Pills ──
  homePill1: 'Tu plan de sesiones',
  homePill2: 'Práctica respiratoria',
  homePill3: 'Los tres ritmos',
  homePill4: 'Ir más profundo',
}

export function t(key, language) {
  if (language === 'da') return null
  return es[key] || null
}

export default es
