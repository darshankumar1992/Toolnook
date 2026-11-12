import type { ContentDictionary } from "../../types";

const content: ContentDictionary = {
  categories: {
    "image-tools": {
      name: "Outils image",
      shortName: "Image",
      tagline: "Compresser et redimensionner",
      description:
        "Des outils image gratuits qui fonctionnent dans votre navigateur. Vos photos sont traitées sur votre propre appareil et ne sont jamais envoyées sur un serveur.",
    },
    "pdf-tools": {
      name: "Outils PDF",
      shortName: "PDF",
      tagline: "Fusionner et convertir",
      description:
        "Travaillez sur vos fichiers PDF sans installer de logiciel. Vos fichiers restent sur votre appareil, et vos documents privés restent privés.",
    },
    calculators: {
      name: "Calculateurs",
      shortName: "Calculateurs",
      tagline: "Calculez tout",
      description:
        "Des calculateurs rapides et précis pour les prêts, les finances et les calculs du quotidien, avec le détail complet de chaque résultat.",
    },
    "text-tools": {
      name: "Outils texte",
      shortName: "Texte",
      tagline: "Modifier et mettre en forme du texte",
      description:
        "Comptez, nettoyez et transformez du texte instantanément. Pratique pour les étudiants, les rédacteurs, les blogueurs et tous ceux qui ont une limite de mots.",
    },
    "developer-tools": {
      name: "Outils pour développeurs",
      shortName: "Développeurs",
      tagline: "JSON et encodage",
      description:
        "Des utilitaires du quotidien pour les développeurs : formatez, validez et convertissez vos données sans les coller sur un serveur distant.",
    },
    "seo-tools": {
      name: "Outils SEO",
      shortName: "SEO",
      tagline: "Mots-clés et extraits",
      description:
        "Trouvez des idées de mots-clés et vérifiez l'apparence de vos pages dans les résultats de recherche, avec des outils conçus pour les blogueurs et les propriétaires de sites.",
    },
  },

  tools: {
    "image-compressor": {
      name: "Compresser une image",
      summary: "Réduisez le poids des JPG, PNG et WebP sans perte de qualité visible.",
      seoTitle: "Compresser une image en ligne gratuit – JPG, PNG, WebP",
      seoDescription:
        "Compressez vos images JPG, PNG et WebP en ligne et gratuitement. Réduisez la taille d'une photo, redimensionnez-la ou convertissez-la, sans aucun envoi.",
      keywords: [
        "compresser une image",
        "compresser image en ligne",
        "réduire la taille d'une image",
        "réduire poids photo",
        "compresseur d'image",
        "compresser photo",
        "compresser jpg",
        "redimensionner image",
      ],
      howTo: [
        "Cliquez sur « Choisissez des images » ou glissez vos fichiers JPG, PNG ou WebP dans le cadre. Vous pouvez en ajouter plusieurs à la fois.",
        "Réglez le curseur de qualité. 70 % est un bon point de départ pour les photos, et le nouveau poids du fichier s'actualise automatiquement.",
        "Si vous le souhaitez, choisissez un autre format de sortie ou définissez une largeur maximale pour réduire les grandes photos.",
        "Téléchargez chaque image séparément ou cliquez sur « Tout télécharger ».",
      ],
      content: [
        { h2: "Pourquoi compresser une image ?" },
        {
          p: "Une photo prise avec un smartphone pèse souvent 3 à 5 Mo. C'est bien plus que nécessaire pour un site web, une pièce jointe d'e-mail ou un formulaire en ligne, où 100 à 300 Ko suffisent généralement. Des images plus légères s'envoient plus vite, se chargent plus vite pour vos visiteurs et vous aident à respecter les limites de taille des démarches administratives en ligne, des dossiers de candidature et des sites d'emploi.",
        },
        { h2: "Quel format de sortie choisir ?" },
        {
          ul: [
            "Le **JPG** fonctionne partout et reste le meilleur choix pour les photos.",
            "Le **WebP** est un format moderne, souvent 25 à 35 % plus léger que le JPG à qualité visuelle égale. Tous les navigateurs récents le prennent en charge, mais certaines applications anciennes et certains formulaires d'envoi ne l'acceptent pas.",
            "Le **PNG** est un format sans perte. Utilisez-le pour les captures d'écran, les logos et les graphiques avec transparence. Pour les photos, il produit des fichiers beaucoup plus lourds.",
          ],
        },
        { h2: "Confidentialité garantie" },
        {
          p: "De nombreux compresseurs en ligne envoient vos photos sur leurs serveurs. Pas celui-ci. Il utilise le moteur d'image intégré à votre navigateur : vos fichiers ne quittent jamais votre appareil et, une fois la page chargée, l'outil continue de fonctionner même avec une connexion lente.",
        },
      ],
      faqs: [
        {
          q: "La compression va-t-elle réduire la qualité de mon image ?",
          a: "La compression JPG et WebP est dite « avec perte » : certains détails sont supprimés pour gagner de la place. Entre 60 et 80 % de qualité, la différence est généralement invisible à l'écran. Votre fichier d'origine n'est jamais modifié, vous pouvez donc toujours recommencer avec une qualité plus élevée.",
        },
        {
          q: "Comment compresser une image à 100 Ko ou 200 Ko ?",
          a: "Baissez le curseur de qualité et observez le nouveau poids du fichier. Si l'image est encore trop lourde, définissez une largeur maximale, par exemple 1 200 pixels. Les grandes photos de smartphone passent généralement sous les 200 Ko une fois redimensionnées à environ 1 200 à 1 600 pixels de large.",
        },
        {
          q: "Mes images sont-elles envoyées sur un serveur ?",
          a: "Non. Toute la compression a lieu dans votre navigateur, sur votre propre appareil. Vos images ne sont jamais envoyées, ni à nous ni à personne d'autre : vous pouvez donc utiliser cet outil en toute sécurité pour vos pièces d'identité, vos documents et vos photos personnelles.",
        },
        {
          q: "Pourquoi mon fichier PNG est-il à peine plus léger ?",
          a: "Le PNG est un format sans perte : le réglage de qualité n'a donc aucun effet sur lui. Pour alléger fortement un PNG, convertissez-le en WebP ou en JPG, ou réduisez sa largeur. Gardez le PNG pour les logos, les icônes et les captures d'écran qui ont besoin de contours nets ou de transparence.",
        },
        {
          q: "Le nombre d'images que je peux compresser est-il limité ?",
          a: "Nous n'imposons aucune limite. Vous pouvez ajouter autant d'images que vous le souhaitez. Les très grandes images (plus de 50 mégapixels) peuvent être lentes à traiter sur les téléphones anciens, car tout le travail se fait sur votre appareil.",
        },
      ],
    },

    "merge-pdf": {
      name: "Fusionner PDF",
      summary: "Combinez plusieurs fichiers PDF en un seul document, dans l'ordre voulu.",
      seoTitle: "Fusionner PDF en ligne gratuit – Assembler des PDF",
      seoDescription:
        "Fusionnez plusieurs fichiers PDF en un seul en quelques secondes et choisissez leur ordre. Gratuit, sans inscription : vos PDF ne quittent pas votre appareil.",
      keywords: [
        "fusionner pdf",
        "fusionner pdf gratuit",
        "fusionner pdf en ligne",
        "fusionner plusieurs pdf en un seul",
        "assembler pdf",
        "combiner pdf",
        "regrouper pdf",
        "fusion pdf",
      ],
      howTo: [
        "Cliquez sur « Choisissez des fichiers PDF » ou glissez au moins deux PDF dans le cadre.",
        "Classez les fichiers dans l'ordre souhaité à l'aide des flèches haut et bas.",
        "Cliquez sur « Fusionner et télécharger ». Votre fichier combiné est enregistré sous le nom merged.pdf.",
      ],
      content: [
        { h2: "Quand fusionner des PDF ?" },
        {
          ul: [
            "Pour déposer plusieurs justificatifs (pièce d'identité, diplômes, relevés de notes) sur un site qui n'accepte qu'un seul fichier, lors d'une démarche administrative ou d'une candidature.",
            "Pour regrouper des pages scannées en un seul document.",
            "Pour envoyer à votre comptable un seul fichier bien rangé avec vos factures ou vos reçus.",
            "Pour assembler des chapitres ou des rapports en un seul PDF, plus facile à lire et à imprimer.",
          ],
        },
        { h2: "Qu'est-ce qui est conservé dans le fichier fusionné ?" },
        {
          p: "Le contenu, le format et l'orientation de chaque page sont copiés à l'identique. Les éléments interactifs, comme les champs de formulaire, les signets et la table des matières des fichiers d'origine, peuvent ne pas être repris dans le document fusionné.",
        },
        { h2: "Confidentialité garantie" },
        {
          p: "La plupart des sites PDF envoient vos documents sur leurs serveurs pour les traiter. Cet outil utilise la bibliothèque open source pdf-lib pour faire le travail directement dans votre navigateur : vos fichiers ne quittent jamais votre appareil.",
        },
      ],
      faqs: [
        {
          q: "Le nombre ou la taille des PDF est-il limité ?",
          a: "Nous n'imposons aucune limite. Comme la fusion se fait sur votre appareil, la limite pratique dépend de sa mémoire. Des documents de plusieurs centaines de pages se fusionnent sans problème sur la plupart des ordinateurs et des smartphones récents.",
        },
        {
          q: "Puis-je fusionner des PDF protégés par un mot de passe ?",
          a: "Non. Les PDF chiffrés ne peuvent pas être combinés tant que la protection par mot de passe n'est pas supprimée. Ouvrez le fichier dans un lecteur PDF avec le mot de passe, enregistrez une copie non protégée, puis fusionnez cette copie.",
        },
        {
          q: "La fusion réduit-elle la qualité de mon PDF ?",
          a: "Non. Les pages sont copiées telles quelles, sans recompresser le texte ni les images : le PDF fusionné est identique aux originaux.",
        },
        {
          q: "Puis-je fusionner des fichiers PDF sur mon téléphone ?",
          a: "Oui. L'outil fonctionne dans Chrome, Safari, Firefox et les autres navigateurs mobiles récents. Choisissez les fichiers dans la mémoire de votre téléphone, classez-les et appuyez sur « Fusionner et télécharger ».",
        },
        {
          q: "Mes fichiers PDF sont-ils envoyés quelque part ?",
          a: "Non. Vos PDF sont lus et combinés dans votre navigateur, et ne sont jamais envoyés sur un serveur. Vos documents sensibles, comme vos pièces d'identité, vos contrats et vos relevés bancaires, restent ainsi confidentiels.",
        },
      ],
    },

    "emi-calculator": {
      name: "Simulateur de prêt",
      summary: "Calculez votre mensualité, le total des intérêts et l'échéancier.",
      seoTitle: "Simulateur de prêt – Calcul de mensualité gratuit",
      seoDescription:
        "Calculez gratuitement la mensualité de votre prêt immobilier, auto ou conso, le coût total des intérêts et le tableau d'amortissement année par année.",
      keywords: [
        "simulateur de prêt",
        "calcul mensualité",
        "calculer mensualité prêt",
        "simulation prêt immobilier",
        "calcul prêt immobilier",
        "simulateur crédit",
        "simulateur prêt auto",
        "tableau d'amortissement",
      ],
      howTo: [
        "Saisissez le montant du prêt et choisissez votre devise.",
        "Saisissez le taux d'intérêt annuel proposé par votre banque.",
        "Indiquez la durée du prêt en années ou en mois.",
        "Votre mensualité, le total des intérêts et le montant total remboursé s'affichent instantanément, avec un tableau d'amortissement année par année.",
      ],
      content: [
        { h2: "Qu'est-ce qu'une mensualité ?" },
        {
          p: "La mensualité est la somme fixe que vous versez chaque mois à votre banque jusqu'au remboursement complet du prêt. Pour un prêt amortissable classique, on parle de **mensualité constante** : son montant reste le même pendant toute la durée du crédit. Chaque mensualité comprend deux parts : les intérêts calculés sur le capital restant dû et le remboursement d'une partie du capital. Les premières années, la mensualité sert surtout à payer des intérêts ; les dernières années, elle rembourse surtout du capital.",
        },
        { h2: "La formule de calcul de la mensualité" },
        {
          p: "**M = C × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)**, où C est le capital emprunté, r le taux d'intérêt mensuel (taux annuel ÷ 12 ÷ 100) et n le nombre de mensualités.",
        },
        {
          p: "Par exemple, un prêt de 200 000 € à 3,5 % par an sur 25 ans donne r = 0,00292 et n = 300 : la mensualité est d'environ **1 001 €**. Sur 25 ans, vous remboursez environ 300 374 €, dont environ 100 374 € d'intérêts.",
        },
        { h2: "Comment payer moins d'intérêts" },
        {
          ul: [
            "**Choisissez une durée plus courte si votre budget le permet.** Une durée plus longue réduit la mensualité, mais augmente fortement le coût total des intérêts.",
            "**Remboursez par anticipation quand vous le pouvez.** Même des versements supplémentaires ponctuels en début de prêt réduisent nettement le total des intérêts.",
            "**Comparez les offres des banques.** Un écart de taux de seulement 0,5 % représente une somme importante sur un long prêt immobilier.",
            "**Augmentez votre apport personnel** pour réduire le montant emprunté.",
          ],
        },
        {
          p: "**Remarque :** les résultats sont des estimations fournies à titre indicatif. Les chiffres exacts de votre banque peuvent légèrement différer en raison des frais, de l'assurance emprunteur, des arrondis et des variations de taux. Ceci ne constitue pas un conseil financier.",
        },
      ],
      faqs: [
        {
          q: "Puis-je l'utiliser pour un prêt immobilier, auto ou personnel ?",
          a: "Oui. Le simulateur fonctionne pour tout prêt amortissable dont les intérêts sont calculés sur le capital restant dû, ce qui inclut la quasi-totalité des prêts immobiliers, des prêts auto, des prêts personnels et des prêts étudiants.",
        },
        {
          q: "Fonctionne-t-il avec un taux variable ?",
          a: "Le calcul suppose que le taux reste le même pendant toute la durée du prêt. Si vous avez un prêt à taux variable (ou révisable), refaites le calcul avec le nouveau taux chaque fois que votre banque le modifie.",
        },
        {
          q: "La mensualité inclut-elle les frais de dossier ou l'assurance ?",
          a: "Non. Le résultat couvre uniquement le capital et les intérêts. Les frais de dossier, l'assurance emprunteur et les autres frais s'ajoutent et dépendent de votre banque. Pour comparer des offres, regardez aussi le TAEG, qui inclut ces frais.",
        },
        {
          q: "Que se passe-t-il si je rembourse une partie de mon prêt par anticipation ?",
          a: "Un remboursement anticipé réduit le capital restant dû : vous payez donc moins d'intérêts par la suite. La plupart des banques réduisent alors soit la durée du prêt, soit la mensualité. Vérifiez si votre contrat prévoit des indemnités de remboursement anticipé.",
        },
        {
          q: "Pourquoi mes premières mensualités servent-elles surtout à payer des intérêts ?",
          a: "Les intérêts sont calculés sur le capital restant dû, qui est le plus élevé au début du prêt. À mesure que vous remboursez le capital, la part d'intérêts de chaque mensualité diminue et la part de capital augmente. Vous pouvez le constater dans le tableau d'amortissement ci-dessus.",
        },
      ],
    },

    "word-counter": {
      name: "Compteur de mots",
      summary: "Comptez mots, caractères, phrases et temps de lecture en temps réel.",
      seoTitle: "Compteur de mots et de caractères en ligne gratuit",
      seoDescription:
        "Compteur de mots gratuit en ligne : comptez les mots, caractères, phrases et paragraphes, et estimez le temps de lecture. Fonctionne dans toutes les langues.",
      keywords: [
        "compteur de mots",
        "compteur de caractères",
        "compteur de mots en ligne",
        "compter les mots",
        "compter les caractères",
        "nombre de mots",
        "nombre de caractères",
        "temps de lecture",
      ],
      howTo: [
        "Écrivez dans le cadre ou collez votre texte.",
        "Le nombre de mots, de caractères, de phrases et de paragraphes s'actualise instantanément pendant la saisie.",
        "Consultez les temps de lecture et de parole estimés, et repérez les mots-clés que vous répétez le plus.",
        "Utilisez « Copier le texte » pour copier votre texte ou « Effacer » pour recommencer.",
      ],
      content: [
        { h2: "Ce que mesure ce compteur de mots" },
        {
          ul: [
            "**Les mots et les caractères**, avec et sans espaces.",
            "**Les phrases et les paragraphes**, chaque ligne non vide comptant comme un paragraphe.",
            "**Le temps de lecture et le temps de parole**, pratiques pour les articles de blog, les discours et les présentations.",
            "**La densité des mots-clés**, qui indique combien de fois vous répétez les mots importants pour éviter d'en abuser.",
          ],
        },
        { h2: "Limites de mots et de caractères courantes" },
        {
          ul: [
            "Post sur X (Twitter) : 280 caractères",
            "Meta description pour le SEO : environ 155 à 160 caractères",
            "Légende Instagram : 2 200 caractères",
            "Post LinkedIn : 3 000 caractères",
            "Projet de formation motivé sur Parcoursup : 1 500 caractères",
          ],
        },
        { h2: "Conçu pour toutes les langues" },
        {
          p: "Beaucoup de compteurs de mots simples découpent le texte uniquement au niveau des espaces, ce qui donne des résultats faux dans de nombreuses langues. Cet outil utilise la segmentation de texte intégrée aux navigateurs modernes, qui tient compte de la langue : le décompte est exact, que vous écriviez en français, en anglais, en arabe ou en japonais.",
        },
      ],
      faqs: [
        {
          q: "Comment le compteur compte-t-il les mots ?",
          a: "Il utilise la segmentation de texte intégrée à votre navigateur, qui tient compte de la langue : c'est la même technologie que celle qui sélectionne un mot quand vous double-cliquez dessus. Les nombres comptent comme des mots. Les mots composés avec un trait d'union, comme « porte-monnaie », comptent pour deux mots, comme dans de nombreux traitements de texte.",
        },
        {
          q: "Les espaces sont-elles comptées comme des caractères ?",
          a: "Le chiffre principal « Caractères » inclut les espaces et les sauts de ligne. Le chiffre affiché sous la zone de texte indique le total sans espaces, demandé par certains formulaires et devoirs.",
        },
        {
          q: "Comment le temps de lecture est-il calculé ?",
          a: "Le temps de lecture se base sur une vitesse moyenne de lecture silencieuse de 238 mots par minute chez l'adulte. Le temps de parole se base sur un rythme de présentation confortable de 140 mots par minute.",
        },
        {
          q: "Mon texte est-il enregistré ou envoyé quelque part ?",
          a: "Non. Votre texte reste dans votre navigateur et n'est jamais envoyé. Il n'est pas non plus enregistré : actualiser la page l'efface. Copiez ce que vous souhaitez conserver.",
        },
        {
          q: "Fonctionne-t-il avec d'autres langues que le français ?",
          a: "Oui. Grâce à une segmentation adaptée à chaque langue, il compte correctement les mots et les caractères dans toutes les langues, de l'anglais à l'allemand en passant par l'arabe, et même dans les langues écrites sans espaces, comme le chinois et le japonais.",
        },
      ],
    },

    "json-formatter": {
      name: "Formateur JSON",
      summary: "Formatez, validez et minifiez du JSON et repérez vite les erreurs.",
      seoTitle: "Formateur JSON en ligne – Formater, valider, minifier JSON",
      seoDescription:
        "Formatez, indentez, validez et minifiez du JSON en ligne. Repérez les erreurs à la ligne et à la colonne près, triez les clés. Vos données restent privées.",
      keywords: [
        "formateur json",
        "formater json",
        "formater json en ligne",
        "json formatter",
        "validateur json",
        "valider json",
        "indenter json",
        "minifier json",
      ],
      howTo: [
        "Collez votre JSON dans la zone d'entrée ou cliquez sur « Exemple » pour tester.",
        "L'outil vérifie votre JSON pendant la saisie et indique la ligne et la colonne exactes de chaque erreur.",
        "Cliquez sur « Formater » pour l'indenter (2 espaces, 4 espaces ou tabulations, avec tri des clés en option) ou sur « Minifier » pour le compresser.",
        "Copiez le résultat ou téléchargez-le au format .json.",
      ],
      content: [
        { h2: "Qu'est-ce qu'un formateur JSON ?" },
        {
          p: "Le JSON (JavaScript Object Notation) est le format le plus courant pour échanger des données entre applications et API. Pour gagner de la place, il est souvent transmis sur une seule longue ligne, difficile à lire. Un formateur JSON ajoute une indentation et des sauts de ligne pour rendre la structure lisible, et un validateur vérifie que la syntaxe est correcte.",
        },
        { h2: "Erreurs JSON courantes et comment les corriger" },
        {
          ul: [
            "**Virgules finales :** supprimez la virgule après le dernier élément d'un objet ou d'un tableau.",
            "**Guillemets simples :** remplacez `'text'` par `\"text\"`.",
            "**Clés sans guillemets :** écrivez `{\"name\": 1}` et non `{name: 1}`.",
            "**Commentaires :** le JSON n'accepte pas les commentaires `//` ou `/* */`.",
            "**Virgules manquantes** entre les éléments, souvent après un copier-coller.",
          ],
        },
        { h2: "Vos données restent privées" },
        {
          p: "Les réponses d'API et les fichiers de configuration contiennent souvent des jetons d'accès, des adresses e-mail ou d'autres données sensibles. De nombreux formateurs en ligne envoient ce que vous collez à un serveur. Celui-ci ne le fait jamais : tout le traitement a lieu dans votre navigateur.",
        },
      ],
      faqs: [
        {
          q: "Quelle est la différence entre formater et minifier du JSON ?",
          a: "Formater (on dit aussi embellir ou indenter) ajoute des sauts de ligne et une indentation pour que le JSON soit facile à lire. Minifier supprime tous les espaces inutiles pour rendre les données aussi légères que possible avant de les envoyer sur le réseau.",
        },
        {
          q: "Pourquoi mon JSON est-il invalide alors qu'il fonctionne en JavaScript ?",
          a: "Les littéraux d'objet JavaScript sont plus souples que le JSON. Le JSON exige des guillemets doubles autour de chaque clé et de chaque chaîne, et n'autorise ni virgules finales, ni commentaires, ni guillemets simples, ni valeurs comme undefined et NaN.",
        },
        {
          q: "Peut-il traiter de gros fichiers JSON ?",
          a: "Oui. Des fichiers de plusieurs mégaoctets sont formatés en bien moins d'une seconde sur un ordinateur classique, car tout s'exécute localement dans votre navigateur, sans temps d'envoi.",
        },
        {
          q: "Les très grands nombres sont-ils conservés exactement ?",
          a: "Les entiers supérieurs à 9 007 199 254 740 991 ne peuvent pas être représentés exactement en JavaScript : ils peuvent donc être arrondis lors du formatage. Si vous manipulez de très grands identifiants, stockez-les sous forme de chaînes dans votre JSON.",
        },
        {
          q: "Mon JSON est-il envoyé à un serveur ?",
          a: "Non. L'analyse, la validation et le formatage se font entièrement dans votre navigateur. Vous pouvez donc coller sans risque des réponses d'API contenant des jetons, des clés ou des données personnelles.",
        },
      ],
    },

    "meta-tag-checker": {
      name: "Vérificateur de balise title et meta description",
      summary: "Vérifiez la longueur du title et de la meta description, avec aperçu.",
      seoTitle: "Vérificateur balise title et meta description – Aperçu SERP",
      seoDescription:
        "Vérifiez la longueur de votre balise title et de votre meta description en caractères et en pixels, prévisualisez votre résultat et copiez le code HTML.",
      keywords: [
        "longueur balise title",
        "longueur meta description",
        "vérifier balise title",
        "taille meta description",
        "simulateur serp",
        "aperçu serp",
        "test balise title",
        "outil meta description",
      ],
      howTo: [
        "Saisissez ou collez le titre de votre page dans le champ « Balise title ».",
        "Ajoutez votre meta description et, si vous le souhaitez, l'URL de la page.",
        "Surveillez le nombre de caractères et de pixels ainsi que l'aperçu en direct. Visez « Bonne longueur » pour les deux.",
        "Cliquez sur « Copier le code » et collez les balises dans la section <head> de votre page.",
      ],
      content: [
        { h2: "Pourquoi la largeur en pixels compte" },
        {
          p: "Les moteurs de recherche tronquent les titres et les descriptions selon leur largeur à l'écran, et non selon leur nombre de caractères. C'est pourquoi cet outil mesure les deux : environ 580 pixels pour les titres (en général 50 à 60 caractères) et environ 920 pixels pour les descriptions sur ordinateur (en général 150 à 160 caractères).",
        },
        { h2: "Conseils pour rédiger une meilleure balise title" },
        {
          ul: [
            "Placez votre mot-clé principal près du début.",
            "Donnez à chaque page un titre unique qui correspond à ce que recherchent les internautes.",
            "Ajoutez le nom de votre marque à la fin, séparé par un tiret ou une barre verticale.",
            "Évitez les MAJUSCULES et la répétition excessive de mots-clés.",
          ],
        },
        { h2: "Conseils pour rédiger une meilleure meta description" },
        {
          ul: [
            "Résumez l'intérêt de la page en une ou deux phrases.",
            "Intégrez votre mot-clé naturellement. Les moteurs de recherche mettent souvent en gras les mots qui correspondent à la recherche.",
            "Terminez par un appel à l'action clair, comme « Essayez gratuitement » ou « Consultez le guide complet ».",
          ],
        },
      ],
      faqs: [
        {
          q: "Quelle est la longueur idéale d'une balise title ?",
          a: "Visez environ 50 à 60 caractères, soit moins de 580 pixels de large environ. Au-delà, les titres sont généralement coupés par des points de suspension dans les résultats de recherche sur ordinateur.",
        },
        {
          q: "Quelle est la longueur idéale d'une meta description ?",
          a: "Entre 120 et 160 caractères environ, c'est idéal. Une description plus courte risque de ne pas présenter suffisamment la page, et une description plus longue est généralement tronquée.",
        },
        {
          q: "La meta description influence-t-elle le référencement ?",
          a: "Google a indiqué que la meta description n'est pas un facteur de classement direct. Elle reste importante, car une description claire et pertinente peut inciter davantage d'internautes à cliquer sur votre résultat.",
        },
        {
          q: "Pourquoi Google affiche-t-il un titre ou une description différents des miens ?",
          a: "Les moteurs de recherche réécrivent parfois les titres et les descriptions pour mieux correspondre à la requête de l'internaute, en utilisant d'autres passages de votre page. Des balises précises et fidèles au contenu ont plus de chances d'être reprises telles quelles.",
        },
        {
          q: "Pourquoi mesurer en pixels plutôt qu'en caractères ?",
          a: "Les résultats de recherche sont coupés selon la place occupée par le texte, et non selon son nombre de lettres. Un titre rempli de lettres larges comme W et M est coupé plus tôt qu'un titre composé de lettres étroites comme i et l.",
        },
      ],
    },

    "keyword-generator": {
      name: "Générateur de mots-clés",
      summary: "Des centaines d'idées de mots-clés SEO, classées par intention.",
      seoTitle: "Générateur de mots-clés gratuit – Idées de mots-clés SEO",
      seoDescription:
        "Générez des centaines d'idées de mots-clés à partir d'un seul mot : questions, longue traîne, achat et comparaisons, en 7 langues. Gratuit, sans inscription.",
      keywords: [
        "générateur de mots-clés",
        "générateur de mots clés gratuit",
        "idées de mots-clés",
        "outil mots clés",
        "recherche de mots-clés",
        "trouver des mots clés",
        "mots-clés longue traîne",
        "mots clés seo",
      ],
      howTo: [
        "Saisissez un mot-clé ou un sujet, comme « prêt immobilier » ou « compteur de mots ». Séparez plusieurs mots-clés par des virgules.",
        "Choisissez la langue des idées de mots-clés.",
        "Parcourez les idées, classées en questions, expressions populaires, longue traîne, mots-clés d'achat et comparaisons.",
        "Filtrez la liste, copiez un groupe ou téléchargez le tout au format CSV pour votre tableur.",
      ],
      content: [
        { h2: "Qu'est-ce qu'un générateur de mots-clés ?" },
        {
          p: "Un générateur de mots-clés transforme un mot de départ en de nombreuses expressions de recherche associées. Il vous aide à découvrir ce que les internautes pourraient taper dans Google, pour bâtir vos articles de blog, vos pages produits et vos FAQ autour de vraies questions plutôt qu'au hasard.",
        },
        { h2: "Comprendre l'intention de recherche" },
        {
          ul: [
            "**Informationnelle :** l'internaute veut apprendre quelque chose, par ex. « comment fonctionne un prêt immobilier ». Répondez-y avec des guides et des FAQ.",
            "**Commerciale :** l'internaute compare des options, par ex. « meilleur prêt immobilier » ou « alternative au prêt immobilier ». Répondez-y avec des avis et des comparatifs.",
            "**Transactionnelle :** l'internaute est prêt à passer à l'action, par ex. « souscrire un prêt immobilier » ou « acheter ». Répondez-y avec des pages produits, des tarifs ou des pages d'inscription.",
          ],
        },
        { h2: "Comment choisir les bons mots-clés" },
        {
          ul: [
            "**Commencez par la longue traîne.** Les expressions plus longues et plus précises sont moins concurrentielles, et un site récent se positionne plus facilement dessus.",
            "**Vérifiez le volume de recherche** de vos idées préférées dans l'Outil de planification des mots clés de Google Ads (gratuit avec un compte Google Ads) ou dans Google Search Console une fois que votre site reçoit du trafic.",
            "**Regardez les résultats actuels** sur Google pour chaque mot-clé. Si de grandes marques occupent toute la première page, choisissez une expression plus précise.",
            "**Rédigez une page par sujet principal** et utilisez naturellement les mots-clés proches dans ses titres et son texte.",
          ],
        },
      ],
      faqs: [
        {
          q: "Cet outil affiche-t-il le volume de recherche ?",
          a: "Non. Il génère des idées de mots-clés à partir de modèles de recherche éprouvés, mais les données de volume proviennent de bases payantes. Vérifiez gratuitement le volume de vos meilleures idées dans l'Outil de planification des mots clés de Google Ads ou dans Google Search Console.",
        },
        {
          q: "Quelle différence avec Ahrefs ou Semrush ?",
          a: "Les outils payants comme Ahrefs et Semrush associent les idées de mots-clés à leurs propres données de volume et de difficulté. Cet outil se concentre sur la génération d'idées rapide et gratuite, première étape de toute recherche de mots-clés.",
        },
        {
          q: "Puis-je générer des mots-clés dans d'autres langues ?",
          a: "Oui. Choisissez une langue et les idées sont construites à partir d'expressions naturelles en français, anglais, allemand, espagnol, portugais, italien ou néerlandais.",
        },
        {
          q: "Qu'est-ce que la longue traîne ?",
          a: "Les mots-clés de longue traîne sont des expressions plus longues et plus précises, comme « compteur de mots pour étudiants ». Chacun est moins recherché, mais ils sont plus faciles à positionner et attirent généralement des visiteurs qui savent exactement ce qu'ils veulent.",
        },
        {
          q: "L'outil est-il gratuit ?",
          a: "Oui. Le générateur de mots-clés est entièrement gratuit, sans compte ni limite quotidienne. Il fonctionne dans votre navigateur : vos mots-clés ne sont envoyés à aucun serveur.",
        },
      ],
    },
  },

  keywordTemplates: {
    questions: [
      "qu'est-ce que {k}",
      "{k} c'est quoi",
      "à quoi sert {k}",
      "comment fonctionne {k}",
      "{k} comment ça marche",
      "comment utiliser {k}",
      "comment choisir {k}",
      "quel est le meilleur {k}",
      "{k} combien ça coûte",
      "pourquoi utiliser {k}",
      "{k} gratuit ou payant",
      "{k} fiable ou pas",
      "{k} ça vaut le coup",
      "où trouver {k}",
      "quand utiliser {k}",
      "peut-on avoir {k} gratuitement",
    ],
    modifiers: [
      "meilleur {k}",
      "{k} gratuit",
      "{k} en ligne",
      "{k} en ligne gratuit",
      "{k} gratuitement",
      "top {k}",
      "{k} facile",
      "{k} simple",
      "{k} rapide",
      "meilleur {k} gratuit",
      "outil {k}",
      "application {k}",
      "logiciel {k}",
      "site {k}",
      "{k} {year}",
    ],
    longTail: [
      "{k} pour débutants",
      "{k} pour étudiants",
      "{k} pour petites entreprises",
      "{k} pour professionnels",
      "{k} pour mac",
      "{k} pour windows",
      "{k} pour android",
      "{k} pour iphone",
      "{k} sans inscription",
      "{k} sans téléchargement",
      "{k} astuces",
      "{k} tuto",
      "{k} exemple",
      "{k} guide complet",
      "{k} étape par étape",
      "{k} mode d'emploi",
    ],
    commercial: [
      "acheter {k}",
      "commander {k}",
      "{k} prix",
      "prix {k}",
      "{k} tarif",
      "{k} pas cher",
      "{k} promo",
      "{k} code promo",
      "{k} bon plan",
      "{k} essai gratuit",
      "{k} abonnement",
      "{k} avis",
      "{k} près de chez moi",
    ],
    comparisons: [
      "alternative à {k}",
      "meilleure alternative à {k}",
      "alternative gratuite à {k}",
      "{k} comparatif",
      "comparatif {k} {year}",
      "{k} avantages et inconvénients",
      "{k} gratuit vs payant",
      "{k} concurrents",
      "top 10 {k}",
      "{k} avis {year}",
      "classement {k}",
      "meilleur {k} {year}",
    ],
  },
};

export default content;
