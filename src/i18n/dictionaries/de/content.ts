import type { ContentDictionary } from "../../types";

const content: ContentDictionary = {
  categories: {
    "image-tools": {
      name: "Bild-Tools",
      shortName: "Bilder",
      tagline: "Komprimieren und verkleinern",
      description:
        "Kostenlose Bild-Tools, die direkt in Ihrem Browser laufen. Ihre Fotos werden auf Ihrem eigenen Gerät verarbeitet und nie auf einen Server hochgeladen.",
    },
    "pdf-tools": {
      name: "PDF-Tools",
      shortName: "PDF",
      tagline: "Zusammenfügen und umwandeln",
      description:
        "Bearbeiten Sie PDF-Dateien, ohne Software zu installieren. Die Dateien bleiben auf Ihrem Gerät, so bleiben vertrauliche Dokumente vertraulich.",
    },
    calculators: {
      name: "Rechner",
      shortName: "Rechner",
      tagline: "Schnell berechnen",
      description:
        "Schnelle, genaue Rechner für Kredite, Finanzen und Alltagsmathematik, mit der vollständigen Aufschlüsselung hinter jedem Ergebnis.",
    },
    "text-tools": {
      name: "Text-Tools",
      shortName: "Text",
      tagline: "Text bearbeiten und formatieren",
      description:
        "Text sofort zählen, bereinigen und umwandeln. Praktisch für Schüler, Studierende, Autoren, Blogger und alle, die ein Zeichen- oder Wortlimit einhalten müssen.",
    },
    "developer-tools": {
      name: "Entwickler-Tools",
      shortName: "Entwickler",
      tagline: "JSON und Kodierung",
      description:
        "Praktische Helfer für den Entwickleralltag: Daten formatieren, validieren und umwandeln, ohne sie auf einem fremden Server einzufügen.",
    },
    "seo-tools": {
      name: "SEO-Tools",
      shortName: "SEO",
      tagline: "Keywords und Snippets",
      description:
        "Finden Sie Keyword-Ideen und prüfen Sie, wie Ihre Seiten in den Suchergebnissen erscheinen, mit Tools für Blogger und Website-Betreiber.",
    },
  },

  tools: {
    "image-compressor": {
      name: "Bild komprimieren",
      summary: "JPG, PNG und WebP verkleinern, ohne sichtbaren Qualitätsverlust.",
      seoTitle: "Bild komprimieren online – Bilder kostenlos verkleinern",
      seoDescription:
        "Bilder kostenlos online komprimieren: JPG, PNG und WebP verkleinern, Größe ändern und umwandeln, direkt im Browser. Ihre Bilder werden nie hochgeladen.",
      keywords: [
        "bild komprimieren",
        "bilder verkleinern",
        "jpg verkleinern",
        "foto verkleinern",
        "bildgröße ändern",
        "png komprimieren",
        "bild auf 100 kb verkleinern",
        "bild komprimieren online kostenlos",
      ],
      howTo: [
        "Klicken Sie auf „Bilder auswählen“ oder ziehen Sie Ihre JPG-, PNG- oder WebP-Dateien in das Feld. Sie können mehrere gleichzeitig hinzufügen.",
        "Verschieben Sie den Qualitätsregler. 70 % sind ein guter Ausgangswert für Fotos, die neue Dateigröße wird automatisch aktualisiert.",
        "Wählen Sie bei Bedarf ein anderes Ausgabeformat oder legen Sie eine maximale Breite fest, um große Fotos zu verkleinern.",
        "Laden Sie jedes Bild einzeln herunter oder klicken Sie auf „Alle herunterladen“.",
      ],
      content: [
        { h2: "Warum Bilder komprimieren?" },
        {
          p: "Ein Foto direkt aus der Handykamera ist oft 3–5 MB groß. Das ist weit mehr, als Sie für eine Website, einen E-Mail-Anhang oder ein Online-Formular brauchen, denn dort reichen meist 100–300 KB. Kleinere Bilder sind schneller hochgeladen, laden schneller für Ihre Besucher und helfen Ihnen, die Dateigrößen-Limits bei Online-Bewerbungen, Formularen und Anträgen einzuhalten.",
        },
        { h2: "Welches Ausgabeformat sollten Sie wählen?" },
        {
          ul: [
            "**JPG** funktioniert überall und ist die beste Wahl für Fotos.",
            "**WebP** ist ein modernes Format, das bei gleicher Bildqualität oft 25–35 % kleiner ist als JPG. Alle modernen Browser unterstützen es, manche älteren Apps und Upload-Formulare jedoch nicht.",
            "**PNG** ist verlustfrei. Verwenden Sie es für Screenshots, Logos und Grafiken mit Transparenz. Bei Fotos entstehen damit deutlich größere Dateien.",
          ],
        },
        { h2: "Von Grund auf privat" },
        {
          p: "Viele Online-Kompressoren laden Ihre Fotos auf ihre Server hoch. Dieses Tool nicht. Es nutzt die integrierte Bild-Engine Ihres Browsers, sodass Ihre Dateien Ihr Gerät nie verlassen. Ein echtes Plus für den Datenschutz. Sobald die Seite geladen ist, funktioniert das Tool auch bei langsamer Verbindung weiter.",
        },
      ],
      faqs: [
        {
          q: "Verringert das Komprimieren die Bildqualität?",
          a: "Die Komprimierung von JPG und WebP ist verlustbehaftet: Einige Details werden entfernt, um Speicherplatz zu sparen. Bei 60–80 % Qualität ist der Unterschied auf dem Bildschirm meist nicht zu erkennen. Ihre Originaldatei bleibt unverändert, Sie können es also jederzeit mit einer höheren Qualitätsstufe erneut versuchen.",
        },
        {
          q: "Wie komprimiere ich ein Bild auf 100 KB oder 200 KB?",
          a: "Senken Sie den Qualitätsregler und beobachten Sie, wie sich die neue Dateigröße ändert. Ist das Bild immer noch zu groß, legen Sie eine maximale Breite fest, zum Beispiel 1200 Pixel. Große Handyfotos landen meist unter 200 KB, sobald sie auf etwa 1200–1600 Pixel Breite verkleinert sind.",
        },
        {
          q: "Werden meine Bilder auf einen Server hochgeladen?",
          a: "Nein. Die gesamte Komprimierung findet in Ihrem Webbrowser auf Ihrem eigenen Gerät statt. Ihre Bilder werden weder an uns noch an Dritte gesendet. Damit eignet sich das Tool auch für Ausweisfotos, Dokumente und private Bilder.",
        },
        {
          q: "Warum ist meine PNG-Datei kaum kleiner geworden?",
          a: "PNG ist ein verlustfreies Format, daher hat die Qualitätseinstellung darauf keine Wirkung. Um eine PNG-Datei deutlich zu verkleinern, wandeln Sie sie in WebP oder JPG um oder verringern Sie ihre Breite. Behalten Sie PNG für Logos, Icons und Screenshots, die scharfe Kanten oder Transparenz brauchen.",
        },
        {
          q: "Wie viele Bilder kann ich komprimieren?",
          a: "Wir setzen kein Limit. Sie können beliebig viele Bilder hinzufügen. Sehr große Bilder (über 50 Megapixel) können auf älteren Smartphones langsam sein, weil die Verarbeitung auf Ihrem Gerät stattfindet.",
        },
      ],
    },

    "merge-pdf": {
      name: "PDF zusammenfügen",
      summary: "Mehrere PDFs in beliebiger Reihenfolge zu einem Dokument verbinden.",
      seoTitle: "PDF zusammenfügen – PDFs online kostenlos verbinden",
      seoDescription:
        "Mehrere PDF-Dateien in Sekunden zu einer PDF zusammenfügen und die Reihenfolge selbst festlegen. Kostenlos, ohne Anmeldung, Ihre PDFs bleiben auf Ihrem Gerät.",
      keywords: [
        "pdf zusammenfügen",
        "pdf zusammenführen",
        "pdf verbinden",
        "pdf dateien zusammenfügen",
        "mehrere pdf zu einer zusammenfügen",
        "pdf kombinieren",
        "pdf zusammenfügen kostenlos",
        "pdf zusammenfügen online",
      ],
      howTo: [
        "Klicken Sie auf „PDF-Dateien auswählen“ oder ziehen Sie zwei oder mehr PDFs in das Feld.",
        "Bringen Sie die Dateien mit den Pfeilen nach oben und unten in die gewünschte Reihenfolge.",
        "Klicken Sie auf „Zusammenfügen & herunterladen“. Die kombinierte Datei wird als merged.pdf gespeichert.",
      ],
      content: [
        { h2: "Wann ist das Zusammenfügen von PDFs nützlich?" },
        {
          ul: [
            "Bewerbungsunterlagen: Anschreiben, Lebenslauf und Zeugnisse als eine einzige PDF verschicken.",
            "Mehrere Nachweise in einem Online-Formular hochladen, das nur eine Datei akzeptiert.",
            "Gescannte Seiten zu einem einzigen Dokument zusammenführen.",
            "Rechnungen oder Belege als eine übersichtliche Datei an Ihren Steuerberater senden.",
            "Kapitel oder Berichte zu einer PDF verbinden, damit sie sich leichter lesen und drucken lassen.",
          ],
        },
        { h2: "Was bleibt in der zusammengefügten Datei erhalten?" },
        {
          p: "Inhalt, Format und Ausrichtung jeder Seite werden exakt übernommen. Interaktive Elemente wie Formularfelder, Lesezeichen und das Inhaltsverzeichnis der Originaldateien werden möglicherweise nicht in das zusammengefügte Dokument übernommen.",
        },
        { h2: "Von Grund auf privat" },
        {
          p: "Die meisten PDF-Websites laden Ihre Dokumente zur Verarbeitung auf ihre Server hoch. Dieses Tool erledigt die Arbeit stattdessen mit der Open-Source-Bibliothek pdf-lib direkt in Ihrem Browser, sodass Ihre Dateien Ihr Gerät nie verlassen.",
        },
      ],
      faqs: [
        {
          q: "Gibt es ein Limit für die Anzahl oder Größe der PDFs?",
          a: "Wir setzen kein Limit. Da das Zusammenfügen auf Ihrem Gerät stattfindet, hängt die praktische Grenze vom Arbeitsspeicher Ihres Geräts ab. Dokumente mit Hunderten von Seiten lassen sich auf den meisten Computern und modernen Smartphones problemlos zusammenfügen.",
        },
        {
          q: "Kann ich passwortgeschützte PDFs zusammenfügen?",
          a: "Nein. Verschlüsselte PDFs lassen sich erst kombinieren, wenn der Passwortschutz entfernt wurde. Öffnen Sie die Datei mit dem Passwort in einem PDF-Reader, speichern Sie eine ungeschützte Kopie und fügen Sie dann diese Kopie zusammen.",
        },
        {
          q: "Verschlechtert das Zusammenfügen die Qualität meiner PDF?",
          a: "Nein. Die Seiten werden unverändert übernommen, ohne Texte oder Bilder neu zu komprimieren. Die zusammengefügte PDF sieht daher genauso aus wie die Originale.",
        },
        {
          q: "Kann ich PDFs auf dem Handy zusammenfügen?",
          a: "Ja. Das Tool funktioniert in Chrome, Safari, Firefox und anderen modernen mobilen Browsern. Wählen Sie die Dateien aus dem Speicher Ihres Smartphones, ordnen Sie sie an und tippen Sie auf „Zusammenfügen & herunterladen“.",
        },
        {
          q: "Werden meine PDF-Dateien irgendwo hochgeladen?",
          a: "Nein. Ihre PDFs werden in Ihrem Browser gelesen und zusammengefügt und nie auf einen Server hochgeladen. So bleiben vertrauliche Dokumente wie Ausweiskopien, Verträge und Kontoauszüge privat.",
        },
      ],
    },

    "emi-calculator": {
      name: "Kreditrechner",
      summary: "Monatliche Rate, Zinskosten und Tilgungsplan Ihres Kredits berechnen.",
      seoTitle: "Kreditrechner – Monatliche Rate, Zinsen & Tilgungsplan",
      seoDescription:
        "Berechnen Sie die monatliche Rate, die Zinskosten und den Gesamtbetrag Ihres Kredits. Mit Tilgungsplan für Baufinanzierung, Autokredit und Ratenkredit.",
      keywords: [
        "kreditrechner",
        "kredit berechnen",
        "darlehensrechner",
        "tilgungsrechner",
        "annuitätenrechner",
        "baufinanzierung rechner",
        "autokredit rechner",
        "monatliche rate berechnen",
      ],
      howTo: [
        "Geben Sie den Kreditbetrag ein und wählen Sie Ihre Währung.",
        "Geben Sie den jährlichen Zinssatz ein, den Ihre Bank Ihnen anbietet.",
        "Geben Sie die Laufzeit in Jahren oder Monaten ein.",
        "Monatliche Rate, Zinskosten und Gesamtbetrag werden sofort aktualisiert, zusammen mit einem Tilgungsplan nach Jahren.",
      ],
      content: [
        { h2: "Was ist ein Annuitätendarlehen?" },
        {
          p: "Bei einem **Annuitätendarlehen** zahlen Sie Ihrer Bank jeden Monat dieselbe feste Rate, bis der Kredit vollständig zurückgezahlt ist. Jede monatliche Rate besteht aus zwei Teilen: den Zinsen auf die Restschuld und der Tilgung. In den ersten Jahren besteht die Rate überwiegend aus Zinsen, in den späteren Jahren überwiegend aus Tilgung. So funktionieren die meisten Ratenkredite, Autokredite und Baufinanzierungen.",
        },
        { h2: "Die Formel für die monatliche Rate" },
        {
          p: "**Rate = K × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)**, wobei K der Kreditbetrag ist, r der monatliche Zinssatz (Jahreszins ÷ 12 ÷ 100) und n die Anzahl der Monatsraten.",
        },
        {
          p: "Ein Beispiel: Ein Kredit über 200.000 € zu 3,5 % pro Jahr mit 25 Jahren Laufzeit ergibt r = 0,00292 und n = 300. Die monatliche Rate beträgt damit rund **1.001 €**. Über 25 Jahre zahlen Sie insgesamt etwa 300.374 € zurück, davon sind rund 100.374 € Zinsen.",
        },
        { h2: "So zahlen Sie weniger Zinsen" },
        {
          ul: [
            "**Wählen Sie eine kürzere Laufzeit, wenn Sie es sich leisten können.** Eine längere Laufzeit senkt die monatliche Rate, erhöht aber die gesamten Zinskosten deutlich.",
            "**Nutzen Sie Sondertilgungen.** Schon gelegentliche Extrazahlungen zu Beginn der Laufzeit senken die Zinskosten spürbar.",
            "**Vergleichen Sie Kreditangebote.** Schon 0,5 Prozentpunkte Zinsunterschied summieren sich bei einer langen Baufinanzierung zu einem großen Betrag.",
            "**Bringen Sie mehr Eigenkapital ein**, um weniger Geld leihen zu müssen.",
          ],
        },
        {
          p: "**Hinweis:** Die Ergebnisse sind Schätzwerte für Ihre Planung. Die genauen Zahlen Ihrer Bank können wegen Gebühren, Rundung und Zinsänderungen leicht abweichen. Dies ist keine Finanzberatung.",
        },
      ],
      faqs: [
        {
          q: "Kann ich den Rechner für Baufinanzierung, Autokredit und Ratenkredit nutzen?",
          a: "Ja. Der Rechner funktioniert für jeden Kredit, bei dem die Zinsen auf die Restschuld berechnet werden. Das gilt für fast alle Baufinanzierungen, Autokredite, Ratenkredite und Studienkredite.",
        },
        {
          q: "Funktioniert der Rechner auch bei variablen Zinsen?",
          a: "Die Berechnung geht davon aus, dass der Zinssatz über die gesamte Laufzeit gleich bleibt. Bei einem variablen Zinssatz oder nach Ablauf der Zinsbindung rechnen Sie einfach mit dem neuen Zinssatz erneut, sobald er sich ändert.",
        },
        {
          q: "Sind Gebühren oder Versicherungen in der Rate enthalten?",
          a: "Nein. Das Ergebnis umfasst nur Zinsen und Tilgung. Mögliche Gebühren, eine Restschuldversicherung und andere Nebenkosten kommen hinzu und hängen von Ihrem Kreditgeber ab.",
        },
        {
          q: "Was passiert, wenn ich einen Teil des Kredits vorzeitig zurückzahle?",
          a: "Eine Sondertilgung senkt Ihre Restschuld, sodass Sie ab dann weniger Zinsen zahlen. Die meisten Banken verkürzen danach entweder die Laufzeit oder senken die monatliche Rate. Prüfen Sie, ob Ihr Vertrag kostenlose Sondertilgungen erlaubt oder eine Vorfälligkeitsentschädigung vorsieht.",
        },
        {
          q: "Warum fließt am Anfang so viel meiner Rate in die Zinsen?",
          a: "Zinsen werden auf die Restschuld berechnet, und die ist zu Beginn des Kredits am höchsten. Je mehr Sie tilgen, desto kleiner wird der Zinsanteil jeder Rate und desto größer der Tilgungsanteil. Das sehen Sie im Tilgungsplan oben.",
        },
      ],
    },

    "word-counter": {
      name: "Wörter zählen",
      summary: "Wörter, Zeichen, Sätze und Lesezeit direkt beim Tippen zählen.",
      seoTitle: "Wörter zählen & Zeichen zählen – Zeichenzähler online",
      seoDescription:
        "Wörter und Zeichen online zählen, mit und ohne Leerzeichen. Dazu Sätze, Absätze und Lesezeit. Kostenlos, ohne Anmeldung und für jede Sprache geeignet.",
      keywords: [
        "wörter zählen",
        "zeichen zählen",
        "zeichenzähler",
        "wortzähler",
        "wörter zählen online",
        "zeichen zählen online",
        "zeichen zählen ohne leerzeichen",
        "lesezeit berechnen",
      ],
      howTo: [
        "Tippen Sie in das Feld oder fügen Sie Ihren Text ein.",
        "Wörter, Zeichen, Sätze und Absätze werden beim Tippen sofort gezählt.",
        "Prüfen Sie die geschätzte Lese- und Sprechzeit und sehen Sie, welche Keywords Sie am häufigsten wiederholen.",
        "Mit „Text kopieren“ kopieren Sie Ihren Text, mit „Leeren“ beginnen Sie von vorn.",
      ],
      content: [
        { h2: "Das zählt der Zeichenzähler" },
        {
          ul: [
            "**Wörter und Zeichen**, mit und ohne Leerzeichen.",
            "**Sätze und Absätze**, wobei jede nicht leere Zeile als Absatz zählt.",
            "**Lese- und Sprechzeit**, praktisch für Blogartikel, Reden und Präsentationen.",
            "**Keyword-Dichte**: Sie zeigt, wie oft Sie wichtige Wörter wiederholen, damit Sie keines überstrapazieren.",
          ],
        },
        { h2: "Gängige Wort- und Zeichenlimits" },
        {
          ul: [
            "Beitrag auf X (Twitter): 280 Zeichen",
            "Meta Description für SEO: etwa 155–160 Zeichen",
            "Instagram-Bildunterschrift: 2.200 Zeichen",
            "LinkedIn-Beitrag: 3.000 Zeichen",
            "Normseite (Verlage und Übersetzungen): 1.800 Zeichen inklusive Leerzeichen",
          ],
        },
        { h2: "Für jede Sprache gemacht" },
        {
          p: "Viele einfache Wortzähler trennen Text nur an Leerzeichen, was in vielen Sprachen zu falschen Ergebnissen führt. Dieses Tool nutzt die sprachbewusste Textsegmentierung moderner Browser. Die Zählung stimmt also, egal ob Sie auf Deutsch, Englisch, Türkisch, Polnisch oder Japanisch schreiben, und auch Umlaute und ß werden korrekt erfasst.",
        },
      ],
      faqs: [
        {
          q: "Wie zählt der Wortzähler Wörter?",
          a: "Er nutzt die integrierte, sprachbewusste Textsegmentierung Ihres Browsers, also dieselbe Technik, mit der Sie per Doppelklick ein Wort markieren. Zahlen zählen als Wörter. Wörter mit Bindestrich wie „E-Mail“ zählen als zwei Wörter.",
        },
        {
          q: "Werden Leerzeichen als Zeichen gezählt?",
          a: "Die Hauptzahl bei „Zeichen“ enthält Leerzeichen und Zeilenumbrüche. Die Zahl unter dem Textfeld zeigt die Anzahl ohne Leerzeichen, die manche Formulare und Hausarbeiten verlangen.",
        },
        {
          q: "Wie wird die Lesezeit berechnet?",
          a: "Für die Lesezeit wird eine durchschnittliche stille Lesegeschwindigkeit von 238 Wörtern pro Minute bei Erwachsenen angenommen. Für die Sprechzeit gilt ein angenehmes Vortragstempo von 140 Wörtern pro Minute.",
        },
        {
          q: "Wird mein Text gespeichert oder irgendwohin gesendet?",
          a: "Nein. Ihr Text bleibt in Ihrem Browser und wird nie hochgeladen. Er wird auch nicht gespeichert, wenn Sie die Seite neu laden, ist er also weg. Kopieren Sie alles, was Sie behalten möchten.",
        },
        {
          q: "Funktioniert der Zähler auch mit anderen Sprachen?",
          a: "Ja. Dank sprachbewusster Segmentierung zählt er Wörter und Zeichen in jeder Sprache korrekt, etwa auf Deutsch, Englisch, Französisch, Türkisch, Polnisch oder Russisch, und sogar in Sprachen, die ohne Leerzeichen geschrieben werden, wie Chinesisch und Japanisch.",
        },
      ],
    },

    "json-formatter": {
      name: "JSON Formatter",
      summary: "JSON formatieren, validieren und minimieren, mit exakter Fehlerstelle.",
      seoTitle: "JSON Formatter & Validator – JSON online formatieren",
      seoDescription:
        "JSON online formatieren, validieren und minimieren. Syntaxfehler mit Zeile und Spalte finden und Schlüssel sortieren. Ihre Daten bleiben in Ihrem Browser.",
      keywords: [
        "json formatter",
        "json formatieren",
        "json validator",
        "json prüfen",
        "json validieren",
        "json beautifier",
        "json online formatieren",
        "json minify",
      ],
      howTo: [
        "Fügen Sie Ihr JSON in das Eingabefeld ein oder klicken Sie auf „Beispiel“, um das Tool auszuprobieren.",
        "Das Tool prüft Ihr JSON schon beim Tippen und zeigt die genaue Zeile und Spalte jedes Fehlers an.",
        "Klicken Sie auf „Formatieren“, um es übersichtlich darzustellen (wählen Sie 2 Leerzeichen, 4 Leerzeichen oder Tabs und sortieren Sie die Schlüssel auf Wunsch), oder auf „Minimieren“, um es zu komprimieren.",
        "Kopieren Sie das Ergebnis oder laden Sie es als .json-Datei herunter.",
      ],
      content: [
        { h2: "Was ist ein JSON Formatter?" },
        {
          p: "JSON (JavaScript Object Notation) ist das gängigste Format für den Datenaustausch zwischen Apps und APIs. Um Platz zu sparen, wird es oft als eine einzige lange Zeile übertragen, die schwer zu lesen ist. Ein JSON Formatter fügt Einrückungen und Zeilenumbrüche hinzu, damit die Struktur klar erkennbar ist, und ein Validator prüft, ob die Syntax korrekt ist.",
        },
        { h2: "Häufige JSON-Fehler und wie Sie sie beheben" },
        {
          ul: [
            "**Abschließende Kommas:** Entfernen Sie das Komma nach dem letzten Element eines Objekts oder Arrays.",
            "**Einfache Anführungszeichen:** Ersetzen Sie `'text'` durch `\"text\"`.",
            "**Schlüssel ohne Anführungszeichen:** Schreiben Sie `{\"name\": 1}`, nicht `{name: 1}`.",
            "**Kommentare:** JSON unterstützt keine Kommentare mit `//` oder `/* */`.",
            "**Fehlende Kommas** zwischen Elementen, oft nach dem Kopieren und Einfügen.",
          ],
        },
        { h2: "Ihre Daten bleiben privat" },
        {
          p: "API-Antworten und Konfigurationsdateien enthalten oft Zugriffstoken, E-Mail-Adressen oder andere sensible Daten. Viele Online-Formatter senden das Eingefügte an einen Server. Dieser nie: Die gesamte Verarbeitung findet in Ihrem Browser statt.",
        },
      ],
      faqs: [
        {
          q: "Was ist der Unterschied zwischen Formatieren und Minimieren von JSON?",
          a: "Beim Formatieren (auch Beautify oder Pretty Print genannt) werden Zeilenumbrüche und Einrückungen hinzugefügt, damit Menschen das JSON leicht lesen können. Beim Minimieren werden alle unnötigen Leerzeichen entfernt, damit die Daten für die Übertragung über ein Netzwerk möglichst klein sind.",
        },
        {
          q: "Warum ist mein JSON ungültig, obwohl es in JavaScript funktioniert?",
          a: "JavaScript-Objektliterale sind weniger streng als JSON. JSON verlangt doppelte Anführungszeichen um jeden Schlüssel und jeden String und erlaubt keine abschließenden Kommas, Kommentare, einfachen Anführungszeichen oder Werte wie undefined und NaN.",
        },
        {
          q: "Kann das Tool große JSON-Dateien verarbeiten?",
          a: "Ja. Dateien mit mehreren Megabyte werden auf einem normalen Computer in deutlich unter einer Sekunde formatiert, da alles lokal in Ihrem Browser läuft und keine Upload-Zeit anfällt.",
        },
        {
          q: "Bleiben sehr große Zahlen exakt erhalten?",
          a: "Ganzzahlen größer als 9.007.199.254.740.991 lassen sich in JavaScript nicht exakt darstellen und werden beim Formatieren möglicherweise gerundet. Wenn Sie mit sehr großen IDs arbeiten, speichern Sie diese in Ihrem JSON als Strings.",
        },
        {
          q: "Wird mein JSON an einen Server gesendet?",
          a: "Nein. Parsen, Validieren und Formatieren finden vollständig in Ihrem Browser statt. Deshalb können Sie bedenkenlos API-Antworten mit Tokens, Schlüsseln oder personenbezogenen Daten einfügen.",
        },
      ],
    },

    "meta-tag-checker": {
      name: "Meta Title & Description prüfen",
      summary: "Snippet-Vorschau ansehen und Länge von Title und Description prüfen.",
      seoTitle: "Meta Title & Description prüfen – Länge & SERP-Vorschau",
      seoDescription:
        "Prüfen Sie die Länge von Meta Title und Description in Zeichen und Pixeln, sehen Sie die Vorschau im Suchergebnis und kopieren Sie die fertigen HTML-Tags.",
      keywords: [
        "meta title prüfen",
        "meta description prüfen",
        "meta title länge",
        "meta description länge",
        "serp snippet generator",
        "snippet vorschau",
        "google snippet vorschau",
        "title tag länge",
      ],
      howTo: [
        "Geben Sie Ihren Seitentitel in das Feld „Meta Title“ ein oder fügen Sie ihn dort ein.",
        "Ergänzen Sie Ihre Meta Description und optional die URL der Seite.",
        "Behalten Sie Zeichen- und Pixelanzahl sowie die Live-Vorschau im Blick. Ziel ist bei beiden „Gute Länge“.",
        "Klicken Sie auf „Code kopieren“ und fügen Sie die Tags in den <head>-Bereich Ihrer Seite ein.",
      ],
      content: [
        { h2: "Warum die Pixelbreite entscheidend ist" },
        {
          p: "Suchmaschinen kürzen Titel und Beschreibungen nach ihrer Breite auf dem Bildschirm, nicht nach der Zeichenzahl. Deshalb misst dieser Checker beides: rund 580 Pixel für Titel (meist 50–60 Zeichen) und rund 920 Pixel für Beschreibungen auf dem Desktop (meist 150–160 Zeichen).",
        },
        { h2: "Tipps für einen besseren Meta Title" },
        {
          ul: [
            "Setzen Sie Ihr wichtigstes Keyword möglichst an den Anfang.",
            "Geben Sie jeder Seite einen eigenen Titel, der zu dem passt, wonach Suchende suchen.",
            "Setzen Sie Ihren Markennamen ans Ende, getrennt durch einen Bindestrich oder einen senkrechten Strich (|).",
            "Vermeiden Sie durchgehende GROSSBUCHSTABEN und gehäufte Keyword-Wiederholungen.",
          ],
        },
        { h2: "Tipps für eine bessere Meta Description" },
        {
          ul: [
            "Fassen Sie den Nutzen der Seite in ein oder zwei Sätzen zusammen.",
            "Bauen Sie Ihr Keyword natürlich ein. Suchmaschinen heben Wörter, die zur Suche passen, oft hervor.",
            "Schließen Sie mit einer klaren Handlungsaufforderung, etwa „Jetzt kostenlos testen“ oder „Zum vollständigen Ratgeber“.",
          ],
        },
      ],
      faqs: [
        {
          q: "Wie lang sollte der Meta Title idealerweise sein?",
          a: "Ideal sind etwa 50–60 Zeichen bzw. weniger als rund 580 Pixel Breite. Längere Titel werden in den Desktop-Suchergebnissen meist mit Auslassungspunkten abgeschnitten.",
        },
        {
          q: "Wie lang sollte die Meta Description idealerweise sein?",
          a: "Etwa 120–160 Zeichen funktionieren gut. Kürzere Beschreibungen erklären die Seite oft nicht ausreichend, längere werden meist abgeschnitten.",
        },
        {
          q: "Beeinflusst die Meta Description das Ranking?",
          a: "Laut Google ist die Meta Description kein direkter Rankingfaktor. Sie ist trotzdem wichtig, denn eine klare, relevante Beschreibung kann mehr Menschen dazu bringen, auf Ihr Ergebnis zu klicken.",
        },
        {
          q: "Warum zeigt Google einen anderen Titel oder eine andere Beschreibung an als meine?",
          a: "Suchmaschinen schreiben Titel und Beschreibungen manchmal um, damit sie besser zur Suchanfrage passen, und nutzen dafür anderen Text Ihrer Seite. Mit präzisen, aussagekräftigen Tags steigt die Chance, dass Ihre verwendet werden.",
        },
        {
          q: "Warum Pixel statt Zeichen messen?",
          a: "Suchergebnisse werden danach abgeschnitten, wie viel Platz der Text einnimmt, nicht danach, wie viele Buchstaben er hat. Ein Titel mit vielen breiten Buchstaben wie W und M wird früher abgeschnitten als einer mit schmalen Buchstaben wie i und l.",
        },
      ],
    },

    "keyword-generator": {
      name: "Keyword-Generator",
      summary: "Hunderte Keyword-Ideen für SEO, gruppiert nach Suchintention.",
      seoTitle: "Keyword-Generator kostenlos – Keyword-Ideen für SEO",
      seoDescription:
        "Hunderte Keyword-Ideen aus einem Begriff: Fragen, Long-Tail-Keywords, Kauf-Keywords und Vergleiche in 7 Sprachen. Kostenlos und ohne Anmeldung.",
      keywords: [
        "keyword generator",
        "keyword tool kostenlos",
        "keyword recherche",
        "keyword recherche tool",
        "keyword ideen",
        "long tail keywords finden",
        "seo keywords finden",
        "w-fragen tool",
      ],
      howTo: [
        "Geben Sie ein Keyword oder Thema ein, etwa „Baufinanzierung“ oder „Wörter zählen“. Mehrere Keywords trennen Sie mit Kommas.",
        "Wählen Sie die Sprache, in der Sie Keyword-Ideen erhalten möchten.",
        "Sehen Sie sich die Ideen an, gruppiert nach Fragen, beliebten Phrasen, Long-Tail-Ideen, Kauf-Keywords und Vergleichen.",
        "Filtern Sie die Liste, kopieren Sie eine Gruppe oder laden Sie alles als CSV-Datei für Ihre Tabellenkalkulation herunter.",
      ],
      content: [
        { h2: "Was ist ein Keyword-Generator?" },
        {
          p: "Ein Keyword-Generator macht aus einem Ausgangsbegriff viele verwandte Suchphrasen. So entdecken Sie, was Menschen bei Google eingeben könnten, und können Blogartikel, Produktseiten und FAQs an echten Fragen ausrichten, statt zu raten.",
        },
        { h2: "Die Suchintention verstehen" },
        {
          ul: [
            "**Informativ:** Suchende möchten etwas wissen, z. B. „wie funktioniert eine Baufinanzierung“. Beantworten Sie solche Anfragen mit Ratgebern und FAQs.",
            "**Kommerziell:** Suchende vergleichen Optionen, z. B. „Baufinanzierung Vergleich“ oder „Baufinanzierung Testsieger“. Beantworten Sie diese mit Testberichten und Vergleichen.",
            "**Transaktional:** Suchende sind bereit zu handeln, z. B. „Baufinanzierung Angebot“ oder „kaufen“. Beantworten Sie diese mit Produkt-, Preis- oder Anmeldeseiten.",
          ],
        },
        { h2: "So wählen Sie die richtigen Keywords" },
        {
          ul: [
            "**Beginnen Sie mit Long-Tail-Ideen.** Längere, spezifische Phrasen haben weniger Konkurrenz, und eine neue Website kann dafür leichter ranken.",
            "**Prüfen Sie das Suchvolumen** Ihrer Favoriten im Google Keyword-Planer (kostenlos mit einem Google-Ads-Konto) oder in der Google Search Console, sobald Ihre Website Besucher hat.",
            "**Sehen Sie sich die aktuellen Google-Ergebnisse** zu jedem Keyword an. Wenn große Marken die erste Seite füllen, wählen Sie eine spezifischere Phrase.",
            "**Erstellen Sie pro Hauptthema eine Seite** und verwenden Sie eng verwandte Keywords ganz natürlich in Überschriften und Text.",
          ],
        },
      ],
      faqs: [
        {
          q: "Zeigt dieses Tool das Suchvolumen an?",
          a: "Nein. Es erzeugt Keyword-Ideen aus bewährten Suchmustern, Daten zum Suchvolumen stammen dagegen aus kostenpflichtigen Datenbanken. Prüfen Sie das Volumen Ihrer besten Ideen kostenlos im Google Keyword-Planer oder in der Google Search Console.",
        },
        {
          q: "Was ist der Unterschied zu Ahrefs, Semrush oder Sistrix?",
          a: "Kostenpflichtige Tools wie Ahrefs, Semrush und Sistrix kombinieren Keyword-Ideen mit eigenen Daten zu Suchvolumen und Keyword-Schwierigkeit. Dieses Tool konzentriert sich auf die schnelle, kostenlose Ideenfindung, den ersten Schritt jeder Keyword-Recherche.",
        },
        {
          q: "Kann ich Keywords in anderen Sprachen erstellen?",
          a: "Ja. Wählen Sie eine Keyword-Sprache, und die Ideen werden aus natürlichen Formulierungen auf Deutsch, Englisch, Französisch, Spanisch, Portugiesisch, Italienisch oder Niederländisch gebildet.",
        },
        {
          q: "Was sind Long-Tail-Keywords?",
          a: "Long-Tail-Keywords sind längere, spezifischere Phrasen wie „Zeichen zählen ohne Leerzeichen online“. Jede einzelne wird seltener gesucht, dafür lässt sich leichter ranken, und sie bringen meist Besucher, die genau wissen, was sie wollen.",
        },
        {
          q: "Ist die Nutzung kostenlos?",
          a: "Ja. Der Keyword-Generator ist komplett kostenlos, erfordert kein Konto und hat keine Tageslimits. Er läuft in Ihrem Browser, sodass Ihre Keywords an keinen Server gesendet werden.",
        },
      ],
    },
  },

  keywordTemplates: {
    questions: [
      "was ist {k}",
      "was bedeutet {k}",
      "wie funktioniert {k}",
      "wie nutzt man {k}",
      "was kostet {k}",
      "ist {k} kostenlos",
      "gibt es {k} kostenlos",
      "ist {k} sicher",
      "lohnt sich {k}",
      "wofür braucht man {k}",
      "wer braucht {k}",
      "was bringt {k}",
      "welche Vorteile hat {k}",
      "wo gibt es {k}",
      "was ist besser als {k}",
    ],
    modifiers: [
      "{k} kostenlos",
      "{k} online",
      "{k} online kostenlos",
      "{k} gratis",
      "beste {k}",
      "{k} einfach",
      "{k} schnell",
      "{k} App",
      "{k} Tool",
      "{k} Software",
      "{k} Programm",
      "{k} Webseite",
      "{k} auf Deutsch",
      "{k} Download",
      "{k} aktuell",
      "{k} {year}",
    ],
    longTail: [
      "{k} für Anfänger",
      "{k} im Studium",
      "{k} für Selbstständige",
      "{k} für kleine Unternehmen",
      "{k} für Profis",
      "{k} für Mac",
      "{k} für Windows",
      "{k} für Android",
      "{k} für iPhone",
      "{k} ohne Anmeldung",
      "{k} ohne Installation",
      "{k} Tipps",
      "{k} Anleitung",
      "{k} Beispiele",
      "{k} Schritt für Schritt",
      "{k} Checkliste",
    ],
    commercial: [
      "{k} kaufen",
      "{k} bestellen",
      "{k} Preis",
      "{k} Preise",
      "{k} Kosten",
      "{k} günstig",
      "{k} Angebot",
      "{k} Rabatt",
      "{k} Gutschein",
      "{k} kostenlos testen",
      "{k} Abo",
      "{k} Erfahrungen",
      "{k} Bewertungen",
      "{k} Test",
      "{k} in der Nähe",
    ],
    comparisons: [
      "{k} Alternativen",
      "beste Alternativen zu {k}",
      "{k} Alternative kostenlos",
      "{k} Vergleich",
      "{k} Vergleich {year}",
      "{k} Vor- und Nachteile",
      "{k} kostenlos oder kostenpflichtig",
      "{k} Anbieter im Vergleich",
      "{k} Top 10",
      "{k} Testsieger",
      "{k} Test {year}",
      "{k} Ranking",
    ],
  },
};

export default content;
