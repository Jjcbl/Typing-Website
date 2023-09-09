const wordsNormal = [
  "abandon",
  "time",
  "person",
  "year",
  "government",
  "day",
  "way",
  "man",
  "world",
  "life",
  "hand",
  "part",
  "child",
  "eye",
  "place",
  "work",
  "week",
  "case",
  "group",
  "problem",
  "fact",
  "company",
  "point",
  "number",
  "night",
  "home",
  "water",
  "room",
  "mother",
  "area",
  "money",
  "story",
  "month",
  "lot",
  "right",
  "study",
  "book",
  "eye",
  "job",
  "word",
  "business",
  "issue",
  "side",
  "kind",
  "head",
  "house",
  "service",
  "friend",
  "father",
  "power",
  "hour",
  "game",
  "line",
  "end",
  "member",
  "law",
  "car",
  "city",
  "community",
  "name",
  "president",
  "team",
  "minute",
  "idea",
  "kid",
  "body",
  "information",
  "back",
  "parent",
  "face",
  "others",
  "level",
  "office",
  "door",
  "health",
  "person",
  "art",
  "war",
  "history",
  "party",
  "result",
  "change",
  "morning",
  "reason",
  "research",
  "girl",
  "guy",
  "moment",
  "air",
  "teacher",
  "force",
  "education",
  "music",
  "question",
  "child",
  "idea",
  "product",
  "person",
  "team",
  "law",
  "voice",
  "country",
  "point",
  "problem",
  "story",
  "issue",
  "court",
  "side",
  "job",
  "company",
  "player",
  "food",
  "moment",
  "friend",
  "record",
  "system",
  "computer",
  "party",
  "course",
  "mother",
  "experience",
  "type",
  "year",
  "family",
  "market",
  "power",
  "knowledge",
  "result",
  "study",
  "game",
  "example",
  "difference",
  "style",
  "role",
  "office",
  "language",
  "street",
  "class",
  "relationship",
  "nature",
  "stage",
  "course",
  "teacher",
  "source",
  "film",
  "window",
  "week",
  "issue",
  "song",
  "cup",
  "door",
  "product",
  "class",
  "water",
  "question",
  "support",
  "moment",
  "state",
  "problem",
  "piece",
  "free",
  "area",
  "course",
  "lot",
  "right",
  "interest",
  "paper",
  "group",
  "order",
  "practice",
  "plan",
  "form",
  "face",
  "art",
  "human",
  "sense",
  "member",
  "school",
  "party",
  "top",
  "office",
  "church",
  "example",
  "phone",
  "table",
  "home",
  "difference",
  "reason",
  "future",
  "site",
  "organization",
  "effect",
  "century",
  "condition",
  "price",
  "person",
  "case",
  "society",
  "activity",
  "story",
  "industry",
  "media",
  "mind",
  "thing",
  "arm",
  "news",
  "management",
  "heart",
  "weight",
  "trip",
  "character",
  "view",
  "life",
  "president",
  "skill",
  "evidence",
  "west",
  "teacher",
  "future",
  "lot",
  "support",
  "treatment",
  "knowledge",
  "space",
  "job",
  "site",
  "century",
  "court",
  "war",
  "party",
  "result",
  "peace",
  "law",
  "road",
  "set",
  "example",
  "moment",
  "book",
  "education",
  "lot",
  "kid",
  "food",
  "science",
  "sense",
  "mind",
  "idea",
  "community",
  "company",
  "control",
  "player",
  "event",
  "state",
  "course",
  "action",
  "mother",
  "officer",
  "death",
  "change",
  "practice",
  "chance",
  "education",
  "ground",
  "record",
  "rest",
  "style",
  "child",
  "history",
  "boy",
  "relationship",
  "quarter",
  "break",
  "voice",
  "reason",
  "police",
  "rule",
  "furniture",
  "difference",
  "stage",
  "person",
  "customer",
  "place",
  "teacher",
  "church",
  "option",
  "decision",
  "plant",
  "life",
  "case",
  "window",
  "version",
  "development",
  "night",
  "relationship",
  "television",
  "group",
  "color",
  "attack",
  "plan",
  "minute",
  "top",
  "practice",
  "experience",
  "student",
  "event",
  "price",
  "wife",
  "equipment",
  "examination",
  "lot",
  "story",
  "choice",
  "speech",
  "meeting",
  "concern",
  "moment",
  "officer",
  "solution",
  "goal",
  "budget",
  "hope",
];

