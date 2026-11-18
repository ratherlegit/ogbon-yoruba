import type { LevelId } from "../types";
import type { VocabPos, VocabTopic, VocabWord } from "./types";

// More vocab topics, three per level (four in Mastery). Each topic has ten words, and each example sentence carries a
// detail that only its own word fits, so a sibling word from the same topic cannot truthfully
// complete the blank. All of the Yoruba, the tone marks and the sentences are the author's own
// knowledge with no dictionary entry checked, so every word is needs-review.

type Row = [slug: string, yoruba: string, english: string, pos: VocabPos, sentenceYoruba: string, sentenceEnglish: string, extraNote?: string, blank?: string];

const BASE_NOTE = "From the model's own knowledge; confirm the tones. Sentence drafted by the model.";

function topic(id: string, level: LevelId, title: string, blurb: string, rows: Row[]): VocabTopic {
  const words: VocabWord[] = rows.map(([slug, yoruba, english, pos, sy, se, extra, blank]) => ({
    id: `${id}-${slug}`,
    yoruba,
    english,
    pos,
    sentence: blank ? { yoruba: sy, english: se, blank } : { yoruba: sy, english: se },
    confidence: "needs-review",
    note: extra ? `${BASE_NOTE} ${extra}` : BASE_NOTE,
  }));
  return {
    id,
    level,
    title,
    blurb,
    sources: [
      "The model's own knowledge for the words, the tone marks and all ten example sentences. No dictionary entry or published source was checked for this topic. Every word needs a native speaker's check.",
    ],
    words,
  };
}

export const moreGettingStarted: VocabTopic[] = [
  topic("gs-objects", "getting-started", "Everyday objects", "Things you carry, look at and use every day.", [
    ["iwe", "ìwé", "book", "noun", "Mo ń kà ìwé ní alẹ́.", "I am reading a book at night."],
    ["apo", "àpò", "bag", "noun", "Mo gbé àpò lé èjìká mi.", "I carry a bag on my shoulder.", "Confirm gbé ... lé èjìká (carry on the shoulder)."],
    ["owo", "owó", "money", "noun", "Mo ná owó ní ọjà.", "I spent money at the market."],
    ["foonu", "fóònù", "phone", "noun", "Mo fi fóònù pe ìyá mi.", "I called my mother with a phone.", "A loanword; confirm the spelling and tones."],
    ["aago", "aago", "clock, watch", "noun", "Mo wo aago, ó ti pé agogo mẹ́jọ.", "I looked at the clock, it is eight o'clock.", "Confirm aago against agogo (bell, hour) and whether pé agogo mẹ́jọ is the natural way to give the time."],
    ["apoti", "àpótí", "box", "noun", "Mo kó aṣọ sínú àpótí tí ó ní ìdérí.", "I put clothes in a box that has a lid.", "Confirm ìdérí (lid)."],
    ["digi", "dígí", "mirror", "noun", "Mo wo ojú mi nínú dígí.", "I looked at my face in a mirror."],
    ["ileke", "ìlẹ̀kẹ̀", "beads", "noun", "Ó fi ìlẹ̀kẹ̀ sí ọrùn rẹ̀.", "She put beads around her neck."],
    ["agboorun", "agboòrùn", "umbrella", "noun", "Mo ṣí agboòrùn nítorí òjò ń rọ̀.", "I opened an umbrella because it is raining.", "Confirm the tones on agboòrùn."],
    ["opa", "ọ̀pá", "stick, cane", "noun", "Àgbàlagbà náà fi ọ̀pá rìn.", "The elder walks with a stick."],
  ]),
  topic("gs-house", "getting-started", "Around the house and yard", "The parts of a house and compound that you see and use.", [
    ["ogiri", "ògiri", "wall", "noun", "Mo kan àwòrán mọ́ ògiri.", "I hung a picture on the wall."],
    ["enu-ona", "ẹnu ọ̀nà", "gate, entrance", "noun", "Ẹnu ọ̀nà ilé wa ṣí sílẹ̀.", "The gate of our house is open.", "Written as two words; confirm."],
    ["ogba", "ọgbà", "garden", "noun", "Mo gbin òdòdó sínú ọgbà.", "I planted flowers in the garden."],
    ["kanga", "kànga", "well", "noun", "Mo fa omi láti inú kànga.", "I drew water from the well."],
    ["atupa", "àtùpà", "lamp", "noun", "Mo tan àtùpà nítorí òkùnkùn ti ṣú.", "I lit the lamp because it has become dark."],
    ["akaba", "àkàbà", "ladder", "noun", "Mo fi àkàbà gun orí ilé.", "I climbed onto the roof with a ladder."],
    ["pepe", "pẹpẹ", "shelf", "noun", "Mo gbé ìwé lé orí pẹpẹ.", "I put the book on the shelf."],
    ["opo", "òpó", "pole, pillar", "noun", "Òpó iná ṣubú nítorí ẹ̀fúùfù líle.", "The electricity pole fell because of a strong wind.", "Confirm òpó iná (electricity pole)."],
    ["agbala", "àgbàlá", "compound, yard", "noun", "Gbogbo ìdílé péjọ sí àgbàlá lálẹ́.", "The whole family gathered in the compound at night."],
    ["pataki", "pátákó", "board", "noun", "Olùkọ́ kọ ọ̀rọ̀ sórí pátákó.", "The teacher wrote words on the board."],
  ]),
  topic("gs-food2", "getting-started", "More food and drink", "Drinks, sauces and snacks to add to the first food topic.", [
    ["wara", "wàrà", "milk", "noun", "Ọmọ ọwọ́ náà mu wàrà ìyá rẹ̀.", "The baby drank its mother's milk."],
    ["tii", "tíì", "tea", "noun", "Mo ṣe tíì gbígbóná fún àlejò.", "I made hot tea for the guest."],
    ["suga", "ṣúgà", "sugar", "noun", "Mo fi ṣúgà sí ohun mímu mi kí ó dùn.", "I put sugar in my drink so it is sweet."],
    ["ata", "ata", "pepper", "noun", "Ata yìí gbóná débi pé ojú mi pọ́n.", "This pepper is so hot that my eyes burn.", "Confirm pọ́n for burning eyes."],
    ["epo", "epo", "oil", "noun", "Mo dín ẹyin nínú epo.", "I fried an egg in oil."],
    ["obe", "ọbẹ̀", "stew, soup", "noun", "Ìyá mi sè ọbẹ̀ ẹ̀fọ́ fún wa.", "My mother cooked vegetable stew for us.", "Do not confuse ọbẹ̀ (stew) with ọbẹ (knife)."],
    ["akara", "àkàrà", "bean cake", "noun", "Mo ra àkàrà tí a fi ẹ̀wà ṣe.", "I bought bean cake made from beans."],
    ["dodo", "dòdò", "fried plantain", "noun", "Dòdò ni wọ́n dín láti inú ọ̀gẹ̀dẹ̀ tí ó pọ́n.", "Dodo is what they fry from ripe plantain."],
    ["eba", "ẹ̀bà", "eba (cooked garri)", "noun", "Mo ń jẹ ẹ̀bà tí a fi gaàrí ṣe.", "I am eating eba, which is made from garri.", "Confirm the spelling of gaàrí."],
    ["ogi", "ògì", "pap", "noun", "Ìyá mi ń sè ògì fún ọmọ ọwọ́ ní àárọ̀.", "My mother cooks pap for the baby in the morning."],
  ]),
];

