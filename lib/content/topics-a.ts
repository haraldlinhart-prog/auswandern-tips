import { guide } from './create';
import { links } from './links';
import type { Guide } from './types';

export const checkliste: Guide = guide({
  kind: 'topic',
  slug: 'auswandern-checkliste',
  title: 'Auswandern-Checkliste',
  label: 'Auswandern-Checkliste',
  eyebrow: 'Vorbereitung',
  description:
    'Reihenfolge für den Umzug aus Deutschland, Österreich oder der Schweiz: Aufenthalt, Versicherung, Steuern, Dokumente und die ersten Wochen vor Ort.',
  summary:
    'Beginnen Sie mit dem Aufenthaltsrecht, der Krankenversicherung und dem Steuerwohnsitz, nicht mit dem Möbelcontainer. Die Reihenfolge hängt vom Zielland ab. Fast immer müssen Dokumente, eine mögliche Versicherungslücke und die Abmeldung geklärt sein, bevor der Alltag im neuen Land funktioniert.',
  sections: [
    {
      id: 'anfang',
      heading: 'Womit sollte ich anfangen?',
      lead: 'Mit drei Fragen: Darf ich im Zielland wohnen und arbeiten, wo bin ich versichert, und wo gelte ich als steuerlich ansässig? Alles andere hängt daran.',
      paragraphs: [
        'Ein Mietvertrag im Zielland ohne geklärtes Visum oder ohne Anmeldung erzeugt Druck, aber kein Aufenthaltsrecht. Kündigen Sie Wohnung und Arbeit im Herkunftsland erst, wenn der Aufenthalt realistisch ist. Bei konsularischen Visa, etwa in die [USA](/laender/usa) oder nach [Kanada](/laender/kanada), heißt das oft: erst die Genehmigung, dann die Kündigung. Innerhalb der EU, etwa [Spanien](/laender/spanien) oder [Portugal](/laender/portugal), dürfen Sie einreisen und müssen den längeren Aufenthalt trotzdem anmelden.',
        'Schreiben Sie auf, welches Herkunftsland Sie meinen. Deutschland, Österreich und die Schweiz haben ähnliche Fragen und andere Behörden. Eine Checkliste nur für das Bürgeramt hilft in Wien und Zürich nicht wortgleich. Die Länderseiten auf dieser Website folgen immer demselben Raster, damit Sie die Lücken sehen.',
      ],
    },
    {
      id: 'monate',
      heading: 'Was erledige ich mehrere Monate vorher?',
      lead: 'Dokumente, die eine Apostille oder eine Übersetzung brauchen, und alles, was eine Wartezeit hat: Visum, Schule, Haustier, Versicherung mit Vorerkrankung.',
      paragraphs: [
        'Passgültigkeit, Geburts- und Heiratsurkunden, Führerschein und Zeugnisse liegen oft nicht in der Form vor, die das Zielland will. Manche Staaten verlangen eine Apostille und eine vereidigte Übersetzung. Die Bearbeitungszeit gehört in den Kalender, nicht in die letzte Woche. Impf- und Gesundheitsnachweise für Menschen und Tiere haben bei vielen Einreisen Wochen oder Monate Vorlauf. Die aktuelle Liste steht bei der Botschaft und beim Veterinäramt, nicht in einem Forum.',
        'Holen Sie eine schriftliche Auskunft Ihrer Krankenversicherung, bis zu welchem Tag der Schutz gilt und was eine Entsendung wäre. Das ist etwas anderes als ein privater Umzug. Lesen Sie [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland). Wer Gesellschaftsanteile hält, lässt die Wegzugsbesteuerung vor dem Wohnsitzwechsel prüfen, siehe [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
      ],
    },
    {
      id: 'kurz-vorher',
      heading: 'Was kläre ich kurz vor dem Umzug?',
      lead: 'Bank, Post, Vollmachten und die Frage, welche Wohnung im Herkunftsland wirklich bestehen bleibt. Eine Adresse, an der niemand wohnt, ist keine harmlose Reserve.',
      paragraphs: [
        'Fragen Sie die Bank schriftlich, ob das Konto ohne Wohnsitz im Land weitergeführt wird. Kündigen Sie es nicht am Tag der Abreise. Rente, Finanzamt und Versicherung schreiben noch Monate später. Eine Vertrauensperson mit Vollmacht und ein erreichbarer Briefkasten sind praktischer als ein stillgelegtes Konto. Details im Ratgeber [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
        'Die [Abmeldung in Deutschland](/ratgeber/abmeldung-deutschland) ist fällig, wenn Sie keine Wohnung mehr im Inland haben. In Österreich und der Schweiz gibt es die Abmeldung bei der Meldebehörde. Eine Wohnung, die Ihnen weiter zur Verfügung steht, kann steuerlich ein Wohnsitz bleiben. Entscheiden Sie das bewusst. Eine Scheinmeldung empfehlen wir nicht.',
      ],
    },
    {
      id: 'vor-ort',
      heading: 'Was ist in den ersten Wochen vor Ort zu tun?',
      lead: 'Anmelden, versichern, Konto und Steueridentifikation holen, und erst dann Verträge unterschreiben, die Sie nicht wieder loswerden.',
      paragraphs: [
        'Die Reihenfolge ist je nach Land verschieden, das Muster nicht. In [Spanien](/laender/spanien) sind NIE und Padrón zentral, in der [Schweiz](/laender/schweiz) die Gemeinde und die Grundversicherung innerhalb der Frist, in [Dubai](/laender/dubai-vae) die Emirates ID, in [Thailand](/laender/thailand) das langfristige Visum vor dem Banktermin. Arbeiten Sie die Länderseite ab, statt überall dasselbe Formular zu erwarten.',
        'Schulen, Führerscheinumschreibung und die Anmeldung der Rente im Ausland laufen parallel, haben aber eigene Fristen. Die [Rente im Ausland](/ratgeber/rente-im-ausland) sollten Sie angestoßen haben, bevor das einzige Euro-Konto geschlossen ist.',
      ],
    },
    {
      id: 'unterlagen',
      heading: 'Welche Unterlagen sollte ich griffbereit haben?',
      lead: 'Ausweise, Urkunden, Versicherungsnachweise, Steuer-ID und einen Ordner mit Verträgen, digital und auf Papier. Nicht alles muss übersetzt sein, aber das, was die Behörde verlangt.',
      bullets: [
        'Gültiger Pass und, wo nötig, Führerschein und internationale Zulassung als Übergang',
        'Geburts-, Heirats- oder Scheidungsurkunden, bei Kindern Sorgerechtsnachweise',
        'Arbeitszeugnisse und Berufsabschlüsse, falls das Visum oder der Arbeitgeber sie will',
        'Versicherungsnachweis und die schriftliche Auskunft der alten Kasse',
        'Steueridentifikation und die letzten Bescheide, damit der Berater nicht raten muss',
        'Miet- oder Kaufvertrag im Zielland, sobald er existiert',
        'Vollmacht für eine Person im Herkunftsland und eine Liste der laufenden Verträge',
        'Impf- und, bei Tieren, Gesundheitsunterlagen mit dem von der Behörde verlangten Vorlauf',
      ],
      paragraphs: [
        'Scannen Sie die Originale, bevor sie im Umzugskarton verschwinden. Behörden wollen oft das Original oder eine beglaubigte Kopie sehen. Eine Cloud ersetzt die Beglaubigung nicht.',
      ],
    },
    {
      id: 'vergessen',
      heading: 'Was wird oft vergessen?',
      lead: 'Rundfunkbeitrag, Rundfunk und GEZ sind nicht dasselbe Formular wie die Abmeldung. Die Rente, der Führerschein und das Haustier haben eigene Fristen. Und der Rückweg ist kein Automatismus.',
      paragraphs: [
        'In Deutschland kündigen Sie den Rundfunkbeitrag getrennt vom Bürgeramt. Die Kirche, das Fahrzeug, die Hundesteuer und die Schule erfahren von der Abmeldung nicht zuverlässig von selbst. In Österreich und der Schweiz sind die entsprechenden Register andere. Gehen Sie die Verträge durch, die an die alte Adresse gebunden sind: Handy, Versicherung, Vereine, Kredit.',
        'Wer später zurückwill, sollte Verträge und Versicherungszeiten nicht leichtfertig kündigen. Freiwillige Beiträge zur Rentenversicherung und Anwartschaften in der privaten Krankenversicherung sind Anträge mit Bedingungen, keine Kündigungsbestätigung. Notieren Sie, welche Fristen laufen, solange Sie noch Post an der alten Adresse lesen.',
      ],
    },
  ],
  faqs: [
    {
      question: 'In welcher Reihenfolge sollte ich kündigen?',
      answer:
        'Zuerst den Aufenthalt klären, dann Versicherung und Bank sichern, dann Wohnung und Job. Ein Visum, das noch nicht erteilt ist, ist kein Grund, das einzige Konto zu schließen. Die Abmeldung kommt, wenn keine Wohnung im Herkunftsland mehr besteht, nicht als erster Schritt.',
    },
    {
      question: 'Gilt dieselbe Checkliste für Österreich und die Schweiz?',
      answer:
        'Die Fragen ja, die Behörden nein. Abmeldung, Steuer und Krankenversicherung laufen über andere Stellen als in Deutschland. Nutzen Sie die Checkliste als Reihenfolge und die Behörden Ihres Herkunftslands als Quelle für das Formular.',
    },
    {
      question: 'Sollte ich eine Adresse in der Heimat behalten?',
      answer:
        'Nur wenn Sie die Wohnung wirklich nutzen können und die Folgen akzeptieren. Eine Anschrift ohne tatsächliches Wohnen kann melde- und steuerrechtlich schaden. Wir raten nicht zu einer Scheinmeldung.',
    },
  ],
  related: [links.abmeldung, links.steuern, links.krankenversicherung, links.bank, links.rente, links.spanien, links.schweiz],
  sources: [
    'Gemeinde oder Bürgeramt des Herkunftslands zur Abmeldung',
    'Botschaft des Ziellands zur Dokumentenliste',
    'Ihre Krankenversicherung zur Frage, wann der Schutz endet',
    'Finanzamt, Finanzverwaltung oder kantonales Steueramt vor dem Wohnsitzwechsel',
  ],
});

