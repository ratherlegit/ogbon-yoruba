import type { Dialogue, DialogueLine, Voice } from "./dialogues";

// More conversations, one new situation per level, each with its own two speakers. They practise
// the lessons added after the first set: languages, polite requests, there is and there is not,
// where things are, wanting, comparing, on and under, having to, can, do not, saying and thinking,
// blessings, and still and not yet. All of the Yoruba is written by the author with no published
// source, so every conversation is needs-review.

const SOURCE = "Written by the author of this code for this site, using words and patterns from the level's lessons; no published source.";
const NOTE_TAIL = "All of this Yoruba was written by the author with no published source, so every line needs a native speaker.";

const line = (speaker: string, voice: Voice, yoruba: string, english: string): DialogueLine => ({ speaker, voice, yoruba, english });
const note = (checks: string): string => `${checks} ${NOTE_TAIL}`;

// Getting Started: Fúnmi and Túndé
const F = (y: string, e: string) => line("Fúnmi", "female", y, e);
const T = (y: string, e: string) => line("Túndé", "male", y, e);
// Beginner: Ṣadé and Gbénga
const S = (y: string, e: string) => line("Ṣadé", "female", y, e);
const G = (y: string, e: string) => line("Gbénga", "male", y, e);
// Intermediate: Yẹmí and Kúnlé
const Y = (y: string, e: string) => line("Yẹmí", "female", y, e);
const K = (y: string, e: string) => line("Kúnlé", "male", y, e);
// Advanced: Àbíọ́lá and Wálé
const A = (y: string, e: string) => line("Àbíọ́lá", "female", y, e);
const W = (y: string, e: string) => line("Wálé", "male", y, e);
// Mastery: Ìfẹ́ and Àkàndé
const I = (y: string, e: string) => line("Ìfẹ́", "female", y, e);
const Q = (y: string, e: string) => line("Àkàndé", "male", y, e);

// Beginner, school: Fọláké and Rótìmí
const FO = (y: string, e: string) => line("Fọláké", "female", y, e);
const RO = (y: string, e: string) => line("Rótìmí", "male", y, e);
// Intermediate, phones: Dúpẹ́ and Làmídì
const DU = (y: string, e: string) => line("Dúpẹ́", "female", y, e);
const LA = (y: string, e: string) => line("Làmídì", "male", y, e);
// Mastery, hanging out: Ìbùkún and Ṣèyí
const BU = (y: string, e: string) => line("Ìbùkún", "female", y, e);
const SE = (y: string, e: string) => line("Ṣèyí", "male", y, e);

