import type { ContentDictionary } from "../../types";

const content: ContentDictionary = {
  categories: {
    "image-tools": {
      name: "Afbeeldingstools",
      shortName: "Afbeelding",
      tagline: "Comprimeren en verkleinen",
      description:
        "Gratis afbeeldingstools die in je browser werken. Je foto's worden op je eigen apparaat verwerkt en nooit naar een server geüpload.",
    },
    "pdf-tools": {
      name: "PDF-tools",
      shortName: "PDF",
      tagline: "Samenvoegen en omzetten",
      description:
        "Werk met PDF-bestanden zonder software te installeren. Je bestanden blijven op je apparaat, zodat privédocumenten ook echt privé blijven.",
    },
    calculators: {
      name: "Calculators",
      shortName: "Calculators",
      tagline: "Reken alles uit",
      description:
        "Snelle, nauwkeurige calculators voor leningen, geldzaken en alledaags rekenwerk, met de volledige berekening achter elke uitkomst.",
    },
    "text-tools": {
      name: "Teksttools",
      shortName: "Tekst",
      tagline: "Tekst bewerken en opmaken",
      description:
        "Tekst direct tellen, opschonen en omzetten. Handig voor scholieren, studenten, schrijvers, bloggers en iedereen met een woordlimiet.",
    },
    "developer-tools": {
      name: "Developertools",
      shortName: "Developer",
      tagline: "JSON en codering",
      description:
        "Handige tools voor developers: data formatteren, valideren en omzetten zonder die op een externe server te plakken.",
    },
    "seo-tools": {
      name: "SEO-tools",
      shortName: "SEO",
      tagline: "Zoekwoorden en snippets",
      description:
        "Vind zoekwoordideeën en check hoe je pagina's in de zoekresultaten verschijnen, met tools voor bloggers en website-eigenaren.",
    },
  },

  tools: {
    "image-compressor": {
      name: "Afbeelding verkleinen",
      summary: "Verklein JPG, PNG en WebP zonder zichtbaar kwaliteitsverlies.",
      seoTitle: "Afbeelding verkleinen – Foto's gratis online comprimeren",
      seoDescription:
        "Verklein je foto's en afbeeldingen gratis online. Comprimeer JPG, PNG en WebP, pas het formaat aan en converteer in je browser. Er wordt niets geüpload.",
      keywords: [
        "afbeelding verkleinen",
        "foto verkleinen",
        "foto comprimeren",
        "afbeelding comprimeren",
        "jpg verkleinen",
        "png verkleinen",
        "foto verkleinen kb",
        "foto verkleinen naar 100 kb",
      ],
      howTo: [
        "Klik op “Kies afbeeldingen” of sleep je JPG-, PNG- of WebP-bestanden naar het vak. Je kunt er meerdere tegelijk toevoegen.",
        "Verschuif de kwaliteitsschuif. 70% is een goed startpunt voor foto's, en de nieuwe bestandsgrootte wordt automatisch bijgewerkt.",
        "Kies eventueel een ander uitvoerformaat, of stel een maximale breedte in om grote foto's kleiner te maken.",
        "Download elke afbeelding apart, of klik op “Alles downloaden”.",
      ],
      content: [
        { h2: "Waarom zou je afbeeldingen verkleinen?" },
        {
          p: "Een foto die rechtstreeks van je telefooncamera komt, is vaak 3–5 MB. Dat is veel meer dan je nodig hebt voor een website, een e-mailbijlage of een online formulier, waar 100–300 KB meestal ruim voldoende is. Kleinere afbeeldingen upload je sneller, ze laden sneller voor je bezoekers en je blijft makkelijker onder de maximale bestandsgrootte van sollicitatiesites, webshops en online formulieren van bijvoorbeeld je gemeente of verzekeraar.",
        },
        { h2: "Welk uitvoerformaat kies je?" },
        {
          ul: [
            "**JPG** werkt overal en is de beste keuze voor foto's.",
            "**WebP** is een modern formaat dat bij dezelfde beeldkwaliteit vaak 25–35% kleiner is dan JPG. Alle moderne browsers ondersteunen het, maar sommige oudere apps en uploadformulieren niet.",
            "**PNG** is verliesvrij (lossless). Gebruik het voor screenshots, logo's en afbeeldingen met transparantie. Voor foto's levert het veel grotere bestanden op.",
          ],
        },
        { h2: "Je foto's blijven bij jou" },
        {
          p: "Veel online compressors uploaden je foto's naar hun servers. Deze tool niet. Hij gebruikt de ingebouwde beeldverwerking van je browser, dus je bestanden verlaten je apparaat nooit en de tool blijft ook bij een trage verbinding werken zodra de pagina geladen is.",
        },
      ],
      faqs: [
        {
          q: "Gaat de kwaliteit van mijn afbeelding achteruit door het comprimeren?",
          a: "JPG- en WebP-compressie werkt met verlies (lossy): er wordt wat detail weggelaten om ruimte te besparen. Bij 60–80% kwaliteit is het verschil op een scherm meestal onzichtbaar. Je originele bestand wordt nooit aangepast, dus je kunt het altijd opnieuw proberen met een hogere kwaliteit.",
        },
        {
          q: "Hoe verklein ik een foto naar 100 KB of 200 KB?",
          a: "Zet de kwaliteitsschuif lager en kijk hoe de nieuwe bestandsgrootte verandert. Is de afbeelding nog te groot? Stel dan een maximale breedte in, bijvoorbeeld 1200 pixels. Grote telefoonfoto's komen meestal onder de 200 KB uit zodra ze worden verkleind tot zo'n 1200–1600 pixels breed.",
        },
        {
          q: "Worden mijn afbeeldingen naar een server geüpload?",
          a: "Nee. Al het comprimeren gebeurt in je webbrowser, op je eigen apparaat. Je afbeeldingen worden nooit naar ons of iemand anders gestuurd, waardoor deze tool veilig is voor een kopie van je identiteitsbewijs, documenten en persoonlijke foto's.",
        },
        {
          q: "Waarom werd mijn PNG-bestand nauwelijks kleiner?",
          a: "PNG is een verliesvrij formaat, dus de kwaliteitsinstelling heeft er geen effect op. Wil je een PNG veel kleiner maken, zet hem dan om naar WebP of JPG, of maak hem minder breed. Gebruik PNG voor logo's, iconen en screenshots die scherpe randen of transparantie nodig hebben.",
        },
        {
          q: "Is er een limiet aan het aantal afbeeldingen dat ik kan comprimeren?",
          a: "Wij stellen geen limiet. Je kunt zoveel afbeeldingen toevoegen als je wilt. Heel grote afbeeldingen (meer dan 50 megapixel) kunnen traag zijn op oudere telefoons, omdat het werk op je eigen apparaat gebeurt.",
        },
      ],
    },

    "merge-pdf": {
      name: "PDF samenvoegen",
      summary: "Voeg meerdere PDF-bestanden samen tot één document, in elke volgorde.",
      seoTitle: "PDF samenvoegen – Gratis PDF-bestanden online combineren",
      seoDescription:
        "Voeg meerdere PDF-bestanden in een paar seconden samen tot één PDF en bepaal zelf de volgorde. Gratis, zonder account, en je PDF's verlaten je apparaat nooit.",
      keywords: [
        "pdf samenvoegen",
        "pdf bestanden samenvoegen",
        "pdf combineren",
        "pdf samenvoegen gratis",
        "pdf samenvoegen online",
        "meerdere pdf samenvoegen",
        "pdf samenvoegen tot 1 bestand",
        "pdf aan elkaar plakken",
      ],
      howTo: [
        "Klik op “Kies PDF-bestanden” of sleep twee of meer PDF's naar het vak.",
        "Zet de bestanden in de gewenste volgorde met de pijltjes omhoog en omlaag.",
        "Klik op “Samenvoegen en downloaden”. Je gecombineerde bestand wordt opgeslagen als merged.pdf.",
      ],
      content: [
        { h2: "Wanneer is PDF's samenvoegen handig?" },
        {
          ul: [
            "Als je meerdere documenten (identiteitsbewijs, diploma's, cijferlijsten) moet uploaden op een website die maar één bestand accepteert, bijvoorbeeld bij een sollicitatie of een aanmelding.",
            "Gescande pagina's combineren tot één document.",
            "Eén overzichtelijk bestand met facturen of bonnetjes naar je boekhouder sturen.",
            "Hoofdstukken of rapporten samenvoegen tot één PDF, zodat je ze makkelijker leest en print.",
          ],
        },
        { h2: "Wat blijft er behouden in het samengevoegde bestand?" },
        {
          p: "De inhoud, het formaat en de oriëntatie van elke pagina worden exact gekopieerd. Interactieve extra's zoals formuliervelden, bladwijzers en de inhoudsopgave van de originele bestanden worden mogelijk niet meegenomen naar het samengevoegde document.",
        },
        { h2: "Je documenten blijven bij jou" },
        {
          p: "De meeste PDF-websites uploaden je documenten naar hun servers om ze te verwerken. Deze tool gebruikt in plaats daarvan de opensourcebibliotheek pdf-lib om het werk in je browser te doen, dus je bestanden verlaten je apparaat nooit.",
        },
      ],
      faqs: [
        {
          q: "Is er een limiet aan het aantal of de grootte van de PDF's?",
          a: "Wij stellen geen limiet. Omdat het samenvoegen op je apparaat gebeurt, hangt de praktische limiet af van het geheugen van je apparaat. Documenten met honderden pagina's worden op de meeste computers en moderne telefoons zonder problemen samengevoegd.",
        },
        {
          q: "Kan ik PDF's met een wachtwoord samenvoegen?",
          a: "Nee. Versleutelde PDF's kun je pas combineren als de wachtwoordbeveiliging is verwijderd. Open het bestand met het wachtwoord in een PDF-lezer, sla een onbeveiligde kopie op en voeg die kopie samen.",
        },
        {
          q: "Gaat de kwaliteit van mijn PDF achteruit door het samenvoegen?",
          a: "Nee. Pagina's worden precies gekopieerd zoals ze zijn, zonder tekst of afbeeldingen opnieuw te comprimeren, dus de samengevoegde PDF ziet er hetzelfde uit als de originelen.",
        },
        {
          q: "Kan ik PDF-bestanden samenvoegen op mijn telefoon?",
          a: "Ja. De tool werkt in Chrome, Safari, Firefox en andere moderne mobiele browsers. Kies de bestanden uit de opslag van je telefoon, zet ze in de juiste volgorde en tik op Samenvoegen en downloaden.",
        },
        {
          q: "Worden mijn PDF-bestanden ergens geüpload?",
          a: "Nee. Je PDF's worden in je browser gelezen en samengevoegd en nooit naar een server geüpload. Zo blijven gevoelige documenten zoals identiteitsbewijzen, contracten en bankafschriften privé.",
        },
      ],
    },

    "emi-calculator": {
      name: "Lening berekenen",
      summary: "Bereken je maandbedrag, totale rente en aflosschema van je lening.",
      seoTitle: "Lening berekenen – Maandlasten, rente en aflosschema",
      seoDescription:
        "Bereken direct de maandlasten, totale rente en het totaalbedrag van je lening. Met een aflosschema per jaar voor hypotheek, autolening en persoonlijke lening.",
      keywords: [
        "lening berekenen",
        "maandlasten berekenen",
        "annuïteitenlening berekenen",
        "rente berekenen lening",
        "aflossing berekenen",
        "leningcalculator",
        "hypotheek maandlasten berekenen",
        "persoonlijke lening berekenen",
      ],
      howTo: [
        "Vul het leenbedrag in en kies je valuta.",
        "Vul de jaarlijkse rente in die je geldverstrekker biedt.",
        "Vul de looptijd in, in jaren of maanden.",
        "Je maandbedrag, de totale rente en het totaalbedrag worden direct bijgewerkt, samen met een aflosschema per jaar.",
      ],
      content: [
        { h2: "Wat is een annuïteitenlening?" },
        {
          p: "Bij een **annuïteitenlening** betaal je elke maand hetzelfde bedrag aan je geldverstrekker, tot de lening volledig is afgelost. Die vaste maandlasten bestaan uit twee delen: rente over de openstaande schuld en aflossing op het geleende bedrag. In de eerste jaren is het grootste deel rente, in de latere jaren vooral aflossing. Veel hypotheken, autoleningen en persoonlijke leningen werken op deze manier.",
        },
        { h2: "De formule voor het maandbedrag" },
        {
          p: "**Maandbedrag = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)**, waarbij P het leenbedrag is, r de maandrente (jaarrente ÷ 12 ÷ 100) en n het aantal maandelijkse termijnen.",
        },
        {
          p: "Een voorbeeld: een lening van € 200.000 tegen 3,5% per jaar met een looptijd van 25 jaar geeft r = 0,00292 en n = 300. Het maandbedrag is dan ongeveer **€ 1.001**. In 25 jaar betaal je in totaal ongeveer € 300.374 terug, waarvan ongeveer € 100.374 rente.",
        },
        { h2: "Zo betaal je minder rente" },
        {
          ul: [
            "**Kies een kortere looptijd als je dat kunt betalen.** Een langere looptijd verlaagt je maandlasten, maar verhoogt de totale rente flink.",
            "**Los extra af als het kan.** Zelfs af en toe een extra aflossing in de eerste jaren scheelt veel rente.",
            "**Vergelijk geldverstrekkers.** Een renteverschil van maar 0,5% loopt bij een hypotheek met een lange looptijd op tot een flink bedrag.",
            "**Breng meer eigen geld in**, zodat je minder hoeft te lenen.",
          ],
        },
        {
          p: "**Let op:** de uitkomsten zijn schattingen om mee te plannen. De exacte bedragen van je geldverstrekker kunnen iets afwijken door kosten, afronding en rentewijzigingen. Dit is geen financieel advies.",
        },
      ],
      faqs: [
        {
          q: "Kan ik dit gebruiken voor een hypotheek, autolening of persoonlijke lening?",
          a: "Ja. De calculator werkt voor elke lening waarbij je elke maand een vast bedrag betaalt en rente over de openstaande schuld, zoals een annuïteitenhypotheek, de meeste autoleningen en persoonlijke leningen. Bij een lineaire hypotheek los je elke maand hetzelfde bedrag af en dalen je maandlasten, dus daarvoor geldt een andere berekening.",
        },
        {
          q: "Werkt het ook met een variabele rente?",
          a: "De berekening gaat ervan uit dat de rente de hele looptijd gelijk blijft. Heb je een variabele rente, of loopt je rentevaste periode af? Reken dan opnieuw met de nieuwe rente zodra je geldverstrekker die aanpast.",
        },
        {
          q: "Zitten afsluitkosten of verzekeringen in het maandbedrag?",
          a: "Nee. De uitkomst omvat alleen aflossing en rente. Afsluitkosten, advieskosten, verzekeringen en andere kosten komen daar nog bij en verschillen per geldverstrekker.",
        },
        {
          q: "Wat gebeurt er als ik een deel van mijn lening extra aflos?",
          a: "Een extra aflossing verlaagt je openstaande schuld, waardoor je vanaf dat moment minder rente betaalt. De meeste geldverstrekkers verkorten daarna je looptijd of verlagen je maandbedrag. Controleer of je geldverstrekker een boete rekent voor extra aflossen. Bij veel hypotheken mag je elk jaar een deel boetevrij aflossen.",
        },
        {
          q: "Waarom gaat in het begin het grootste deel van mijn maandbedrag naar rente?",
          a: "Rente wordt berekend over de openstaande schuld, en die is aan het begin van de lening het hoogst. Naarmate je aflost, wordt het rentedeel van elke termijn kleiner en het aflossingsdeel groter. Je ziet dit terug in het aflosschema per jaar hierboven.",
        },
      ],
    },

    "word-counter": {
      name: "Woorden tellen",
      summary: "Tel woorden, tekens, zinnen en leestijd terwijl je typt.",
      seoTitle: "Woorden tellen – Gratis online woordenteller en tekenteller",
      seoDescription:
        "Gratis woordenteller: tel woorden, tekens, zinnen en alinea's en zie direct de leestijd. Werkt in elke taal, ook in het Chinees, Japans en Arabisch.",
      keywords: [
        "woorden tellen",
        "woordenteller",
        "tekens tellen",
        "karakters tellen",
        "aantal woorden tellen",
        "woorden tellen online",
        "tekenteller",
        "leestijd berekenen",
      ],
      howTo: [
        "Typ in het tekstvak of plak je tekst.",
        "Het aantal woorden, tekens, zinnen en alinea's wordt direct bijgewerkt terwijl je typt.",
        "Bekijk de geschatte lees- en spreektijd en zie welke zoekwoorden je het vaakst herhaalt.",
        "Gebruik “Tekst kopiëren” om je tekst te kopiëren of “Wissen” om opnieuw te beginnen.",
      ],
      content: [
        { h2: "Wat deze woordenteller meet" },
        {
          ul: [
            "**Woorden en tekens**, met en zonder spaties.",
            "**Zinnen en alinea's**, waarbij elke niet-lege regel als alinea telt.",
            "**Lees- en spreektijd**, handig voor blogs, toespraken en presentaties.",
            "**Zoekwoorddichtheid**, die laat zien hoe vaak je belangrijke woorden herhaalt, zodat je ze niet te vaak gebruikt.",
          ],
        },
        { h2: "Veelvoorkomende limieten voor woorden en tekens" },
        {
          ul: [
            "Post op X (Twitter): 280 tekens",
            "Meta description voor SEO: ongeveer 155–160 tekens",
            "Instagram-bijschrift: 2.200 tekens",
            "LinkedIn-post: 3.000 tekens",
            "Sollicitatiebrief: meestal één A4, zo'n 250–400 woorden",
          ],
        },
        { h2: "Geschikt voor elke taal" },
        {
          p: "Veel eenvoudige woordentellers splitsen tekst alleen op spaties, wat in veel talen verkeerde resultaten geeft. Deze tool gebruikt de taalbewuste tekstsegmentatie die in moderne browsers is ingebouwd, zodat de telling klopt of je nu in het Nederlands, Engels, Chinees of Japans schrijft.",
        },
      ],
      faqs: [
        {
          q: "Hoe telt de woordenteller woorden?",
          a: "Hij gebruikt de ingebouwde, taalbewuste tekstsegmentatie van je browser, dezelfde techniek waarmee je een woord selecteert door erop te dubbelklikken. Getallen tellen als woorden. Woorden met een koppelteken, zoals “zwart-wit”, tellen als twee woorden.",
        },
        {
          q: "Tellen spaties mee als tekens?",
          a: "Het hoofdgetal bij Tekens telt spaties en regeleinden mee. Onder het tekstvak zie je ook het aantal tekens zonder spaties, waar sommige formulieren en opdrachten om vragen.",
        },
        {
          q: "Hoe wordt de leestijd berekend?",
          a: "Voor de leestijd gaan we uit van een gemiddelde stille leessnelheid van 238 woorden per minuut voor volwassenen. Voor de spreektijd rekenen we met een rustig presentatietempo van 140 woorden per minuut.",
        },
        {
          q: "Wordt mijn tekst opgeslagen of ergens naartoe gestuurd?",
          a: "Nee. Je tekst blijft in je browser en wordt nooit geüpload. Hij wordt ook niet opgeslagen, dus als je de pagina vernieuwt, is hij weg. Kopieer alles wat je wilt bewaren.",
        },
        {
          q: "Werkt het ook met andere talen, zoals Chinees of Arabisch?",
          a: "Ja. Omdat de tool taalbewuste segmentatie gebruikt, telt hij woorden en tekens correct in het Nederlands, Frans, Duits, Turks, Arabisch en vele andere talen, en zelfs in talen die zonder spaties worden geschreven, zoals Chinees en Japans.",
        },
      ],
    },

    "json-formatter": {
      name: "JSON formatter",
      summary: "Formatteer, valideer en minificeer JSON, met exacte foutlocaties.",
      seoTitle: "JSON formatter en validator – JSON online formatteren",
      seoDescription:
        "Formatteer, valideer en minificeer JSON online. Vind syntaxfouten op regel en kolom en sorteer keys op alfabet. Je data blijft gewoon in je eigen browser.",
      keywords: [
        "json formatter",
        "json validator",
        "json beautifier",
        "json formatteren",
        "json valideren",
        "json minify",
        "json checker",
        "json online bekijken",
      ],
      howTo: [
        "Plak je JSON in het invoervak, of klik op “Voorbeeld” om het met een voorbeeld te proberen.",
        "De tool controleert je JSON terwijl je typt en toont de exacte regel en kolom van elke fout.",
        "Klik op “Formatteren” om het netjes op te maken (kies 2 spaties, 4 spaties of tabs, en sorteer eventueel de keys) of op “Minificeren” om het zo compact mogelijk te maken.",
        "Kopieer het resultaat of download het als .json-bestand.",
      ],
      content: [
        { h2: "Wat is een JSON formatter?" },
        {
          p: "JSON (JavaScript Object Notation) is het meest gebruikte formaat om data uit te wisselen tussen apps en API's. Om ruimte te besparen wordt het vaak als één lange regel verstuurd, en dat leest lastig. Een JSON formatter voegt inspringing en regeleinden toe zodat de structuur duidelijk wordt, en een validator controleert of de syntax klopt.",
        },
        { h2: "Veelvoorkomende JSON-fouten en hoe je ze oplost" },
        {
          ul: [
            "**Komma aan het eind:** verwijder de komma na het laatste item in een object of array.",
            "**Enkele aanhalingstekens:** vervang `'text'` door `\"text\"`.",
            "**Keys zonder aanhalingstekens:** schrijf `{\"name\": 1}`, niet `{name: 1}`.",
            "**Commentaar:** JSON ondersteunt geen commentaar met `//` of `/* */`.",
            "**Ontbrekende komma's** tussen items, vaak na kopiëren en plakken.",
          ],
        },
        { h2: "Je data blijft privé" },
        {
          p: "API-responses en configuratiebestanden bevatten vaak toegangstokens, e-mailadressen of andere gevoelige gegevens. Veel online formatters sturen wat je plakt naar een server. Deze niet: alle verwerking gebeurt in je browser.",
        },
      ],
      faqs: [
        {
          q: "Wat is het verschil tussen JSON formatteren en minificeren?",
          a: "Bij formatteren (ook wel beautifyen of pretty-printen genoemd) worden regeleinden en inspringing toegevoegd, zodat JSON makkelijk leesbaar is voor mensen. Bij minificeren wordt alle overbodige witruimte verwijderd, zodat de data zo klein mogelijk is om over een netwerk te versturen.",
        },
        {
          q: "Waarom is mijn JSON ongeldig terwijl het in JavaScript wel werkt?",
          a: "Object literals in JavaScript zijn soepeler dan JSON. JSON vereist dubbele aanhalingstekens rond elke key en string, en staat geen komma's aan het eind, commentaar, enkele aanhalingstekens of waarden als undefined en NaN toe.",
        },
        {
          q: "Kan de tool grote JSON-bestanden aan?",
          a: "Ja. Bestanden van enkele megabytes worden op een gemiddelde computer ruim binnen een seconde geformatteerd, omdat alles lokaal in je browser draait en er geen uploadtijd is.",
        },
        {
          q: "Blijven heel grote getallen exact behouden?",
          a: "Gehele getallen groter dan 9.007.199.254.740.991 kunnen in JavaScript niet exact worden weergegeven en worden bij het formatteren mogelijk afgerond. Werk je met heel grote ID's, sla ze dan als strings op in je JSON.",
        },
        {
          q: "Wordt mijn JSON naar een server gestuurd?",
          a: "Nee. Parsen, valideren en formatteren gebeurt allemaal in je browser. Daardoor kun je veilig API-responses plakken met tokens, sleutels of persoonsgegevens.",
        },
      ],
    },

    "meta-tag-checker": {
      name: "Meta title en description checker",
      summary: "Check de lengte van je meta title en description, met live preview.",
      seoTitle: "Meta title en description checker – Lengte & SERP-preview",
      seoDescription:
        "Check de lengte van je meta title en meta description in tekens en pixels, bekijk hoe je pagina in de zoekresultaten verschijnt en kopieer de HTML-tags.",
      keywords: [
        "meta title checker",
        "meta description checker",
        "meta description lengte",
        "meta title lengte",
        "title tag lengte",
        "serp preview",
        "snippet preview",
        "seo title checker",
      ],
      howTo: [
        "Typ of plak de titel van je pagina in het vak Meta title.",
        "Voeg je meta description toe en, als je wilt, de URL van de pagina.",
        "Let op het aantal tekens en pixels en de live preview. Streef bij allebei naar “Goede lengte”.",
        "Klik op “Code kopiëren” en plak de tags in de <head>-sectie van je pagina.",
      ],
      content: [
        { h2: "Waarom de breedte in pixels telt" },
        {
          p: "Zoekmachines korten titels en beschrijvingen in op basis van hun breedte op het scherm, niet op het aantal tekens. Daarom meet deze checker allebei: ongeveer 580 pixels voor titels (meestal 50–60 tekens) en ongeveer 920 pixels voor beschrijvingen op desktop (meestal 150–160 tekens).",
        },
        { h2: "Tips voor een betere meta title" },
        {
          ul: [
            "Zet je belangrijkste zoekwoord vooraan.",
            "Geef elke pagina een unieke titel die aansluit bij waar zoekers naar op zoek zijn.",
            "Zet je merknaam aan het eind, gescheiden door een streepje of een verticale streep.",
            "Vermijd tekst in HOOFDLETTERS en titels die volgepropt zijn met herhaalde zoekwoorden.",
          ],
        },
        { h2: "Tips voor een betere meta description" },
        {
          ul: [
            "Vat in één of twee zinnen samen wat de pagina te bieden heeft.",
            "Verwerk je zoekwoord op een natuurlijke manier. Zoekmachines maken woorden die overeenkomen met de zoekopdracht vaak vetgedrukt.",
            "Sluit af met een duidelijke call-to-action, zoals “Probeer het gratis” of “Bekijk de volledige gids”.",
          ],
        },
      ],
      faqs: [
        {
          q: "Wat is de ideale lengte van een meta title?",
          a: "Houd ongeveer 50–60 tekens aan, of minder dan zo'n 580 pixels breed. Langere titels worden in de zoekresultaten op desktop meestal afgekapt met een beletselteken (…).",
        },
        {
          q: "Wat is de ideale lengte van een meta description?",
          a: "Zo'n 120–160 tekens werkt goed. Kortere beschrijvingen leggen de pagina vaak niet goed genoeg uit, en langere worden meestal ingekort.",
        },
        {
          q: "Heeft de meta description invloed op je ranking?",
          a: "Google heeft aangegeven dat de meta description geen directe rankingfactor is. Toch is hij belangrijk, want een duidelijke en relevante beschrijving kan meer mensen overhalen om op jouw resultaat te klikken.",
        },
        {
          q: "Waarom toont Google een andere titel of beschrijving dan de mijne?",
          a: "Zoekmachines herschrijven titels en beschrijvingen soms met andere tekst van je pagina, zodat ze beter aansluiten op de zoekopdracht. Met nauwkeurige, specifieke tags is de kans groter dat die van jou worden gebruikt.",
        },
        {
          q: "Waarom pixels meten in plaats van tekens?",
          a: "Zoekresultaten worden afgekapt op basis van hoeveel ruimte de tekst inneemt, niet hoeveel letters hij heeft. Een titel vol brede letters zoals W en M wordt eerder afgekapt dan een titel met smalle letters zoals i en l.",
        },
      ],
    },

    "keyword-generator": {
      name: "Zoekwoorden generator",
      summary: "Krijg honderden zoekwoordideeën voor SEO, gegroepeerd op zoekintentie.",
      seoTitle: "Zoekwoorden generator – Gratis keyword tool voor SEO",
      seoDescription:
        "Genereer honderden zoekwoordideeën uit één woord: vragen, long-tail zoekwoorden, koopgerichte zoekwoorden en vergelijkingen in 7 talen. Gratis, zonder account.",
      keywords: [
        "zoekwoorden generator",
        "keyword generator",
        "zoekwoorden tool",
        "zoekwoordenonderzoek",
        "zoekwoorden vinden",
        "long tail zoekwoorden",
        "seo zoekwoorden",
        "keyword ideeën",
      ],
      howTo: [
        "Typ een zoekwoord of onderwerp, zoals “hypotheek” of “woordenteller”. Scheid meerdere zoekwoorden met komma's.",
        "Kies de taal waarin je zoekwoordideeën wilt.",
        "Blader door de ideeën, gegroepeerd in vragen, populaire zoektermen, long-tail ideeën, koopgerichte zoekwoorden en vergelijkingen.",
        "Filter de lijst, kopieer een groep of download alles als CSV-bestand voor je spreadsheet.",
      ],
      content: [
        { h2: "Wat is een zoekwoorden generator?" },
        {
          p: "Een zoekwoorden generator maakt van één startwoord een hele reeks verwante zoektermen. Zo ontdek je wat mensen in Google kunnen typen, en plan je blogposts, productpagina's en veelgestelde vragen rond echte vragen in plaats van te gokken.",
        },
        { h2: "Zoekintentie begrijpen" },
        {
          ul: [
            "**Informatief:** de zoeker wil iets leren, bijv. “hoe werkt een hypotheek”. Beantwoord dit met handleidingen en veelgestelde vragen.",
            "**Commercieel:** de zoeker vergelijkt opties, bijv. “beste hypotheek” of “hypotheek alternatieven”. Beantwoord dit met reviews en vergelijkingen.",
            "**Transactioneel:** de zoeker is klaar om actie te ondernemen, bijv. “hypotheek afsluiten” of “aanvragen”. Beantwoord dit met product-, prijs- of aanmeldpagina's.",
          ],
        },
        { h2: "Zo kies je de juiste zoekwoorden" },
        {
          ul: [
            "**Begin met long-tail ideeën.** Langere, specifieke zoektermen hebben minder concurrentie, waardoor een nieuwe website er makkelijker op scoort.",
            "**Check het zoekvolume** van je favoriete ideeën in Google Keyword Planner (gratis met een Google Ads-account) of in Google Search Console zodra je site bezoekers heeft.",
            "**Bekijk de huidige resultaten** in Google voor elk zoekwoord. Staan er op de eerste pagina alleen grote merken, kies dan een specifiekere zoekterm.",
            "**Schrijf één pagina per hoofdonderwerp** en verwerk nauw verwante zoekwoorden op een natuurlijke manier in de koppen en de tekst.",
          ],
        },
      ],
      faqs: [
        {
          q: "Toont deze tool het zoekvolume?",
          a: "Nee. De tool genereert zoekwoordideeën op basis van beproefde zoekpatronen, maar gegevens over zoekvolume komen uit betaalde databases. Check het volume van je beste ideeën gratis in Google Keyword Planner of Google Search Console.",
        },
        {
          q: "Wat is het verschil met Ahrefs of Semrush?",
          a: "Betaalde tools zoals Ahrefs en Semrush combineren zoekwoordideeën met hun eigen gegevens over zoekvolume en moeilijkheidsgraad. Deze tool richt zich op snel en gratis ideeën genereren, de eerste stap van zoekwoordenonderzoek.",
        },
        {
          q: "Kan ik zoekwoorden in andere talen genereren?",
          a: "Ja. Kies een taal en de ideeën worden opgebouwd uit natuurlijke zoektermen in het Nederlands, Engels, Duits, Frans, Spaans, Portugees of Italiaans.",
        },
        {
          q: "Wat zijn long-tail zoekwoorden?",
          a: "Long-tail zoekwoorden zijn langere, specifiekere zoektermen, zoals “woordenteller voor studenten”. Op elk ervan wordt minder vaak gezocht, maar je scoort er makkelijker op en ze trekken meestal bezoekers die precies weten wat ze willen.",
        },
        {
          q: "Is het gratis?",
          a: "Ja. De zoekwoorden generator is helemaal gratis, je hebt geen account nodig en er zijn geen daglimieten. Hij werkt in je browser, dus je zoekwoorden worden naar geen enkele server gestuurd.",
        },
      ],
    },
  },

  keywordTemplates: {
    questions: [
      "wat is {k}",
      "wat kost {k}",
      "hoeveel kost {k}",
      "hoe werkt {k}",
      "hoe gebruik je {k}",
      "waar let je op bij {k}",
      "waarom {k} gebruiken",
      "is {k} gratis",
      "is {k} veilig",
      "is {k} het waard",
      "wat zijn de voordelen van {k}",
      "waar kan ik {k} vinden",
      "wanneer gebruik je {k}",
      "wie heeft {k} nodig",
      "kan ik {k} gratis gebruiken",
    ],
    modifiers: [
      "beste {k}",
      "gratis {k}",
      "{k} gratis",
      "{k} online",
      "{k} online gratis",
      "beste gratis {k}",
      "top {k}",
      "{k} tool",
      "{k} app",
      "{k} software",
      "{k} website",
      "{k} nederland",
      "{k} belgië",
      "{k} in het nederlands",
      "{k} downloaden",
      "{k} {year}",
    ],
    longTail: [
      "{k} voor beginners",
      "{k} voor studenten",
      "{k} voor zzp'ers",
      "{k} voor kleine bedrijven",
      "{k} voor mac",
      "{k} voor windows",
      "{k} voor android",
      "{k} voor iphone",
      "{k} zonder account",
      "{k} zonder downloaden",
      "{k} tips",
      "{k} uitleg",
      "{k} voorbeelden",
      "{k} handleiding",
      "{k} stappenplan",
      "{k} checklist",
    ],
    commercial: [
      "{k} kopen",
      "{k} bestellen",
      "{k} prijs",
      "{k} prijzen",
      "{k} kosten",
      "{k} goedkoop",
      "{k} korting",
      "{k} aanbieding",
      "{k} gratis proberen",
      "{k} abonnement",
      "{k} ervaringen",
      "{k} reviews",
      "{k} in de buurt",
    ],
    comparisons: [
      "{k} alternatieven",
      "alternatief voor {k}",
      "gratis alternatief voor {k}",
      "beste {k} alternatieven",
      "{k} vergelijken",
      "{k} vergelijking",
      "{k} voor- en nadelen",
      "{k} gratis of betaald",
      "{k} concurrenten",
      "top 10 {k}",
      "beste {k} {year}",
      "{k} review {year}",
      "{k} test {year}",
    ],
  },
};

export default content;