export const moreBeginner: VocabTopic[] = [
  topic("b-days", "beginner", "Days of the week and times of day", "The seven days and three more parts of the day.", [
    ["aje", "Ọjọ́ Ajé", "Monday", "noun", "Ọjọ́ Ajé ni ọjọ́ tí a ń bẹ̀rẹ̀ iṣẹ́ ní ọ̀sẹ̀.", "Monday is the day we start work in the week.", "Confirm that the week starts here in the sentence."],
    ["isegun", "Ọjọ́ Ìṣẹ́gun", "Tuesday", "noun", "Ọjọ́ Ìṣẹ́gun ni ọjọ́ tí ó tẹ̀lé Ọjọ́ Ajé.", "Tuesday is the day after Monday."],
    ["joru", "Ọjọ́rú", "Wednesday", "noun", "Ọjọ́rú wà láàrin Ọjọ́ Ìṣẹ́gun àti Ọjọ́bọ̀.", "Wednesday is between Tuesday and Thursday."],
    ["jobo", "Ọjọ́bọ̀", "Thursday", "noun", "Ọjọ́bọ̀ ni ọjọ́ tí ó wà ṣáájú Ọjọ́ Ẹtì.", "Thursday is the day before Friday."],
    ["eti", "Ọjọ́ Ẹtì", "Friday", "noun", "Ní Ọjọ́ Ẹtì, àwọn Mùsùlùmí ń lọ sí mọ́sálásí.", "On Friday, Muslims go to the mosque."],
    ["abameta", "Ọjọ́ Àbámẹ́ta", "Saturday", "noun", "Ọjọ́ Àbámẹ́ta ni ọjọ́ tí ó kẹ́yìn ọ̀sẹ̀.", "Saturday is the last day of the week."],
    ["aiku", "Ọjọ́ Àìkú", "Sunday", "noun", "Ní Ọjọ́ Àìkú, àwọn Kristẹni ń lọ sí ṣọ́ọ̀ṣì.", "On Sunday, Christians go to church."],
    ["osan", "ọ̀sán", "midday, afternoon", "noun", "Mo jẹun ní ọ̀sán nígbà tí oòrùn gbóná jù.", "I eat at midday when the sun is hottest."],
    ["irole", "ìrọ̀lẹ́", "evening", "noun", "Ní ìrọ̀lẹ́, oòrùn ń wọ̀.", "In the evening, the sun is setting."],
    ["oganjo", "ọ̀gànjọ́", "midnight", "noun", "Ní ọ̀gànjọ́, gbogbo ilé ti dákẹ́.", "At midnight, all the houses have gone quiet."],
  ]),
  topic("b-animals2", "beginner", "More animals", "Birds, insects and other creatures to add to the first animals topic.", [
    ["eye", "ẹyẹ", "bird", "noun", "Ẹyẹ náà fò lọ sórí igi.", "The bird flew onto the tree."],
    ["eku", "eku", "mouse, rat", "noun", "Ológbò ń le eku kiri ilé.", "The cat is chasing a mouse around the house.", "Confirm le ... kiri (chase around)."],
    ["ijapa", "ìjàpá", "tortoise", "noun", "Ìjàpá ń rìn lọ́ra, ó sì ní ikarahun.", "The tortoise walks slowly and has a shell."],
    ["kinniun", "kìnnìún", "lion", "noun", "Kìnnìún ni ọba igbó.", "The lion is the king of the forest."],
    ["ekun", "ẹkùn", "leopard", "noun", "Ẹkùn ní àmì dúdú lára.", "The leopard has black marks on its body."],
    ["elede", "ẹlẹ́dẹ̀", "pig", "noun", "Ẹlẹ́dẹ̀ ń yí nínú ẹrẹ̀.", "The pig is rolling in the mud."],
    ["efon", "ẹfọn", "mosquito", "noun", "Ẹfọn ta mí lára lálẹ́.", "A mosquito bit me at night."],
    ["okere", "ọ̀kẹ́rẹ́", "squirrel", "noun", "Ọ̀kẹ́rẹ́ ń gun igi láti kó èso.", "The squirrel is climbing the tree to gather fruit."],
    ["opolo", "ọ̀pọ̀lọ́", "frog", "noun", "Ọ̀pọ̀lọ́ fò sínú odò, ó sì ń kọrin lálẹ́.", "The frog jumped into the river and sings at night."],
    ["alantakun", "aláǹtakùn", "spider", "noun", "Aláǹtakùn hun ìkọ́ rẹ̀ sí igun ògiri.", "The spider spun its web in the corner of the wall.", "Confirm ìkọ́ for a web and the tones on aláǹtakùn."],
  ]),
  topic("b-fruit", "beginner", "Fruits and vegetables", "Fruits, vegetables and crops you buy at the market.", [
    ["osan", "ọsàn", "orange", "noun", "Mo fa ọsàn pa, mo sì mu omi rẹ̀.", "I squeezed an orange and drank its juice.", "Confirm fa ... pa (squeeze)."],
    ["ogede", "ọ̀gẹ̀dẹ̀", "banana", "noun", "Ọ̀gẹ̀dẹ̀ gígùn, ó sì ní èpo tí a ń bó.", "A banana is long and has a skin that we peel."],
    ["mangoro", "mángòrò", "mango", "noun", "Mángòrò ní kóró ńlá nínú.", "A mango has a big seed inside."],
    ["tomati", "tòmátì", "tomato", "noun", "Mo fi tòmátì ṣe ọbẹ̀ pupa.", "I used tomatoes to make red stew.", "A loanword; confirm the tones."],
    ["alubosa", "àlùbọ́sà", "onion", "noun", "Àlùbọ́sà mú mi sunkún nígbà tí mo gé e.", "The onion made me cry when I cut it."],
    ["efo", "ẹ̀fọ́", "leafy vegetables", "noun", "Ẹ̀fọ́ jẹ́ ewé tútù tí a fi ń sè ọbẹ̀.", "Efo is fresh leaves used to cook stew."],
    ["egusi", "ẹ̀gúsí", "melon seeds", "noun", "Mo lọ ẹ̀gúsí fún ọbẹ̀.", "I ground melon seeds for the soup."],
    ["epa", "ẹ̀pà", "groundnut, peanut", "noun", "Wọ́n fi ẹ̀pà ṣe òróró.", "They made oil from groundnuts.", "Confirm òróró for oil made from nuts."],
    ["agbado", "àgbàdo", "maize, corn", "noun", "Mo sun àgbàdo, mo sì fi iyọ̀ sí i.", "I roasted maize and put salt on it."],
    ["odunkun", "ọ̀dùnkún", "sweet potato", "noun", "Ọ̀dùnkún hù sínú ilẹ̀, a sì ń gbẹ́ e jáde.", "Sweet potato grows in the soil and we dig it out.", "Confirm whether ọ̀dùnkún is sweet potato or potato."],
  ]),
];