const wordsPunctuation = [
  "the!",
  "Be.",
  "to?",
  "Of.",
  "and!",
  "a?",
  "in!",
  "That.",
  "have?",
  "I.",
  "it?",
  "for!",
  "Not?",
  "on.",
  "with?",
  "he!",
  "as?",
  "you.",
  "Do?",
  "at!",
  "this?",
  "but.",
  "his!",
  "by?",
  "From.",
  "they.",
  "We?",
  "Say.",
  "her?",
  "She!",
  "or?",
  "An.",
  "Will!",
  "my?",
  "One.",
  "all!",
  "would?",
  "There.",
  "their!",
  "What?",
  "so.",
  "Up!",
  "out?",
  "If.",
  "about!",
  "who?",
  "Get.",
  "which!",
  "Go?",
  "me.",
  "When!",
  "Make?",
  "Can.",
  "like!",
  "Time?",
  "No.",
  "just!",
  "Him?",
  "Know.",
  "Take!",
  "into?",
  "Your.",
  "good!",
  "Some?",
  "could.",
  "them!",
  "see?",
  "other.",
  "Than!",
  "then?",
  "Now.",
  "look!",
  "only?",
  "Come.",
  "its!",
  "over?",
  "think.",
  "Also!",
  "back?",
  "after.",
  "Use!",
  "two?",
  "how.",
  "Our!",
  "work?",
  "First.",
  "well!",
  "way?",
  "Even.",
  "new!",
  "Want?",
  "Because.",
  "any!",
  "These?",
  "give.",
  "day!",
  "Most?",
  "Us.",
  "is!",
  "Was?",
  "are.",
  "has!",
  "Had?",
  "were.",
  "may!",
  "many?",
  "more.",
  "Will.",
  "Part!",
  "make?",
  "Might.",
  "Can!",
  "while?",
  "down.",
  "Side!",
  "Can?",
  "put.",
  "Such!",
  "Great?",
  "turn.",
  "Go!",
  "Home?",
  "should.",
  "Because!",
  "own?",
  "found.",
  "Here!",
  "Still?",
  "hand.",
  "life!",
  "Each?",
  "end.",
  "Big!",
  "woman?",
  "Men.",
  "boy!",
  "Long?",
  "point.",
  "small!",
  "world?",
  "head.",
  "Children!",
  "way?",
  "man.",
  "government!",
  "company?",
  "case.",
  "group!",
  "Problem?",
  "fact.",
  "Right!",
  "study?",
  "Question?",
  "eye.",
  "think!",
  "system?",
  "Best.",
  "week!",
  "high?",
  "place.",
  "child!",
  "thing?",
  "leave.",
  "Place!",
  "day?",
  "seem.",
  "Help!",
  "eye?",
  "guy.",
  "Next!",
  "door?",
  "woman.",
  "girl!",
  "Month?",
  "age.",
  "state!",
  "home?",
  "father.",
  "water!",
  "room?",
  "thing.",
  "school!",
  "fact?",
  "head.",
  "stand!",
  "question?",
  "took.",
  "Game!",
  "far?",
  "young.",
  "plan!",
  "Mind?",
  "school.",
  "Side!",
  "try?",
  "week.",
  "Pay!",
  "above?",
  "open.",
  "Return!",
  "food?",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "{",
  "]",
  "}",
  "",
  "|",
  ";",
  ":",
  "'",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];

const wordsProgramming = [
  "JavaScript",
  "HTML",
  "CSS",
  "Java",
  "C++",
  "var",
  "let",
  "const",
  "function",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "return",
  "try",
  "catch",
  "finally",
  "throw",
  "new",
  "class",
  "extends",
  "implements",
  "interface",
  "super",
  "this",
  "instanceof",
  "static",
  "final",
  "abstract",
  "public",
  "private",
  "protected",
  "void",
  "int",
  "float",
  "double",
  "char",
  "boolean",
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Array",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Date",
  "Math",
  "console",
  "document",
  "window",
  "getElementById",
  "querySelector",
  "addEventListener",
  "innerHTML",
  "style",
  "display",
  "block",
  "inline",
  "none",
  "font-family",
  "color",
  "background-color",
  "margin",
  "padding",
  "border",
  "width",
  "height",
  "float",
  "class",
  "extends",
  "implements",
  "namespace",
  "using",
  "std",
  "cout",
  "cin",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "return",
  "=",
  "==",
  "===",
  "+",
  "-",
  "",
  "/",
  "%",
  ">",
  "<",
  ">=",
  "<=",
  "!",
  "&&",
  "||",
  "&",
  "|",
  "^",
  "~",
  "<<",
  ">>",
  ">>>",
  "+=",
  "-=",
  "=",
  "/=",
  "%=",
  "===",
  "!==",
  "++",
  "--",
  ".",
  ",",
  ";",
  ":",
  "?",
  "=>",
  "{",
  "}",
  "(",
  ")",
  "[",
  "]",
  "'",
  "/",
  "/",
  "//",
  "#",
  "::",
  "$",
  "@",
  "=",
];
