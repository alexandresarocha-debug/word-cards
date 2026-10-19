// Add new cards here. Each card needs a 'book' field.
const CARDS = [
 {
  "book": "A Short Stay in Hell",
  "word": "sported",
  "pos": "verb",
  "meaning": "to have or wear something on show, usually something striking",
  "quote": "His large goat legs sported coarse, thick hair, giving him a satyr-like aspect.",
  "example": "He sported a moustache he clearly thought was a personality.",
  "page": "p. 5",
  "collocations": [
   "sport a beard / moustache",
   "sport a tattoo",
   "sport a scar",
   "sport a (new) look"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "brooked",
  "pos": "verb",
  "meaning": "tolerated or allowed; almost always negative (brooks no argument)",
  "quote": "…an actuality that brooked no argument.",
  "example": "Her tone brooked no argument, so we got in the car.",
  "page": "p. 41",
  "collocations": [
   "brook no argument",
   "brook no dissent",
   "brook no delay",
   "brook no opposition"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "sloshing",
  "pos": "verb / adj.",
  "meaning": "liquid splashing around; “sloshing drunk” = very drunk",
  "quote": "I'd entertained a fear they would still be sloshing drunk.",
  "example": "By ten, Uncle Ray was sloshing drunk and explaining the tides to a lamp.",
  "page": "p. 45",
  "collocations": [
   "sloshing drunk",
   "water sloshing around",
   "slosh through puddles",
   "slosh coffee"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "modicum",
  "pos": "noun",
  "meaning": "a small amount of something good (a modicum of)",
  "quote": "It does bring a modicum of hope.",
  "example": "If he'd had a modicum of shame, he'd have left the cake alone.",
  "page": "p. 58",
  "collocations": [
   "a modicum of truth",
   "a modicum of decency",
   "a modicum of success",
   "a modicum of respect"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "spearheaded",
  "pos": "verb",
  "meaning": "led or drove an effort from the front",
  "quote": "Dr. Cummings spearheaded the whole thing.",
  "example": "Linda spearheaded the campaign to ban fish in the office microwave.",
  "page": "p. 60",
  "collocations": [
   "spearhead a campaign",
   "spearhead an effort",
   "spearhead a project",
   "spearhead reform"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "charge",
  "pos": "noun",
  "meaning": "a duty or mission you've been given",
  "quote": "But we had our charge, and on and on we walked.",
  "example": "Her charge was simple: keep the twins alive until Sunday.",
  "page": "p. 61",
  "collocations": [
   "be in charge of",
   "take charge",
   "in someone's charge",
   "charged with a task"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "off our rocker",
  "pos": "idiom",
  "meaning": "crazy, or acting crazy (informal)",
  "quote": "…thought we were off our rocker.",
  "example": "You'd have to be off your rocker to swim there in July.",
  "page": "p. 61",
  "collocations": [
   "go off your rocker",
   "be off your rocker",
   "completely off his rocker"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "fawning",
  "pos": "verb",
  "meaning": "flattering or fussing over someone too much",
  "quote": "…with all of us fawning over him.",
  "example": "The waiters fawned over the senator and ignored the rest of us.",
  "page": "p. 61",
  "collocations": [
   "fawn over someone",
   "fawning praise",
   "fawning admirers",
   "fawning coverage"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "tithing",
  "pos": "noun",
  "meaning": "giving a fixed share of income, traditionally a tenth, to a church",
  "quote": "I paid my tithing.",
  "example": "He tithed ten percent of every paycheck to his ex-wife's lawyer.",
  "page": "p. 64",
  "collocations": [
   "pay tithing",
   "pay a tithe",
   "tithe ten percent",
   "tithe to the church"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "droned on",
  "pos": "phrasal verb",
  "meaning": "kept talking at length in a dull, flat way",
  "quote": "He droned on, but behind him the two guards… left for a moment.",
  "example": "The pastor droned on about gutters while the casserole went cold.",
  "page": "p. 75",
  "collocations": [
   "drone on about",
   "drone on and on",
   "drone on for hours",
   "a monotonous drone"
  ]
 },
 {
  "book": "A Short Stay in Hell",
  "word": "slake",
  "pos": "verb",
  "meaning": "to satisfy a thirst or strong craving",
  "quote": "…the water did not seem to slake my thirst.",
  "example": "No amount of applause could slake his need to be liked.",
  "page": "",
  "collocations": [
   "slake your thirst",
   "slake a craving",
   "slake your curiosity",
   "slake a desire"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "shrink back",
  "pos": "phrasal verb",
  "meaning": "to pull your body away quickly and instinctively, out of fear, disgust or shyness",
  "quote": "When the stranger stepped into the lamplight, she shrank back against the doorframe, one hand still tight on the latch.",
  "example": "Instead of: She was afraid of the stranger at the door.",
  "page": "",
  "collocations": [
   "shrink back from",
   "shrink back against",
   "not shrink back from the truth"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "set one's teeth on edge",
  "pos": "idiom",
  "meaning": "to grate on someone's nerves, causing a sharp, almost physical irritation",
  "quote": "Every morning the neighbour's laugh rang out over the hedge, high and brittle as a fork dragged across porcelain, and it set Margaret's teeth on edge.",
  "example": "Instead of: Margaret found her new neighbour deeply irritating.",
  "page": "",
  "collocations": [
   "a sound sets your teeth on edge",
   "a voice that sets your teeth on edge"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "drink in",
  "pos": "phrasal verb",
  "meaning": "to take something in eagerly and deeply through the senses",
  "quote": "She stood at the edge of the terrace, palms flat on the warm stone, and drank in the bay.",
  "example": "Instead of: She was moved by the view and wanted to remember it.",
  "page": "",
  "collocations": [
   "drink in the view",
   "drink in the scene",
   "drink in every word"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "bite one's lip",
  "pos": "idiom",
  "meaning": "to hold back words, laughter or tears, so the restraint shows on the body",
  "quote": "She bit her lip until she tasted copper, and let him finish his sentence.",
  "example": "Instead of: She wanted to argue but decided to stay silent.",
  "page": "",
  "collocations": [
   "bite your lip to keep from laughing",
   "bite back a reply"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "hang on someone's every word",
  "pos": "idiom",
  "meaning": "to listen with rapt, almost breathless attention",
  "quote": "The old professor paused to polish his spectacles, and forty students hung on his every word, pens frozen above their notebooks.",
  "example": "Instead of: The students were very interested in what he said.",
  "page": "",
  "collocations": [
   "hang on his every word",
   "hang on her every word"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "prick up one's ears",
  "pos": "idiom",
  "meaning": "to start listening closely all of a sudden",
  "quote": "At the sound of her own name drifting across the crowded room, Leo pricked up his ears and lost the thread of his conversation.",
  "example": "Instead of: Leo got interested when he heard his name.",
  "page": "",
  "collocations": [
   "prick up your ears at",
   "ears pricked up"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "square one's shoulders",
  "pos": "idiom",
  "meaning": "to straighten up and set the shoulders firm, gathering resolve before something hard",
  "quote": "She squared her shoulders and walked into the meeting.",
  "example": "Instead of: She felt determined as she walked into the meeting.",
  "page": "",
  "collocations": [
   "square your shoulders and",
   "squared his shoulders against"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "draw oneself up",
  "pos": "phrasal verb",
  "meaning": "to straighten into a stiff, dignified posture, often before speaking or confronting someone",
  "quote": "He drew himself up and answered in a calm, measured voice.",
  "example": "Instead of: He answered with dignity when they mocked his idea.",
  "page": "",
  "collocations": [
   "draw oneself up to full height"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "wring one's hands",
  "pos": "idiom",
  "meaning": "to twist and squeeze one's hands in anxiety; figuratively, to fret without acting",
  "quote": "Marguerite stood at the window, wringing her hands until the knuckles blanched.",
  "example": "Instead of: Marguerite was terribly worried about her son.",
  "page": "",
  "collocations": [
   "wring one's hands over",
   "hand-wringing"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "look askance",
  "pos": "phrasal verb",
  "meaning": "to glance sideways with doubt, suspicion or quiet disapproval",
  "quote": "He looked askance at the paper she slid across the table.",
  "example": "Instead of: He disapproved of her suggestion at once.",
  "page": "",
  "collocations": [
   "look askance at",
   "eye someone askance"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "hang one's head",
  "pos": "idiom",
  "meaning": "to let the head drop out of shame, guilt or defeat",
  "quote": "Tomás hung his head as she counted the empty envelope twice.",
  "example": "Instead of: Tomás felt ashamed after losing his sister's savings.",
  "page": "",
  "collocations": [
   "hang your head in shame"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "break out in a cold sweat",
  "pos": "idiom",
  "meaning": "to suddenly sweat, cold and clammy, from fear or dread",
  "quote": "At the first creak on the stairs, Marta broke out in a cold sweat.",
  "example": "Instead of: Marta was terrified when she heard footsteps.",
  "page": "",
  "collocations": [
   "break out in a cold sweat at the thought of"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "drum one's fingers",
  "pos": "idiom",
  "meaning": "to tap the fingertips over and over, out of impatience, boredom or nerves",
  "quote": "Marguerite drummed her fingers on the walnut table, a soft gallop that quickened with every clause.",
  "example": "Instead of: Marguerite was growing impatient.",
  "page": "",
  "collocations": [
   "drum one's fingers on the table",
   "drum on the steering wheel"
  ]
 },
 {
  "book": "Aleksei's phrases",
  "word": "steal a glance",
  "pos": "idiom",
  "meaning": "to look quickly and secretly, hoping nobody notices",
  "quote": "All through dinner, Clara stole glances at her sister's fiancé over the rim of her wineglass.",
  "example": "Instead of: Clara was in love with her sister's fiancé.",
  "page": "",
  "collocations": [
   "steal a glance at",
   "steal a look"
  ]
 }
];