export const moreIntermediate: VocabTopic[] = [
  topic("i-kitchen", "intermediate", "Cooking and the kitchen", "Cooking verbs and the things you cook and eat with.", [
    ["ile-idana", "ilé ìdáná", "kitchen", "noun", "Ìyá mi wà ní ilé ìdáná, ó ń ṣe oúnjẹ.", "My mother is in the kitchen, making food."],
    ["ina", "iná", "fire", "noun", "Mo fi igi dá iná.", "I made a fire with wood."],
    ["se", "sè", "cook, boil", "verb", "Mo máa sè ìrẹsì fún ìdílé.", "I will cook rice for the family.", "Confirm sè for boiling rice."],
    ["din", "dín", "fry", "verb", "Mo dín ẹyin nínú epo gbígbóná.", "I fried an egg in hot oil."],
    ["yan", "yan", "bake, roast", "verb", "Ó yan búrẹ́dì nínú ààrò.", "She baked bread in an oven.", "Confirm ààrò for an oven or hearth."],
    ["sibi", "ṣíbí", "spoon", "noun", "Mo fi ṣíbí jẹ ìrẹsì.", "I ate rice with a spoon."],
    ["awo", "àwo", "plate", "noun", "Mo gbé oúnjẹ sórí àwo.", "I put food on a plate."],
    ["ife", "ife", "cup", "noun", "Mo mu omi nínú ife.", "I drank water from a cup."],
    ["iyefun", "ìyẹ̀fun", "flour", "noun", "A fi ìyẹ̀fun ṣe búrẹ́dì.", "We made bread from flour."],
    ["fo", "fọ̀", "wash (things)", "verb", "Mo fọ̀ ìkòkò lẹ́yìn oúnjẹ.", "I washed the pot after the meal.", "Not wẹ̀ (bathe), which is in the Advanced verbs topic."],
  ]),
  topic("i-sport", "intermediate", "Play and sport", "Games, sport, stories and pictures.", [
    ["sere", "ṣeré", "play", "verb", "Àwọn ọmọ ń ṣeré ní àgbàlá.", "The children are playing in the compound."],
    ["idaraya", "ìdárayá", "exercise, sport", "noun", "Mo ń ṣe ìdárayá ní òwúrọ̀ kí ara mi lè le.", "I exercise in the morning so my body can be strong."],
    ["idije", "ìdíje", "competition", "noun", "Wọ́n ṣe ìdíje láti mọ ẹni tí yóò borí.", "They held a competition to find out who will win."],
    ["egbe", "ẹgbẹ́", "team, group", "noun", "Mo wà nínú ẹgbẹ́ tí ó ní ènìyàn mọ́kànlá.", "I am on a team of eleven people."],
    ["itan", "ìtàn", "story", "noun", "Bàbá àgbà ń sọ ìtàn fún wa lálẹ́.", "Grandfather tells us a story at night."],
    ["aworan", "àwòrán", "picture", "noun", "Mo fi àwòrán ìdílé wa hàn ọ́.", "I showed you our family picture."],
    ["yaworan", "yàwòrán", "draw", "verb", "Mo fẹ́ yàwòrán ẹyẹ lórí bébà.", "I want to draw a bird on paper.", "Written as one word; confirm."],
    ["ayo", "ayò", "ayo (a board game)", "noun", "Àwọn àgbà ń ṣe ayò lábẹ́ igi.", "The elders are playing ayo under a tree.", "Confirm the tone of ayò."],
    ["luwee", "lúwẹ̀ẹ́", "swim", "verb", "Mo lúwẹ̀ẹ́ nínú odò.", "I swam in the river."],
    ["bolu", "bọ́ọ̀lù àfẹsẹ̀gbá", "football", "noun", "Wọ́n ń gbá bọ́ọ̀lù àfẹsẹ̀gbá lórí pápá.", "They are playing football on the field.", "Confirm the full phrase for football."],
  ]),
  topic("i-transport", "intermediate", "Transport", "Vehicles and the things and people around them.", [
    ["boosi", "bọ́ọ̀sì", "bus", "noun", "Bọ́ọ̀sì ńlá tí ó ń gbé ogún èèyàn dúró níbẹ̀.", "A big bus that carries twenty people is standing there.", "A loanword; confirm the tones."],
    ["takisi", "takisí", "taxi", "noun", "Mo gbé takisí kan tí ó gbé mi nìkan lọ sílé.", "I took a taxi that carried me home alone.", "A loanword; confirm the tones."],
    ["keke", "kẹ̀kẹ́", "bicycle", "noun", "Mo fi ẹsẹ̀ tẹ kẹ̀kẹ́ lọ sí ilé-ìwé.", "I pedalled a bicycle to school."],
    ["alupupu", "alùpùpù", "motorcycle", "noun", "Alùpùpù ní tàyà méjì àti ẹ̀rọ.", "A motorcycle has two wheels and an engine.", "Confirm tàyà (wheel, tyre)."],
    ["oko-ofurufu", "ọkọ̀ òfurufú", "aeroplane", "noun", "Ọkọ̀ òfurufú ń fò lójú ọ̀run.", "An aeroplane flies in the sky."],
    ["oko-oju-irin", "ọkọ̀ ojú irin", "train", "noun", "Ọkọ̀ ojú irin ń rìn lórí ọ̀nà irin.", "A train runs on the railway."],
    ["oko-oju-omi", "ọkọ̀ ojú omi", "ship, boat", "noun", "Ọkọ̀ ojú omi ń lọ lójú òkun.", "A ship goes on the sea."],
    ["tikeeti", "tikẹ́ẹ̀tì", "ticket", "noun", "Mo ra tikẹ́ẹ̀tì kí n tó wọ ọkọ̀.", "I bought a ticket before I entered the vehicle.", "A loanword; confirm the spelling and tones."],
    ["awako", "awakọ̀", "driver", "noun", "Awakọ̀ náà wa ọkọ̀ pẹ̀lú ìṣọ́ra.", "The driver drove the vehicle with care."],
    ["papako", "pápákọ̀ òfurufú", "airport", "noun", "Mo dé pápákọ̀ òfurufú ní kùtùkùtù.", "I arrived at the airport early."],
  ]),
];

