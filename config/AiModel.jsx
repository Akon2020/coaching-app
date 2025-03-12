const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateTopicsAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Apprendre Python::En tant que professeur accompagnateur\n    - L'utilisateur souhaite apprendre sur le sujet\n    - Générer 7 à 10 titres de cours pour l'étude (courts)\n    - Assurez-vous qu'ils sont liés à la description\n    - La sortie doit être un TABLEAU de chaînes en FORMAT JSON uniquement\n    - N'ajoutez aucun texte brut dans la sortie,",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  "Introduction à Python et installation",\n  "Types de données et variables en Python",\n  "Opérateurs et expressions Python",\n  "Structures de contrôle: if, else, boucles",\n  "Fonctions en Python: Définition et appel",\n  "Structures de données: Listes, Tuples, Dictionnaires",\n  "Manipulation de fichiers en Python",\n  "Introduction à la programmation orientée objet (POO)",\n  "Gestion des erreurs et exceptions",\n  "Bibliothèques Python populaires: un aperçu"\n]\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [{ text: "J'ai besoin d'un course_title pour le json" }],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  { "course_title": "Introduction à Python et installation" },\n  { "course_title": "Types de données et variables en Python" },\n  { "course_title": "Opérateurs et expressions Python" },\n  { "course_title": "Structures de contrôle: if, else, boucles" },\n  { "course_title": "Fonctions en Python: Définition et appel" },\n  { "course_title": "Structures de données: Listes, Tuples, Dictionnaires" },\n  { "course_title": "Manipulation de fichiers en Python" },\n  { "course_title": "Introduction à la programmation orientée objet (POO)" },\n  { "course_title": "Gestion des erreurs et exceptions" },\n  { "course_title": "Bibliothèques Python populaires: un aperçu" }\n]\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'Seulement au debut\n{\n    "course_title": [\n  "Introduction à Python et installation",\n  "Types de données et variables en Python",\n  "Opérateurs et expressions Python",\n  "Structures de contrôle: if, else, boucles",\n  "Fonctions en Python: Définition et appel",\n  "Structures de données: Listes, Tuples, Dictionnaires",\n  "Manipulation de fichiers en Python",\n  "Introduction à la programmation orientée objet (POO)",\n  "Gestion des erreurs et exceptions",\n  "Bibliothèques Python populaires: un aperçu"\n]\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n    "course_title": [\n        "Introduction à Python et installation",\n        "Types de données et variables en Python",\n        "Opérateurs et expressions Python",\n        "Structures de contrôle: if, else, boucles",\n        "Fonctions en Python: Définition et appel",\n        "Structures de données: Listes, Tuples, Dictionnaires",\n        "Manipulation de fichiers en Python",\n        "Introduction à la programmation orientée objet (POO)",\n        "Gestion des erreurs et exceptions",\n        "Bibliothèques Python populaires: un aperçu"\n    ]\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());

