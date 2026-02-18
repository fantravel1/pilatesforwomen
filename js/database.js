/* ============================================
   PilatesForWomen.com - Exercise Database
   Massive Pilates Exercise Library
   ============================================ */

const EXERCISE_DATABASE = [
  // === CORE EXERCISES ===
  {
    id: 1,
    name: { en: "The Hundred", es: "Los Cien", fr: "Les Cent" },
    category: "core",
    difficulty: "beginner",
    muscles: { en: "Core & Breath", es: "Core y Respiracion", fr: "Core et Respiration" },
    targets: { en: ["Deep abs", "Breath control", "Endurance"], es: ["Abdominales profundos", "Control respiratorio", "Resistencia"], fr: ["Abdominaux profonds", "Controle respiratoire", "Endurance"] },
    description: {
      en: "Classic Pilates warm-up that builds core endurance and breath control through rhythmic pumping of the arms.",
      es: "Calentamiento clasico de Pilates que desarrolla la resistencia del core y el control respiratorio a traves del bombeo ritmico de los brazos.",
      fr: "Echauffement classique de Pilates qui developpe l'endurance du core et le controle respiratoire par le pompage rythmique des bras."
    },
    duration: "3-5 min",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 2,
    name: { en: "Roll Up", es: "Enrollamiento", fr: "Enroulement" },
    category: "core",
    difficulty: "intermediate",
    muscles: { en: "Abdominals", es: "Abdominales", fr: "Abdominaux" },
    targets: { en: ["Spinal articulation", "Core strength", "Flexibility"], es: ["Articulacion espinal", "Fuerza del core", "Flexibilidad"], fr: ["Articulation vertebrale", "Force du core", "Souplesse"] },
    description: {
      en: "A controlled articulation of the spine from lying to sitting, building deep abdominal strength and spinal mobility.",
      es: "Una articulacion controlada de la columna desde acostado hasta sentado, desarrollando fuerza abdominal profunda y movilidad espinal.",
      fr: "Une articulation controlee de la colonne vertebrale de la position allongee a assise, developpant la force abdominale profonde."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 3,
    name: { en: "Single Leg Stretch", es: "Estiramiento de Una Pierna", fr: "Etirement d'une Jambe" },
    category: "core",
    difficulty: "beginner",
    muscles: { en: "Lower Abs", es: "Abdominales Inferiores", fr: "Abdominaux Inferieurs" },
    targets: { en: ["Coordination", "Core stability", "Hip flexor stretch"], es: ["Coordinacion", "Estabilidad del core", "Estiramiento de flexores"], fr: ["Coordination", "Stabilite du core", "Etirement des flechisseurs"] },
    description: {
      en: "Alternating leg extension while maintaining a stable core, building coordination and lower abdominal strength.",
      es: "Extension alternada de piernas mientras se mantiene un core estable, desarrollando coordinacion y fuerza abdominal inferior.",
      fr: "Extension alternee des jambes en maintenant un core stable, developpant la coordination et la force abdominale inferieure."
    },
    duration: "4 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 4,
    name: { en: "Double Leg Stretch", es: "Estiramiento Doble de Piernas", fr: "Etirement Double des Jambes" },
    category: "core",
    difficulty: "intermediate",
    muscles: { en: "Full Core", es: "Core Completo", fr: "Core Complet" },
    targets: { en: ["Core endurance", "Coordination", "Full body integration"], es: ["Resistencia del core", "Coordinacion", "Integracion corporal"], fr: ["Endurance du core", "Coordination", "Integration corporelle"] },
    description: {
      en: "Simultaneous extension of arms and legs from a curled-up position, challenging full core stability and control.",
      es: "Extension simultanea de brazos y piernas desde una posicion enrollada, desafiando la estabilidad completa del core.",
      fr: "Extension simultanee des bras et des jambes depuis une position enroulee, defiant la stabilite complete du core."
    },
    duration: "4 min",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 5,
    name: { en: "Criss Cross", es: "Entrecruzado", fr: "Croise" },
    category: "core",
    difficulty: "intermediate",
    muscles: { en: "Obliques", es: "Oblicuos", fr: "Obliques" },
    targets: { en: ["Rotational strength", "Oblique power", "Spinal mobility"], es: ["Fuerza rotacional", "Potencia de oblicuos", "Movilidad espinal"], fr: ["Force rotationnelle", "Puissance des obliques", "Mobilite vertebrale"] },
    description: {
      en: "Rotational core exercise targeting the obliques with controlled twisting movement and sustained holds.",
      es: "Ejercicio rotacional del core dirigido a los oblicuos con movimiento de torsion controlado y sostenido.",
      fr: "Exercice rotationnel du core ciblant les obliques avec mouvement de torsion controle et maintiens prolonges."
    },
    duration: "4 min",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 6,
    name: { en: "Plank Series", es: "Serie de Plancha", fr: "Serie de Planche" },
    category: "core",
    difficulty: "intermediate",
    muscles: { en: "Full Core & Shoulders", es: "Core y Hombros", fr: "Core et Epaules" },
    targets: { en: ["Total stability", "Shoulder endurance", "Core integration"], es: ["Estabilidad total", "Resistencia de hombros", "Integracion del core"], fr: ["Stabilite totale", "Endurance des epaules", "Integration du core"] },
    description: {
      en: "Progressive plank variations building from forearm to full plank, incorporating leg lifts and hip dips.",
      es: "Variaciones progresivas de plancha desde antebrazo a plancha completa, incorporando elevaciones de piernas y flexiones de cadera.",
      fr: "Variations progressives de planche du niveau avant-bras a la planche complete, incorporant des elevations de jambes."
    },
    duration: "6 min",
    image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 7,
    name: { en: "Teaser", es: "Teaser", fr: "Teaser" },
    category: "core",
    difficulty: "advanced",
    muscles: { en: "Deep Core", es: "Core Profundo", fr: "Core Profond" },
    targets: { en: ["Balance", "Core power", "Hip flexor control"], es: ["Equilibrio", "Potencia del core", "Control de flexores"], fr: ["Equilibre", "Puissance du core", "Controle des flechisseurs"] },
    description: {
      en: "The ultimate Pilates core challenge: balancing in a V-sit while maintaining spinal elongation and breath control.",
      es: "El desafio maximo del core en Pilates: equilibrarse en V mientras se mantiene la elongacion espinal y el control respiratorio.",
      fr: "Le defi ultime du core en Pilates: equilibre en V tout en maintenant l'elongation vertebrale et le controle respiratoire."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 8,
    name: { en: "Dead Bug", es: "Bicho Muerto", fr: "Insecte Mort" },
    category: "core",
    difficulty: "beginner",
    muscles: { en: "Deep Stabilizers", es: "Estabilizadores Profundos", fr: "Stabilisateurs Profonds" },
    targets: { en: ["Anti-extension", "Coordination", "Pelvic stability"], es: ["Anti-extension", "Coordinacion", "Estabilidad pelvica"], fr: ["Anti-extension", "Coordination", "Stabilite pelvienne"] },
    description: {
      en: "Supine exercise with opposite arm-leg extension teaching the body to resist spinal extension under load.",
      es: "Ejercicio en posicion supina con extension opuesta brazo-pierna ensenando al cuerpo a resistir la extension espinal bajo carga.",
      fr: "Exercice en decubitus dorsal avec extension bras-jambe opposes apprenant au corps a resister a l'extension vertebrale."
    },
    duration: "4 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
  },

  // === PELVIC FLOOR EXERCISES ===
  {
    id: 9,
    name: { en: "Pelvic Floor Activation", es: "Activacion del Suelo Pelvico", fr: "Activation du Plancher Pelvien" },
    category: "pelvic",
    difficulty: "beginner",
    muscles: { en: "Pelvic Floor", es: "Suelo Pelvico", fr: "Plancher Pelvien" },
    targets: { en: ["Pelvic awareness", "Muscle activation", "Breath sync"], es: ["Conciencia pelvica", "Activacion muscular", "Sincronizacion respiratoria"], fr: ["Conscience pelvienne", "Activation musculaire", "Synchronisation respiratoire"] },
    description: {
      en: "Foundational pelvic floor engagement exercises synchronized with diaphragmatic breathing for optimal activation.",
      es: "Ejercicios fundamentales de activacion del suelo pelvico sincronizados con respiracion diafragmatica para una activacion optima.",
      fr: "Exercices fondamentaux d'engagement du plancher pelvien synchronises avec la respiration diaphragmatique."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 10,
    name: { en: "Bridge with Pelvic Floor", es: "Puente con Suelo Pelvico", fr: "Pont avec Plancher Pelvien" },
    category: "pelvic",
    difficulty: "beginner",
    muscles: { en: "Glutes & Pelvic Floor", es: "Gluteos y Suelo Pelvico", fr: "Fessiers et Plancher Pelvien" },
    targets: { en: ["Glute activation", "Pelvic floor", "Spinal articulation"], es: ["Activacion de gluteos", "Suelo pelvico", "Articulacion espinal"], fr: ["Activation des fessiers", "Plancher pelvien", "Articulation vertebrale"] },
    description: {
      en: "Supine bridge with intentional pelvic floor engagement on the lift, building glute-pelvic floor coordination.",
      es: "Puente en posicion supina con activacion intencional del suelo pelvico al elevar, coordinando gluteos y suelo pelvico.",
      fr: "Pont en decubitus dorsal avec engagement intentionnel du plancher pelvien, coordinant fessiers et plancher pelvien."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 11,
    name: { en: "Clamshell Series", es: "Serie de Concha", fr: "Serie de Coquillage" },
    category: "pelvic",
    difficulty: "beginner",
    muscles: { en: "Hip & Pelvic", es: "Cadera y Pelvis", fr: "Hanche et Bassin" },
    targets: { en: ["Hip external rotation", "Glute medius", "Pelvic stability"], es: ["Rotacion externa de cadera", "Gluteo medio", "Estabilidad pelvica"], fr: ["Rotation externe de hanche", "Moyen fessier", "Stabilite pelvienne"] },
    description: {
      en: "Side-lying hip rotation targeting the deep hip stabilizers and glute medius for pelvic alignment and stability.",
      es: "Rotacion de cadera en decubito lateral dirigida a los estabilizadores profundos de cadera y gluteo medio.",
      fr: "Rotation de hanche en decubitus lateral ciblant les stabilisateurs profonds de la hanche et le moyen fessier."
    },
    duration: "6 min",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },

  // === HIP & GLUTE EXERCISES ===
  {
    id: 12,
    name: { en: "Side-Lying Leg Series", es: "Serie de Pierna Lateral", fr: "Serie de Jambe Laterale" },
    category: "hips",
    difficulty: "beginner",
    muscles: { en: "Hip Abductors", es: "Abductores de Cadera", fr: "Abducteurs de Hanche" },
    targets: { en: ["Outer thigh", "Hip stability", "Glute medius"], es: ["Muslo externo", "Estabilidad de cadera", "Gluteo medio"], fr: ["Cuisse externe", "Stabilite de hanche", "Moyen fessier"] },
    description: {
      en: "Comprehensive side-lying series targeting the hip abductors through circles, lifts, and pulses for total hip stability.",
      es: "Serie integral en posicion lateral dirigida a los abductores de cadera a traves de circulos, elevaciones y pulsos.",
      fr: "Serie complete en position laterale ciblant les abducteurs de hanche a travers cercles, elevations et pulsations."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 13,
    name: { en: "Glute Bridge March", es: "Puente de Gluteos con Marcha", fr: "Pont Fessier avec Marche" },
    category: "hips",
    difficulty: "intermediate",
    muscles: { en: "Glutes & Core", es: "Gluteos y Core", fr: "Fessiers et Core" },
    targets: { en: ["Single-leg stability", "Glute max", "Anti-rotation"], es: ["Estabilidad unilateral", "Gluteo mayor", "Anti-rotacion"], fr: ["Stabilite unilaterale", "Grand fessier", "Anti-rotation"] },
    description: {
      en: "Bridge position with alternating marching legs, challenging single-leg glute strength and anti-rotation control.",
      es: "Posicion de puente con piernas marchando alternadamente, desafiando la fuerza unilateral de gluteos y control anti-rotacional.",
      fr: "Position de pont avec jambes marchant en alternance, defiant la force unilaterale des fessiers et le controle anti-rotation."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 14,
    name: { en: "Quadruped Hip Extension", es: "Extension de Cadera en Cuadrupedia", fr: "Extension de Hanche a Quatre Pattes" },
    category: "hips",
    difficulty: "beginner",
    muscles: { en: "Glutes", es: "Gluteos", fr: "Fessiers" },
    targets: { en: ["Glute activation", "Hip extension", "Lumbar stability"], es: ["Activacion de gluteos", "Extension de cadera", "Estabilidad lumbar"], fr: ["Activation des fessiers", "Extension de hanche", "Stabilite lombaire"] },
    description: {
      en: "All-fours hip extension focusing on glute activation without lumbar compensation. Precise, controlled movement.",
      es: "Extension de cadera en cuatro puntos enfocada en activacion de gluteos sin compensacion lumbar. Movimiento preciso y controlado.",
      fr: "Extension de hanche a quatre pattes axee sur l'activation des fessiers sans compensation lombaire. Mouvement precis et controle."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 15,
    name: { en: "Single Leg Circle", es: "Circulo de Una Pierna", fr: "Cercle d'une Jambe" },
    category: "hips",
    difficulty: "intermediate",
    muscles: { en: "Hip Flexors & Core", es: "Flexores de Cadera y Core", fr: "Flechisseurs de Hanche et Core" },
    targets: { en: ["Hip mobility", "Core stability", "Joint lubrication"], es: ["Movilidad de cadera", "Estabilidad del core", "Lubricacion articular"], fr: ["Mobilite de hanche", "Stabilite du core", "Lubrification articulaire"] },
    description: {
      en: "Controlled leg circles while supine, mobilizing the hip joint while challenging pelvic stability through full range of motion.",
      es: "Circulos controlados de pierna en posicion supina, movilizando la articulacion de cadera mientras se desafia la estabilidad pelvica.",
      fr: "Cercles controles de la jambe en position dorsale, mobilisant l'articulation de la hanche tout en defiant la stabilite pelvienne."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },

  // === SPINE & POSTURE EXERCISES ===
  {
    id: 16,
    name: { en: "Spine Stretch Forward", es: "Estiramiento de Columna Frontal", fr: "Etirement de la Colonne Avant" },
    category: "spine",
    difficulty: "beginner",
    muscles: { en: "Spine & Hamstrings", es: "Columna y Isquiotibiales", fr: "Colonne et Ischio-jambiers" },
    targets: { en: ["Spinal flexion", "Hamstring stretch", "Posture awareness"], es: ["Flexion espinal", "Estiramiento de isquiotibiales", "Conciencia postural"], fr: ["Flexion vertebrale", "Etirement des ischio-jambiers", "Conscience posturale"] },
    description: {
      en: "Seated forward flexion with articulated spinal movement, promoting flexibility and spinal segmental control.",
      es: "Flexion frontal sentada con movimiento espinal articulado, promoviendo flexibilidad y control segmentario espinal.",
      fr: "Flexion avant assise avec mouvement vertebral articule, favorisant la souplesse et le controle segmentaire vertebral."
    },
    duration: "4 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 17,
    name: { en: "Swan Prep", es: "Preparacion de Cisne", fr: "Preparation du Cygne" },
    category: "spine",
    difficulty: "beginner",
    muscles: { en: "Back Extensors", es: "Extensores de Espalda", fr: "Extenseurs du Dos" },
    targets: { en: ["Back strength", "Spinal extension", "Chest opening"], es: ["Fuerza de espalda", "Extension espinal", "Apertura de pecho"], fr: ["Force du dos", "Extension vertebrale", "Ouverture de poitrine"] },
    description: {
      en: "Prone back extension building upper back strength and counteracting the forward-hunched posture of desk work.",
      es: "Extension de espalda en posicion prona, desarrollando fuerza de espalda alta y contrarrestando la postura encorvada del trabajo de escritorio.",
      fr: "Extension du dos en position ventrale, developpant la force du haut du dos et contrecarrant la posture voutee du travail de bureau."
    },
    duration: "4 min",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 18,
    name: { en: "Cat-Cow Flow", es: "Flujo Gato-Vaca", fr: "Flux Chat-Vache" },
    category: "spine",
    difficulty: "beginner",
    muscles: { en: "Full Spine", es: "Columna Completa", fr: "Colonne Complete" },
    targets: { en: ["Spinal mobility", "Breath connection", "Warm-up"], es: ["Movilidad espinal", "Conexion respiratoria", "Calentamiento"], fr: ["Mobilite vertebrale", "Connexion respiratoire", "Echauffement"] },
    description: {
      en: "Rhythmic spinal flexion and extension coordinated with breath, warming the spine and establishing the mind-body connection.",
      es: "Flexion y extension espinal ritmica coordinada con la respiracion, calentando la columna y estableciendo la conexion mente-cuerpo.",
      fr: "Flexion et extension vertebrales rythmiques coordonnees avec la respiration, rechauffant la colonne et etablissant la connexion corps-esprit."
    },
    duration: "3 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 19,
    name: { en: "Spine Twist", es: "Torsion de Columna", fr: "Torsion de la Colonne" },
    category: "spine",
    difficulty: "intermediate",
    muscles: { en: "Rotators & Obliques", es: "Rotadores y Oblicuos", fr: "Rotateurs et Obliques" },
    targets: { en: ["Rotation", "Thoracic mobility", "Oblique engagement"], es: ["Rotacion", "Movilidad toracica", "Activacion de oblicuos"], fr: ["Rotation", "Mobilite thoracique", "Engagement des obliques"] },
    description: {
      en: "Seated rotational exercise opening the thoracic spine and strengthening the obliques while maintaining tall posture.",
      es: "Ejercicio rotacional sentado que abre la columna toracica y fortalece los oblicuos mientras se mantiene una postura erguida.",
      fr: "Exercice rotationnel assis ouvrant la colonne thoracique et renforçant les obliques tout en maintenant une posture haute."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 20,
    name: { en: "Mermaid Stretch", es: "Estiramiento de Sirena", fr: "Etirement de la Sirene" },
    category: "spine",
    difficulty: "intermediate",
    muscles: { en: "Lateral Chain", es: "Cadena Lateral", fr: "Chaine Laterale" },
    targets: { en: ["Side body stretch", "Lateral flexion", "Rib mobility"], es: ["Estiramiento lateral", "Flexion lateral", "Movilidad costal"], fr: ["Etirement lateral", "Flexion laterale", "Mobilite costale"] },
    description: {
      en: "Beautiful lateral stretch opening the side body and ribs, improving breathing capacity and lateral spinal mobility.",
      es: "Hermoso estiramiento lateral que abre el cuerpo lateral y las costillas, mejorando la capacidad respiratoria y la movilidad espinal lateral.",
      fr: "Bel etirement lateral ouvrant le corps lateral et les cotes, ameliorant la capacite respiratoire et la mobilite vertebrale laterale."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop&q=80"
  },

  // === SHOULDER & UPPER BODY ===
  {
    id: 21,
    name: { en: "Scapular Stability Series", es: "Serie de Estabilidad Escapular", fr: "Serie de Stabilite Scapulaire" },
    category: "shoulders",
    difficulty: "beginner",
    muscles: { en: "Shoulder Blades", es: "Escapulas", fr: "Omoplates" },
    targets: { en: ["Scapular control", "Posture", "Shoulder health"], es: ["Control escapular", "Postura", "Salud del hombro"], fr: ["Controle scapulaire", "Posture", "Sante de l'epaule"] },
    description: {
      en: "Essential shoulder blade mechanics: protraction, retraction, elevation, depression, and rotation patterns for perfect posture.",
      es: "Mecanica esencial de la escapula: protraccion, retraccion, elevacion, depresion y patrones de rotacion para una postura perfecta.",
      fr: "Mecanique essentielle de l'omoplate: protraction, retraction, elevation, depression et schemas de rotation pour une posture parfaite."
    },
    duration: "6 min",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 22,
    name: { en: "Arm Circles with Resistance", es: "Circulos de Brazos con Resistencia", fr: "Cercles de Bras avec Resistance" },
    category: "shoulders",
    difficulty: "intermediate",
    muscles: { en: "Shoulders & Arms", es: "Hombros y Brazos", fr: "Epaules et Bras" },
    targets: { en: ["Shoulder mobility", "Rotator cuff", "Arm toning"], es: ["Movilidad del hombro", "Manguito rotador", "Tonificacion de brazos"], fr: ["Mobilite de l'epaule", "Coiffe des rotateurs", "Tonification des bras"] },
    description: {
      en: "Controlled arm circles with light resistance, strengthening the rotator cuff and building shoulder joint resilience.",
      es: "Circulos de brazos controlados con resistencia ligera, fortaleciendo el manguito rotador y construyendo resiliencia articular del hombro.",
      fr: "Cercles de bras controles avec legere resistance, renforçant la coiffe des rotateurs et developpant la resilience articulaire de l'epaule."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 23,
    name: { en: "Push-Up Pilates Style", es: "Flexion Estilo Pilates", fr: "Pompe Style Pilates" },
    category: "shoulders",
    difficulty: "advanced",
    muscles: { en: "Chest & Triceps", es: "Pecho y Triceps", fr: "Poitrine et Triceps" },
    targets: { en: ["Upper body strength", "Core integration", "Full body control"], es: ["Fuerza del tren superior", "Integracion del core", "Control corporal total"], fr: ["Force du haut du corps", "Integration du core", "Controle corporel total"] },
    description: {
      en: "The Pilates push-up: walking hands out from standing, performing push-ups, and walking back — full body integration.",
      es: "La flexion de Pilates: caminar las manos desde de pie, realizar flexiones y regresar — integracion corporal total.",
      fr: "La pompe Pilates: marcher les mains depuis debout, effectuer des pompes et revenir — integration corporelle totale."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
  },

  // === BREATH & NERVOUS SYSTEM ===
  {
    id: 24,
    name: { en: "Diaphragmatic Breathing", es: "Respiracion Diafragmatica", fr: "Respiration Diaphragmatique" },
    category: "breath",
    difficulty: "beginner",
    muscles: { en: "Diaphragm & Core", es: "Diafragma y Core", fr: "Diaphragme et Core" },
    targets: { en: ["Breath control", "Nervous system", "Relaxation"], es: ["Control respiratorio", "Sistema nervioso", "Relajacion"], fr: ["Controle respiratoire", "Systeme nerveux", "Relaxation"] },
    description: {
      en: "Foundation of all Pilates work: mastering the lateral thoracic breath pattern that activates the deep core system.",
      es: "Fundamento de todo el trabajo de Pilates: dominar el patron de respiracion toracica lateral que activa el sistema profundo del core.",
      fr: "Fondement de tout le travail Pilates: maitriser le schema de respiration thoracique laterale qui active le systeme profond du core."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 25,
    name: { en: "Box Breathing Flow", es: "Flujo de Respiracion Cuadrada", fr: "Flux de Respiration Carree" },
    category: "breath",
    difficulty: "beginner",
    muscles: { en: "Nervous System", es: "Sistema Nervioso", fr: "Systeme Nerveux" },
    targets: { en: ["Stress reduction", "Focus", "Calm"], es: ["Reduccion de estres", "Enfoque", "Calma"], fr: ["Reduction du stress", "Concentration", "Calme"] },
    description: {
      en: "4-4-4-4 breathing pattern with gentle movement, regulating the nervous system and building mental clarity.",
      es: "Patron de respiracion 4-4-4-4 con movimiento suave, regulando el sistema nervioso y construyendo claridad mental.",
      fr: "Schema de respiration 4-4-4-4 avec mouvement doux, regulant le systeme nerveux et developpant la clarte mentale."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 26,
    name: { en: "Constructive Rest Position", es: "Posicion de Descanso Constructivo", fr: "Position de Repos Constructif" },
    category: "breath",
    difficulty: "beginner",
    muscles: { en: "Full Body Release", es: "Liberacion Corporal Total", fr: "Liberation Corporelle Totale" },
    targets: { en: ["Psoas release", "Spinal decompression", "Stress relief"], es: ["Liberacion del psoas", "Descompresion espinal", "Alivio del estres"], fr: ["Liberation du psoas", "Decompression vertebrale", "Soulagement du stress"] },
    description: {
      en: "Restorative position releasing the psoas and lower back while calming the nervous system through conscious breathing.",
      es: "Posicion restaurativa que libera el psoas y la espalda baja mientras calma el sistema nervioso a traves de respiracion consciente.",
      fr: "Position restauratrice liberant le psoas et le bas du dos tout en calmant le systeme nerveux par la respiration consciente."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
  },

  // === ATHLETIC PERFORMANCE ===
  {
    id: 27,
    name: { en: "Runner's Hip Stability", es: "Estabilidad de Cadera para Corredores", fr: "Stabilite de Hanche pour Coureurs" },
    category: "athletic",
    difficulty: "intermediate",
    muscles: { en: "Hips & Glutes", es: "Caderas y Gluteos", fr: "Hanches et Fessiers" },
    targets: { en: ["Hip stability", "IT band health", "Knee protection"], es: ["Estabilidad de cadera", "Salud de banda iliotibial", "Proteccion de rodilla"], fr: ["Stabilite de hanche", "Sante de la bande IT", "Protection du genou"] },
    description: {
      en: "Targeted hip stability work for runners: single-leg balance, lateral strength, and glute medius activation.",
      es: "Trabajo dirigido de estabilidad de cadera para corredores: equilibrio unilateral, fuerza lateral y activacion del gluteo medio.",
      fr: "Travail cible de stabilite de hanche pour coureurs: equilibre unilateral, force laterale et activation du moyen fessier."
    },
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 28,
    name: { en: "Dancer's Extension Series", es: "Serie de Extension para Bailarines", fr: "Serie d'Extension pour Danseurs" },
    category: "athletic",
    difficulty: "advanced",
    muscles: { en: "Full Body", es: "Cuerpo Completo", fr: "Corps Complet" },
    targets: { en: ["Flexibility", "Control", "Extension", "Grace"], es: ["Flexibilidad", "Control", "Extension", "Gracia"], fr: ["Souplesse", "Controle", "Extension", "Grace"] },
    description: {
      en: "Pilates for dancers: arabesque prep, port de bras integration, and controlled extension building performance capacity.",
      es: "Pilates para bailarines: preparacion de arabesque, integracion de port de bras y extension controlada construyendo capacidad de rendimiento.",
      fr: "Pilates pour danseurs: preparation d'arabesque, integration du port de bras et extension controlee developpant la capacite de performance."
    },
    duration: "12 min",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 29,
    name: { en: "Deceleration Control Training", es: "Entrenamiento de Control de Desaceleracion", fr: "Entrainement de Controle de Deceleration" },
    category: "athletic",
    difficulty: "advanced",
    muscles: { en: "Quads & Core", es: "Cuadriceps y Core", fr: "Quadriceps et Core" },
    targets: { en: ["Eccentric control", "Injury prevention", "Landing mechanics"], es: ["Control excentrico", "Prevencion de lesiones", "Mecanica de aterrizaje"], fr: ["Controle excentrique", "Prevention des blessures", "Mecanique d'atterrissage"] },
    description: {
      en: "Eccentric-focused work building deceleration control for court sports, protecting knees and ankles through controlled loading.",
      es: "Trabajo enfocado en excentricos construyendo control de desaceleracion para deportes de cancha, protegiendo rodillas y tobillos.",
      fr: "Travail axe sur l'excentrique developpant le controle de deceleration pour les sports de terrain, protegeant genoux et chevilles."
    },
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 30,
    name: { en: "Rotational Power Builder", es: "Constructor de Potencia Rotacional", fr: "Constructeur de Puissance Rotationnelle" },
    category: "athletic",
    difficulty: "advanced",
    muscles: { en: "Obliques & Hips", es: "Oblicuos y Caderas", fr: "Obliques et Hanches" },
    targets: { en: ["Rotational strength", "Tennis/golf prep", "Throwing power"], es: ["Fuerza rotacional", "Preparacion tenis/golf", "Potencia de lanzamiento"], fr: ["Force rotationnelle", "Preparation tennis/golf", "Puissance de lancer"] },
    description: {
      en: "Rotational strength development for tennis, golf, and throwing athletes. Building power from the center outward.",
      es: "Desarrollo de fuerza rotacional para atletas de tenis, golf y lanzamiento. Construyendo potencia desde el centro hacia afuera.",
      fr: "Developpement de la force rotationnelle pour les athletes de tennis, golf et lancer. Construction de la puissance du centre vers l'exterieur."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 31,
    name: { en: "Ankle Stiffness Protocol", es: "Protocolo de Rigidez de Tobillo", fr: "Protocole de Rigidite de Cheville" },
    category: "athletic",
    difficulty: "intermediate",
    muscles: { en: "Ankles & Calves", es: "Tobillos y Pantorrillas", fr: "Chevilles et Mollets" },
    targets: { en: ["Ankle stability", "Calf strength", "Foot tripod"], es: ["Estabilidad de tobillo", "Fuerza de pantorrilla", "Tripode del pie"], fr: ["Stabilite de cheville", "Force du mollet", "Tripode du pied"] },
    description: {
      en: "Ankle stability and stiffness training critical for sprinters, basketball players, and court sport athletes.",
      es: "Entrenamiento de estabilidad y rigidez de tobillo critico para velocistas, jugadores de basquetbol y atletas de deportes de cancha.",
      fr: "Entrainement de stabilite et de rigidite de cheville essentiel pour les sprinters, joueurs de basket et athletes de sports de terrain."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
  },

  // === FLEXIBILITY & MOBILITY ===
  {
    id: 32,
    name: { en: "Hip Flexor Release", es: "Liberacion de Flexores de Cadera", fr: "Liberation des Flechisseurs de Hanche" },
    category: "flexibility",
    difficulty: "beginner",
    muscles: { en: "Hip Flexors", es: "Flexores de Cadera", fr: "Flechisseurs de Hanche" },
    targets: { en: ["Hip opening", "Psoas release", "Lower back relief"], es: ["Apertura de cadera", "Liberacion del psoas", "Alivio de espalda baja"], fr: ["Ouverture de hanche", "Liberation du psoas", "Soulagement du bas du dos"] },
    description: {
      en: "Targeted release work for the hip flexors and psoas, counteracting the effects of prolonged sitting.",
      es: "Trabajo de liberacion dirigido para los flexores de cadera y el psoas, contrarrestando los efectos de estar sentado prolongadamente.",
      fr: "Travail de liberation cible pour les flechisseurs de hanche et le psoas, contrecarrant les effets de la position assise prolongee."
    },
    duration: "6 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 33,
    name: { en: "Thoracic Spine Mobilizer", es: "Movilizador de Columna Toracica", fr: "Mobilisateur de la Colonne Thoracique" },
    category: "flexibility",
    difficulty: "beginner",
    muscles: { en: "Upper Back", es: "Espalda Alta", fr: "Haut du Dos" },
    targets: { en: ["T-spine mobility", "Shoulder freedom", "Posture correction"], es: ["Movilidad de columna toracica", "Libertad de hombro", "Correccion postural"], fr: ["Mobilite T-spine", "Liberte d'epaule", "Correction posturale"] },
    description: {
      en: "Open the thoracic spine with targeted rotations and extensions. Essential for desk workers and phone users.",
      es: "Abre la columna toracica con rotaciones y extensiones dirigidas. Esencial para trabajadores de escritorio y usuarios de telefono.",
      fr: "Ouvrir la colonne thoracique avec des rotations et extensions ciblees. Essentiel pour les travailleurs de bureau et utilisateurs de telephone."
    },
    duration: "6 min",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 34,
    name: { en: "Full Body Stretch Flow", es: "Flujo de Estiramiento Corporal", fr: "Flux d'Etirement Corporel" },
    category: "flexibility",
    difficulty: "beginner",
    muscles: { en: "Full Body", es: "Cuerpo Completo", fr: "Corps Complet" },
    targets: { en: ["Total flexibility", "Recovery", "Relaxation"], es: ["Flexibilidad total", "Recuperacion", "Relajacion"], fr: ["Souplesse totale", "Recuperation", "Relaxation"] },
    description: {
      en: "A flowing sequence of stretches targeting every major muscle group, perfect for recovery days or session endings.",
      es: "Una secuencia fluida de estiramientos dirigidos a cada grupo muscular principal, perfecta para dias de recuperacion.",
      fr: "Une sequence fluide d'etirements ciblant chaque groupe musculaire principal, parfaite pour les jours de recuperation."
    },
    duration: "12 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
  },

  // === POSTURE CORRECTION ===
  {
    id: 35,
    name: { en: "Posture Reset: Desk Worker", es: "Reseteo Postural: Trabajador de Escritorio", fr: "Reset Postural: Travailleur de Bureau" },
    category: "posture",
    difficulty: "beginner",
    muscles: { en: "Upper Back & Neck", es: "Espalda Alta y Cuello", fr: "Haut du Dos et Cou" },
    targets: { en: ["Forward head correction", "Rounded shoulder fix", "Chest opening"], es: ["Correccion de cabeza adelantada", "Correccion de hombros redondeados", "Apertura de pecho"], fr: ["Correction de la tete en avant", "Correction des epaules arrondies", "Ouverture de poitrine"] },
    description: {
      en: "Quick posture reset designed for desk workers: chin tucks, wall angels, chest openers, and scapular retractions.",
      es: "Reseteo postural rapido disenado para trabajadores de escritorio: retraccion de menton, angeles en pared, aperturas de pecho.",
      fr: "Reset postural rapide conçu pour les travailleurs de bureau: rentrees de menton, anges au mur, ouvertures de poitrine."
    },
    duration: "6 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 36,
    name: { en: "Phone Neck Relief", es: "Alivio de Cuello por Telefono", fr: "Soulagement du Cou de Telephone" },
    category: "posture",
    difficulty: "beginner",
    muscles: { en: "Neck & Shoulders", es: "Cuello y Hombros", fr: "Cou et Epaules" },
    targets: { en: ["Neck tension relief", "Trap release", "Head alignment"], es: ["Alivio de tension cervical", "Liberacion de trapecios", "Alineacion de cabeza"], fr: ["Soulagement de la tension cervicale", "Liberation des trapezes", "Alignement de la tete"] },
    description: {
      en: "Targeted relief for the modern epidemic of 'tech neck.' Gentle stretches and strengthening for the deep neck flexors.",
      es: "Alivio dirigido para la epidemia moderna del 'cuello tecnologico'. Estiramientos suaves y fortalecimiento de los flexores profundos del cuello.",
      fr: "Soulagement cible pour l'epidemie moderne du 'cou technologique'. Etirements doux et renforcement des flechisseurs profonds du cou."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 37,
    name: { en: "Standing Posture Integration", es: "Integracion de Postura de Pie", fr: "Integration de Posture Debout" },
    category: "posture",
    difficulty: "intermediate",
    muscles: { en: "Full Postural Chain", es: "Cadena Postural Completa", fr: "Chaine Posturale Complete" },
    targets: { en: ["Total alignment", "Body awareness", "Functional posture"], es: ["Alineacion total", "Conciencia corporal", "Postura funcional"], fr: ["Alignement total", "Conscience corporelle", "Posture fonctionnelle"] },
    description: {
      en: "Standing exercises integrating all postural muscles: foot tripod, knee alignment, pelvic position, rib placement, and head carriage.",
      es: "Ejercicios de pie integrando todos los musculos posturales: tripode del pie, alineacion de rodilla, posicion pelvica, colocacion costal.",
      fr: "Exercices debout integrant tous les muscles posturaux: tripode du pied, alignement du genou, position pelvienne, placement costal."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80"
  },

  // === PRENATAL / POSTPARTUM ===
  {
    id: 38,
    name: { en: "Postpartum Core Reconnect", es: "Reconexion del Core Postparto", fr: "Reconnexion du Core Post-Partum" },
    category: "postpartum",
    difficulty: "beginner",
    muscles: { en: "Deep Core & Pelvic Floor", es: "Core Profundo y Suelo Pelvico", fr: "Core Profond et Plancher Pelvien" },
    targets: { en: ["Core reconnection", "Diastasis care", "Gentle rebuilding"], es: ["Reconexion del core", "Cuidado de diastasis", "Reconstruccion suave"], fr: ["Reconnexion du core", "Soin de diastasis", "Reconstruction douce"] },
    description: {
      en: "Gentle postpartum core reconnection work. Finding the deep core system again after pregnancy with care and patience.",
      es: "Trabajo suave de reconexion del core postparto. Reencontrando el sistema profundo del core despues del embarazo con cuidado y paciencia.",
      fr: "Travail doux de reconnexion du core post-partum. Retrouver le systeme profond du core apres la grossesse avec soin et patience."
    },
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 39,
    name: { en: "Postpartum Hip Opener", es: "Apertura de Cadera Postparto", fr: "Ouverture de Hanche Post-Partum" },
    category: "postpartum",
    difficulty: "beginner",
    muscles: { en: "Hips & Lower Back", es: "Caderas y Espalda Baja", fr: "Hanches et Bas du Dos" },
    targets: { en: ["Hip release", "Lower back relief", "Gentle mobility"], es: ["Liberacion de cadera", "Alivio de espalda baja", "Movilidad suave"], fr: ["Liberation de hanche", "Soulagement du bas du dos", "Mobilite douce"] },
    description: {
      en: "Gentle hip opening and lower back release designed specifically for the postpartum body and its unique needs.",
      es: "Apertura suave de cadera y liberacion de espalda baja disenada especificamente para el cuerpo postparto y sus necesidades unicas.",
      fr: "Ouverture douce de hanche et liberation du bas du dos conçues specifiquement pour le corps post-partum et ses besoins uniques."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },

  // === LONGEVITY / 35+ ===
  {
    id: 40,
    name: { en: "Joint Preservation Protocol", es: "Protocolo de Preservacion Articular", fr: "Protocole de Preservation Articulaire" },
    category: "longevity",
    difficulty: "beginner",
    muscles: { en: "All Joints", es: "Todas las Articulaciones", fr: "Toutes les Articulations" },
    targets: { en: ["Joint health", "Synovial fluid", "Range of motion"], es: ["Salud articular", "Liquido sinovial", "Rango de movimiento"], fr: ["Sante articulaire", "Liquide synovial", "Amplitude de mouvement"] },
    description: {
      en: "Systematic joint-by-joint mobilization protocol keeping every major joint healthy, lubricated, and moving through full range.",
      es: "Protocolo sistematico de movilizacion articulacion por articulacion manteniendo cada articulacion principal saludable y lubricada.",
      fr: "Protocole systematique de mobilisation articulation par articulation gardant chaque articulation principale en bonne sante et lubrifiee."
    },
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 41,
    name: { en: "Bone Density Builder", es: "Constructor de Densidad Osea", fr: "Constructeur de Densite Osseuse" },
    category: "longevity",
    difficulty: "intermediate",
    muscles: { en: "Weight-Bearing Muscles", es: "Musculos de Carga", fr: "Muscles Porteurs" },
    targets: { en: ["Bone density", "Balance", "Fall prevention"], es: ["Densidad osea", "Equilibrio", "Prevencion de caidas"], fr: ["Densite osseuse", "Equilibre", "Prevention des chutes"] },
    description: {
      en: "Weight-bearing and impact-appropriate exercises supporting bone density, balance, and fall prevention for women 35+.",
      es: "Ejercicios con carga de peso e impacto apropiado apoyando la densidad osea, equilibrio y prevencion de caidas para mujeres 35+.",
      fr: "Exercices en charge ponderable et impact approprie soutenant la densite osseuse, l'equilibre et la prevention des chutes pour les femmes 35+."
    },
    duration: "12 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 42,
    name: { en: "Perimenopause Power Flow", es: "Flujo de Poder para Perimenopausia", fr: "Flux de Puissance Perimenopause" },
    category: "longevity",
    difficulty: "intermediate",
    muscles: { en: "Full Body", es: "Cuerpo Completo", fr: "Corps Complet" },
    targets: { en: ["Hormone support", "Strength maintenance", "Energy regulation"], es: ["Apoyo hormonal", "Mantenimiento de fuerza", "Regulacion energetica"], fr: ["Soutien hormonal", "Maintien de la force", "Regulation energetique"] },
    description: {
      en: "Strength and movement flow designed for the perimenopause transition. Supporting hormones through strategic movement loading.",
      es: "Flujo de fuerza y movimiento disenado para la transicion de la perimenopausia. Apoyando hormonas a traves de carga de movimiento estrategica.",
      fr: "Flux de force et de mouvement conçu pour la transition de la perimenopause. Soutenir les hormones par une charge de mouvement strategique."
    },
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=80"
  },

  // === STRESS RECOVERY ===
  {
    id: 43,
    name: { en: "Nervous System Reset", es: "Reseteo del Sistema Nervioso", fr: "Reset du Systeme Nerveux" },
    category: "stress",
    difficulty: "beginner",
    muscles: { en: "Full Body - Gentle", es: "Cuerpo Completo - Suave", fr: "Corps Complet - Doux" },
    targets: { en: ["Parasympathetic activation", "Cortisol reduction", "Deep rest"], es: ["Activacion parasimpatica", "Reduccion de cortisol", "Descanso profundo"], fr: ["Activation parasympathique", "Reduction du cortisol", "Repos profond"] },
    description: {
      en: "When the stress load is high, this gentle nervous system downshift combines breath, slow movement, and supported positions.",
      es: "Cuando la carga de estres es alta, esta suave desaceleracion del sistema nervioso combina respiracion, movimiento lento y posiciones asistidas.",
      fr: "Quand la charge de stress est elevee, cette douce descente du systeme nerveux combine respiration, mouvement lent et positions soutenues."
    },
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 44,
    name: { en: "Tension Release Sequence", es: "Secuencia de Liberacion de Tension", fr: "Sequence de Liberation de Tension" },
    category: "stress",
    difficulty: "beginner",
    muscles: { en: "Neck, Shoulders, Jaw", es: "Cuello, Hombros, Mandibula", fr: "Cou, Epaules, Machoire" },
    targets: { en: ["Muscle tension release", "Jaw release", "Shoulder drop"], es: ["Liberacion de tension muscular", "Liberacion de mandibula", "Caida de hombros"], fr: ["Liberation de tension musculaire", "Liberation de machoire", "Relachement des epaules"] },
    description: {
      en: "Targeted tension release for the common stress-holding areas: jaw, neck, shoulders, and upper back.",
      es: "Liberacion de tension dirigida para las areas comunes de acumulacion de estres: mandibula, cuello, hombros y espalda alta.",
      fr: "Liberation de tension ciblee pour les zones communes de maintien du stress: machoire, cou, epaules et haut du dos."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },

  // === REFORMER-INSPIRED ===
  {
    id: 45,
    name: { en: "Footwork Series (Mat)", es: "Serie de Trabajo de Pies (Mat)", fr: "Serie de Travail de Pieds (Sol)" },
    category: "reformer",
    difficulty: "intermediate",
    muscles: { en: "Legs & Core", es: "Piernas y Core", fr: "Jambes et Core" },
    targets: { en: ["Leg alignment", "Foot mechanics", "Core stability"], es: ["Alineacion de piernas", "Mecanica del pie", "Estabilidad del core"], fr: ["Alignement des jambes", "Mecanique du pied", "Stabilite du core"] },
    description: {
      en: "Reformer footwork adapted for the mat. Various foot positions challenging leg alignment and deep core stability.",
      es: "Trabajo de pies de reformer adaptado para el mat. Varias posiciones de pies desafiando la alineacion de piernas y estabilidad profunda del core.",
      fr: "Travail de pieds de reformer adapte pour le sol. Diverses positions de pieds defiant l'alignement des jambes et la stabilite profonde du core."
    },
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 46,
    name: { en: "Long Stretch Series (Mat)", es: "Serie de Estiramiento Largo (Mat)", fr: "Serie d'Etirement Long (Sol)" },
    category: "reformer",
    difficulty: "advanced",
    muscles: { en: "Full Body Integration", es: "Integracion Corporal Total", fr: "Integration Corporelle Totale" },
    targets: { en: ["Total body strength", "Balance", "Coordination"], es: ["Fuerza corporal total", "Equilibrio", "Coordinacion"], fr: ["Force corporelle totale", "Equilibre", "Coordination"] },
    description: {
      en: "Advanced reformer-inspired sequences adapted for mat work, requiring total body coordination and control.",
      es: "Secuencias avanzadas inspiradas en el reformer adaptadas para trabajo de mat, requiriendo coordinacion y control corporal total.",
      fr: "Sequences avancees inspirees du reformer adaptees pour le travail au sol, necessitant coordination et controle corporel total."
    },
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80"
  },

  // === ADDITIONAL EXERCISES ===
  {
    id: 47,
    name: { en: "Swimming", es: "Natacion", fr: "Natation" },
    category: "core",
    difficulty: "intermediate",
    muscles: { en: "Back & Core", es: "Espalda y Core", fr: "Dos et Core" },
    targets: { en: ["Back extensors", "Coordination", "Endurance"], es: ["Extensores de espalda", "Coordinacion", "Resistencia"], fr: ["Extenseurs du dos", "Coordination", "Endurance"] },
    description: {
      en: "Prone alternating arm-leg lifts building back extensor endurance and cross-body coordination.",
      es: "Elevaciones alternas de brazo-pierna en posicion prona construyendo resistencia de extensores de espalda y coordinacion cruzada.",
      fr: "Elevations alternees bras-jambe en position ventrale developpant l'endurance des extenseurs du dos et la coordination croisee."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 48,
    name: { en: "Saw", es: "Sierra", fr: "Scie" },
    category: "spine",
    difficulty: "intermediate",
    muscles: { en: "Obliques & Hamstrings", es: "Oblicuos e Isquiotibiales", fr: "Obliques et Ischio-jambiers" },
    targets: { en: ["Rotation", "Hamstring flexibility", "Waist trimming"], es: ["Rotacion", "Flexibilidad de isquiotibiales", "Definicion de cintura"], fr: ["Rotation", "Souplesse des ischio-jambiers", "Definition de la taille"] },
    description: {
      en: "Seated rotation with forward reach, combining spinal twist with hamstring stretch and oblique activation.",
      es: "Rotacion sentada con alcance frontal, combinando torsion espinal con estiramiento de isquiotibiales y activacion de oblicuos.",
      fr: "Rotation assise avec extension avant, combinant torsion vertebrale avec etirement des ischio-jambiers et activation des obliques."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 49,
    name: { en: "Side Kick Series", es: "Serie de Patada Lateral", fr: "Serie de Coup de Pied Lateral" },
    category: "hips",
    difficulty: "intermediate",
    muscles: { en: "Full Hip Complex", es: "Complejo de Cadera Completo", fr: "Complexe de Hanche Complet" },
    targets: { en: ["Hip strength", "Balance", "Glute activation"], es: ["Fuerza de cadera", "Equilibrio", "Activacion de gluteos"], fr: ["Force de hanche", "Equilibre", "Activation des fessiers"] },
    description: {
      en: "Comprehensive side-lying series: front-back kicks, up-down, circles, and pulses targeting the entire hip complex.",
      es: "Serie integral en posicion lateral: patadas frente-atras, arriba-abajo, circulos y pulsos dirigidos a todo el complejo de cadera.",
      fr: "Serie complete en position laterale: coups avant-arriere, haut-bas, cercles et pulsations ciblant tout le complexe de la hanche."
    },
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 50,
    name: { en: "Seal", es: "Foca", fr: "Phoque" },
    category: "core",
    difficulty: "intermediate",
    muscles: { en: "Core & Massage", es: "Core y Masaje", fr: "Core et Massage" },
    targets: { en: ["Spinal massage", "Balance", "Core control"], es: ["Masaje espinal", "Equilibrio", "Control del core"], fr: ["Massage vertebral", "Equilibre", "Controle du core"] },
    description: {
      en: "Playful rolling exercise that massages the spine while building balance and core control. The fun finisher.",
      es: "Ejercicio ludico de rodamiento que masajea la columna mientras construye equilibrio y control del core. El final divertido.",
      fr: "Exercice ludique de roulement qui masse la colonne vertebrale tout en developpant l'equilibre et le controle du core."
    },
    duration: "4 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 51,
    name: { en: "Boomerang", es: "Boomerang", fr: "Boomerang" },
    category: "core",
    difficulty: "advanced",
    muscles: { en: "Full Body", es: "Cuerpo Completo", fr: "Corps Complet" },
    targets: { en: ["Coordination", "Core power", "Flow"], es: ["Coordinacion", "Potencia del core", "Flujo"], fr: ["Coordination", "Puissance du core", "Flux"] },
    description: {
      en: "An advanced flowing exercise combining the roll over, teaser, and open leg rocker for seamless full-body integration.",
      es: "Un ejercicio avanzado fluido que combina el volteo, teaser y mecedora de piernas abiertas para una integracion corporal total.",
      fr: "Un exercice avance fluide combinant le renversement, teaser et balancier jambes ouvertes pour une integration corporelle totale."
    },
    duration: "6 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 52,
    name: { en: "Control Balance", es: "Balance de Control", fr: "Equilibre de Controle" },
    category: "core",
    difficulty: "advanced",
    muscles: { en: "Posterior Chain", es: "Cadena Posterior", fr: "Chaine Posterieure" },
    targets: { en: ["Hamstring flexibility", "Balance", "Shoulder stability"], es: ["Flexibilidad de isquiotibiales", "Equilibrio", "Estabilidad de hombro"], fr: ["Souplesse des ischio-jambiers", "Equilibre", "Stabilite d'epaule"] },
    description: {
      en: "Advanced balance exercise challenging the posterior chain and shoulder stability while inverted.",
      es: "Ejercicio avanzado de equilibrio desafiando la cadena posterior y estabilidad del hombro mientras esta invertido.",
      fr: "Exercice avance d'equilibre defiant la chaine posterieure et la stabilite de l'epaule en position inversee."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 53,
    name: { en: "Leg Pull Front", es: "Tiraje de Pierna Frontal", fr: "Traction de Jambe Avant" },
    category: "core",
    difficulty: "advanced",
    muscles: { en: "Core & Shoulders", es: "Core y Hombros", fr: "Core et Epaules" },
    targets: { en: ["Plank stability", "Hip extension", "Total integration"], es: ["Estabilidad en plancha", "Extension de cadera", "Integracion total"], fr: ["Stabilite en planche", "Extension de hanche", "Integration totale"] },
    description: {
      en: "A plank with alternating leg lifts, challenging total body stability and hip extensor strength.",
      es: "Una plancha con elevaciones alternadas de piernas, desafiando la estabilidad corporal total y la fuerza extensora de cadera.",
      fr: "Une planche avec elevations alternees de jambes, defiant la stabilite corporelle totale et la force des extenseurs de hanche."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 54,
    name: { en: "Star Side Plank", es: "Plancha Lateral Estrella", fr: "Planche Laterale Etoile" },
    category: "core",
    difficulty: "advanced",
    muscles: { en: "Obliques & Shoulders", es: "Oblicuos y Hombros", fr: "Obliques et Epaules" },
    targets: { en: ["Lateral stability", "Shoulder endurance", "Oblique power"], es: ["Estabilidad lateral", "Resistencia del hombro", "Potencia de oblicuos"], fr: ["Stabilite laterale", "Endurance de l'epaule", "Puissance des obliques"] },
    description: {
      en: "Side plank progression with top arm and leg extended, the ultimate lateral stability and oblique strength challenge.",
      es: "Progresion de plancha lateral con brazo y pierna superiores extendidos, el desafio maximo de estabilidad lateral y fuerza de oblicuos.",
      fr: "Progression de planche laterale avec bras et jambe superieurs etendus, le defi ultime de stabilite laterale et de force des obliques."
    },
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 55,
    name: { en: "Sprinter's Core Stability", es: "Estabilidad del Core para Velocistas", fr: "Stabilite du Core pour Sprinters" },
    category: "athletic",
    difficulty: "advanced",
    muscles: { en: "Core & Hip Flexors", es: "Core y Flexores de Cadera", fr: "Core et Flechisseurs de Hanche" },
    targets: { en: ["Sprint mechanics", "Hip drive", "Anti-rotation"], es: ["Mecanica de sprint", "Impulso de cadera", "Anti-rotacion"], fr: ["Mecanique de sprint", "Impulsion de hanche", "Anti-rotation"] },
    description: {
      en: "Core stability work specific to sprinting mechanics: high knee drives, anti-rotation under speed, and hip flexor power.",
      es: "Trabajo de estabilidad del core especifico para mecanicas de sprint: impulsos de rodilla alta, anti-rotacion bajo velocidad y potencia de flexores de cadera.",
      fr: "Travail de stabilite du core specifique aux mecaniques de sprint: impulsions de genou haut, anti-rotation sous vitesse et puissance des flechisseurs de hanche."
    },
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
  }
];

// Exercise categories for filtering
const EXERCISE_CATEGORIES = {
  en: {
    all: "All Exercises",
    core: "Core",
    pelvic: "Pelvic Floor",
    hips: "Hips & Glutes",
    spine: "Spine & Posture",
    shoulders: "Upper Body",
    breath: "Breath & NS",
    athletic: "Athletic",
    flexibility: "Flexibility",
    posture: "Posture",
    postpartum: "Postpartum",
    longevity: "Longevity 35+",
    stress: "Stress Recovery",
    reformer: "Reformer-Inspired"
  },
  es: {
    all: "Todos los Ejercicios",
    core: "Core",
    pelvic: "Suelo Pelvico",
    hips: "Caderas y Gluteos",
    spine: "Columna y Postura",
    shoulders: "Tren Superior",
    breath: "Respiracion y SN",
    athletic: "Atletico",
    flexibility: "Flexibilidad",
    posture: "Postura",
    postpartum: "Postparto",
    longevity: "Longevidad 35+",
    stress: "Recuperacion de Estres",
    reformer: "Inspirado en Reformer"
  },
  fr: {
    all: "Tous les Exercices",
    core: "Core",
    pelvic: "Plancher Pelvien",
    hips: "Hanches et Fessiers",
    spine: "Colonne et Posture",
    shoulders: "Haut du Corps",
    breath: "Respiration et SN",
    athletic: "Athletique",
    flexibility: "Souplesse",
    posture: "Posture",
    postpartum: "Post-Partum",
    longevity: "Longevite 35+",
    stress: "Recuperation du Stress",
    reformer: "Inspire du Reformer"
  }
};

// Difficulty labels
const DIFFICULTY_LABELS = {
  en: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
  es: { beginner: "Principiante", intermediate: "Intermedio", advanced: "Avanzado" },
  fr: { beginner: "Debutant", intermediate: "Intermediaire", advanced: "Avance" }
};

// Make available globally
window.EXERCISE_DATABASE = EXERCISE_DATABASE;
window.EXERCISE_CATEGORIES = EXERCISE_CATEGORIES;
window.DIFFICULTY_LABELS = DIFFICULTY_LABELS;