export const moreAdvanced: VocabTopic[] = [
  topic("a-tech", "advanced", "Phones and technology", "Computers, the internet, messages and machines.", [
    ["konputa", "kọ̀ǹpútà", "computer", "noun", "Mo ń lo kọ̀ǹpútà láti kọ ìwé.", "I use a computer to write a document.", "A loanword; confirm the spelling and tones."],
    ["ayelujara", "ayélujára", "the internet", "noun", "Mo rí ìròyìn yìí lórí ayélujára.", "I found this news on the internet."],
    ["ranse", "ránṣẹ́", "send word, send a message", "verb", "Mo fẹ́ ránṣẹ́ sí ọ̀rẹ́ mi kí ó mọ̀ pé mo ti dé.", "I want to send word to my friend so he knows that I have arrived."],
    ["iranse", "ìránṣẹ́", "message, messenger", "noun", "Mo gba ìránṣẹ́ kan lọ́wọ́ rẹ̀ lónìí.", "I received a message from him today."],
    ["redio", "rédíò", "radio", "noun", "Mo ń gbọ́ orin lórí rédíò.", "I am listening to music on the radio.", "A loanword; confirm the tones."],
    ["telifisonu", "tẹlifíṣọ̀n", "television", "noun", "Mo ń wo eré lórí tẹlifíṣọ̀n.", "I am watching a show on television.", "A loanword; confirm the spelling and tones."],
    ["ero", "ẹ̀rọ", "machine", "noun", "Wọ́n fi ẹ̀rọ ṣe iṣẹ́ ńlá yìí dípò ọwọ́.", "They did this big job with a machine instead of by hand."],
    ["batiri", "bátìrì", "battery", "noun", "Bátìrì fóònù mi ti tán.", "My phone's battery has run out.", "A loanword; confirm the tones."],
    ["kamera", "kàmẹ́rà", "camera", "noun", "Mo yà àwòrán pẹ̀lú kàmẹ́rà tuntun.", "I took a picture with a new camera.", "A loanword; confirm the spelling and tones."],
    ["botinni", "bọ́tìnnì", "button", "noun", "Tẹ bọ́tìnnì pupa yìí.", "Press this red button.", "A loanword; confirm the spelling and tones."],
  ]),
  topic("a-festivals", "advanced", "Celebrations and ceremonies", "Parties, feasts and the days people gather to mark.", [
    ["ayeye", "ayẹyẹ", "celebration", "noun", "Ayẹyẹ ọdún yìí kún fún ayọ̀ àti ijó.", "This festival celebration is full of joy and dancing."],
    ["ase", "àsè", "feast", "noun", "A ṣe àsè ńlá, a sì pa màlúù.", "We held a big feast and killed a cow."],
    ["ebun", "ẹ̀bùn", "gift", "noun", "Mo fún ọ ní ẹ̀bùn tí a fi bébà dì.", "I gave you a gift wrapped in paper."],
    ["ilu", "ìlù", "drum", "noun", "Onílù ń lu ìlù, àwọn èèyàn sì ń jó.", "The drummer is beating a drum, and people are dancing.", "Do not confuse ìlù (drum) with ìlú (town)."],
    ["ojo-ibi", "ọjọ́ ìbí", "birthday", "noun", "Ọjọ́ ìbí mi ni ọjọ́ tí a bí mi.", "My birthday is the day I was born."],
    ["isinku", "ìsìnkú", "funeral", "noun", "Ọ̀pọ̀ èèyàn péjọ sí ìsìnkú àgbàlagbà náà.", "Many people gathered at the elder's funeral."],
    ["oko-iyawo", "ọkọ ìyàwó", "groom", "noun", "Ọkọ ìyàwó dúró lẹ́gbẹ̀ẹ́ ìyàwó rẹ̀.", "The groom stood beside his bride."],
    ["aso-ibile", "aṣọ ìbílẹ̀", "traditional clothes", "noun", "Wọ́n wọ aṣọ ìbílẹ̀ ní ọjọ́ ọdún.", "They wore traditional clothes on the festival day."],
    ["kerisimesi", "ọdún kérésìmesì", "Christmas", "noun", "Ní ọdún kérésìmesì, àwọn Kristẹni ń rántí ìbí Jésù.", "At Christmas, Christians remember the birth of Jesus.", "Confirm the spelling and tones of kérésìmesì."],
    ["ileya", "ọdún ìléyá", "Eid al-Adha", "noun", "Wọ́n pa àgbò ní ọdún ìléyá.", "They slaughtered a ram at Eid al-Adha.", "Confirm the spelling and tones of ìléyá."],
  ]),
  topic("a-trades", "advanced", "Farming and trades", "Working the land and the craftspeople of a town.", [
    ["oko", "oko", "farm", "noun", "Bàbá mi ń ṣiṣẹ́ ní oko lójoojúmọ́.", "My father works on the farm every day."],
    ["ile", "ilẹ̀", "soil, land", "noun", "Òjò rọ̀ títí tí ilẹ̀ fi tutù.", "It rained until the ground became wet."],
    ["irugbin", "irúgbìn", "seed", "noun", "Irúgbìn kékeré lè di igi ńlá.", "A small seed can become a big tree."],
    ["gbin", "gbìn", "plant", "verb", "Mo gbìn àgbàdo ní oṣù kẹta.", "I planted maize in the third month.", "Confirm oṣù kẹta for the third month."],
    ["kore", "kórè", "harvest", "verb", "A kórè ẹ̀wà ní òpin ọdún.", "We harvested beans at the end of the year."],
    ["alagbede", "alágbẹ̀dẹ", "blacksmith", "noun", "Alágbẹ̀dẹ fi irin ṣe ọkọ́ fún àgbẹ̀.", "The blacksmith made a hoe from iron for the farmer.", "Confirm ọkọ́ (hoe)."],
    ["agbegilere", "agbẹ́gilére", "carver", "noun", "Agbẹ́gilére gbẹ́ ère láti inú igi.", "The carver carved a statue from wood.", "Confirm the tones on agbẹ́gilére and ère."],
    ["onidiri", "onídìrí", "hairdresser", "noun", "Onídìrí hun irun ọmọbìnrin náà.", "The hairdresser plaited the girl's hair.", "Confirm hun irun (plait hair)."],
    ["telo", "télọ̀", "tailor", "noun", "Télọ̀ gé aṣọ, ó sì rán ṣòkòtò fún mi.", "The tailor cut cloth and sewed trousers for me.", "A loanword; confirm the tones."],
    ["ode", "ọdẹ", "hunter", "noun", "Ọdẹ gbé ìbọn lọ sí igbó láti pa ẹran.", "The hunter carried a gun to the forest to kill game."],
  ]),
];