export const EXTRA_DIALOGUES: Dialogue[] = [
  // ---------- Getting Started ----------
  {
    id: "gs-language", level: "getting-started", situationId: "new-friends", title: "Which language?",
    setting: "Two people meet and ask which languages the other speaks.",
    lines: [
      T("Ẹ káàárọ̀. Èdè wo ni o sọ?", "Good morning. Which language do you speak?"),
      F("Mo sọ Gẹ̀ẹ́sì dáadáa. Mo gbọ́ Yorùbá díẹ̀.", "I speak English well. I understand a little Yoruba."),
      T("Mo sọ Yorùbá àti Gẹ̀ẹ́sì.", "I speak Yoruba and English."),
      F("Inú mi dùn.", "I am glad."),
      T("Inú mi dùn pẹ̀lú.", "I am glad too."),
    ],
    questions: [
      { prompt: "What can Fúnmi do in Yoruba?", choices: ["Understand a little", "Speak it well", "Speak a little but not understand"], answer: "Understand a little" },
      { prompt: "Which language does Fúnmi speak well?", choices: ["English", "Yoruba", "Hausa"], answer: "English" },
      { prompt: "Which languages does Túndé speak?", choices: ["Yoruba and English", "Only Yoruba", "English and Hausa"], answer: "Yoruba and English" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Èdè wo ni o sọ?\", \"Mo gbọ́ Yorùbá díẹ̀\" (gbọ́ for understand) and the tones on \"Gẹ̀ẹ́sì\", \"díẹ̀\" and \"dáadáa\"."),
  },
  {
    id: "gs-family", level: "getting-started", situationId: "new-friends", title: "My family",
    setting: "Fúnmi shows Túndé a picture of her family.",
    lines: [
      F("Èyí ni ìyá mi àti bàbá mi.", "This is my mother and my father."),
      T("Ṣé o ní arábìnrin?", "Do you have a sister?"),
      F("Mo ní arábìnrin méjì àti arákùnrin kan.", "I have two sisters and one brother."),
      T("Kí ni orúkọ arákùnrin rẹ?", "What is your brother's name?"),
      F("Orúkọ arákùnrin mi ni Láyí.", "My brother's name is Láyí."),
    ],
    questions: [
      { prompt: "How many sisters does Fúnmi have?", choices: ["Two", "One", "Three"], answer: "Two" },
      { prompt: "How many brothers does she have?", choices: ["One", "Two", "None"], answer: "One" },
      { prompt: "What is her brother's name?", choices: ["Láyí", "Túndé", "Adé"], answer: "Láyí" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Mo ní arábìnrin méjì àti arákùnrin kan\" and \"Orúkọ arákùnrin mi ni Láyí\" against Getting Started 4."),
  },
  {
    id: "gs-likes", level: "getting-started", situationId: "new-friends", title: "What do you like?",
    setting: "Two new friends talk about what they like.",
    lines: [
      T("Kí ni o fẹ́ràn?", "What do you like?"),
      F("Mo fẹ́ràn orin àti ijó.", "I like music and dancing."),
      T("Mo fẹ́ràn bọ́ọ̀lù àti oúnjẹ.", "I like football and food."),
      F("Mo fẹ́ràn oúnjẹ Yorùbá.", "I like Yoruba food."),
      T("Ó dára!", "Good!"),
    ],
    questions: [
      { prompt: "What do both of them like?", choices: ["Food", "Football", "Dancing"], answer: "Food" },
      { prompt: "What does Túndé like besides food?", choices: ["Football", "Music", "Dancing"], answer: "Football" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"oúnjẹ Yorùbá\" (Yoruba food) and the tones on \"bọ́ọ̀lù\" and \"ijó\"."),
  },
  {
    id: "gs-friend", level: "getting-started", situationId: "new-friends", title: "This is my friend",
    setting: "Fúnmi introduces a friend to Túndé.",
    lines: [
      F("Túndé, èyí ni ọ̀rẹ́ mi, Adé.", "Túndé, this is my friend, Adé."),
      T("Ẹ káàbọ̀, Adé. Orúkọ mi ni Túndé.", "Welcome, Adé. My name is Túndé."),
      F("Adé wá láti Ìlọrin.", "Adé comes from Ilorin."),
      T("Ó dára. Mo wá láti Ọ̀yọ́.", "Good. I come from Oyo."),
    ],
    questions: [
      { prompt: "Where does Adé come from?", choices: ["Ilorin", "Oyo", "Lagos"], answer: "Ilorin" },
      { prompt: "Where does Túndé come from?", choices: ["Oyo", "Ilorin", "Ibadan"], answer: "Oyo" },
      { prompt: "Who is Adé?", choices: ["Fúnmi's friend", "Túndé's brother", "Fúnmi's brother"], answer: "Fúnmi's friend" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Ẹ káàbọ̀\" as a welcome to a newly met person, \"Ìlọrin\" and the tones on \"ọ̀rẹ́\"."),
  },
  {
    id: "gs-parents", level: "getting-started", situationId: "new-friends", title: "Where is your family from?",
    setting: "Túndé asks Fúnmi where her parents come from.",
    lines: [
      T("Ìlú wo ni ìyá rẹ ti wá?", "Which town does your mother come from?"),
      F("Ìyá mi wá láti Ìbàdàn.", "My mother comes from Ibadan."),
      T("Àti bàbá rẹ?", "And your father?"),
      F("Bàbá mi wá láti Abẹ́òkuta.", "My father comes from Abeokuta."),
      T("Ó dára. Mo wá láti Ọ̀yọ́.", "Good. I come from Oyo."),
    ],
    questions: [
      { prompt: "Where does Fúnmi's mother come from?", choices: ["Ibadan", "Abeokuta", "Oyo"], answer: "Ibadan" },
      { prompt: "Who comes from Abeokuta?", choices: ["Fúnmi's father", "Fúnmi's mother", "Túndé"], answer: "Fúnmi's father" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Ìlú wo ni ìyá rẹ ti wá?\" (the wo pattern from Getting Started 3) and \"Abẹ́òkuta\"."),
  },

  // ---------- Beginner ----------
  {
    id: "b-sit", level: "beginner", situationId: "at-home", title: "Please sit down",
    setting: "Ṣadé welcomes Gbénga into her home and offers him food.",
    lines: [
      S("Ẹ káàbọ̀. Ẹ jọ̀ọ́ ẹ jókòó.", "Welcome. Please sit down."),
      G("Ẹ ṣé.", "Thank you."),
      S("Kí ni ẹ fẹ́ jẹ?", "What do you want to eat?"),
      G("Mo fẹ́ jẹ ẹja.", "I want to eat fish."),
      S("Ó dára. Ṣé ẹ fẹ́ mu omi?", "Good. Do you want to drink water?"),
      G("Bẹ́ẹ̀ ni. Jọ̀wọ́ fún mi ní omi.", "Yes. Please give me water."),
    ],
    questions: [
      { prompt: "What does Gbénga want to eat?", choices: ["Fish", "Bread", "Meat"], answer: "Fish" },
      { prompt: "How does Ṣadé ask him to sit?", choices: ["With a polite ẹ jọ̀ọ́", "With a plain command", "She does not ask him to"], answer: "With a polite ẹ jọ̀ọ́" },
      { prompt: "How does Gbénga ask for the water?", choices: ["With jọ̀wọ́ (please)", "With a plain command", "He does not ask for it"], answer: "With jọ̀wọ́ (please)" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Ẹ jọ̀ọ́ ẹ jókòó\", \"Jọ̀wọ́ fún mi ní omi\" and \"Kí ni ẹ fẹ́ jẹ?\" against Beginner 5 and 8."),
  },
  {
    id: "b-isthere", level: "beginner", situationId: "at-home", title: "Is there any?",
    setting: "Gbénga asks Ṣadé what food there is in the kitchen.",
    lines: [
      G("Ṣé ìrẹsì wà?", "Is there rice?"),
      S("Rárá, kò sí ìrẹsì.", "No, there is no rice."),
      G("Ṣé ẹran wà?", "Is there meat?"),
      S("Bẹ́ẹ̀ ni, ẹran wà.", "Yes, there is meat."),
      G("Ṣé ẹja wà?", "Is there fish?"),
      S("Ẹja wà, ṣùgbọ́n kò sí búrẹ́dì.", "There is fish, but there is no bread."),
      G("Ó dára. Mo fẹ́ ẹja.", "Good. I want fish."),
    ],
    questions: [
      { prompt: "Which of these is there?", choices: ["Meat", "Rice", "Bread"], answer: "Meat" },
      { prompt: "How many foods does Gbénga ask about?", choices: ["Three", "Two", "Four"], answer: "Three" },
      { prompt: "Does Ṣadé have bread?", choices: ["No", "Yes", "She does not say"], answer: "No" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Ṣé ìrẹsì wà?\", \"kò sí ìrẹsì\" and \"Ẹja wà, ṣùgbọ́n kò sí búrẹ́dì\" against Beginner 6."),
  },
  {
    id: "b-where", level: "beginner", situationId: "at-home", title: "Where is my phone?",
    setting: "Gbénga cannot find his phone and Ṣadé helps him guess where it is.",
    lines: [
      G("Níbo ni fóònù mi wà?", "Where is my phone?"),
      S("Ṣé ó wà ní ilé?", "Is it at home?"),
      G("Rárá, kò sí ní ilé.", "No, it is not at home."),
      S("Ṣé ó wà ní ọ́fíìsì?", "Is it at the office?"),
      G("Bẹ́ẹ̀ ni! Ó wà ní ọ́fíìsì.", "Yes! It is at the office."),
      S("Ó dára. Ẹ ṣé.", "Good. Thank you."),
    ],
    questions: [
      { prompt: "Where is the phone?", choices: ["At the office", "At home", "At the market"], answer: "At the office" },
      { prompt: "Where does Ṣadé guess first?", choices: ["At home", "At the office", "At the market"], answer: "At home" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Níbo ni fóònù mi wà?\", \"kò sí ní ilé\" and \"fóònù\" against Beginner 7."),
  },
  {
    id: "b-want", level: "beginner", situationId: "at-home", title: "I want to sleep",
    setting: "Ṣadé offers Gbénga food, but he is tired.",
    lines: [
      S("Ṣé o fẹ́ jẹun?", "Do you want to eat?"),
      G("Rárá, n kò fẹ́ jẹun. Mo fẹ́ sùn.", "No, I do not want to eat. I want to sleep."),
      S("Ṣé o fẹ́ lọ?", "Do you want to go?"),
      G("Bẹ́ẹ̀ ni. Mo fẹ́ lọ.", "Yes. I want to go."),
      S("Ó dára. Ó dàbọ̀.", "Good. Goodbye."),
      G("Ó dàbọ̀.", "Goodbye."),
    ],
    questions: [
      { prompt: "What does Gbénga not want to do?", choices: ["Eat", "Sleep", "Go"], answer: "Eat" },
      { prompt: "What does he want to do instead?", choices: ["Sleep", "Read", "Eat"], answer: "Sleep" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"n kò fẹ́ jẹun\" and \"Mo fẹ́ sùn\" against Beginner 8, and \"Ó dàbọ̀\"."),
  },
  {
    id: "b-call", level: "beginner", situationId: "at-home", title: "A phone call",
    setting: "Ṣadé calls Gbénga to ask where he is.",
    lines: [
      S("Níbo ni o wà?", "Where are you?"),
      G("Mo wà ní ọjà.", "I am at the market."),
      S("Ṣé ẹja wà ní ọjà?", "Is there fish at the market?"),
      G("Bẹ́ẹ̀ ni, ẹja wà. Mo fẹ́ ra ẹja.", "Yes, there is fish. I want to buy fish."),
      S("Ó dára. Jọ̀wọ́ ra omi.", "Good. Please buy water."),
      G("Ó dára.", "All right."),
    ],
    questions: [
      { prompt: "Where is Gbénga?", choices: ["At the market", "At home", "At the office"], answer: "At the market" },
      { prompt: "What does Ṣadé ask him to buy?", choices: ["Water", "Bread", "Rice"], answer: "Water" },
      { prompt: "What does Gbénga want to buy for himself?", choices: ["Fish", "Water", "Meat"], answer: "Fish" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Níbo ni o wà?\", \"Mo wà ní ọjà\" and \"Jọ̀wọ́ ra omi\" against Beginner 5 to 8."),
  },

  // ---------- Intermediate ----------
  {
    id: "i-pharmacy", level: "intermediate", situationId: "errands", title: "At the pharmacy",
    setting: "Kúnlé has a headache and visits the pharmacy where Yẹmí works.",
    lines: [
      Y("Ẹ káàárọ̀. Kí ni ẹ nílò?", "Good morning. What do you need?"),
      K("Ẹ káàárọ̀. Mo nílò oògùn orí.", "Good morning. I need medicine for a headache."),
      Y("Ṣé orí ń dùn yín gan-an?", "Does your head hurt a lot?"),
      K("Bẹ́ẹ̀ ni, orí ń dùn mí gan-an.", "Yes, my head hurts a lot."),
      Y("Ó dára. Ẹ ní láti mu oògùn yìí lẹ́yìn oúnjẹ.", "Good. You have to take this medicine after food."),
      K("Ṣé mo gbọ́dọ̀ mu omi?", "Must I drink water?"),
      Y("Bẹ́ẹ̀ ni, ẹ gbọ́dọ̀ mu omi púpọ̀.", "Yes, you must drink a lot of water."),
      K("Ẹ ṣé gan-an.", "Thank you very much."),
    ],
    questions: [
      { prompt: "What does Kúnlé need medicine for?", choices: ["A headache", "A cough", "A sore leg"], answer: "A headache" },
      { prompt: "When must he take the medicine?", choices: ["After food", "Before food", "At night"], answer: "After food" },
      { prompt: "What must he drink a lot of?", choices: ["Water", "Tea", "Milk"], answer: "Water" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"oògùn orí\" (headache medicine), \"Orí ń dùn mí\" (my head hurts), \"lẹ́yìn oúnjẹ\" and \"púpọ̀\" against Intermediate 7."),
  },
  {
    id: "i-bigger", level: "intermediate", situationId: "errands", title: "Which bag is bigger?",
    setting: "Kúnlé chooses a bag in a shop.",
    lines: [
      Y("Àpò wo ni ẹ fẹ́?", "Which bag do you want?"),
      K("Àpò yìí kéré ju àpò yẹn lọ.", "This bag is smaller than that bag."),
      Y("Bẹ́ẹ̀ ni. Àpò yẹn tóbi ju àpò yìí lọ.", "Yes. That bag is bigger than this bag."),
      K("Èló ni àpò yẹn?", "How much is that bag?"),
      Y("Igba náírà.", "Two hundred naira."),
      K("Àpò yìí dára, ṣùgbọ́n ó kéré jù.", "This bag is good, but it is too small."),
      Y("Ṣé ẹ fẹ́ àpò yẹn?", "Do you want that bag?"),
      K("Bẹ́ẹ̀ ni, mo fẹ́ àpò yẹn.", "Yes, I want that bag."),
    ],
    questions: [
      { prompt: "Which bag does Kúnlé finally want?", choices: ["The bigger one", "The smaller one", "Both of them"], answer: "The bigger one" },
      { prompt: "Why does he not take the first bag?", choices: ["It is too small", "It is too expensive", "It is too heavy"], answer: "It is too small" },
      { prompt: "How much is the bigger bag?", choices: ["Two hundred naira", "One hundred naira", "Three hundred naira"], answer: "Two hundred naira" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"kéré ju ... lọ\" and \"tóbi ju ... lọ\" against Intermediate 5, \"kéré jù\" (too small), \"igba náírà\" against the Numbers section, and \"yìí\" and \"yẹn\"."),
  },
  {
    id: "i-lost", level: "intermediate", situationId: "errands", title: "Where is my key?",
    setting: "Kúnlé cannot find his key and Yẹmí helps him look.",
    lines: [
      K("Níbo ni kọ́kọ́rọ́ mi wà?", "Where is my key?"),
      Y("Ṣé ó wà lórí tábìlì?", "Is it on the table?"),
      K("Rárá, kò sí lórí tábìlì.", "No, it is not on the table."),
      Y("Ṣé ó wà nínú àpò rẹ?", "Is it in your bag?"),
      K("Rárá, kò sí nínú àpò mi.", "No, it is not in my bag."),
      Y("Wò lábẹ́ àga!", "Look under the chair!"),
      K("Ó wà níbẹ̀! Ó wà lábẹ́ àga.", "It is there! It is under the chair."),
      Y("Ó dára. Ẹ ṣé.", "Good. Thank you."),
    ],
    questions: [
      { prompt: "Where was the key?", choices: ["Under the chair", "On the table", "In the bag"], answer: "Under the chair" },
      { prompt: "Which two places does Yẹmí suggest first?", choices: ["The table and the bag", "The chair and the bag", "The table and the chair"], answer: "The table and the bag" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"lórí tábìlì\", \"nínú àpò\" and \"lábẹ́ àga\" against Intermediate 6, and \"kọ́kọ́rọ́\" (key)."),
  },
  {
    id: "i-plans", level: "intermediate", situationId: "errands", title: "Plans for tomorrow",
    setting: "Yẹmí invites Kúnlé to her house, but he has to work.",
    lines: [
      Y("Ṣé o fẹ́ wá sí ilé mi lọ́la?", "Do you want to come to my house tomorrow?"),
      K("Mo fẹ́ wá, ṣùgbọ́n mo ní láti lọ sí iṣẹ́ ní òwúrọ̀.", "I want to come, but I have to go to work in the morning."),
      Y("Ṣé o ní láti lọ ní ọ̀sán?", "Do you have to go in the afternoon?"),
      K("Rárá, n kò ní láti lọ ní ọ̀sán.", "No, I do not have to go in the afternoon."),
      Y("Ó dára. Wá ní ọ̀sán.", "Good. Come in the afternoon."),
      K("Ó dára. Mo máa wá.", "All right. I will come."),
      Y("Mo máa ṣe oúnjẹ.", "I will cook food."),
      K("Ẹ ṣé gan-an.", "Thank you very much."),
    ],
    questions: [
      { prompt: "Why can Kúnlé not come in the morning?", choices: ["He has to work", "He wants to sleep", "He is travelling"], answer: "He has to work" },
      { prompt: "When does he not have to work?", choices: ["In the afternoon", "In the morning", "At night"], answer: "In the afternoon" },
      { prompt: "What will Yẹmí do?", choices: ["Cook food", "Go to work", "Visit Kúnlé"], answer: "Cook food" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"ní láti\" and \"n kò ní láti\" against Intermediate 7, \"lọ́la\" and \"máa\" against Intermediate 1, and \"ní òwúrọ̀\" and \"ní ọ̀sán\"."),
  },
  {
    id: "i-room", level: "intermediate", situationId: "errands", title: "Booking a room",
    setting: "Kúnlé asks for a room at a small hotel where Yẹmí works.",
    lines: [
      Y("Ẹ káàbọ̀. Kí ni ẹ fẹ́?", "Welcome. What do you want?"),
      K("Mo nílò yàrá kan fún ọjọ́ méjì.", "I need a room for two days."),
      Y("Ṣé ẹ fẹ́ yàrá ńlá tàbí yàrá kékeré?", "Do you want a big room or a small room?"),
      K("Mo fẹ́ yàrá kékeré.", "I want a small room."),
      Y("Yàrá kékeré wà. Ẹ ní láti sanwó nísinsìnyí.", "There is a small room. You have to pay now."),
      K("Èló ni?", "How much is it?"),
      Y("Ẹgbẹ̀rún mẹ́ta náírà.", "Three thousand naira."),
      K("Ó dára. Ẹ ṣé.", "All right. Thank you."),
    ],
    questions: [
      { prompt: "How long does Kúnlé need the room?", choices: ["Two days", "Three days", "One day"], answer: "Two days" },
      { prompt: "What kind of room does he choose?", choices: ["A small one", "A big one", "He does not choose"], answer: "A small one" },
      { prompt: "What must he do now?", choices: ["Pay", "Sign a form", "Show a book"], answer: "Pay" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"nílò\" and \"ní láti\" against Intermediate 7, \"sanwó\" (pay), \"yàrá\" (room) and \"Ẹgbẹ̀rún mẹ́ta\" (3,000) against the Numbers section."),
  },

  // ---------- Advanced ----------
  {
    id: "a-first", level: "advanced", situationId: "work", title: "The first day",
    setting: "Wálé starts a new job and Àbíọ́lá shows him around.",
    lines: [
      A("Ẹ káàbọ̀ sí ibi iṣẹ́ wa.", "Welcome to our workplace."),
      W("Ẹ ṣé. Òní ni ọjọ́ àkọ́kọ́ mi.", "Thank you. Today is my first day."),
      A("Ṣé o lè lo kọ̀ǹpútà?", "Can you use a computer?"),
      W("Bẹ́ẹ̀ ni, mo lè lo kọ̀ǹpútà dáadáa.", "Yes, I can use a computer well."),
      A("Ó dára. Má bẹ̀rù, a máa ràn ọ́ lọ́wọ́.", "Good. Do not be afraid, we will help you."),
      W("Ẹ ṣé. Ṣé mo lè bẹ̀rẹ̀ lónìí?", "Thank you. Can I start today?"),
      A("Bẹ́ẹ̀ ni. Bẹ̀rẹ̀ báyìí.", "Yes. Start now."),
      W("Ó dára.", "All right."),
    ],
    questions: [
      { prompt: "What can Wálé do well?", choices: ["Use a computer", "Drive a car", "Speak French"], answer: "Use a computer" },
      { prompt: "What does Àbíọ́lá tell him not to do?", choices: ["Be afraid", "Be late", "Go home"], answer: "Be afraid" },
      { prompt: "What does Wálé ask?", choices: ["Whether he can start today", "Whether he can go home", "Whether he can have water"], answer: "Whether he can start today" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Ṣé o lè lo kọ̀ǹpútà?\" against Advanced 6, \"Má bẹ̀rù\" against Advanced 7, and \"ibi iṣẹ́\", \"ọjọ́ àkọ́kọ́\" and \"ràn ọ́ lọ́wọ́\"."),
  },
  {
    id: "a-news", level: "advanced", situationId: "work", title: "News on the phone",
    setting: "Wálé phones Àbíọ́lá with news about their boss.",
    lines: [
      W("Alò, Àbíọ́lá. Mo gbọ́ pé ọ̀gá wa ti dé.", "Hello, Àbíọ́lá. I heard that our boss has arrived."),
      A("Ṣé òótọ́ ni?", "Is it true?"),
      W("Ó sọ pé òun máa wà ní ọ́fíìsì lónìí.", "He said that he himself will be at the office today."),
      A("Mo rò pé ó wà ní Abuja.", "I thought that he was in Abuja."),
      W("Mo mọ̀ pé ó lọ sí Abuja lánàá, ṣùgbọ́n ó ti padà.", "I know that he went to Abuja yesterday, but he has come back."),
      A("Ṣé ó sọ pé ìpàdé yóò wà?", "Did he say that there will be a meeting?"),
      W("Bẹ́ẹ̀ ni, ó sọ pé ìpàdé yóò wà ní ọ̀sán.", "Yes, he said that there will be a meeting in the afternoon."),
      A("Ó dára. Ẹ ṣé.", "Good. Thank you."),
    ],
    questions: [
      { prompt: "Who said that the boss will be at the office?", choices: ["The boss himself", "Àbíọ́lá", "Nobody said it"], answer: "The boss himself" },
      { prompt: "Where did Àbíọ́lá think the boss was?", choices: ["In Abuja", "At home", "At the market"], answer: "In Abuja" },
      { prompt: "When will the meeting be?", choices: ["In the afternoon", "In the morning", "Tomorrow"], answer: "In the afternoon" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Mo gbọ́ pé\", \"Ó sọ pé òun\" (the boss himself) and \"Mo rò pé\" against Advanced 5, and \"ọ̀gá\", \"ìpàdé\", \"òótọ́\" and \"padà\"."),
  },
  {
    id: "a-worry", level: "advanced", situationId: "work", title: "Do not worry",
    setting: "Wálé forgot an important paper at home and Àbíọ́lá calms him down.",
    lines: [
      W("Ẹ má bínú, mo ṣe àṣìṣe.", "Sorry, I made a mistake."),
      A("Má bẹ̀rù. Kí ni ó ṣẹlẹ̀?", "Do not be afraid. What happened?"),
      W("Mo gbàgbé ìwé mi ní ilé.", "I forgot my paper at home."),
      A("Má lọ sílé. Ṣé o lè kà ìwé yìí?", "Do not go home. Can you read this paper?"),
      W("Bẹ́ẹ̀ ni, mo lè kà á.", "Yes, I can read it."),
      A("Ó dára. Má gbàgbé lọ́la.", "Good. Do not forget tomorrow."),
      W("Ẹ ṣé gan-an.", "Thank you very much."),
      A("Kò sí wàhálà.", "No problem."),
    ],
    questions: [
      { prompt: "What did Wálé forget?", choices: ["His paper at home", "His phone at the office", "His keys"], answer: "His paper at home" },
      { prompt: "What does Àbíọ́lá tell him not to do?", choices: ["Go home", "Call the boss", "Read the paper"], answer: "Go home" },
      { prompt: "What does Àbíọ́lá say when Wálé thanks her?", choices: ["No problem", "Welcome back", "Do not thank me"], answer: "No problem" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Má lọ sílé\", \"Má bẹ̀rù\" and \"Má gbàgbé\" against Advanced 7, and \"àṣìṣe\", \"ṣẹlẹ̀\" and \"gbàgbé\"."),
  },
  {
    id: "a-help", level: "advanced", situationId: "work", title: "Can you help me?",
    setting: "Àbíọ́lá needs help carrying a heavy box.",
    lines: [
      A("Ṣé o lè ràn mí lọ́wọ́?", "Can you help me?"),
      W("Bẹ́ẹ̀ ni, mo lè ràn yín lọ́wọ́.", "Yes, I can help you."),
      A("Àpótí yìí wúwo. N kò lè gbé e.", "This box is heavy. I cannot carry it."),
      W("Àpótí náà wúwo, ṣùgbọ́n mo lè gbé e.", "The box is heavy, but I can carry it."),
      A("Ṣé o lè gbé e lọ sí ọ́fíìsì?", "Can you carry it to the office?"),
      W("Bẹ́ẹ̀ ni, mo lè gbé e lọ.", "Yes, I can carry it there."),
      A("Ẹ ṣé. Ṣé o fẹ́ omi?", "Thank you. Do you want water?"),
      W("Rárá, n kò fẹ́ omi.", "No, I do not want water."),
    ],
    questions: [
      { prompt: "Why does Àbíọ́lá need help?", choices: ["The box is too heavy for her", "She is tired", "She cannot find the office"], answer: "The box is too heavy for her" },
      { prompt: "Where should Wálé carry the box?", choices: ["To the office", "To the market", "Home"], answer: "To the office" },
      { prompt: "What does Wálé say no to?", choices: ["Water", "Help", "The box"], answer: "Water" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Ṣé o lè ràn mí lọ́wọ́?\", \"N kò lè gbé e\" and \"mo lè gbé e\" against Advanced 6, and \"wúwo\" (heavy) and \"àpótí\"."),
  },
  {
    id: "a-said", level: "advanced", situationId: "work", title: "What did the boss say?",
    setting: "Àbíọ́lá and Wálé talk about how many days they have for a job.",
    lines: [
      A("Ṣé o gbọ́ ohun tí ọ̀gá sọ?", "Did you hear what the boss said?"),
      W("Bẹ́ẹ̀ ni. Ó sọ pé a ní láti parí iṣẹ́ yìí lónìí.", "Yes. He said that we have to finish this work today."),
      A("Mo rò pé a ní ọjọ́ méjì.", "I thought that we had two days."),
      W("Rárá. Ó sọ pé ọjọ́ kan ni a ní.", "No. He said that we have one day."),
      A("Ó dára. A gbọ́dọ̀ bẹ̀rẹ̀ báyìí.", "Good. We must start now."),
      W("Mo mọ̀ pé iṣẹ́ náà pọ̀.", "I know that the work is a lot."),
      A("Ṣùgbọ́n a lè parí rẹ̀.", "But we can finish it."),
      W("Bẹ́ẹ̀ ni.", "Yes."),
    ],
    questions: [
      { prompt: "How many days do they really have?", choices: ["One", "Two", "Three"], answer: "One" },
      { prompt: "How many days did Àbíọ́lá think they had?", choices: ["Two", "One", "A week"], answer: "Two" },
      { prompt: "What must they do now?", choices: ["Start", "Wait for the boss", "Go home"], answer: "Start" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"ohun tí ọ̀gá sọ\" (what the boss said), \"Ó sọ pé\" and \"Mo rò pé\" against Advanced 5, \"ọjọ́ kan ni a ní\" (focus) and \"parí\"."),
  },

  // ---------- Mastery ----------
  {
    id: "m-blessing", level: "mastery", situationId: "celebration", title: "Blessings for a child",
    setting: "Two guests give blessings at a naming celebration.",
    lines: [
      Q("Ẹ káàbọ̀ sí ayẹyẹ wa.", "Welcome to our celebration."),
      I("Ẹ ṣé. Kí Ọlọ́run bùkún ọmọ yìí.", "Thank you. May God bless this child."),
      Q("Àmín.", "Amen."),
      I("Kí ó dàgbà, kí ó sì ní àlàáfíà.", "May he or she grow, and may he or she have peace."),
      Q("Àmín. Kí Ọlọ́run bùkún ẹ̀yin náà.", "Amen. May God bless you too."),
      I("Àmín. Kí ọmọ náà ní ẹ̀mí gígùn.", "Amen. May the child have a long life."),
      Q("Àmín. Ẹ jẹun, ẹ mu.", "Amen. Eat and drink."),
      I("Ẹ ṣé gan-an.", "Thank you very much."),
    ],
    questions: [
      { prompt: "How does Àkàndé answer each blessing?", choices: ["Àmín", "Ẹ ṣé", "Kò sí wàhálà"], answer: "Àmín" },
      { prompt: "Which of these does Ìfẹ́ NOT wish for the child?", choices: ["Wealth", "Peace", "A long life"], answer: "Wealth" },
      { prompt: "What does Àkàndé tell the guests to do at the end?", choices: ["Eat and drink", "Go home", "Sit down"], answer: "Eat and drink" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Kí Ọlọ́run bùkún ọmọ yìí\", \"kí ó dàgbà, kí ó sì ní àlàáfíà\" and \"ẹ̀mí gígùn\" against Mastery 5, and \"ayẹyẹ\" and \"bùkún\"."),
  },
  {
    id: "m-notyet", level: "mastery", situationId: "celebration", title: "Not yet",
    setting: "Before the party, Ìfẹ́ asks Àkàndé if everything is ready.",
    lines: [
      I("Ṣé àlejò ti dé?", "Have the guests arrived?"),
      Q("Rárá, wọn kò tíì dé.", "No, they have not arrived yet."),
      I("Ṣé oúnjẹ ti ṣetán?", "Is the food ready?"),
      Q("Ìyá mi ṣì ń ṣe oúnjẹ.", "My mother is still cooking."),
      I("Ṣé orin ti bẹ̀rẹ̀?", "Has the music started?"),
      Q("Rárá, orin kò tíì bẹ̀rẹ̀.", "No, the music has not started yet."),
      I("Ó dára. A ṣì ní àkókò.", "Good. We still have time."),
      Q("Bẹ́ẹ̀ ni. Ẹ jókòó.", "Yes. Please sit down."),
    ],
    questions: [
      { prompt: "Who is still cooking?", choices: ["Àkàndé's mother", "Ìfẹ́", "The guests"], answer: "Àkàndé's mother" },
      { prompt: "What has not started yet?", choices: ["The music", "The food", "The speeches"], answer: "The music" },
      { prompt: "Have the guests arrived?", choices: ["Not yet", "Yes, all of them", "Some of them"], answer: "Not yet" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"wọn kò tíì dé\", \"orin kò tíì bẹ̀rẹ̀\" and \"ṣì ń ṣe oúnjẹ\" against Mastery 6, and \"àlejò\", \"ṣetán\" and \"àkókò\"."),
  },
  {
    id: "m-quarrel", level: "mastery", situationId: "celebration", title: "Settling a quarrel",
    setting: "Ìfẹ́ helps Àkàndé settle an argument with a friend.",
    lines: [
      I("Kí ló dé tí o fi bínú?", "Why are you angry?"),
      Q("Mo bínú nítorí pé ó sọ ohun tí kò dára.", "I am angry because he said something that was not good."),
      I("Ṣé ó mọ̀ pé o bínú?", "Does he know that you are angry?"),
      Q("Rárá, kò tíì mọ̀.", "No, he does not know yet."),
      I("Bí o bá bá a sọ̀rọ̀, yóò gbọ́.", "If you speak with him, he will understand."),
      Q("Ó dára. Mo máa bá a sọ̀rọ̀ lọ́la.", "All right. I will speak with him tomorrow."),
      I("Kí Ọlọ́run ràn yín lọ́wọ́.", "May God help you both."),
      Q("Àmín.", "Amen."),
    ],
    questions: [
      { prompt: "Why is Àkàndé angry?", choices: ["His friend said something unkind", "His friend is late", "His friend lost money"], answer: "His friend said something unkind" },
      { prompt: "Does the friend know that Àkàndé is angry?", choices: ["Not yet", "Yes", "He guesses it"], answer: "Not yet" },
      { prompt: "What does Ìfẹ́ advise?", choices: ["Speak to the friend", "Stay away from him", "Tell the boss"], answer: "Speak to the friend" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"nítorí pé\" and \"Bí o bá bá a sọ̀rọ̀\" against Mastery 3, \"kò tíì mọ̀\" against Mastery 6, \"Kí ló dé tí o fi bínú?\" and \"bá a sọ̀rọ̀\"."),
  },
  {
    id: "m-who", level: "mastery", situationId: "celebration", title: "Who went with you?",
    setting: "Ìfẹ́ asks Àkàndé about his trip to the market.",
    lines: [
      I("Kí ni o rà ní ọjà?", "What did you buy at the market?"),
      Q("Ẹran ni mo rà.", "It was meat that I bought."),
      I("Ta ni ó bá ọ lọ?", "Who went with you?"),
      Q("Ìyá mi ni ó bá mi lọ.", "It was my mother who went with me."),
      I("Níbo ni ẹ ti rà á?", "Where did you buy it?"),
      Q("Ọjà Bódìjà ni a ti rà á.", "It was at Bódìjà market that we bought it."),
      I("Ṣé ó wọ́n?", "Was it expensive?"),
      Q("Rárá, ó dára.", "No, it was fine."),
    ],
    questions: [
      { prompt: "Who went to the market with Àkàndé?", choices: ["His mother", "His sister", "A friend"], answer: "His mother" },
      { prompt: "What did he buy?", choices: ["Meat", "Fish", "Eggs"], answer: "Meat" },
      { prompt: "Was it expensive?", choices: ["No", "Yes", "Ìfẹ́ does not ask"], answer: "No" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check the focus sentences \"Ẹran ni mo rà\", \"Ìyá mi ni ó bá mi lọ\" and \"Ọjà Bódìjà ni a ti rà á\" against Mastery 2, and the tones on \"wọ́n\" (expensive)."),
  },
  {
    id: "m-leaving", level: "mastery", situationId: "celebration", title: "Going home",
    setting: "The party ends late and Ìfẹ́ has to get home.",
    lines: [
      I("Ó ti pẹ́. Mo ní láti lọ sílé.", "It is late. I have to go home."),
      Q("Ó ti pẹ́ ní tòótọ́. Ṣé ọkọ̀ wà?", "It really is late. Is there transport?"),
      I("Ọkọ̀ wà, ṣùgbọ́n n kò tíì rí takisí.", "There is transport, but I have not found a taxi yet."),
      Q("Mo máa bá ọ dúró.", "I will wait with you."),
      I("Ẹ ṣé. Ẹ má pẹ́ lọ sílé o.", "Thank you. Do not be late going home."),
      Q("Ó dára. Kí o délé ní àlàáfíà.", "All right. May you get home in peace."),
      I("Àmín. Ó dàbọ̀.", "Amen. Goodbye."),
      Q("Ó dàbọ̀.", "Goodbye."),
    ],
    questions: [
      { prompt: "What has Ìfẹ́ not found yet?", choices: ["A taxi", "Her phone", "Her coat"], answer: "A taxi" },
      { prompt: "What does Àkàndé wish her?", choices: ["That she gets home safely", "A long life", "Wealth"], answer: "That she gets home safely" },
      { prompt: "What does Àkàndé offer to do?", choices: ["Wait with her", "Drive her home", "Call a taxi"], answer: "Wait with her" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Kí o délé ní àlàáfíà\" (dé + ilé joined) against Mastery 1 and 5, \"n kò tíì rí takisí\" against Mastery 6, \"Ẹ má pẹ́\" against Advanced 7, and \"Mo máa bá ọ dúró\"."),
  },
  {
    id: "b-whichbook", level: "beginner", situationId: "school", title: "Which book?",
    setting: "Rótìmí cannot find his book, and his teacher Fọláké helps him.",
    lines: [
      RO("Ẹ jọ̀ọ́, ìwé mi kò sí níbí.", "Please, my book is not here."),
      FO("Ìwé wo ni?", "Which book is it?"),
      RO("Ìwé Yorùbá mi.", "My Yoruba book."),
      FO("Èwo ni ìwé rẹ? Ṣé pupa ni?", "Which one is your book? Is it red?"),
      RO("Bẹ́ẹ̀ ni, pupa ni.", "Yes, it is red."),
      FO("Ó wà lórí tábìlì.", "It is on the table."),
      RO("Ẹ ṣé.", "Thank you."),
    ],
    questions: [
      { prompt: "What is Rótìmí looking for?", choices: ["His Yoruba book", "His English book", "His pen"], answer: "His Yoruba book" },
      { prompt: "What colour is the book?", choices: ["Red", "Blue", "Green"], answer: "Red" },
      { prompt: "Where is the book?", choices: ["On the table", "Under the table", "At home"], answer: "On the table" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Ìwé wo ni\" and \"Èwo ni ìwé rẹ\" against Beginner 9, \"kò sí níbí\" against Beginner 6 and \"lórí tábìlì\" against Beginner 7."),
  },
  {
    id: "b-whyabsent", level: "beginner", situationId: "school", title: "Why did you not come?",
    setting: "Fọláké asks Rótìmí why he was not at school.",
    lines: [
      FO("Rótìmí, kílódé tí o kò wá?", "Rótìmí, why did you not come?"),
      RO("Nítorí pé mo ń ṣiṣẹ́.", "Because I was working."),
      FO("Ṣé o fẹ́ ìwé mi?", "Do you want my book?"),
      RO("Bẹ́ẹ̀ ni. Ìwé wo ni?", "Yes. Which book?"),
      FO("Ìwé Gẹ̀ẹ́sì.", "The English book."),
      RO("Ẹ ṣé.", "Thank you."),
    ],
    questions: [
      { prompt: "Why was Rótìmí not at school?", choices: ["He was working", "He was sleeping", "He was sick"], answer: "He was working" },
      { prompt: "What does Fọláké offer him?", choices: ["Her book", "Her pen", "Her bread"], answer: "Her book" },
      { prompt: "Which book is it?", choices: ["The English book", "The Yoruba book", "The maths book"], answer: "The English book" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"kílódé tí o kò wá\" and \"Nítorí pé mo ń ṣiṣẹ́\" against Beginner 9, and \"Ṣé o fẹ́ ìwé mi\" against Beginner 8."),
  },
  {
    id: "b-gohome", level: "beginner", situationId: "school", title: "I want to go home",
    setting: "Rótìmí feels hungry in class and asks his teacher to let him go home.",
    lines: [
      RO("Ẹ jọ̀ọ́, mo fẹ́ lọ sílé.", "Please, I want to go home."),
      FO("Kílódé?", "Why?"),
      RO("Nítorí pé n kò jẹun.", "Because I have not eaten."),
      FO("Jókòó. Jẹ búrẹ́dì yìí.", "Sit down. Eat this bread."),
      RO("Ẹ ṣé. Ṣé omi wà?", "Thank you. Is there water?"),
      FO("Bẹ́ẹ̀ ni, omi wà.", "Yes, there is water."),
    ],
    questions: [
      { prompt: "What does Rótìmí want to do?", choices: ["Go home", "Play", "Read"], answer: "Go home" },
      { prompt: "Why does he want to go?", choices: ["He has not eaten", "He is tired", "He is late"], answer: "He has not eaten" },
      { prompt: "What does the teacher give him?", choices: ["Bread", "Rice", "Fish"], answer: "Bread" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Kílódé?\" against Beginner 9, \"Nítorí pé n kò jẹun\" (the n form before kò) against Beginner 2 and \"Ṣé omi wà\" against Beginner 6."),
  },
  {
    id: "i-phonedead", level: "intermediate", situationId: "phones", title: "My phone has run out",
    setting: "Làmídì's phone battery has run out, and his friend Dúpẹ́ helps him.",
    lines: [
      LA("Dúpẹ́, phone mi ti tán.", "Dúpẹ́, my phone has run out."),
      DU("Ṣé o ní charger?", "Do you have a charger?"),
      LA("Rárá, n kò ní charger.", "No, I do not have a charger."),
      DU("Mo ní ọ̀kan nílé mi.", "I have one at my house."),
      LA("Ṣé mo lè wá?", "Can I come?"),
      DU("Bẹ́ẹ̀ ni, jẹ́ ká lọ.", "Yes, let's go."),
      LA("Mo fẹ́ pe ìyá mi, ṣùgbọ́n phone mi ti tán.", "I want to call my mother, but my phone has run out."),
      DU("Ó dáa, o lè pe é nílé mi.", "It is fine, you can call her at my house."),
    ],
    questions: [
      { prompt: "What is wrong with Làmídì's phone?", choices: ["It has run out of battery", "It is lost", "It is broken"], answer: "It has run out of battery" },
      { prompt: "Where is Dúpẹ́'s charger?", choices: ["At her house", "In her bag", "At the office"], answer: "At her house" },
      { prompt: "Who does Làmídì want to call?", choices: ["His mother", "His father", "His friend"], answer: "His mother" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check the mixed English words (phone, charger) against Intermediate 12, \"phone mi ti tán\" against Intermediate 1 and 2, \"jẹ́ ká lọ\" against Intermediate 8 and \"Ṣé mo lè wá\" against Advanced 6."),
  },
  {
    id: "i-movie", level: "intermediate", situationId: "phones", title: "Let's watch a movie",
    setting: "Dúpẹ́ and Làmídì plan an evening in front of the screen.",
    lines: [
      DU("Làmídì, jẹ́ ká wo movie.", "Làmídì, let's watch a movie."),
      LA("Movie wo ni?", "Which movie?"),
      DU("Movie Yorùbá tuntun.", "A new Yoruba movie."),
      LA("Ṣé o ti ra data?", "Have you bought data?"),
      DU("Mo ti ra data díẹ̀.", "I have bought a little data."),
      LA("Jẹ́ kí n ra data púpọ̀.", "Let me buy a lot of data."),
      DU("Ó dára. Àwọn ọ̀rẹ́ wa ń wá.", "Good. Our friends are coming."),
      LA("Ó yá, jẹ́ ká wò ó.", "Okay, let's watch it."),
    ],
    questions: [
      { prompt: "What do they want to do?", choices: ["Watch a movie", "Play football", "Cook"], answer: "Watch a movie" },
      { prompt: "What does Làmídì ask Dúpẹ́?", choices: ["If she has bought data", "If she has eaten", "If she has a phone"], answer: "If she has bought data" },
      { prompt: "Who is coming?", choices: ["Their friends", "Their teacher", "Their mothers"], answer: "Their friends" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Movie wo ni\" and the mixed English words (movie, data) against Beginner 9 and Intermediate 12, \"jẹ́ ká wo\" and \"Jẹ́ kí n ra\" against Intermediate 8, \"data díẹ̀\" and \"data púpọ̀\" against Intermediate 10, and \"wò ó\" (watch it)."),
  },
  {
    id: "i-helpbags", level: "intermediate", situationId: "phones", title: "Let me help you",
    setting: "Dúpẹ́ sees Làmídì with a lot of bags and offers to help.",
    lines: [
      DU("Làmídì, jẹ́ kí n ràn ọ́ lọ́wọ́.", "Làmídì, let me help you."),
      LA("Ẹ ṣé. Mo ní àpò púpọ̀.", "Thank you. I have many bags."),
      DU("Àpò wo ni mo máa gbé?", "Which bag shall I carry?"),
      LA("Gbé àpò pupa yẹn.", "Carry that red bag."),
      DU("Ṣé gbogbo àwọn àpò yìí ni tìrẹ?", "Are all these bags yours?"),
      LA("Rárá, díẹ̀ ni tèmi.", "No, only a few are mine."),
      DU("Ó yá. Jẹ́ ká lọ.", "Okay. Let's go."),
      LA("Ẹ ṣé o.", "Thank you."),
    ],
    questions: [
      { prompt: "What does Dúpẹ́ offer to do?", choices: ["Help carry the bags", "Buy a bag", "Call a taxi"], answer: "Help carry the bags" },
      { prompt: "Which bag does she carry?", choices: ["The red one", "The big one", "The new one"], answer: "The red one" },
      { prompt: "Are all the bags Làmídì's?", choices: ["No, only a few", "Yes, all of them", "None of them"], answer: "No, only a few" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"jẹ́ kí n ràn ọ́ lọ́wọ́\" against Intermediate 8, \"Àpò wo ni\" against Beginner 9, \"gbogbo àwọn àpò\" and \"díẹ̀ ni tèmi\" against Intermediate 10, and \"tìrẹ\" and \"tèmi\" against Intermediate 2."),
  },
  {
    id: "m-letsgo", level: "mastery", situationId: "hangingout", title: "Okay, let's go",
    setting: "Two friends decide to eat before they go out.",
    lines: [
      SE("Ìbùkún, ṣé o ti jẹun?", "Ìbùkún, have you eaten?"),
      BU("Rárá, n kò tíì jẹun.", "No, I have not eaten yet."),
      SE("Ó yá, jẹ́ ká jẹun, ká sì lọ.", "Okay, let's eat and then go."),
      BU("Kò sí wàhálà. Mo fẹ́ jẹ ẹja, ṣé o gbọ́?", "No problem. I want to eat fish, you hear?"),
      SE("Ṣebí o kò fẹ́ràn ẹja?", "Don't you dislike fish?"),
      BU("Mo fẹ́ràn rẹ̀ báyìí o.", "I like it now o."),
      SE("Ó dáa. Èmi náà fẹ́ jẹ ẹja.", "Fine. I want to eat fish too."),
      BU("Ó yá o. Jẹ́ ká lọ.", "Okay o. Let's go."),
    ],
    questions: [
      { prompt: "Has Ìbùkún eaten?", choices: ["Not yet", "Yes", "She does not say"], answer: "Not yet" },
      { prompt: "What does she want to eat?", choices: ["Fish", "Rice", "Bread"], answer: "Fish" },
      { prompt: "Who else wants fish?", choices: ["Ṣèyí", "Nobody", "Her mother"], answer: "Ṣèyí" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check the casual phrases \"Ó yá\", \"Kò sí wàhálà\", \"ṣé o gbọ́\", \"Ṣebí\" and the closing o against Mastery 8, \"n kò tíì jẹun\" against Mastery 6 and \"Èmi náà\" against Advanced 8."),
  },
  {
    id: "m-maybe", level: "mastery", situationId: "hangingout", title: "Maybe it will rain",
    setting: "The friends plan to meet tomorrow, but the weather is uncertain.",
    lines: [
      BU("Ṣèyí, ṣé o máa wá lọ́la?", "Ṣèyí, will you come tomorrow?"),
      SE("Bóyá. Bóyá òjò máa rọ̀.", "Maybe. Maybe it will rain."),
      BU("Òjò? N kò mọ̀ bóyá ó máa rọ̀.", "Rain? I do not know whether it will rain."),
      SE("Bí òjò bá rọ̀, n kò lè wá.", "If it rains, I cannot come."),
      BU("Ìbá ṣe pé a ní ọkọ̀.", "If only we had a car."),
      SE("Bẹ́ẹ̀ ni. Ṣé o mọ̀ bóyá ọkọ̀ wà?", "Yes. Do you know whether there is transport?"),
      BU("N kò mọ̀. Bóyá ó wà.", "I do not know. Maybe there is."),
      SE("Ó yá. A máa rí lọ́la.", "Okay. We will see tomorrow."),
    ],
    questions: [
      { prompt: "What might happen tomorrow?", choices: ["It might rain", "It might be sunny", "There might be no school"], answer: "It might rain" },
      { prompt: "What does Ìbùkún wish they had?", choices: ["A car", "A phone", "A house"], answer: "A car" },
      { prompt: "What do they decide?", choices: ["To see tomorrow", "To cancel", "To go today"], answer: "To see tomorrow" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"Bóyá\", \"N kò mọ̀ bóyá\" and \"Ìbá ṣe pé\" against Mastery 7 (the most doubtful forms in the course), \"Bí òjò bá rọ̀\" against Mastery 3 and \"n kò lè wá\" against Advanced 6."),
  },
  {
    id: "m-leftearly", level: "mastery", situationId: "hangingout", title: "Gone without a word",
    setting: "A friend left the party without telling anyone.",
    lines: [
      BU("Ṣèyí, Dayọ̀ ti lọ.", "Ṣèyí, Dayọ̀ has gone."),
      SE("Ó lọ láì sọ̀rọ̀?", "He left without speaking?"),
      BU("Bẹ́ẹ̀ ni. Ó tún lọ láì jẹun.", "Yes. He left again without eating."),
      SE("Bóyá ó ń ṣiṣẹ́.", "Maybe he is working."),
      BU("Bóyá. Ṣùgbọ́n kò tíì pe mí.", "Maybe. But he has not called me yet."),
      SE("Kò sí wàhálà. Ó máa pe ọ́.", "No problem. He will call you."),
      BU("Ìbá ṣe pé ó pe mi báyìí.", "If only he called me now."),
      SE("Ó yá. Èmi náà máa pe é.", "Okay. I will call him too."),
    ],
    questions: [
      { prompt: "What did Dayọ̀ do?", choices: ["Left without saying anything", "Stayed late", "Brought food"], answer: "Left without saying anything" },
      { prompt: "What does Ṣèyí think Dayọ̀ might be doing?", choices: ["Working", "Sleeping", "Travelling"], answer: "Working" },
      { prompt: "What will Ṣèyí do?", choices: ["Call Dayọ̀ too", "Wait at home", "Go to bed"], answer: "Call Dayọ̀ too" },
    ],
    source: SOURCE, confidence: "needs-review",
    note: note("Check \"láì sọ̀rọ̀\" and \"láì jẹun\" against Advanced 9, \"tún lọ\" against Advanced 8, \"kò tíì pe mí\" against Mastery 6 and \"Ìbá ṣe pé\" against Mastery 7."),
  },
];
