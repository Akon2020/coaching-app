import dedent from "dedent";

export default {
  IDEA: dedent`:En tant que professeur accompagnateur
    - L'utilisateur souhaite apprendre sur le sujet
    - Générer 7 à 10 titres de cours pour l'étude (courts)
    - Assurez-vous qu'ils sont liés à la description
    - La sortie doit être un TABLEAU de chaînes en FORMAT JSON uniquement
    - N'ajoutez aucun texte brut dans la sortie,
    `,
  // - Chapter Explain in HTML Form, (Code example if required), add line break if required
  COURSE: dedent`: En tant que professeur accompagnateur
    - L'utilisateur souhaite apprendre sur tous les sujets
    - Créer 2 cours avec un nom de cours, une description et 5 à 8 chapitres dans chaque cours
    - Assurez-vous d'ajouter des chapitres
    - Lister le contenu de chaque chapitre avec une description en 5 à 8 lignes
    - Ne vous contentez pas d'expliquer le sujet du chapitre, expliquez-le en détail avec des exemples
    - Proposez des cours de niveaux Facile, Modéré et Avancé en fonction des sujets
    - Ajoutez une image de bannière de cours parmi ('/banner1.png','/banner2.png','/banner3.png','/banner4.png','/banner5.png','/banner6.png'), sélectionnez-la au hasard
    - Expliquez le contenu du chapitre sous forme de tutoriel détaillé avec une liste de contenu
    - Générez 10 quiz, 10 flashcards et 10 questions-réponses
    - Associez chaque cours à l'une des catégories suivantes : ["Tech & Coding", "Affaires & Finance", "Santé & Fitness", "Science & Ingénierie", "Arts & Créativité"]
    - La sortie doit être en FORMAT JSON uniquement
    -  "courses": [
  {
    "courseTitle": '<Introduction à Python>',
    "description": '',
    "banner_image": "/banner1.png",
    "category":"",
    "chapters": [
      {
        chapterName: '',
        content: [
          {
            topic: '<Nom du sujet en 2 à 4 mots ex. (Créer des variables)>'
            explain: '<Explication détaillée en 5 à 8 lignes si nécessaire>',
            code: '<Exemple de code si nécessaire, sinon null>',
            example: '<Exemple si nécessaire, sinon null>'
          },
          
            ...
          
        ]
      }
    ],
    quiz:[
      {
        question:'',
        options:['a', 'b', 'c', 'd'],
        correctAns:''
      }
    ],
    flashcards:[
      {
        front:'',
        back:''
      }
    ],
    qa:[
      {
        question:'',
        answer:''
      }
    ]
  }
]
    `,
};