export const moreMastery: VocabTopic[] = [
  topic("m-titles", "mastery", "Titles and leaders", "Traditional rulers and the people who lead a community or a country.", [
    ["alaafin", "Aláàfin", "Aláàfin (king of Oyo)", "noun", "Aláàfin jókòó lórí ìtẹ́ ní ààfin Ọ̀yọ́.", "The Aláàfin sits on the throne in the palace at Oyo."],
    ["ooni", "Ọ̀ọ̀ni", "Ọ̀ọ̀ni (king of Ife)", "noun", "Ọ̀ọ̀ni ni ọba tí ó wà ní Ilé-Ifẹ̀.", "The Ọ̀ọ̀ni is the king who is in Ile-Ife."],
    ["baale", "báálẹ̀", "village head", "noun", "Báálẹ̀ ni olórí abúlé wa.", "The báálẹ̀ is the head of our village."],
    ["iyalode", "ìyálóde", "Ìyálóde (women's leader)", "noun", "Ìyálóde ni olórí àwọn obìnrin ní ìlú.", "The Ìyálóde is the leader of the women in the town."],
    ["babalawo", "babaláwo", "Ifá priest, diviner", "noun", "Babaláwo ń ṣe ìwádìí Ifá fún olùbẹ̀wò.", "The babalawo is consulting Ifá for a visitor.", "Confirm ìwádìí Ifá (consulting Ifá)."],
    ["omo-oba", "ọmọ ọba", "prince", "noun", "Ọmọ ọba ni yóò jọba lẹ́yìn bàbá rẹ̀.", "The prince is the one who will rule after his father."],
    ["ayaba", "ayaba", "queen", "noun", "Ayaba ni ìyàwó ọba.", "The queen is the wife of the king."],
    ["aare", "ààrẹ", "president", "noun", "Ààrẹ orílẹ̀-èdè ń bá àwọn ará ìlú sọ̀rọ̀.", "The president of the country is speaking to the citizens."],
    ["ojogbon", "ọ̀jọ̀gbọ́n", "professor", "noun", "Ọ̀jọ̀gbọ́n ń kọ́ni ní yunifásítì.", "The professor teaches at the university.", "A loanword in yunifásítì; confirm the spelling and tones."],
    ["alakoso", "alákòóso", "manager, administrator", "noun", "Alákòóso ilé-iṣẹ́ náà ń pín iṣẹ́ fún àwọn òṣìṣẹ́.", "The manager of the company is assigning work to the workers.", "Confirm òṣìṣẹ́ (worker)."],
  ]),
  topic("m-blessings", "mastery", "Blessings and honour", "The words behind good wishes, prayers and praise.", [
    ["ibukun", "ìbùkún", "blessing", "noun", "Mo gba ìbùkún lọ́wọ́ àgbàlagbà náà.", "I received a blessing from the elder."],
    ["oore", "oore", "favour, kindness", "noun", "Ó ṣe oore fún mi nígbà tí mo wà nínú ìṣòro.", "He did me a favour when I was in trouble."],
    ["ire", "ire", "good fortune", "noun", "Ire ń bẹ nílé, kò sí ibi.", "There is good fortune at home, there is no evil.", "Confirm ń bẹ (is present) and ibi (evil)."],
    ["emi", "ẹ̀mí", "life, spirit", "noun", "Ọlọ́run fún wa ní ẹ̀mí gígùn.", "God gave us a long life."],
    ["oro", "ọrọ̀", "wealth", "noun", "Ọrọ̀ ni owó àti ohun ìní tí ó pọ̀.", "Wealth is much money and many possessions.", "Do not confuse ọrọ̀ (wealth) with ọ̀rọ̀ (word)."],
    ["ogo", "ògo", "glory", "noun", "Ògo ni fún Ọlọ́run lókè.", "Glory be to God above."],
    ["iyin", "ìyìn", "praise", "noun", "A kọ orin ìyìn sí Ọlọ́run.", "We sang a song of praise to God."],
    ["ade", "adé", "crown", "noun", "Ọba dé adé sí orí.", "The king put a crown on his head."],
    ["ola", "ọlá", "honour", "noun", "Ọlá ni fún ẹni tí ó bọ̀wọ̀ fún àgbà.", "Honour is for the one who respects elders."],
    ["aabo", "ààbò", "protection", "noun", "Ọlọ́run ni ààbò wa nígbà ewu.", "God is our protection in time of danger."],
  ]),
  topic("m-speech", "mastery", "Speech and meaning", "Words about talking, asking, answering and what words mean.", [
    ["oro", "ọ̀rọ̀", "word, matter, speech", "noun", "Ó sọ ọ̀rọ̀ tí ó tù mí nínú.", "He said a word that comforted me.", "Do not confuse ọ̀rọ̀ (word) with ọrọ̀ (wealth)."],
    ["alo", "àlọ́", "riddle", "noun", "A ń pa àlọ́ lálẹ́ lábẹ́ òṣùpá.", "We tell riddles at night under the moon.", "Confirm pa àlọ́ (tell a riddle)."],
    ["ibeere", "ìbéèrè", "question", "noun", "Olùkọ́ bi wá ní ìbéèrè kan.", "The teacher asked us a question."],
    ["idahun", "ìdáhùn", "answer", "noun", "Mo fún un ní ìdáhùn tí ó tọ́.", "I gave him the correct answer."],
    ["ijiroro", "ìjíròrò", "discussion", "noun", "Wọ́n ṣe ìjíròrò gígùn lórí owó ilé-ìwé.", "They held a long discussion about school fees."],
    ["gboloohun", "gbólóhùn", "sentence", "noun", "Mo kọ gbólóhùn kan tí ó ní ìbẹ̀rẹ̀ àti òpin.", "I wrote a sentence that has a beginning and an end.", "Confirm ìbẹ̀rẹ̀ and òpin."],
    ["itumo", "ìtumọ̀", "meaning", "noun", "Kí ni ìtumọ̀ òwe yìí?", "What is the meaning of this proverb?"],
    ["ikini", "ìkíni", "greeting", "noun", "Ìkíni àwọn Yorùbá gùn, ó sì ní ọ̀nà púpọ̀.", "The Yoruba greeting is long and has many forms."],
    ["ikilo", "ìkìlọ̀", "warning", "noun", "Olùkọ́ fún wa ní ìkìlọ̀ pé kí a má pẹ́.", "The teacher gave us a warning that we must not be late."],
    ["asoye", "àsọyé", "speech, lecture", "noun", "Olóyè ṣe àsọyé níwájú gbogbo ènìyàn.", "The chief gave a speech before everyone."],
  ]),
  topic("m-casual", "mastery", "Casual and everyday talk", "Short words and phrases friends use in relaxed speech, with the tone of a chat rather than a lesson.", [
    ["wahala", "wàhálà", "trouble, problem", "noun", "Mo ní wàhálà púpọ̀ ní ibi iṣẹ́ lónìí.", "I have a lot of trouble at work today.", "A very common word in casual speech, often in Kò sí wàhálà (no problem). Confirm the spelling and tones."],
    ["pele", "pẹ̀lẹ́", "sorry, take it easy", "other", "Mo sọ pé pẹ̀lẹ́ nígbà tí mo gbọ́ pé ó ṣubú.", "I said sorry when I heard that he fell.", "Said to someone who is hurt, tired or has had bad luck. Confirm the tones."],
    ["oya", "ó yá", "okay, let's go", "phrase", "Ó ní kí a lọ, mo sì dáhùn pé, ó yá.", "He said we should go, and I answered, okay.", "A casual reply. Confirm that it is Ó yá and the tones."],
    ["sebi", "ṣebí", "isn't it so, right?", "other", "Mo mọ̀ pé ìwọ ni o pè mí lánàá, ṣebí bẹ́ẹ̀ ni?", "I know it was you who called me yesterday, right?", "Starts a question that expects yes. Confirm the tones and the word order."],
    ["abi", "àbí", "or, or is it", "other", "Ṣé o fẹ́ jẹ ìrẹsì, àbí o fẹ́ jẹ iṣu?", "Do you want to eat rice, or do you want to eat yam?", "The casual form of or between two choices. Confirm the tones, and whether tàbí is preferred in careful speech."],
    ["jeje", "jẹ́jẹ́", "gently, calmly", "adverb", "Ó ń rìn jẹ́jẹ́ nítorí ọmọ ń sùn.", "He walks gently because the child is sleeping.", "Confirm the tones."],
    ["kuku", "kúkú", "actually, indeed, after all", "adverb", "Mo kúkú mọ̀ ọ̀nà, nítorí náà mo lọ nìkan.", "I actually know the way, so I went alone.", "A word that adds a note of after all. Confirm its use and tones."],
    ["oto", "ó tó", "that is enough", "phrase", "Ìrẹsì tí o fún mi ti pọ̀ jù, ó tó.", "The rice you gave me is already too much, that is enough.", "Confirm Ó tó for enough, and the tones."],
    ["ofe", "ọ̀fẹ́", "free, free of charge", "adjective", "Ó fún mi ní ìwé ní ọ̀fẹ́, n kò sì san owó.", "He gave me a book for free, and I did not pay any money.", "Confirm ní ọ̀fẹ́ and the tones."],
    ["gan-an", "gan-an", "really, very", "adverb", "Oúnjẹ yìí dùn gan-an, mo sì fẹ́ jẹ òmíràn.", "This food is very tasty, and I want to eat another one.", "Used throughout the course after adjectives and verbs. Confirm òmíràn (another)."],
  ]),
];
