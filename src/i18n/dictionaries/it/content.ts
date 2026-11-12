import type { ContentDictionary } from "../../types";

const content: ContentDictionary = {
  categories: {
    "image-tools": {
      name: "Strumenti per immagini",
      shortName: "Immagini",
      tagline: "Comprimi e ridimensiona",
      description:
        "Strumenti gratuiti per immagini che funzionano nel browser. Le tue foto vengono elaborate sul tuo dispositivo e non vengono mai caricate su un server.",
    },
    "pdf-tools": {
      name: "Strumenti PDF",
      shortName: "PDF",
      tagline: "Unisci e converti",
      description:
        "Lavora con i file PDF senza installare programmi. I file restano sul tuo dispositivo, così i documenti riservati restano riservati.",
    },
    calculators: {
      name: "Calcolatrici",
      shortName: "Calcolatrici",
      tagline: "Calcola di tutto",
      description:
        "Calcolatrici veloci e precise per mutui, prestiti, finanza e calcoli di tutti i giorni, con il dettaglio completo di ogni risultato.",
    },
    "text-tools": {
      name: "Strumenti di testo",
      shortName: "Testo",
      tagline: "Modifica e formatta il testo",
      description:
        "Conta, ripulisci e trasforma il testo all'istante. Utile per studenti, scrittori, blogger e chiunque abbia un limite di parole o di caratteri.",
    },
    "developer-tools": {
      name: "Strumenti per sviluppatori",
      shortName: "Sviluppatori",
      tagline: "JSON e codifica",
      description:
        "Utility quotidiane per sviluppatori: formatta, valida e converti i dati senza incollarli su un server remoto.",
    },
    "seo-tools": {
      name: "Strumenti SEO",
      shortName: "SEO",
      tagline: "Parole chiave e snippet",
      description:
        "Trova idee di parole chiave e controlla come appaiono le tue pagine nei risultati di ricerca, con strumenti pensati per blogger e proprietari di siti.",
    },
  },

  tools: {
    "image-compressor": {
      name: "Comprimere immagini",
      summary: "Riduci il peso di JPG, PNG e WebP senza perdita di qualità visibile.",
      seoTitle: "Comprimere immagini online gratis – Ridurre peso foto",
      seoDescription:
        "Comprimi immagini JPG, PNG e WebP online e gratis. Riduci le dimensioni delle foto, ridimensionale e convertile nel browser, senza caricarle su un server.",
      keywords: [
        "comprimere immagini",
        "comprimi immagini",
        "ridurre dimensione foto",
        "ridurre peso foto",
        "comprimere foto online",
        "comprimere jpg",
        "comprimere png",
        "ridimensionare immagini",
      ],
      howTo: [
        "Clicca su «Scegli le immagini» o trascina i tuoi file JPG, PNG o WebP nel riquadro. Puoi aggiungerne più di uno alla volta.",
        "Sposta il cursore della qualità. Per le foto, 70% è un buon punto di partenza, e il nuovo peso del file si aggiorna automaticamente.",
        "Se vuoi, scegli un formato di output diverso o imposta una larghezza massima per ridurre le foto più grandi.",
        "Scarica le immagini una alla volta oppure clicca su «Scarica tutte».",
      ],
      content: [
        { h2: "Perché comprimere le immagini?" },
        {
          p: "Una foto scattata con lo smartphone pesa spesso 3–5 MB. È molto più del necessario per un sito web, un allegato email o un modulo online, dove di solito bastano 100–300 KB. Le immagini più leggere si caricano prima, rendono il sito più veloce per i visitatori e ti aiutano a rispettare i limiti di peso dei portali per concorsi pubblici, candidature di lavoro e pratiche online della pubblica amministrazione.",
        },
        { h2: "Quale formato di output scegliere?" },
        {
          ul: [
            "**JPG** funziona ovunque ed è la scelta migliore per le fotografie.",
            "**WebP** è un formato moderno, spesso più leggero del 25–35% rispetto a JPG a parità di qualità visiva. Tutti i browser moderni lo supportano, ma alcune app meno recenti e alcuni moduli di caricamento no.",
            "**PNG** è senza perdita (lossless). Usalo per screenshot, loghi e grafiche con trasparenza. Per le foto produce file molto più pesanti.",
          ],
        },
        { h2: "Privacy garantita" },
        {
          p: "Molti compressori online caricano le tue foto sui loro server. Questo no. Usa il motore di elaborazione immagini integrato nel browser, quindi i tuoi file non lasciano mai il dispositivo e, una volta aperta la pagina, lo strumento funziona anche con una connessione lenta.",
        },
      ],
      faqs: [
        {
          q: "Comprimere un'immagine ne riduce la qualità?",
          a: "La compressione JPG e WebP è con perdita (lossy): alcuni dettagli vengono eliminati per risparmiare spazio. Con una qualità del 60–80% la differenza sullo schermo di solito non si nota. Il file originale non viene mai modificato, quindi puoi sempre riprovare con una qualità più alta.",
        },
        {
          q: "Come ridurre una foto a 100 KB o 200 KB?",
          a: "Abbassa il cursore della qualità e osserva il nuovo peso del file. Se l'immagine è ancora troppo pesante, imposta una larghezza massima, ad esempio 1200 pixel. Le foto dello smartphone di solito scendono sotto i 200 KB una volta ridimensionate a circa 1200–1600 pixel di larghezza.",
        },
        {
          q: "Le mie immagini vengono caricate su un server?",
          a: "No. Tutta la compressione avviene nel browser, sul tuo dispositivo. Le immagini non vengono mai inviate a noi né a nessun altro: per questo lo strumento è sicuro anche per carta d'identità, tessera sanitaria, documenti e foto personali.",
        },
        {
          q: "Perché il mio file PNG si è ridotto pochissimo?",
          a: "PNG è un formato senza perdita, quindi l'impostazione della qualità non ha effetto. Per rendere un PNG molto più leggero, convertilo in WebP o JPG, oppure riducine la larghezza. Usa il PNG per loghi, icone e screenshot che richiedono bordi nitidi o trasparenza.",
        },
        {
          q: "C'è un limite al numero di immagini che posso comprimere?",
          a: "Non impostiamo alcun limite: puoi aggiungere tutte le immagini che vuoi. Le immagini molto grandi (oltre 50 megapixel) possono richiedere più tempo sugli smartphone meno recenti, perché l'elaborazione avviene sul tuo dispositivo.",
        },
      ],
    },

    "merge-pdf": {
      name: "Unire PDF",
      summary: "Unisci più file PDF in un unico documento, nell'ordine che vuoi.",
      seoTitle: "Unire PDF online gratis – Unisci più file PDF in uno",
      seoDescription:
        "Unisci più file PDF in uno solo in pochi secondi e scegli l'ordine prima di unirli. Gratis, senza registrazione: i tuoi PDF non lasciano mai il dispositivo.",
      keywords: [
        "unire pdf",
        "unisci pdf",
        "unire file pdf",
        "unire pdf online",
        "unire pdf gratis",
        "combinare pdf",
        "unire più pdf in uno",
        "unire pdf senza programmi",
      ],
      howTo: [
        "Clicca su «Scegli i file PDF» o trascina due o più PDF nel riquadro.",
        "Disponi i file nell'ordine che preferisci con le frecce su e giù.",
        "Clicca su «Unisci e scarica». Il file unito viene salvato come merged.pdf.",
      ],
      content: [
        { h2: "Quando è utile unire i PDF?" },
        {
          ul: [
            "Per caricare più documenti (documento d'identità, certificati, attestati) su un portale che accetta un solo file, come quelli per concorsi pubblici, iscrizioni o pratiche online.",
            "Per riunire pagine scansionate in un unico documento.",
            "Per inviare al commercialista un unico file ordinato con fatture o ricevute.",
            "Per unire capitoli o relazioni in un solo PDF, più comodo da leggere e da stampare.",
          ],
        },
        { h2: "Cosa viene mantenuto nel file unito?" },
        {
          p: "Contenuto, dimensioni e orientamento di ogni pagina vengono copiati esattamente. Gli elementi interattivi dei file originali, come campi dei moduli, segnalibri e indice, potrebbero non essere riportati nel documento unito.",
        },
        { h2: "I tuoi documenti restano privati" },
        {
          p: "La maggior parte dei siti per PDF carica i documenti sui propri server per elaborarli. Questo strumento usa invece la libreria open source pdf-lib per fare tutto nel browser, quindi i tuoi file non lasciano mai il dispositivo.",
        },
      ],
      faqs: [
        {
          q: "C'è un limite al numero o alla dimensione dei PDF?",
          a: "Non impostiamo limiti. Poiché l'unione avviene sul tuo dispositivo, il limite pratico dipende dalla sua memoria. Documenti di centinaia di pagine si uniscono senza problemi sulla maggior parte dei computer e degli smartphone moderni.",
        },
        {
          q: "Posso unire PDF protetti da password?",
          a: "No. I PDF crittografati non possono essere uniti finché non si rimuove la protezione. Apri il file in un lettore PDF inserendo la password, salva una copia non protetta e unisci quella copia.",
        },
        {
          q: "Unire i PDF ne riduce la qualità?",
          a: "No. Le pagine vengono copiate così come sono, senza ricomprimere testo o immagini, quindi il PDF unito è identico agli originali.",
        },
        {
          q: "Posso unire file PDF dallo smartphone?",
          a: "Sì. Lo strumento funziona su Chrome, Safari, Firefox e gli altri browser mobili moderni. Scegli i file dalla memoria del telefono, ordinali e tocca «Unisci e scarica».",
        },
        {
          q: "I miei file PDF vengono caricati da qualche parte?",
          a: "No. I PDF vengono letti e uniti all'interno del browser e non vengono mai caricati su un server. Così i documenti riservati, come documenti d'identità, contratti ed estratti conto, restano privati.",
        },
      ],
    },

    "emi-calculator": {
      name: "Calcolo rata mutuo e prestito",
      summary: "Calcola rata mensile, interessi totali e piano di ammortamento.",
      seoTitle: "Calcolo rata mutuo e prestito – Piano di ammortamento",
      seoDescription:
        "Calcola subito la rata del mutuo o del prestito, gli interessi totali e il costo complessivo, con il piano di ammortamento anno per anno. Gratis e immediato.",
      keywords: [
        "calcolo rata mutuo",
        "calcolo rata prestito",
        "calcolo mutuo",
        "simulatore mutuo",
        "piano di ammortamento",
        "calcolo interessi mutuo",
        "calcolo rata finanziamento",
        "calcolo prestito auto",
      ],
      howTo: [
        "Inserisci l'importo del prestito e scegli la valuta.",
        "Inserisci il tasso di interesse annuo (TAN) offerto dalla banca.",
        "Indica la durata del prestito in anni o in mesi.",
        "Rata mensile, interessi totali e totale da rimborsare si aggiornano subito, insieme al piano di ammortamento anno per anno.",
      ],
      content: [
        { h2: "Come funziona la rata di un mutuo o di un prestito?" },
        {
          p: "Quasi tutti i mutui e i prestiti usano l'**ammortamento alla francese**: paghi una **rata costante**, cioè lo stesso importo ogni mese, finché il debito non è rimborsato del tutto. Ogni rata è composta da due parti: la quota interessi, calcolata sul debito residuo, e la quota capitale, che riduce il debito. Nei primi anni la rata è fatta soprattutto di interessi, negli ultimi anni soprattutto di capitale.",
        },
        { h2: "La formula per calcolare la rata" },
        {
          p: "**Rata = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)**, dove P è l'importo del prestito, r è il tasso di interesse mensile (tasso annuo ÷ 12 ÷ 100) e n è il numero di rate mensili.",
        },
        {
          p: "Ad esempio, un mutuo di 200.000 € al 3,5% annuo per 25 anni dà r = 0,00292 e n = 300, quindi la rata mensile è di circa **1.001 €**. In 25 anni restituisci circa 300.374 €, di cui circa 100.374 € di interessi.",
        },
        { h2: "Come pagare meno interessi" },
        {
          ul: [
            "**Scegli una durata più breve, se puoi permettertelo.** Una durata più lunga abbassa la rata ma fa crescere di molto gli interessi totali.",
            "**Rimborsa in anticipo quando puoi.** Anche qualche versamento extra nei primi anni del prestito riduce sensibilmente gli interessi totali.",
            "**Confronta le offerte di più banche guardando il TAEG**, che include anche le spese, e non solo il TAN. Una differenza di appena lo 0,5% pesa molto su un mutuo lungo.",
            "**Versa un anticipo più alto** per ridurre l'importo da finanziare.",
          ],
        },
        {
          p: "**Nota:** i risultati sono stime a scopo indicativo. Gli importi esatti della tua banca possono differire leggermente per spese, arrotondamenti e variazioni del tasso. Questo non è un consiglio finanziario.",
        },
      ],
      faqs: [
        {
          q: "Posso usarlo per mutui, prestiti auto e prestiti personali?",
          a: "Sì. Il calcolatore funziona per qualsiasi finanziamento con ammortamento alla francese, cioè a rata costante con interessi calcolati sul debito residuo: quasi tutti i mutui, i prestiti auto, i prestiti personali e i prestiti per studenti.",
        },
        {
          q: "Funziona anche con i mutui a tasso variabile?",
          a: "Il calcolo presuppone che il tasso resti invariato per tutta la durata, come in un mutuo a tasso fisso. Se hai un mutuo a tasso variabile, ripeti il calcolo con il nuovo tasso ogni volta che la banca lo aggiorna.",
        },
        {
          q: "La rata include spese di istruttoria o assicurazioni?",
          a: "No. Il risultato comprende solo capitale e interessi. Spese di istruttoria, perizia, assicurazioni e altri costi sono a parte e dipendono dalla banca: per questo il TAEG è più alto del TAN.",
        },
        {
          q: "Cosa succede se estinguo in anticipo una parte del prestito?",
          a: "Un rimborso anticipato riduce il debito residuo, quindi da quel momento paghi meno interessi. Di solito la banca ti permette di ridurre la rata oppure di accorciare la durata. In Italia non ci sono penali per i mutui per l'acquisto o la ristrutturazione della casa stipulati da privati; per gli altri finanziamenti controlla il contratto.",
        },
        {
          q: "Perché all'inizio la rata è composta soprattutto da interessi?",
          a: "Gli interessi si calcolano sul debito residuo, che è massimo all'inizio del prestito. Man mano che rimborsi il capitale, la quota interessi di ogni rata si riduce e la quota capitale aumenta. Lo vedi nel piano di ammortamento annuale qui sopra.",
        },
      ],
    },

    "word-counter": {
      name: "Conta parole e caratteri",
      summary: "Conta parole, caratteri, frasi e tempo di lettura mentre scrivi.",
      seoTitle: "Conta parole online – Contatore di parole e caratteri",
      seoDescription:
        "Contatore di parole online gratis: conta parole, caratteri con e senza spazi, frasi e paragrafi e stima il tempo di lettura. Funziona in qualsiasi lingua.",
      keywords: [
        "conta parole",
        "contatore di parole",
        "conta caratteri",
        "contatore caratteri",
        "conta parole online",
        "conta caratteri spazi inclusi",
        "contare le parole di un testo",
        "tempo di lettura",
      ],
      howTo: [
        "Scrivi nel riquadro o incolla il tuo testo.",
        "Il conteggio di parole, caratteri, frasi e paragrafi si aggiorna all'istante mentre scrivi.",
        "Controlla il tempo di lettura e la durata del discorso stimati, e scopri quali parole chiave ripeti di più.",
        "Usa «Copia testo» per copiare ciò che hai scritto o «Cancella» per ricominciare.",
      ],
      content: [
        { h2: "Cosa misura questo contatore di parole" },
        {
          ul: [
            "**Parole e caratteri**, con e senza spazi.",
            "**Frasi e paragrafi**: ogni riga non vuota conta come un paragrafo.",
            "**Tempo di lettura e durata del discorso**, utili per articoli di blog, discorsi e presentazioni.",
            "**Densità delle parole chiave**, che mostra quanto spesso ripeti le parole importanti, così eviti di abusarne.",
          ],
        },
        { h2: "Limiti di parole e caratteri più comuni" },
        {
          ul: [
            "Post su X (Twitter): 280 caratteri",
            "Meta description per la SEO: circa 155–160 caratteri",
            "Didascalia di Instagram: 2.200 caratteri",
            "Post su LinkedIn: 3.000 caratteri",
            "Cartella editoriale: 1.800 caratteri spazi inclusi",
            "Abstract della tesi di laurea: di solito 200–300 parole, secondo le regole dell'ateneo",
          ],
        },
        { h2: "Funziona con qualsiasi lingua" },
        {
          p: "Molti contatori di parole semplici dividono il testo solo in base agli spazi, e così sbagliano il conteggio in molte lingue. Questo strumento usa la segmentazione del testo integrata nei browser moderni, che tiene conto della lingua: i conteggi sono precisi sia che tu scriva in italiano, inglese, tedesco o francese, sia in cinese, giapponese o arabo.",
        },
      ],
      faqs: [
        {
          q: "Come conta le parole questo contatore?",
          a: "Usa la segmentazione del testo integrata nel browser, che tiene conto della lingua: è la stessa tecnologia che seleziona una parola quando fai doppio clic. I numeri contano come parole. Le parole con il trattino, come «socio-economico», contano come due parole, come nella maggior parte degli editor di testo.",
        },
        {
          q: "Gli spazi contano come caratteri?",
          a: "Il valore principale «Caratteri» include spazi e a capo. Il dato sotto il riquadro di testo mostra il conteggio senza spazi, richiesto da alcuni moduli e compiti. Per la cartella editoriale, invece, si contano i caratteri spazi inclusi.",
        },
        {
          q: "Come viene calcolato il tempo di lettura?",
          a: "Il tempo di lettura si basa su una velocità media di lettura silenziosa di 238 parole al minuto per un adulto. La durata del discorso si basa su un ritmo di presentazione comodo di 140 parole al minuto.",
        },
        {
          q: "Il mio testo viene salvato o inviato da qualche parte?",
          a: "No. Il testo resta nel tuo browser e non viene mai caricato. Non viene nemmeno salvato, quindi se ricarichi la pagina viene cancellato. Copia tutto ciò che vuoi conservare.",
        },
        {
          q: "Funziona anche con lingue diverse dall'italiano?",
          a: "Sì. Grazie alla segmentazione che tiene conto della lingua, conta correttamente parole e caratteri in italiano, tedesco, francese, spagnolo e molte altre lingue, anche con alfabeti diversi come quello arabo o cirillico, e persino nelle lingue che si scrivono senza spazi, come il cinese e il giapponese.",
        },
      ],
    },

    "json-formatter": {
      name: "Formattatore JSON",
      summary: "Formatta, valida e minifica JSON con la posizione esatta degli errori.",
      seoTitle: "Formattatore JSON online – Valida e minifica JSON gratis",
      seoDescription:
        "Formatta, valida e minifica JSON online. Trova gli errori di sintassi per riga e colonna e ordina le chiavi. I tuoi dati restano sempre nel tuo browser.",
      keywords: [
        "formattatore json",
        "json formatter",
        "validatore json",
        "formattare json",
        "json online",
        "json beautifier",
        "minificare json",
        "validare json online",
      ],
      howTo: [
        "Incolla il tuo JSON nel riquadro di input oppure clicca su «Esempio» per provare con un esempio.",
        "Lo strumento controlla il JSON mentre scrivi e mostra la riga e la colonna esatte di ogni errore.",
        "Clicca su «Formatta» per renderlo leggibile (scegli 2 spazi, 4 spazi o tabulazione e, se vuoi, ordina le chiavi) oppure su «Minifica» per comprimerlo.",
        "Copia il risultato o scaricalo come file .json.",
      ],
      content: [
        { h2: "Cos'è un formattatore JSON?" },
        {
          p: "JSON (JavaScript Object Notation) è il formato più diffuso per scambiare dati tra app e API. Per risparmiare spazio viene spesso inviato su un'unica lunga riga, difficile da leggere. Un formattatore JSON aggiunge indentazione e a capo per rendere chiara la struttura, mentre un validatore controlla che la sintassi sia corretta.",
        },
        { h2: "Errori JSON comuni e come correggerli" },
        {
          ul: [
            "**Virgole finali:** elimina la virgola dopo l'ultimo elemento di un oggetto o di un array.",
            "**Virgolette singole:** sostituisci `'text'` con `\"text\"`.",
            "**Chiavi senza virgolette:** scrivi `{\"name\": 1}`, non `{name: 1}`.",
            "**Commenti:** JSON non supporta i commenti `//` o `/* */`.",
            "**Virgole mancanti** tra gli elementi, spesso dopo un copia e incolla.",
          ],
        },
        { h2: "I tuoi dati restano privati" },
        {
          p: "Le risposte delle API e i file di configurazione contengono spesso token di accesso, indirizzi email o altri dati sensibili. Molti formattatori online inviano ciò che incolli a un server. Questo non lo fa mai: tutta l'elaborazione avviene nel tuo browser.",
        },
      ],
      faqs: [
        {
          q: "Che differenza c'è tra formattare e minificare un JSON?",
          a: "La formattazione (detta anche beautify o pretty print) aggiunge a capo e indentazione per rendere il JSON facile da leggere. La minificazione elimina tutti gli spazi superflui per rendere i dati il più leggeri possibile da inviare in rete.",
        },
        {
          q: "Perché il mio JSON non è valido se in JavaScript funziona?",
          a: "Gli oggetti letterali di JavaScript sono più permissivi del JSON. Il JSON richiede le virgolette doppie attorno a ogni chiave e stringa e non ammette virgole finali, commenti, virgolette singole o valori come undefined e NaN.",
        },
        {
          q: "Funziona con file JSON di grandi dimensioni?",
          a: "Sì. File di diversi megabyte vengono formattati in molto meno di un secondo su un normale computer, perché tutto avviene in locale nel browser, senza tempi di caricamento.",
        },
        {
          q: "I numeri molto grandi vengono mantenuti esattamente?",
          a: "Gli interi maggiori di 9.007.199.254.740.991 non possono essere rappresentati esattamente in JavaScript, quindi potrebbero essere arrotondati durante la formattazione. Se lavori con ID molto grandi, salvali come stringhe nel tuo JSON.",
        },
        {
          q: "Il mio JSON viene inviato a un server?",
          a: "No. Analisi, validazione e formattazione avvengono tutte nel browser. Per questo puoi incollare in sicurezza risposte API che contengono token, chiavi o dati personali.",
        },
      ],
    },

    "meta-tag-checker": {
      name: "Verifica meta title e description",
      summary: "Anteprima dello snippet e lunghezza di meta title e description.",
      seoTitle: "Verifica meta title e description – Anteprima SERP",
      seoDescription:
        "Controlla la lunghezza di meta title e meta description in caratteri e pixel, guarda l'anteprima nei risultati di Google e copia i tag HTML. Gratis.",
      keywords: [
        "verifica meta title",
        "lunghezza meta title",
        "lunghezza meta description",
        "anteprima serp",
        "simulatore serp",
        "anteprima snippet google",
        "controllo meta tag",
        "lunghezza title seo",
      ],
      howTo: [
        "Scrivi o incolla il titolo della pagina nel campo «Meta title».",
        "Aggiungi la meta description e, se vuoi, l'URL della pagina.",
        "Controlla il conteggio di caratteri e pixel e l'anteprima in tempo reale. Punta a «Lunghezza ottimale» per entrambi.",
        "Clicca su «Copia codice» e incolla i tag nella sezione <head> della tua pagina.",
      ],
      content: [
        { h2: "Perché conta la larghezza in pixel" },
        {
          p: "I motori di ricerca troncano titoli e descrizioni in base alla larghezza sullo schermo, non al numero di caratteri. Per questo lo strumento misura entrambi: circa 580 pixel per i titoli (di solito 50–60 caratteri) e circa 920 pixel per le descrizioni su desktop (di solito 150–160 caratteri).",
        },
        { h2: "Consigli per scrivere un meta title migliore" },
        {
          ul: [
            "Metti la parola chiave principale vicino all'inizio.",
            "Dai a ogni pagina un titolo unico, in linea con ciò che cercano gli utenti.",
            "Aggiungi il nome del brand alla fine, separato da un trattino o da una barra verticale.",
            "Evita il TUTTO MAIUSCOLO e la ripetizione forzata delle parole chiave.",
          ],
        },
        { h2: "Consigli per scrivere una meta description migliore" },
        {
          ul: [
            "Riassumi il valore della pagina in una o due frasi.",
            "Inserisci la parola chiave in modo naturale: i motori di ricerca spesso evidenziano le parole che corrispondono alla ricerca.",
            "Chiudi con un invito all'azione chiaro, come «Provalo gratis» o «Leggi la guida completa».",
          ],
        },
      ],
      faqs: [
        {
          q: "Qual è la lunghezza ideale del meta title?",
          a: "Punta a circa 50–60 caratteri, cioè meno di circa 580 pixel di larghezza. I titoli più lunghi vengono di solito troncati con i puntini di sospensione nei risultati di ricerca su desktop.",
        },
        {
          q: "Qual è la lunghezza ideale della meta description?",
          a: "Circa 120–160 caratteri vanno bene. Le descrizioni più brevi potrebbero non spiegare abbastanza la pagina, mentre quelle più lunghe vengono di solito troncate.",
        },
        {
          q: "La meta description influisce sul posizionamento?",
          a: "Google ha dichiarato che la meta description non è un fattore di ranking diretto. Conta comunque, perché una descrizione chiara e pertinente può convincere più persone a cliccare sul tuo risultato.",
        },
        {
          q: "Perché Google mostra un titolo o una descrizione diversi dai miei?",
          a: "A volte i motori di ricerca riscrivono titoli e descrizioni per adattarli meglio alla ricerca dell'utente, usando altri testi della tua pagina. Scrivere tag precisi e specifici aumenta la probabilità che vengano usati i tuoi.",
        },
        {
          q: "Perché misurare i pixel invece dei caratteri?",
          a: "I risultati di ricerca vengono troncati in base allo spazio occupato dal testo, non al numero di lettere. Un titolo pieno di lettere larghe come W e M viene troncato prima di uno con lettere strette come i e l.",
        },
      ],
    },

    "keyword-generator": {
      name: "Generatore di parole chiave",
      summary: "Centinaia di idee di keyword SEO, raggruppate per intento di ricerca.",
      seoTitle: "Generatore di parole chiave gratis – Idee keyword SEO",
      seoDescription:
        "Genera centinaia di idee di parole chiave da una sola parola: domande, frasi long tail, keyword d'acquisto e confronti, in 7 lingue. Gratis e senza account.",
      keywords: [
        "generatore di parole chiave",
        "generatore keyword",
        "ricerca parole chiave",
        "parole chiave seo",
        "idee parole chiave",
        "keyword long tail",
        "trovare parole chiave",
        "strumento parole chiave gratis",
      ],
      howTo: [
        "Scrivi una parola chiave o un argomento, come «mutuo casa» o «conta parole». Separa più parole chiave con una virgola.",
        "Scegli la lingua in cui vuoi le idee di parole chiave.",
        "Sfoglia le idee, raggruppate in domande, frasi popolari, idee long tail, parole chiave d'acquisto e confronti.",
        "Filtra l'elenco, copia un gruppo o scarica tutto in un file CSV per il tuo foglio di calcolo.",
      ],
      content: [
        { h2: "Cos'è un generatore di parole chiave?" },
        {
          p: "Un generatore di parole chiave trasforma una parola di partenza in tante frasi di ricerca correlate. Ti aiuta a scoprire cosa le persone potrebbero digitare su Google, così puoi pianificare articoli, pagine prodotto e FAQ partendo da domande reali invece di andare a intuito.",
        },
        { h2: "Capire l'intento di ricerca" },
        {
          ul: [
            "**Informativo:** chi cerca vuole imparare qualcosa, ad es. «come funziona un mutuo». Rispondi con guide e FAQ.",
            "**Commerciale:** chi cerca sta confrontando le opzioni, ad es. «miglior mutuo» o «mutuo fisso o variabile». Rispondi con recensioni e confronti.",
            "**Transazionale:** chi cerca è pronto ad agire, ad es. «preventivo mutuo» o «richiedere mutuo online». Rispondi con pagine prodotto, prezzi o registrazione.",
          ],
        },
        { h2: "Come scegliere le parole chiave giuste" },
        {
          ul: [
            "**Parti dalle idee long tail.** Le frasi più lunghe e specifiche hanno meno concorrenza ed è più facile posizionarle con un sito nuovo.",
            "**Controlla il volume di ricerca** delle idee che preferisci con lo Strumento di pianificazione delle parole chiave di Google Ads (gratuito con un account Google Ads) o con Google Search Console, quando il tuo sito riceve traffico.",
            "**Guarda i risultati attuali** su Google per ogni parola chiave. Se la prima pagina è piena di grandi marchi, scegli una frase più specifica.",
            "**Scrivi una pagina per ogni argomento principale** e usa in modo naturale le parole chiave correlate nei titoli e nel testo.",
          ],
        },
      ],
      faqs: [
        {
          q: "Questo strumento mostra il volume di ricerca?",
          a: "No. Genera idee di parole chiave partendo da schemi di ricerca collaudati, ma i dati sui volumi provengono da database a pagamento. Controlla gratis il volume delle idee migliori con lo Strumento di pianificazione delle parole chiave di Google Ads o con Google Search Console.",
        },
        {
          q: "Che differenza c'è con Ahrefs, Semrush o SEOZoom?",
          a: "Strumenti a pagamento come Ahrefs, Semrush e SEOZoom combinano le idee di parole chiave con i propri dati su volume e difficoltà. Questo strumento si concentra sulla generazione di idee veloce e gratuita, il primo passo della ricerca delle parole chiave.",
        },
        {
          q: "Posso generare parole chiave in altre lingue?",
          a: "Sì. Scegli la lingua delle parole chiave e le idee vengono create con frasi naturali in italiano, inglese, tedesco, francese, spagnolo, portoghese o olandese.",
        },
        {
          q: "Cosa sono le parole chiave long tail?",
          a: "Le parole chiave long tail (a coda lunga) sono frasi più lunghe e specifiche, come «conta parole per studenti». Ognuna viene cercata meno spesso, ma è più facile posizionarsi e di solito portano visitatori che sanno esattamente cosa vogliono.",
        },
        {
          q: "È gratuito?",
          a: "Sì. Il generatore di parole chiave è completamente gratuito, non richiede un account e non ha limiti giornalieri. Funziona nel browser, quindi le tue parole chiave non vengono inviate a nessun server.",
        },
      ],
    },
  },

  keywordTemplates: {
    questions: [
      "cos'è {k}",
      "cosa significa {k}",
      "come funziona {k}",
      "come usare {k}",
      "come scegliere {k}",
      "quale {k} scegliere",
      "quanto costa {k}",
      "a cosa serve {k}",
      "perché usare {k}",
      "conviene {k}",
      "dove trovare {k}",
      "quando usare {k}",
      "chi ha bisogno di {k}",
      "come avere {k} gratis",
      "vale la pena comprare {k}",
    ],
    modifiers: [
      "miglior {k}",
      "migliori {k}",
      "{k} gratis",
      "{k} online",
      "{k} online gratis",
      "migliori {k} gratis",
      "top {k}",
      "{k} facile",
      "{k} veloce",
      "{k} semplice",
      "{k} in italiano",
      "app per {k}",
      "programmi per {k}",
      "siti per {k}",
      "{k} {year}",
    ],
    longTail: [
      "{k} per principianti",
      "{k} per studenti",
      "{k} per aziende",
      "{k} per partita iva",
      "{k} per professionisti",
      "{k} per mac",
      "{k} per windows",
      "{k} per android",
      "{k} per iphone",
      "{k} senza registrazione",
      "{k} senza scaricare nulla",
      "{k} consigli",
      "{k} tutorial",
      "{k} esempi",
      "{k} guida passo passo",
      "{k} cosa sapere",
    ],
    commercial: [
      "comprare {k}",
      "dove comprare {k}",
      "{k} prezzo",
      "{k} prezzi",
      "{k} costo",
      "{k} low cost",
      "{k} offerte",
      "{k} sconto",
      "{k} codice sconto",
      "{k} prova gratuita",
      "{k} abbonamento",
      "{k} recensioni",
      "{k} opinioni",
      "{k} preventivo",
      "{k} vicino a me",
    ],
    comparisons: [
      "{k} alternative",
      "migliori alternative a {k}",
      "alternative gratuite a {k}",
      "{k} confronto",
      "{k} pro e contro",
      "{k} gratis o a pagamento",
      "{k} concorrenti",
      "app simili a {k}",
      "top 10 {k}",
      "{k} recensione {year}",
      "{k} classifica",
      "{k} differenze",
    ],
  },
};

export default content;