export const abmeldung: Guide = guide({
  kind: 'topic',
  slug: 'abmeldung-deutschland',
  title: 'Abmeldung in Deutschland',
  label: 'Abmeldung in Deutschland',
  eyebrow: 'Herkunftsland',
  description:
    'Wann die Abmeldung beim Bürgeramt fällig ist, was sie nicht ersetzt, und wie die Abmeldung in Österreich und der Schweiz daneben funktioniert.',
  summary:
    'Wer in Deutschland aus einer Wohnung auszieht und keine neue Wohnung im Inland bezieht, muss sich in der Regel innerhalb von zwei Wochen abmelden. Die Abmeldung ersetzt weder die Steuererklärung noch die Kündigung von Versicherung, Rundfunkbeitrag oder Bank. Österreich und die Schweiz haben eigene Meldeverfahren. Eine Wohnung, die Ihnen bleibt, ist ein anderer Fall.',
  sections: [
    {
      id: 'wann',
      heading: 'Wann muss ich mich in Deutschland abmelden?',
      lead: 'Wenn Sie eine Wohnung aufgeben und keine neue im Inland beziehen. Die Frist beträgt in der Regel zwei Wochen nach dem Auszug. Zuständig ist die Meldebehörde der Gemeinde, die Sie verlassen.',
      paragraphs: [
        'Grundlage ist das Bundesmeldegesetz. Die Behörde Ihrer Gemeinde sagt, ob Sie persönlich, schriftlich oder online abmelden und welche Unterlagen sie sieht. Einen Personalausweis oder Pass brauchen Sie praktisch immer. Ziehen Sie innerhalb Deutschlands um, ist das eine Ummeldung, keine Abmeldung ins Ausland. Ziehen Sie ins Ausland und behalten eine Wohnung, die Sie weiter nutzen, bleiben Sie dort gemeldet. Ob diese Wohnung steuerlich ein Wohnsitz ist, entscheidet nicht das Bürgeramt allein.',
        'Die Abmeldung ist kein Gefallen und keine Formsache ohne Folgen. Viele Stellen fragen später nach der Abmeldebescheinigung: Banken, Kassen, das Finanzamt, manchmal das Zielland. Heben Sie die Bescheinigung auf. Wer die Frist verstreichen lässt, riskiert ein Verfahren bei der Gemeinde. Die praktische Handhabung unterscheidet sich. Schauen Sie auf die Seite Ihrer Stadt, nicht auf die einer anderen.',
      ],
    },
    {
      id: 'ablauf',
      heading: 'Wie läuft die Abmeldung praktisch ab?',
      lead: 'Sie erklären gegenüber der Meldebehörde, dass Sie die Wohnung aufgeben und ins Ausland ziehen. Sie bekommen eine Bestätigung. Damit ist der Meldedatensatz fortgezogen, nicht Ihr ganzes Leben umgestellt.',
      paragraphs: [
        'Manche Gemeinden wollen die neue Adresse im Ausland, andere nehmen „unbekannt verzogen“ nicht einfach hin, wenn Sie die Adresse kennen. Geben Sie eine erreichbare Anschrift an, wenn Sie Post von Behörden erwarten. Eine Abmeldung „ins Hotel“ ohne Plan erzeugt später Lücken bei Rente und Finanzamt. Wenn mehrere Personen in der Wohnung gemeldet sind, meldet jede Person ihren eigenen Fortzug, Kinder über die Sorgeberechtigten.',
        'Ein Wohnungsgeberdokument ist vor allem bei der Anmeldung üblich, nicht bei jedem Fortzug. Verlassen Sie sich nicht auf eine allgemeine Liste aus dem Internet. Die Bestätigung der Abmeldung sollten Sie digital und auf Papier behalten. Sie ist oft der Nachweis, den eine ausländische Behörde oder eine Bank später sehen will.',
      ],
    },
    {
      id: 'parallel',
      heading: 'Was muss ich parallel abmelden oder umstellen?',
      lead: 'Rundfunkbeitrag, Fahrzeug, Versicherungen, Schule, Verein und Verträge laufen nicht automatisch mit dem Bürgeramt mit. Jede Stelle hat ein eigenes Verfahren.',
      bullets: [
        'Rundfunkbeitrag über den Beitragsservice abmelden, sobald niemand mehr beitragspflichtig in der Wohnung ist',
        'Fahrzeug ab- oder ummelden, wenn es nicht im Inland bleibt; Ausfuhr hat eigene Papiere',
        'Krankenkasse schriftlich informieren und das Enddatum bestätigen lassen, siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland)',
        'Finanzamt über den Wegzug informieren, siehe [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern)',
        'Rente auf Zahlung ins Ausland umstellen, bevor das Konto geschlossen wird, siehe [Rente im Ausland](/ratgeber/rente-im-ausland)',
        'Bank fragen, ob das Konto ohne deutschen Wohnsitz bestehen bleibt, siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland)',
        'Schule, Kita, Hundesteuer, Vereine und Abos an der alten Adresse beenden',
        'Nachsendeauftrag nur als Übergang verstehen, nicht als Ersatz für die neuen Stellen',
      ],
      paragraphs: [
        'Ein Kirchenaustritt ist ein eigenes Verfahren und passiert nicht durch die Abmeldung. Wer kirchensteuerpflichtig war, sollte das Datum klären, damit nicht zwei Systeme parallel buchen. Auch das ist ein Gespräch mit der zuständigen Stelle, kein Automatismus dieses Textes.',
      ],
    },
    {
      id: 'wohnung',
      heading: 'Was gilt, wenn ich eine Wohnung in Deutschland behalte?',
      lead: 'Dann melden Sie sich in der Regel nicht ab. Die Wohnung kann einen melderechtlichen und einen steuerlichen Wohnsitz begründen, auch wenn Sie sich überwiegend im Ausland aufhalten.',
      paragraphs: [
        'Eine Zweitwohnung, die Ihnen zur Verfügung steht, ist etwas anderes als eine Adresse bei Bekannten, an der Sie nie wohnen. Letzteres kann eine falsche Meldung sein. Wir beschreiben das nicht als Gestaltungsmodell. Ob eine leerstehende oder vermietete Wohnung einen steuerlichen Wohnsitz erhält, hängt davon ab, ob sie Ihnen zum Wohnen zur Verfügung steht. Das ist eine Frage für die Steuerberatung vor dem Umzug, nicht für das Formular der Abmeldung.',
        'Wer die Wohnung untervermietet und selbst keinen Schlüssel zum Wohnen mehr hat, ist in einer anderen Lage als jemand, der jedes Wochenende zurückkommt. Schreiben Sie den tatsächlichen Gebrauch auf, bevor Sie gegenüber Finanzamt und Meldebehörde zwei verschiedene Geschichten erzählen. Die Geschichten müssen zusammenpassen.',
      ],
    },
    {
      id: 'at-ch',
      heading: 'Wie melde ich mich in Österreich oder in der Schweiz ab?',
      lead: 'In Österreich bei der Meldebehörde der Gemeinde, in der Schweiz bei der Einwohnerkontrolle der Gemeinde. Fristen und Formulare sind nicht die deutschen.',
      paragraphs: [
        'In Österreich ist der Hauptwohnsitz die zentrale Meldung. Wer ihn aufgibt, meldet das der Gemeinde. Eine Abmeldung in Deutschland ersetzt das nicht, wenn Sie in Österreich gemeldet waren. Nebenwohnsitze haben eigene Folgen, auch für Gebühren. Die Gemeinde Ihrer Wohnung nennt das Verfahren.',
        'In der Schweiz melden Sie den Wegzug bei der Gemeinde an, die Sie verlassen. Kantone unterscheiden sich bei Fristen und bei der Frage, welche Bestätigung Sie für die nächste Krankenversicherung oder die Steuer brauchen. Wer aus der Schweiz in die EU zieht, sollte zusätzlich AHV und Pensionskasse ansprechen, bevor Kapital ausgezahlt oder Beiträge ruhend gestellt werden. Dazu der Ratgeber [Rente im Ausland](/ratgeber/rente-im-ausland). Die deutsche Abmeldebescheinigung hilft Schweizer Behörden nicht als Ersatz.',
      ],
    },
    {
      id: 'folgen',
      heading: 'Welche Folgen hat die Abmeldung für Steuer und Versicherung?',
      lead: 'Die Abmeldung ist ein Datum, das Kassen und Finanzämter sehen. Sie beendet die Steuerpflicht und die Versicherung nicht in jedem Fall an demselben Tag.',
      paragraphs: [
        'Das Finanzamt fragt nach dem Wegzug oft mit einem Fragebogen oder im Rahmen der nächsten Erklärung. Wer einfach verschwindet, erzeugt Schätzungen und Schriftverkehr an eine Adresse, die niemand mehr liest. Geben Sie eine erreichbare Anschrift an. Die unbeschränkte Steuerpflicht kann trotz Abmeldung weiterbestehen, wenn ein Wohnsitz bleibt. Umgekehrt beendet eine verspätete Abmeldung nicht automatisch jede Pflicht im Zielland.',
        'Die Krankenkasse nutzt die Abmeldung als Hinweis, prüft aber eigene Tatbestände: Beschäftigung, Entsendung, Familienversicherung, Rentenbezug. Kündigen Sie nicht im Bürgeramt und gehen davon aus, dass die Kasse Bescheid weiß. Schreiben Sie ihr selbst. Dieselbe Sorgfalt gilt für die private Versicherung und für eine Anwartschaft, die Sie vielleicht behalten wollen.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Kann ich mich online abmelden?',
      answer:
        'Das hängt von Ihrer Gemeinde ab. Manche bieten ein Online-Verfahren, andere verlangen einen Termin oder einen Brief. Die Seite der Meldebehörde, bei der Sie gemeldet sind, ist die Quelle. Eine fremde Stadt ist kein Maßstab.',
    },
    {
      question: 'Reicht die Abmeldung, damit ich in Deutschland nicht mehr steuerpflichtig bin?',
      answer:
        'Nein. Die Meldung und die Steuerpflicht folgen unterschiedlichen Regeln. Eine Wohnung, die Ihnen bleibt, kann einen steuerlichen Wohnsitz erhalten, auch wenn Sie sich überwiegend im Ausland aufhalten. Klären Sie das mit dem Finanzamt oder einer Beratung, bevor Sie umziehen.',
    },
    {
      question: 'Was ist mit Österreich und der Schweiz?',
      answer:
        'Dort melden Sie sich bei der eigenen Gemeinde ab, nicht beim deutschen Bürgeramt. Fristen, Formulare und die Folgen für Versicherung und Steuer sind eigene Verfahren. Die deutsche Abmeldebescheinigung ersetzt sie nicht.',
    },
  ],
  related: [links.checkliste, links.steuern, links.krankenversicherung, links.bank, links.rente, links.schweiz, links.spanien],
  sources: [
    'Meldebehörde der Gemeinde, die Sie verlassen',
    'Bundesmeldegesetz als Rahmen der deutschen Frist, angewendet von Ihrer Gemeinde',
    'Beitragsservice für den Rundfunkbeitrag',
    'Finanzamt und Krankenkasse mit eigener Mitteilung, nicht nur über das Bürgeramt',
  ],
});

export const steuern: Guide = guide({
  kind: 'topic',
  slug: 'steuern-beim-auswandern',
  title: 'Steuern beim Auswandern',
  label: 'Steuern beim Auswandern',
  eyebrow: 'Steuern',
  description:
    'Wohnsitz, 183 Tage, Doppelbesteuerungsabkommen und Wegzugsbesteuerung, wenn Sie Deutschland, Österreich oder die Schweiz verlassen.',
  summary:
    'Ein Umzug beendet die Steuerpflicht im Herkunftsland nicht automatisch. Entscheidend ist, ob Ihnen dort noch ein Wohnsitz zur Verfügung steht oder Sie Ihren gewöhnlichen Aufenthalt behalten, und was ein Doppelbesteuerungsabkommen den Einkünften zuweist. Die oft gehörte Zahl von 183 Tagen ist nur ein Teil der Prüfung. Wer Gesellschaftsanteile hält, sollte die Wegzugsbesteuerung vor dem Umzug prüfen lassen.',
  sections: [
    {
      id: 'ansassigkeit',
      heading: 'Wann endet die unbeschränkte Steuerpflicht?',
      lead: 'In Deutschland, wenn Sie weder einen Wohnsitz noch Ihren gewöhnlichen Aufenthalt im Inland haben. Eine Wohnung, die Ihnen weiter zum Wohnen zur Verfügung steht, kann einen Wohnsitz begründen, auch wenn Sie die meiste Zeit im Ausland sind.',
      paragraphs: [
        'Die unbeschränkte Einkommensteuerpflicht knüpft an Wohnsitz oder gewöhnlichen Aufenthalt. Der Wohnsitz ist dort, wo Sie eine Wohnung innehaben, die Sie behalten und benutzen. Der gewöhnliche Aufenthalt ist nicht nur vorübergehend. Dafür wird oft eine Dauer von mehr als sechs Monaten genannt. Das ist kein Freifahrtschein, 182 Tage im Ausland zu verbringen und die Wohnung in Köln zu behalten. Österreich kennt mit der Bundesabgabenordnung ähnliche Anknüpfungen an Wohnsitz und gewöhnlichen Aufenthalt. Die Schweiz stellt auf den Lebensmittelpunkt und das kantonale Recht ab. Drei Länder, drei Behörden, eine gemeinsame Warnung: Zählen Sie nicht nur Nächte.',
        'Wer beschränkt steuerpflichtig wird, versteuert im Herkunftsland oft nur noch bestimmte inländische Einkünfte, etwa Mieten aus einer dort gelegenen Wohnung. Was genau inländisch bleibt, steht im Gesetz und im Abkommen. Eine beschränkte Pflicht ist keine Steuerfreiheit der Auslandseinkünfte im neuen Land. Das Zielland besteuert Sie nach seinen Regeln, sobald Sie dort ansässig sind. Die Länderseiten, etwa [Spanien](/laender/spanien), [Portugal](/laender/portugal) oder [Dubai und die VAE](/laender/dubai-vae), zeigen, wie unterschiedlich das aussehen kann.',
      ],
    },
    {
      id: 'abkommen',
      heading: 'Was leistet ein Doppelbesteuerungsabkommen?',
      lead: 'Es weist das Besteuerungsrecht für einzelne Einkunftsarten einem der beiden Staaten zu oder erlaubt beiden den Zugriff und schreibt dann eine Anrechnung oder Freistellung vor. Es ersetzt keine Steuererklärung.',
      paragraphs: [
        'Deutschland, Österreich und die Schweiz haben ein dichtes Abkommensnetz. Ob gerade Ihr Zielland und Ihre Einkunft, Gehalt, Rente, Dividende, Miete oder Veräußerungsgewinn, erfasst sind, steht im konkreten Abkommen. Artikelnummern aus einem Blog über ein anderes Land helfen nicht. Manche Abkommen stellen Gehälter der Ansässigkeit frei, andere weisen ein Besteuerungsrecht dem Tätigkeitsstaat zu, wenn Sie sich dort lange genug aufhalten oder der Arbeitgeber dort sitzt.',
        'Ein Progressionsvorbehalt kann ausländische Einkünfte, die freigestellt sind, trotzdem den Steuersatz auf die übrigen Einkünfte erhöhen. Das ist kein Fehler im Programm, sondern eine übliche Technik. Ansässigkeitskonflikte, wenn beide Staaten Sie für ansässig halten, löst das Abkommen über eine Rangfolge, oft am Mittelpunkt der Lebensinteressen. Diese Klausel ist der Grund, warum eine leere Wohnung und eine Familie an zwei Orten vor dem Umzug besprochen werden sollten, nicht danach.',
      ],
    },
    {
      id: 'wegzug',
      heading: 'Was bedeutet Wegzugsbesteuerung?',
      lead: 'Beim Aufgabe der unbeschränkten Steuerpflicht kann Deutschland stille Reserven in bestimmten Beteiligungen an Kapitalgesellschaften besteuern, auch wenn Sie nichts verkaufen. Österreich kennt einen eigenen Wegzugstatbestand. Die Schweiz folgt einem anderen System.',
      paragraphs: [
        'Die deutsche Regelung betrifft Personen, die Anteile an Kapitalgesellschaften halten und die unbeschränkte Steuerpflicht aufgeben. Ob Ihre Beteiligung die Schwelle erreicht, wie die Steuer gestundet wird und was bei einer späteren Rückkehr gilt, hat der Gesetzgeber mehr als einmal geändert. Übernehmen Sie keine Prozentzahl aus einem alten Artikel. Lassen Sie die Beteiligung vor dem Wohnsitzwechsel bewerten. Eine Schenkung oder ein Notverkauf in der Woche davor ist kein harmloser Trick und kann eigene Tatbestände auslösen.',
        'Österreich besteuert beim Wegzug ebenfalls bestimmte Vermögenswerte, mit eigenen Stundungs- und Rückkehroptionen. Die Schweiz besteuert beim Wegzug nicht nach dem deutschen Muster, kennt aber Quellensteuern auf Kapitalleistungen aus der zweiten Säule und der Säule 3a und die kantonalen Regeln zum Ende der Steuerpflicht. Wer aus der Schweiz wegzieht, sollte die Ausgleichskasse und die Pensionskasse vor einer Kapitalauszahlung fragen. Das Herkunftsland des nächsten Wohnsitzes kann dieselbe Leistung noch einmal anfassen. Das Abkommen entscheidet, ob das eine Anrechnung gibt.',
      ],
    },
    {
      id: 'sonderfaelle',
      heading: 'Welche Sonderfälle sollte ich nicht übersehen?',
      lead: 'Eine erweiterte beschränkte Steuerpflicht, eine Betriebsstätte und eine Gesellschaft, die Sie vom alten Küchentisch leiten, können das Herkunftsland im Spiel halten.',
      paragraphs: [
        'Deutschland kennt Fälle, in denen nach dem Wegzug in ein niedrig besteuertes Gebiet eine erweiterte beschränkte Steuerpflicht weiterläuft, wenn wesentliche wirtschaftliche Interessen im Inland bleiben. Das ist ein Sonderfall für die Beratung, kein Automatismus und kein Grund, ein Land nur deshalb zu meiden oder zu wählen. Ähnlich ernst ist die tatsächliche Geschäftsleitung: Liegt sie in Deutschland, kann eine ausländische Gesellschaft hier steuerpflichtig sein. Dazu [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden).',
        'Selbstständige, die Auftraggeber im Herkunftsland behalten, erzeugen schnell eine Betriebsstätte oder weiter inländische Einkünfte. Vermieter bleiben mit der Immobilie im Belegenheitsstaat steuerlich sichtbar, auch wenn sie sonst weggezogen sind. Kryptowerte, Mitarbeiterbeteiligungen und Lebensversicherungen haben eigene Realisationstatbestände. Listen Sie sie auf, bevor Sie das Datum des Wegzugs festlegen.',
      ],
    },
    {
      id: 'unterlagen',
      heading: 'Welche Unterlagen braucht die Beratung?',
      lead: 'Einen Zeitstrahl des Umzugs, eine Liste der Einkünfte und Konten und die Frage, welche Wohnung wem weiter zur Verfügung steht. Ohne das kann niemand seriös rechnen.',
      bullets: [
        'Datum des Auszugs, der Abmeldung und der Anmeldung im Zielland, auch wenn sie auseinanderfallen',
        'Wohnungen in beiden Ländern: Mietvertrag, Eigentum, wer einen Schlüssel hat',
        'Arbeitsverträge, Selbstständigkeit, Gesellschaftsanteile mit Höhe und Anschaffung',
        'Konten, Depots und deren Steuerwohnsitz, siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland)',
        'Rentenansprüche und Versicherungen, die später Leistungen zahlen',
        'Familie: wo Ehepartner und Kinder tatsächlich leben',
        'Letzte Steuerbescheide und die Steueridentifikationsnummer',
      ],
      paragraphs: [
        'Zwei Berater, einer im Herkunftsland und einer im Zielland, sind bei Vermögen oder einer Gesellschaft oft günstiger als ein einzelner Tipp aus einer Facebook-Gruppe. Bitten Sie beide, dasselbe Datum und dieselbe Wohnung zu unterstellen. Widersprüchliche Sachverhalte sind das, was Betriebsprüfungen später teuer macht.',
      ],
    },
    {
      id: 'nicht-tun',
      heading: 'Was sollte ich lassen?',
      lead: 'Keine Scheinadresse, keine Erklärung gegenüber der Bank, die der gegenüber dem Finanzamt widerspricht, und kein Steuersatz aus einem Werbevideo als Plan.',
      paragraphs: [
        'Eine Abmeldung ins Ausland bei gleichzeitigem Weiterbenutzen der Wohnung, ein Konto auf den Namen eines Familienmitglieds und eine Gesellschaft ohne Tätigkeit im Zielland sind Muster, die Behörden kennen. Sie sind hier beschrieben, damit Sie sie erkennen, nicht damit Sie sie nachbauen. Seriöse Planung legt den tatsächlichen Lebensmittelpunkt offen und nutzt die Regeln, die dafür geschrieben sind: Abkommen, Wegzugsvorschriften, Fristen.',
        'Speichern Sie keine „183-Tage-Rechnung“ als einzige Akte. Wenn Sie die Nächte zählen, zählen Sie auch die Wohnung, den Arbeitgeber und die Familie. Und rechnen Sie damit, dass sich Sätze und Verwaltungspraxis ändern. Der Stand dieses Textes steht oben auf der Seite. Verbindlich ist der Bescheid, nicht der Artikel.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Sind 183 Tage im Ausland genug, um in Deutschland nicht mehr steuerpflichtig zu sein?',
      answer:
        'Nein, nicht allein. Die Sechs-Monats-Regel betrifft den gewöhnlichen Aufenthalt. Ein Wohnsitz kann schon durch eine Wohnung entstehen, die Ihnen weiter zur Verfügung steht. Beides wird geprüft, zusätzlich das Abkommen mit dem Zielland.',
    },
    {
      question: 'Muss ich im Wegzugsjahr zwei Steuererklärungen abgeben?',
      answer:
        'Oft ja, zumindest eine Erklärung im Herkunftsland für die Zeit der Ansässigkeit und eine im Zielland nach dessen Regeln. Das Abkommen verhindert in vielen Fällen eine doppelte Belastung, ersetzt die Erklärung aber nicht. Das Übergangsjahr ist der häufigste Fehler.',
    },
    {
      question: 'Gilt die deutsche Wegzugsbesteuerung auch für Österreicher und Schweizer?',
      answer:
        'Die deutsche Regel gilt für Personen, die in Deutschland unbeschränkt steuerpflichtig waren. Österreich hat einen eigenen Wegzugstatbestand. Die Schweiz besteuert den Wegzug anders, kennt aber Quellensteuern auf bestimmte Kapitalleistungen. Jeder Fall bleibt im Recht des Staats, den Sie verlassen.',
    },
  ],
  related: [links.abmeldung, links.firma, links.bank, links.rente, links.spanien, links.portugal, links.dubai],
  sources: [
    'Finanzamt, österreichische Finanzverwaltung oder kantonales Steueramt',
    'Text des Doppelbesteuerungsabkommens zwischen Herkunfts- und Zielland, nicht eine Zusammenfassung eines anderen Landes',
    'Steuerberatung mit Zulassung in den betroffenen Staaten bei Beteiligungen, Selbstständigkeit oder Wegzug',
  ],
});
