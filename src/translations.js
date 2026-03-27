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

  // ══════════════════════════════════════
  // AltPage
  // ══════════════════════════════════════
  altEyebrow: 'Tratamiento facial',
  altTitle: 'ALT',
  altSubtitle: 'AnsigtsLøftningsTeknik. Seis capas de tejido, cinco nervios craneales y una línea directa al núcleo del sistema nervioso.',
  altLayersLabel: 'Anatomía',
  altLayersTitle: 'Las seis capas',
  altLayersSubtitle: 'De la superficie a la profundidad',
  altLayersText: 'La arquitectura del rostro está estratificada como una formación geológica. En la superficie se encuentran la epidermis y la dermis — la piel visible, que lleva las huellas del tiempo y del viento. Debajo descansa la capa de grasa subcutánea, que otorga al rostro su volumen y suavidad, pero que también alberga una densa red de nervios y vasos sanguíneos.',
  altLayersTextExtra: 'La tercera capa es el SMAS — el sistema musculoaponeurótico superficial — una lámina continua de tejido conectivo que une todos los músculos faciales en un todo funcional. Bajo el SMAS yace la musculatura profunda, después la grasa profunda (que separa músculo de hueso), y finalmente el periostio — la membrana viva que envuelve el propio hueso. Cada capa posee su propia consistencia, su propia inervación y su propia respuesta al tacto.',
  altLayersBullets: [
    'Piel: la interfaz sensorial — registra temperatura, presión, dolor',
    'Grasa subcutánea: volumen y red nerviosa en uno',
    'SMAS: la lámina conectiva que une todos los músculos faciales',
    'Musculatura profunda: músculos masticatorios, mímicos, el motor de la expresión',
    'Periostio y hueso: la base silenciosa sobre la que todo descansa',
  ],
  altNervesLabel: 'Neuroanatomía',
  altNervesTitle: 'Cinco nervios craneales',
  altNervesSubtitle: 'El rostro como espejo del sistema nervioso',
  altNervesText: 'El trigémino (V) es el gran nervio sensorial del rostro — registra desde el tacto más leve hasta el dolor profundo, cubriendo frente, mejillas y mandíbula en tres ramificaciones. El facial (VII) gobierna la mímica: cada sonrisa, cada arruga, cada ceja levantada es obra del facial.',
  altNervesTextExtra: 'El glosofaríngeo (IX) inerva la faringe y la parte posterior de la lengua, participando en el reflejo de deglución y el sentido del gusto. El vago (X) — el nervio craneal más largo — envía ramificaciones al oído, la laringe y de ahí al corazón, pulmones y tracto digestivo. El accesorio (XI) controla la musculatura del cuello y los hombros. Juntos, estos cinco nervios forman un puente sensoriomotor entre el rostro y los centros autónomos del tronco encefálico.',
  altNervesBullets: [
    'Trigémino (V): tres ramas cubren todo el rostro sensorialmente',
    'Facial (VII): 42 músculos mímicos bajo el mando de un solo nervio',
    'Glosofaríngeo (IX): faringe, gusto y coordinación de la deglución',
    'Vago (X): el largo caminante — del oído al tracto digestivo',
    'Accesorio (XI): cuello y hombros — el nido de la tensión',
  ],
  altMethodLabel: 'El método',
  altMethodTitle: 'Stanley Rosenberg',
  altMethodSubtitle: 'Toda una vida de investigación en el tacto',
  altMethodText: 'Stanley Rosenberg dedicó más de cuatro décadas a estudiar la conexión entre el tratamiento facial y el sistema nervioso. Su intuición central fue que el tratamiento facial convencional ignora el papel del sistema nervioso — y que un cambio genuino y duradero en la estructura del rostro solo puede lograrse abordando simultáneamente el estado del sistema nervioso autónomo y el tejido.',
  altMethodTextExtra: 'Su protocolo sigue una secuencia precisa: primero la superficie, luego las capas más profundas, siempre respetando la receptividad propia del tejido. Nunca se fuerza a través de la resistencia. En su lugar, el terapeuta espera a que el tejido invite a la siguiente profundidad. Este enfoque — paciente, atento, estratificado — distingue fundamentalmente al ALT del tratamiento facial cosmético. No es reparación. Es la restauración de un diálogo entre tejido y nervio.',
  altMethodBullets: [
    'Más de 40 años de experiencia clínica con rostro y sistema nervioso',
    'La secuencia de tratamiento sigue la disposición propia del tejido',
    'La resistencia se recibe con paciencia, nunca con fuerza',
    'Tratamiento facial como regulación del sistema nervioso — no cosmética',
    'Resultados duraderos porque abordan la causa, no el síntoma',
  ],
  altVagalLabel: 'El puente polivagal',
  altVagalTitle: 'Rostro y nervio vago',
  altVagalSubtitle: 'Por qué el rostro regula el cuerpo',
  altVagalText: 'La teoría polivagal de Stephen Porges explica por qué el rostro ejerce una influencia tan profunda sobre el estado de todo el cuerpo. El nervio vago ventral — el más reciente evolutivamente — inerva la musculatura facial, el oído medio, la laringe y el corazón en un circuito interconectado. Porges denomina a este sistema social engagement — nuestra capacidad de conexión.',
  altVagalTextExtra: 'Cuando la musculatura facial está tensa o inmóvil, envía señales aferentes al tronco encefálico indicando que no hay seguridad. El corazón se acelera, la respiración se vuelve superficial, la digestión se frena. A la inversa: cuando el rostro se suaviza, los músculos del oído medio se relajan y la voz encuentra su profundidad natural, el sistema nervioso lo interpreta como seguridad. ALT trabaja directamente con este mecanismo — no a través de la conversación, sino a través del propio tejido.',
  altVagalBullets: [
    'El vago ventral conecta rostro, oído, voz y corazón',
    'El tono facial señala seguridad o amenaza al tronco encefálico',
    'Los músculos del oído medio afectan la capacidad de filtrar voces humanas',
    'El sistema de social engagement es el mecanismo regulador más reciente del cuerpo',
    'Suavizar el rostro activa toda la cadena vagal ventral',
  ],
  altSessionsLabel: 'El recorrido',
  altSessionsTitle: 'Seis sesiones',
  altSessionsSubtitle: 'Un viaje a través de las capas',
  altSessionsText: 'Un tratamiento ALT completo consta de seis sesiones con aproximadamente una semana de intervalo. La primera sesión se centra en las capas externas — piel y tejido conectivo superficial. El contacto es ligero, casi flotante. El cuerpo debe aprender primero a recibir antes de que pueda comenzar el trabajo más profundo.',
  altSessionsTextExtra: 'Con cada sesión, la profundidad aumenta gradualmente. Las sesiones dos y tres trabajan con el SMAS y la musculatura superficial. Las sesiones cuatro y cinco alcanzan las capas de grasa profunda y la musculatura profunda — aquí los antiguos patrones de tensión comienzan a revelarse y a liberarse. La sexta sesión integra todas las capas y finaliza con el periostio, el contacto más silencioso y profundo. Muchas personas experimentan un cambio notable en la expresión facial, la postura y la calma interior tras el tratamiento.',
  altSessionsBullets: [
    'Sesiones 1-2: superficie — piel, tejido subcutáneo, confianza',
    'Sesiones 3-4: capas medias — SMAS, musculatura, patrones antiguos',
    'Sesiones 5-6: profundidad — periostio, integración, cambio duradero',
    'Aproximadamente una semana entre sesiones permite al tejido integrar',
    'El cambio es acumulativo — cada capa prepara la siguiente',
  ],

  // ══════════════════════════════════════
  // WhmPage
  // ══════════════════════════════════════
  whmEyebrow: 'Respiración',
  whmTitle: 'Wim Hof',
  whmSubtitle: 'El método que transforma la respiración en herramienta de control fisiológico y fortaleza interior.',
  whmBreathLabel: 'Pilar 1',
  whmBreathTitle: 'La respiración',
  whmBreathSubtitle: '30 respiraciones que transforman la química',
  whmBreathText: 'El ejercicio fundamental es simple en su forma pero profundo en su efecto. Treinta a cuarenta inhalaciones profundas por la nariz, con exhalaciones pasivas, generan un estado de alcalosis respiratoria. El nivel de dióxido de carbono en sangre desciende, la unión del oxígeno a la hemoglobina se estrecha (efecto Bohr), y el suministro real de oxígeno a las células cambia paradójicamente de carácter.',
  whmBreathTextExtra: 'Tras las treinta respiraciones llega la exhalación — y entonces se retiene el aliento con los pulmones vacíos. Es aquí donde ocurre la verdadera transformación. Sin aire en los pulmones y con la química sanguínea alterada, el cuerpo experimenta un descenso controlado en la saturación de oxígeno. El bazo libera glóbulos rojos adicionales. El cerebro entra en un estado de atención agudizada. El sistema nervioso simpático se activa — pero sin pánico, porque el contexto es voluntario.',
  whmBreathBullets: [
    'Alcalosis respiratoria: el pH sube de 7.4 hacia 7.75 durante el ejercicio',
    'Efecto Bohr: el oxígeno se une más firmemente a la hemoglobina con bajo CO₂',
    'El bazo se contrae y libera glóbulos rojos adicionales',
    'La retención es estrés voluntario — el sistema nervioso aprende la diferencia',
    'Tres rondas profundizan el efecto progresivamente con cada ciclo',
  ],
  whmColdLabel: 'Pilar 2',
  whmColdTitle: 'El frío',
  whmColdSubtitle: 'El compañero de entrenamiento más antiguo del cuerpo',
  whmColdText: 'El ser humano está diseñado evolutivamente para la variación de temperatura. La cultura moderna del confort — constantes 21 grados, nunca demasiado frío, nunca demasiado calor — ha anestesiado todo un sistema fisiológico. La exposición al frío lo reactiva. Cuando la piel registra temperaturas por debajo de 15 grados, desencadena una cascada de respuestas vasculares y hormonales.',
  whmColdTextExtra: 'El sistema vascular periférico se contrae para conservar la temperatura central. El tejido adiposo marrón — un tejido metabólicamente activo que la mayoría de los adultos poseen en cantidad limitada — se activa y comienza a producir calor directamente a partir de la grasa. La noradrenalina se libera en cantidades tres a cinco veces superiores al nivel basal. Este neurotransmisor influye en la atención, el estado de ánimo y la función inmunitaria. Con el tiempo, el cuerpo amplía literalmente su zona de confort: tolera más, reacciona más rápido y se recupera mejor.',
  whmColdBullets: [
    'Gimnasia vascular: los vasos entrenan contracción y dilatación',
    'El tejido adiposo marrón produce calor y aumenta la tasa metabólica',
    'La noradrenalina se eleva un 200-500% durante la exposición al frío',
    'Progresión gradual: de finales fríos de ducha a baños de hielo',
    'La zona de confort se amplía con la práctica — no solo mental, sino fisiológicamente',
  ],
  whmMindLabel: 'Pilar 3',
  whmMindTitle: 'Mindset',
  whmMindSubtitle: 'La voluntad como fuerza fisiológica',
  whmMindText: 'El tercer elemento del Método Wim Hof es el menos visible pero quizá el más determinante. Mindset no es pensamiento positivo — es la capacidad de permanecer presente con la incomodidad sin huir hacia la reacción. Es la diferencia entre sentir el frío y ser dominado por el frío.',
  whmMindTextExtra: 'Esta capacidad está directamente ligada al control de la corteza prefrontal sobre la amígdala — el centro de alarma del cerebro. Con la práctica repetida, se fortalecen las conexiones neuronales que permiten la regulación consciente de la respuesta al estrés. No se trata de suprimir el miedo, sino de crear un espacio entre el estímulo y la respuesta. En ese espacio reside la libertad — y ese espacio crece con la práctica. Muchos practicantes reportan que esta capacidad se transfiere a otras áreas de la vida: conversaciones difíciles, presión de rendimiento, dolor crónico.',
  whmMindBullets: [
    'La regulación prefrontal de la amígdala se fortalece con la práctica',
    'El espacio entre estímulo y respuesta puede entrenarse y ampliarse',
    'La tolerancia a la incomodidad se transfiere a todos los estresores de la vida',
    'El enfoque consciente modifica la respuesta neuroquímica al frío',
    'La voluntad no es represión sino presencia con lo que es',
  ],
  whmScienceLabel: 'La investigación',
  whmScienceTitle: 'La ciencia detrás',
  whmScienceSubtitle: 'Del escepticismo a la evidencia peer-reviewed',
  whmScienceText: 'En 2011, investigadores del Radboud University Medical Center en Nimega comenzaron a examinar científicamente las afirmaciones de Wim Hof. Los resultados sorprendieron al establishment médico. Hof demostró bajo condiciones controladas de laboratorio que podía influir voluntariamente en su sistema inmunitario innato — algo que se consideraba fisiológicamente imposible.',
  whmScienceTextExtra: 'En 2014, Matthijs Kox y colegas publicaron un estudio pionero en Proceedings of the National Academy of Sciences. Doce voluntarios entrenados fueron inyectados con endotoxina (un componente bacteriano que normalmente desencadena síntomas similares a la gripe). Los participantes entrenados mostraron niveles significativamente menores de citoquinas proinflamatorias y reportaron menos síntomas que el grupo de control. El estudio estableció por primera vez que el sistema nervioso autónomo y la respuesta inmunitaria pueden modularse mediante la práctica consciente.',
  whmScienceBullets: [
    'Estudio Radboud 2014: modulación voluntaria de la respuesta inmunitaria',
    'Citoquinas proinflamatorias significativamente reducidas en los entrenados',
    'Los niveles de adrenalina se elevaron marcadamente durante el protocolo respiratorio',
    'Los síntomas por endotoxina se redujeron a la mitad respecto al grupo control',
    'Publicado en PNAS — una de las revistas más respetadas del mundo',
  ],
  whmDailyLabel: 'Práctica',
  whmDailyTitle: 'Ritmo diario',
  whmDailySubtitle: 'Así se ve una rutina matutina',
  whmDailyText: 'Una mañana típica con Wim Hof comienza en ayunas. Siéntate o acuéstate cómodamente. Tres rondas de respiración: treinta inhalaciones profundas, seguidas de retención con los pulmones vacíos (comienza con 1-2 minutos, progresa a lo largo de semanas), y luego una inhalación de recarga que se mantiene durante 15 segundos.',
  whmDailyTextExtra: 'Tras la respiración viene el frío. Para principiantes, dos minutos de ducha fría son suficientes. Con el tiempo puede expandirse a baños de hielo, baños invernales o exposiciones más prolongadas. Lo importante es la progresión — nunca forzar, siempre respetar el límite actual del cuerpo. La rutina completa toma 15-20 minutos y deja a la mayoría de los practicantes con una sensación de claridad, energía y calor interior que se percibe durante horas.',
  whmDailyBullets: [
    'En ayunas por la mañana ofrece la respuesta fisiológica más limpia',
    'Tres rondas: 30 respiraciones → retención → recarga',
    'El tiempo de retención crece naturalmente con la práctica',
    'Exposición al frío desde 30 segundos en adelante — nunca forzada',
    'Inversión de 15-20 minutos con un efecto que dura todo el día',
  ],
  whmSvgRound1: 'Ronda 1',
  whmSvgRound2: 'Ronda 2',
  whmSvgRound3: 'Ronda 3',
  whmSvgComfort: 'Confort',
  whmSvgCold: 'Frío',
  whmSvgWill: 'La voluntad',
}

export function t(key, language) {
  if (language === 'da') return null
  return es[key] || null
}

export default es
