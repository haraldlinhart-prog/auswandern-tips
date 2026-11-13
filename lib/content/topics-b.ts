import { guide } from './create';
import { links } from './links';
import type { Guide } from './types';

export const krankenversicherung: Guide = guide({
  kind: 'topic',
  slug: 'krankenversicherung-ausland',
  title: 'Krankenversicherung im Ausland',
  label: 'Krankenversicherung im Ausland',
  eyebrow: 'Versicherung',
  description:
    'Was die gesetzliche Kasse, die europäische Karte und eine Police im Zielland jeweils leisten, wenn Sie Deutschland, Österreich oder die Schweiz verlassen.',
  summary:
    'Ein dauerhafter Umzug ist kein Urlaub. Die europäische Krankenversicherungskarte trägt ihn nicht. Die gesetzliche Versicherung in Deutschland oder Österreich und die Schweizer Grundversicherung enden oder wechseln nach eigenen Regeln, nicht automatisch am Tag der Abmeldung. Klären Sie das Enddatum schriftlich und schließen Sie die Lücke, bevor sie entsteht.',
  sections: [
    {
      id: 'gesetzlich',
      heading: 'Bin ich im Ausland noch gesetzlich versichert?',
      lead: 'Oft nicht mehr, sobald Sie keinen inländischen Tatbestand mehr erfüllen. Beschäftigung, Wohnsitz, Familienversicherung und Rentenbezug werden einzeln geprüft. Kündigen Sie nicht, bevor die Kasse das Datum bestätigt.',
      paragraphs: [
        'In Deutschland endet die Pflichtversicherung, wenn ihre Voraussetzungen wegfallen, etwa weil die Beschäftigung im Inland endet und Sie den Wohnsitz aufgeben. Es gibt Ausnahmen: eine Entsendung, bestimmte Studenten, mitziehende Familienangehörige und Rentnerinnen und Rentner, deren Leistung über ein europäisches Formular im anderen Staat erbracht wird. Eine freiwillige Versicherung oder eine Anwartschaft in der privaten Krankenversicherung ist ein Antrag mit Bedingungen, kein Recht, das beim Auszug automatisch entsteht. Schreiben Sie der Kasse den geplanten Tag und bitten Sie um eine schriftliche Antwort.',
        'Österreich folgt der eigenen Sozialversicherung. Ein Abgang aus der österreichischen Versicherung ist nicht die deutsche Kündigung. Die Schweiz verlangt von Personen mit Wohnsitz in der Schweiz eine Grundversicherung bei einem privaten Versicherer, in der Regel innerhalb von drei Monaten. Wer aus der Schweiz wegzieht, verlässt dieses System und muss im Zielland neu ansetzen. Die drei Herkunftsländer lassen sich nicht mit einem Formular bedienen. Die [Abmeldung in Deutschland](/ratgeber/abmeldung-deutschland) informiert die Kasse nicht zuverlässig von selbst.',
      ],
    },
    {
      id: 'ehic',
      heading: 'Was leistet die europäische Krankenversicherungskarte?',
      lead: 'Sie weist einen Anspruch bei vorübergehenden Aufenthalten in der EU, im EWR, in der Schweiz und im Vereinigten Königreich nach. Sie ist kein Versicherungsschutz für einen neuen Lebensmittelpunkt und gilt nicht in Thailand, den USA, Kanada oder den Emiraten.',
      paragraphs: [
        'Die Karte, oft EHIC genannt, rechnet notwendige Behandlungen während eines vorübergehenden Aufenthalts über das System des Aufenthaltsstaats ab. Einen Umzug nach [Spanien](/laender/spanien), [Portugal](/laender/portugal) oder [Zypern](/laender/zypern) deckt sie nicht ab, sobald Sie dort wohnen. Dafür brauchen Sie die Mitgliedschaft im neuen System oder ein tragbares Dokument Ihrer alten Kasse, etwa wenn Sie eine Rente aus dem Herkunftsland beziehen und die europäischen Koordinierungsregeln das vorsehen.',
        'Das Dokument müssen Sie vor der Abreise beantragen. Es kommt nicht mit der Abmeldebescheinigung. Außerhalb Europas ist die Karte gegenstandslos. Für [Thailand](/laender/thailand), die [USA](/laender/usa), [Kanada](/laender/kanada) und [Dubai](/laender/dubai-vae) brauchen Sie eine Police, die das Zielland und Ihr Visum akzeptieren.',
      ],
    },
    {
      id: 'unterschied',
      heading: 'Was ist der Unterschied zwischen Urlaub, Entsendung und Auswandern?',
      lead: 'Urlaub bleibt im alten System, zeitlich begrenzt. Eine Entsendung bleibt oft im alten System, weil der Arbeitgeber Sie vorübergehend schickt und eine A1-Bescheinigung vorliegt. Auswandern heißt, der Lebensmittelpunkt wechselt.',
      paragraphs: [
        'Eine Reisekrankenversicherung ist auf Tage oder Wochen und auf Notfälle gebaut. Sie schließt Vorerkrankungen oft aus und endet, wenn Sie sesshaft werden. Eine Entsendung setzt voraus, dass das Arbeitsverhältnis im Herkunftsland weiterläuft und die Entsendung vorübergehend ist. Die Bescheinigung A1 stellt der Sozialversicherungsträger aus, nicht der Arbeitgeber allein. Wer vor Ort einen neuen lokalen Vertrag schließt, ist in der Regel nicht entsandt.',
        'Auswandern ist der dritte Fall: neues System, neue Beiträge, oft eine Wartezeit. In kanadischen Provinzen kann die öffentliche Karte erst nach Wochen oder Monaten gelten. In der Schweiz beginnt die Pflicht mit dem Wohnsitz, die Leistung der Grundversicherung ist gesetzlich umschrieben, die Prämie wählen Sie. Verwechseln Sie die drei Fälle nicht in dem Schreiben an die Kasse. Ein falsches Wort „Entsendung“ erzeugt später Rückforderungen.',
      ],
    },
    {
      id: 'zielland',
      heading: 'Welche Versicherung brauche ich im Zielland?',
      lead: 'Die, die an Ihren Aufenthaltsstatus anschließt: gesetzliches System über Arbeit oder Registrierung, eine anerkannte private Police oder beides für eine Übergangszeit.',
      paragraphs: [
        'EU-Staaten nehmen zugezogene EU-Bürgerinnen und -Bürger nach der Anmeldung und mit Beiträgen oder einem Formular der alten Kasse in das öffentliche System. Bis die Nummer da ist, verlangen Behörden oft eine private Police. In den [USA](/laender/usa) gibt es keine automatische gesetzliche Kasse. In [Dubai](/laender/dubai-vae) ist die Versicherung in Dubai und Abu Dhabi für Einwohner Pflicht, oft über den Arbeitgeber, nicht immer für die ganze Familie. In [Thailand](/laender/thailand) ist sie häufig eine Visumsbedingung mit einer Mindestleistung.',
        'Lesen Sie Ausschlüsse für Vorerkrankungen, Selbstbehalte, Höchstgrenzen und den Rücktransport. Eine Police, die nur „stationär“ zahlt, lässt die ambulante Behandlung bei Ihnen. Fragen Sie, ob das Visum genau diese Police akzeptiert. Ein PDF aus dem Marketing des Versicherers ist nicht die Visumsliste der Behörde.',
      ],
    },
    {
      id: 'herkunft',
      heading: 'Was gilt zusätzlich in Österreich und in der Schweiz?',
      lead: 'Österreichische Versicherte klären den Abgang mit der österreichischen Kasse. Wer in die Schweiz zieht, schließt die Grundversicherung dort ab und beendet den alten Schutz zum bestätigten Datum. Wer die Schweiz verlässt, darf die Grundversicherung nicht einfach weiterlaufen lassen, als wäre der Wohnsitz geblieben.',
      paragraphs: [
        'Rentnerinnen und Rentner, die innerhalb der EU oder in die Schweiz ziehen, können unter den Koordinierungsregeln im Wohnstaat sachleistungsberechtigt sein, während der Herkunftsstaat die Kosten trägt oder umgekehrt. Welches Formular das ist und welcher Staat zuständig bleibt, sagt die Kasse anhand Ihres Rentenbescheids. Es ist einer der häufigsten Gründe, nicht vorschnell zu kündigen.',
        'Familienmitglieder, die später nachziehen, sind nicht automatisch mitversichert. Der Tag der Anmeldung im Zielland und der Tag, an dem die alte Familienversicherung endet, müssen sich treffen. Schreiben Sie beide Daten in einen Kalender.',
      ],
    },
    {
      id: 'luecke',
      heading: 'Wie vermeide ich eine Lücke?',
      lead: 'Schriftliches Enddatum der alten Versicherung, Beginn der neuen Police am Folgetag, und keine Kündigung, solange das Visum oder die Anmeldung noch offen ist.',
      bullets: [
        'Der Kasse den geplanten Wegzug schriftlich mitteilen und die Antwort aufheben',
        'Prüfen, ob eine Entsendung vorliegt oder ein echter Wohnsitzwechsel',
        'Im EU-Fall klären, ob ein tragbares Dokument möglich ist, bevor Sie privat abschließen',
        'Private Police auf Visumsbedingungen, Vorerkrankungen und Rücktransport lesen',
        'Familie und mitziehende Kinder einzeln aufführen',
        'Beiträge im neuen System in die monatlichen Kosten aufnehmen, nicht als Überraschung',
      ],
      paragraphs: [
        'Eine Lücke von wenigen Tagen ist bei einem Unfall teurer als die Prämie, die Sie sparen wollten. Wenn der Umzug sich verschiebt, verlängern Sie den alten Schutz, statt ihn „schon einmal“ zu beenden.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Kann ich die deutsche gesetzliche Krankenkasse einfach behalten?',
      answer:
        'Nur wenn ein Tatbestand bleibt, der die Mitgliedschaft trägt, etwa eine Entsendung oder eine andere von der Kasse bestätigte Ausnahme. Der bloße Wunsch, versichert zu bleiben, reicht nicht. Lassen Sie sich das Enddatum schriftlich geben.',
    },
    {
      question: 'Gilt die europäische Karte in Spanien, wenn ich dort wohne?',
      answer:
        'Nein. Sie gilt für vorübergehende Aufenthalte. Wer den Wohnsitz nach Spanien verlegt, braucht das spanische System oder ein Formular der bisherigen Kasse für Rentnerinnen und Rentner. Die Karte allein ist kein Umzugsschutz.',
    },
    {
      question: 'Was ist eine Anwartschaft?',
      answer:
        'Eine Möglichkeit, vor allem in der privaten Krankenversicherung, den Vertrag ruhen zu lassen und sich die Rückkehr ohne neue Gesundheitsprüfung offenzuhalten. Sie ist ein eigener Vertrag mit Beitrag und Bedingungen, kein Automatismus der Kündigung. Fragen Sie Ihren Versicherer, ob sie in Ihrem Tarif existiert.',
    },
  ],
  related: [links.checkliste, links.abmeldung, links.spanien, links.schweiz, links.usa, links.thailand],
  sources: [
    'Ihre Krankenkasse oder Ihr privater Versicherer, schriftlich zum Enddatum',
    'Der Sozialversicherungsträger, wenn eine Entsendung oder ein europäisches Formular im Raum steht',
    'Die Krankenversicherung des Ziellands oder die Visumsstelle, wenn eine Police Bedingung des Aufenthalts ist',
  ],
});

export const firma: Guide = guide({
  kind: 'topic',
  slug: 'firma-im-ausland-gruenden',
  title: 'Firma im Ausland gründen',
  label: 'Firma im Ausland gründen',
  eyebrow: 'Arbeit',
  description:
    'Wann eine Auslandsgesellschaft trägt, was tatsächliche Geschäftsleitung und Hinzurechnungsbesteuerung bedeuten, und welche Konstruktionen Sie meiden sollten.',
  summary:
    'Eine Gesellschaft im Ausland macht Einkünfte nicht automatisch steuerfrei. Wenn die Geschäftsleitung im Herkunftsland bleibt oder Sie dort weiter steuerlich ansässig sind, besteuert dieses Land oft mit. Bei niedriger Besteuerung im Ausland können Hinzurechnungsregeln passive Einkünfte bei den Gesellschaftern erfassen. Substanz, Buchhaltung und ein Berater in beiden Ländern gehören an den Anfang.',
  sections: [
    {
      id: 'wann',
      heading: 'Wann lohnt eine Gesellschaft im Ausland, wann nicht?',
      lead: 'Wenn Sie dort wirklich tätig sind, Kunden oder Mitarbeitende haben und die Form zum Haftungs- und Visumsbedarf passt. Nicht, wenn der einzige Zweck ein Werbesatz auf einer Website ist.',
      paragraphs: [
        'Eine lokale Gesellschaft ist oft nötig, um Personal einzustellen, ein Konto für den Betrieb zu führen oder ein Visum zu tragen, etwa in [Dubai](/laender/dubai-vae) oder auf [Zypern](/laender/zypern). Sie ist selten nötig, um ein einzelnes Arbeitsverhältnis in [Spanien](/laender/spanien) oder [Portugal](/laender/portugal) abzubilden. Dort reichen Anmeldung und Selbstständigkeit oft aus und sind ehrlicher. Wer nur Rechnungen an einen Arbeitgeber im Herkunftsland schreibt, sollte zuerst klären, ob das eine Selbstständigkeit, eine Scheinselbstständigkeit oder weiter ein Arbeitsverhältnis ist.',
        'Rechnen Sie Gründung, laufende Buchhaltung, Steuererklärungen in zwei Ländern und ein Konto, das die Mittelherkunft prüft, gegen die Ersparnis, die Ihnen jemand verspricht. Wenn die Ersparnis nur existiert, solange niemand das Herkunftsland informiert, existiert sie nicht. Lesen Sie parallel [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
      ],
    },
    {
      id: 'leitung',
      heading: 'Was bedeutet tatsächliche Geschäftsleitung?',
      lead: 'Eine Gesellschaft gilt oft als in dem Staat ansässig, in dem die wesentlichen Entscheidungen fallen. Der Ort der Gründungsurkunde ist dafür nicht entscheidend.',
      paragraphs: [
        'Wenn die Gesellschafter in Deutschland, Österreich oder der Schweiz leben und dort die Verträge, die Strategie und das Konto freigeben, kann die ausländische Hülle im Herkunftsland steuerpflichtig sein. Ein nomineller Direktor im Zielland, der nichts entscheidet, ändert daran wenig und kann zusätzlich gegen das Gesellschaftsrecht des Ziellands verstoßen. Echte Substanz heißt: Menschen, die entscheiden dürfen, Unterlagen, die vor Ort geführt werden, und eine Tätigkeit, die es wirklich gibt.',
        'Auch ohne eigene Gesellschaft kann Ihre Tätigkeit eine Betriebsstätte erzeugen, etwa ein festes Büro oder eine längere Baustelle. Dann besteuert der Tätigkeitsstaat den Gewinn dieser Stätte, und das Herkunftsland muss das Abkommen anwenden. Das ist lästig und normal. Es ist besser als eine spätere Schätzung.',
      ],
    },
    {
      id: 'hinzurechnung',
      heading: 'Welche Regeln können ins Herkunftsland zurückwirken?',
      lead: 'Die Hinzurechnungsbesteuerung kann passive Einkünfte einer beherrschten Auslandsgesellschaft bei den Gesellschaftern erfassen, wenn die Belastung im Ausland niedrig ist. Die Schwellen ändert der Gesetzgeber.',
      paragraphs: [
        'Deutschland und Österreich haben solche Regeln, die Schweiz geht über andere Instrumente und über die Ansässigkeit der Gesellschaft. Passive Einkünfte sind typischerweise Zinsen, Lizenzgebühren oder bestimmte Holdingfälle, nicht jeder Handwerksbetrieb. Ob Ihre Tätigkeit aktiv ist, steht nicht auf der Visitenkarte. Lassen Sie es einordnen, bevor Sie eine Lizenz in einer Niedrigsteuerzone kaufen.',
        'Zusätzlich bleiben Sie persönlich steuerpflichtig, wenn Sie den Wohnsitz nicht aufgegeben haben. Eine Firma in den Emiraten bei fortbestehender Wohnung in München ist kein Wegzug. Die [Länderseite zu Dubai](/laender/dubai-vae) sagt dasselbe in kürzer. Verrechnungspreise zwischen Ihrer Person und der Gesellschaft müssen dem entsprechen, was fremde Dritte vereinbaren würden. Ein Gehalt von null bei voller Arbeitskraft ist kein Verrechnungspreis.',
      ],
    },
    {
      id: 'orte',
      heading: 'Wie unterscheiden sich typische Gründungsorte?',
      lead: 'Die Rechtsform ist der kleine Unterschied. Der große ist, ob Sie dort arbeiten dürfen, ob die Zone auf dem lokalen Markt verkaufen darf und welches Steuerrecht die Substanz ernst nimmt.',
      paragraphs: [
        'In der EU, also [Spanien](/laender/spanien), [Portugal](/laender/portugal) und [Zypern](/laender/zypern), gründen EU-Bürgerinnen und -Bürger ohne ein extra Gründungsvisum, müssen die Tätigkeit aber anmelden und Beiträge zahlen. Zypern wird oft wegen der Limited und der Non-Dom-Regeln genannt. Beides ist bedingt, siehe die Länderseite. In der [Schweiz](/laender/schweiz) sind GmbH und AG mit Kapital, Notar und Handelsregister an einen Kanton gebunden. In den [USA](/laender/usa) ist eine LLC kein Visum. In [Kanada](/laender/kanada) ersetzt die Gründung keine Arbeitserlaubnis. In [Thailand](/laender/thailand) beschränkt das Ausländerrecht viele Beteiligungen.',
        'Free Zones in den Emiraten gründen schnell und beschränken oft den Handel auf dem Festland. Eine Zone zu wählen, weil die Website „0 Prozent“ schreibt, ohne die erlaubte Tätigkeit zu lesen, ist der häufigste teure Fehler. Umsatzsteuer, Körperschaftsteuer und Buchhaltung gelten je nach Zone und Umsatz unterschiedlich. Lesen Sie die Lizenz, nicht das Banner.',
      ],
    },
    {
      id: 'alltag',
      heading: 'Was brauche ich für Bank, Steuer und Buchhaltung?',
      lead: 'Ein Konto auf die Gesellschaft, eine Steueridentifikation, eine laufende Buchhaltung und jemanden, der die Erklärungen in beiden Ländern fristgerecht abgibt.',
      paragraphs: [
        'Banken eröffnen Gesellschaftskonten nur mit Registernachweis, wirtschaftlich Berechtigten und einer nachvollziehbaren Tätigkeit. Ein Stapel Gründungsurkunden ohne Rechnung und ohne Adresse wird abgelehnt. Das ist im Ratgeber [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland) aus der Sicht der Person beschrieben und gilt für die Gesellschaft strenger.',
        'Planen Sie, wer zeichnet, wer die Belege sammelt und in welcher Sprache der Abschluss entsteht. Eine Buchhaltung, die einmal im Jahr in einer Schublade landet, trägt weder eine Betriebsprüfung noch ein Visum, das lokale Umsätze sehen will. Steuerfristen im Zielland und die Erklärung im Herkunftsland fallen selten auf denselben Tag.',
      ],
    },
    {
      id: 'meiden',
      heading: 'Welche Konstruktionen sollte ich meiden?',
      lead: 'Strohmann-Gesellschafter, Briefkastenfirmen ohne Tätigkeit und jedes Modell, das darauf beruht, dass das Herkunftsland nichts erfährt.',
      paragraphs: [
        'Nominee-Gesellschafter, die Anteile nur halten, damit eine Ausländerquote formal stimmt, sind in mehreren Ländern ein bekanntes Durchsetzungsrisiko. Wir beschreiben sie nicht als Werkzeug. Dasselbe gilt für Direktorendienste, bei denen niemand vor Ort eine Entscheidung treffen darf, und für Konten auf den Namen einer anderen Person. Der automatische Informationsaustausch und die Register der wirtschaftlich Berechtigten sind der Normalfall.',
        'Seriös ist langweiliger: Tätigkeit dort, wo sie stattfindet, Wohnsitz dort, wo Sie leben, Verträge zu Konditionen, die ein Fremder akzeptieren würde, und zwei Berater, die denselben Sachverhalt kennen. Wenn ein Angebot vor allem damit wirbt, dass Sie „nirgends“ zahlen, ist die richtige Reaktion, es zu schließen.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Wird meine ausländische GmbH automatisch im Herkunftsland ignoriert?',
      answer:
        'Nein. Liegt die tatsächliche Geschäftsleitung im Herkunftsland oder bleiben Sie dort steuerlich ansässig, wird oft dort besteuert. Zusätzlich können Hinzurechnungsregeln passive Einkünfte einer beherrschten Gesellschaft erfassen, wenn die Steuer im Ausland niedrig ist.',
    },
    {
      question: 'Ersetzt die Gründung ein Visum?',
      answer:
        'Nur wenn das Zielland genau diese Gesellschaft als Weg zur Aufenthaltserlaubnis anerkennt und Sie die Bedingungen erfüllen. In den USA gibt Ihnen eine LLC kein Aufenthaltsrecht. In den Emiraten kann eine Lizenz ein Visum tragen, aber nicht jede Zone und nicht ohne die übrigen Nachweise.',
    },
    {
      question: 'Kann ich die Buchhaltung selbst machen?',
      answer:
        'Bei einer sehr kleinen Tätigkeit manchmal ja, wenn Sie die lokalen Formate und Fristen beherrschen. Sobald Umsatzsteuer, Lohn oder zwei Länder beteiligt sind, ist eine lokale Buchhaltung der übliche Weg. Schätzen ist teurer als der Auftrag.',
    },
  ],
  related: [links.steuern, links.bank, links.dubai, links.zypern, links.schweiz, links.usa],
  sources: [
    'Handelsregister oder die für die Rechtsform zuständige Behörde im Zielland',
    'Steuerberatung im Herkunftsland zur Geschäftsleitung und zur Hinzurechnung',
    'Die Lizenzbedingungen, wenn eine Free Zone oder eine regulierte Tätigkeit gemeint ist',
  ],
});

export const bank: Guide = guide({
  kind: 'topic',
  slug: 'bankkonto-im-ausland',
  title: 'Bankkonto im Ausland',
  label: 'Bankkonto im Ausland',
  eyebrow: 'Konto',
  description:
    'Warum Banken Visum, Adresse und Steuer-ID wollen, was der Informationsaustausch bedeutet und wie Sie das Konto zu Hause nicht zu früh kündigen.',
  summary:
    'Ein Konto im Zielland bekommen Sie meist erst mit Aufenthaltstitel, Adresse und Steueridentifikation. Viele Banken im Herkunftsland führen Kundinnen und Kunden ohne dortigen Wohnsitz nicht weiter. Kündigen Sie das alte Konto nicht, bevor Rente, Miete und Behörden einen funktionierenden Weg haben. Konten werden an das Land der steuerlichen Ansässigkeit gemeldet.',
  sections: [
    {
      id: 'behalten',
      heading: 'Kann ich mein Konto zu Hause behalten?',
      lead: 'Vielleicht, aber nicht als Anspruch. Viele deutsche Banken dürfen oder wollen Kundinnen und Kunden ohne Wohnsitz in Deutschland nicht weiterführen. Österreichische und schweizerische Institute prüfen ebenfalls, sind aber nicht dasselbe Regelwerk.',
      paragraphs: [
        'Fragen Sie vor der [Abmeldung](/ratgeber/abmeldung-deutschland) schriftlich, was die Bank bei einem Wegzug tut. Manche bieten ein Konto für im Ausland lebende Personen an, andere kündigen. Ein Gespräch in der Filiale ohne Schriftstück ist kein Nachweis. Kündigen Sie nicht selbst am Tag des Flugs. Finanzamt, Rente, Kaution und eine letzte Krankenkassenabrechnung brauchen noch ein Konto, das Ihren Namen trägt.',
        'Ein Gemeinschaftskonto mit einer Person, die im Land bleibt, kann ein Übergang sein, wenn die Bank das mitträgt und Sie die steuerlichen Folgen kennen. Ein Konto nur auf den Namen eines Verwandten, über das Ihr Geld läuft, ist ein vermeidbares Problem gegenüber Bank und Finanzamt. Nutzen Sie es nicht.',
      ],
    },
    {
      id: 'unterlagen',
      heading: 'Was verlangen Banken im Zielland?',
      lead: 'Identität, einen Aufenthaltsstatus, der zum Wohnen passt, eine Adresse und oft die ausländische Steuer-ID. Ein Touristenstempel reicht bei den Hausbanken selten.',
      paragraphs: [
        'In [Spanien](/laender/spanien) und [Portugal](/laender/portugal) ist die ausländische Identnummer praktisch vorausgesetzt. In der [Schweiz](/laender/schweiz) hilft die Anmeldung bei der Gemeinde. In [Thailand](/laender/thailand) und [Dubai](/laender/dubai-vae) wollen die Banken das längerfristige Visum. In den [USA](/laender/usa) und in [Kanada](/laender/kanada) stehen Sozialversicherungsnummer und Adresse im Weg, und die Kredithistorie beginnt bei null. Die Länderseiten nennen die üblichen Nachweise. Die Filiale kann enger sein als der Werbetext.',
        'Rechnen Sie mit Fragen zur Herkunft des Geldes, das Sie einzahlen. Das ist Geldwäscheprävention, keine Schikane gegen Zugezogene. Gehaltsabrechnungen, Kaufverträge oder Steuerbescheide beschleunigen den Termin. Bar auf ein fremdes Konto einzuzahlen, um die Fragen zu umgehen, ist der falsche Weg.',
      ],
    },
    {
      id: 'crs',
      heading: 'Was ist der automatische Informationsaustausch?',
      lead: 'Banken melden Konten von Personen, die steuerlich in einem anderen teilnehmenden Staat ansässig sind, an die dortige Behörde. Die USA nutzen dafür vor allem FATCA. Ein Konto im Ausland ist deshalb kein verstecktes Konto.',
      paragraphs: [
        'Deutschland, Österreich und die Schweiz nehmen am automatischen Austausch teil. Die meisten Zielländer dieser Website auch, die USA auf dem eigenen Weg über FATCA. Ob ein bestimmtes Institut in einem bestimmten Jahr meldet, steht in den Unterlagen der Bank. Planen Sie so, als würde gemeldet. Die Steuererklärung und die Ansässigkeit, die Sie der Bank nennen, müssen zum Finanzamt passen. Zwei verschiedene Wohnsitze gegenüber zwei Stellen sind ein klassischer Fund in einer Prüfung.',
        'Der Austausch ersetzt nicht Ihre Erklärungspflicht. Er ist ein Kontrollweg. Wer Konten verschweigt, hat ein Problem, das größer ist als die Steuer auf die Zinsen. Wer sie angibt, hat den Normalfall. Mehr zum Rahmen unter [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
      ],
    },
    {
      id: 'zahlungen',
      heading: 'Wie gehe ich mit Überweisungen und Nachweisen um?',
      lead: 'Halten Sie für die Übergangsmonate beide Konten, dokumentieren Sie größere Überweisungen und geben Sie der Rente und dem Arbeitgeber die neue Bankverbindung erst, wenn sie wirklich funktioniert.',
      paragraphs: [
        'Eine Überweisung auf ein neues Konto, das noch keine Zahlungen ausführt, lässt Miete und Versicherung platzen. Testen Sie mit einem kleinen Betrag. Daueraufträge im alten Land laufen weiter, bis Sie sie stoppen. Gehen Sie die Liste durch: Miete, Strom, Versicherung, Kredit, Unterhalt, Rundfunkbeitrag. Ein Kredit im Herkunftsland kann eine Klausel haben, die einen Wegzug meldepflichtig macht. Lesen Sie sie, bevor die Bank sie Ihnen vorliest.',
        'Wechselkurse und Entgelte sind ein Kostenpunkt, keine Steuerstrategie. Für den Alltag im Zielland brauchen Sie ein Konto in der lokalen Währung. Ein Zahlungsdienst ist praktisch für den Übergang und kein Ersatz für das Konto, das Behörde und Vermieter sehen wollen.',
      ],
    },
    {
      id: 'usa',
      heading: 'Was gilt zusätzlich, wenn ein Bezug zu den USA besteht?',
      lead: 'US-Personen müssen ausländische Konten zusätzlich melden, und Banken weltweit fragen nach einer US-Steueridentifikation. Das trifft auch Menschen, die nur eine Green Card haben oder die Staatsbürgerschaft nicht aufgegeben haben.',
      paragraphs: [
        'FATCA verpflichtet Banken, US-Personen zu erkennen. Zusätzlich gibt es persönliche Meldepflichten für ausländische Konten, deren Schwellen sich ändern. Wer in die [USA](/laender/usa) zieht und Konten in Europa behält, sollte das vor dem ersten US-Steuerjahr mit einer Beratung klären, die beide Seiten kennt. Wer die USA verlässt, aber Staatsbürger bleibt, bleibt bei diesem Thema oft im US-System. Das ist kein Detail für das letzte Formular.',
      ],
    },
    {
      id: 'fehler',
      heading: 'Welche Fehler passieren am häufigsten?',
      lead: 'Das alte Konto zu früh kündigen, der Bank einen anderen Wohnsitz nennen als dem Finanzamt, und das neue Konto auf eine andere Person legen.',
      bullets: [
        'Schriftliche Auskunft der Hausbank einholen, bevor Sie sich abmelden',
        'Neues Konto testen, bevor Rente oder Gehalt umgezogen werden',
        'Dieselbe steuerliche Ansässigkeit gegenüber Bank und Finanzamt angeben',
        'Wirtschaftlich Berechtigte der Gesellschaft ehrlich angeben, siehe [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden)',
        'Keine Konten auf Strohleute',
        'Kreditverträge auf Wegzugsklauseln lesen',
        'Unterlagen der Kontoeröffnung aufheben, einschließlich der Visumskopie, die die Bank gesehen hat',
      ],
      paragraphs: [
        'Wenn eine Bank ablehnt, ist die nächste Filiale ein besserer Plan als ein Umweg über eine fremde Identität. Ablehnungen sind lästig und legal. Umwege dieser Art sind es nicht.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Schließt meine deutsche Bank das Konto, wenn ich mich abmelde?',
      answer:
        'Viele Institute führen Personen ohne Wohnsitz in Deutschland nicht weiter, einen Anspruch auf das alte Konto gibt es nicht. Fragen Sie vor der Abmeldung schriftlich nach und kündigen Sie erst, wenn das neue Konto Zahlungen ausführt.',
    },
    {
      question: 'Sieht das Finanzamt mein Konto im Ausland?',
      answer:
        'In den teilnehmenden Staaten melden Banken Konten an den Staat der steuerlichen Ansässigkeit. Die USA nutzen FATCA. Sie müssen die Konten außerdem in der Steuererklärung angeben, soweit das Recht Ihres Ansässigkeitsstaats das verlangt. Der Austausch ist kein Ersatz für die Angabe.',
    },
    {
      question: 'Kann ich mit einem Touristenvisum ein Alltagskonto eröffnen?',
      answer:
        'Bei den meisten Banken in den Ländern dieser Website nein. Sie wollen einen Aufenthaltsstatus, der zum Wohnen passt, und eine Adresse. Planen Sie die Monate bis dahin mit dem Konto, das Sie schon haben.',
    },
  ],
  related: [links.abmeldung, links.steuern, links.firma, links.rente, links.spanien, links.thailand, links.usa],
  sources: [
    'Ihre Hausbank, schriftlich zur Frage des Wohnsitzes im Ausland',
    'Die Bank im Zielland zur Liste der Nachweise, nicht nur der Werbetext',
    'Finanzamt oder Steuerberatung dazu, welche Konten in der Erklärung stehen',
  ],
});

export const rente: Guide = guide({
  kind: 'topic',
  slug: 'rente-im-ausland',
  title: 'Rente im Ausland',
  label: 'Rente im Ausland',
  eyebrow: 'Alter',
  description:
    'Wie deutsche, österreichische und schweizerische Renten ins Ausland gezahlt werden, was die Lebensbescheinigung ist und warum Sie den Träger vor dem Umzug anrufen.',
  summary:
    'Renten aus Deutschland, Österreich und der Schweiz können in viele Länder gezahlt werden. Dafür müssen Sie den Träger informieren, oft jährlich nachweisen, dass Sie leben, und die Besteuerung folgt dem Wohnsitz und dem Abkommen. Klären Sie den Zahlungsweg, bevor Sie das Konto zu Hause schließen. Beiträge, die Sie nicht mitnehmen können, sind nicht automatisch verloren.',
  sections: [
    {
      id: 'deutschland',
      heading: 'Wird die deutsche Rente ins Ausland gezahlt?',
      lead: 'Die Deutsche Rentenversicherung zahlt in viele Länder. Einige Leistungen sind an das Inland gebunden, die Altersrente in der Regel nicht. Beantragen Sie die Zahlung an die neue Adresse und auf ein Konto, das auf Ihren Namen läuft.',
      paragraphs: [
        'Informieren Sie den Träger, bevor Sie umziehen, nicht erst wenn die erste Überweisung zurückkommt. Er braucht die neue Anschrift, das Konto und oft Unterlagen zum Wohnsitzstaat. Es kann Auflagen geben, etwa eine jährliche Lebensbescheinigung: ein Formular, das eine Behörde oder eine andere zugelassene Stelle bestätigt. Wer es nicht zurückschickt, riskiert, dass die Zahlung angehalten wird. Das ist eine Kontrolle, keine Schikane.',
        'Ob Krankenversicherung der Rentnerinnen und Rentner im EU-Ausland über ein Formular weiterläuft, ist eine andere Frage als die Geldrente. Siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland). Für [Thailand](/laender/thailand), die [USA](/laender/usa) oder [Kanada](/laender/kanada) ist der Weg ein anderer als innerhalb der EU. Der Träger sagt Ihnen, welche Vereinbarung mit Ihrem Zielland besteht. Ein allgemeiner Text kann die Liste nicht ersetzen, weil der Umfang der Abkommen sich unterscheidet.',
      ],
    },
    {
      id: 'steuer',
      heading: 'Wie wird die Rente besteuert?',
      lead: 'Das Abkommen zwischen Wohnsitzstaat und dem Staat, der die Rente zahlt, weist das Besteuerungsrecht zu. Häufig besteuert der Wohnsitzstaat, manchmal der Quellenstaat, manchmal beide mit Anrechnung.',
      paragraphs: [
        'Deutsche gesetzliche Renten werden im Inland nach einem eigenen Verfahren besteuert, das vom Renteneintrittsjahr abhängt. Ziehen Sie weg, kann das Abkommen dieses Recht dem neuen Wohnsitz geben oder Deutschland einen Quellensteuerabzug belassen. Österreich und die Schweiz haben eigene Artikel für öffentliche und private Renten. Lesen Sie den Artikel Ihres Abkommens, nicht den eines Nachbarlandes. Der Rahmen steht unter [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
        'Eine Kapitalauszahlung aus einer schweizerischen Pensionskasse oder aus der Säule 3a kann eine kantonale Quellensteuer auslösen. Ob der neue Wohnsitzstaat anrechnet oder selbst besteuert, steht im Abkommen und im Zeitpunkt der Auszahlung. Holen Sie die Auskunft ein, bevor Sie die Auszahlung beantragen. Eine überstürzte Kapitalisierung „vor dem Wegzug“ ist ein Datum, das beide Finanzämter sehen.',
      ],
    },
    {
      id: 'at-ch',
      heading: 'Was gilt für Österreich und die Schweiz?',
      lead: 'Die Pensionsversicherungsanstalt in Österreich und die Ausgleichskassen in der Schweiz sind die ersten Adressen. Innerhalb der EU und im Verhältnis zur Schweiz werden Versicherungszeiten in der Regel zusammengerechnet, nicht ausgezahlt.',
      paragraphs: [
        'Österreichische Pensionen können ins Ausland angewiesen werden. Melden Sie den Wohnsitzwechsel der PVA und klären Sie Krankenversicherung und Steuer parallel. Eine Abmeldung in der Gemeinde ersetzt dieses Schreiben nicht.',
        'Schweizerische AHV-Beiträge werden bei einem Umzug in einen EU- oder EFTA-Staat in der Regel nicht zurückgezahlt. Sie bleiben für eine spätere Rente gespeichert und werden mit anderen Zeiten zusammengerechnet. Eine Rückzahlung kommt nur in engen Fällen in Betracht, vor allem wenn kein Sozialversicherungsabkommen greift und Sie die Schweiz endgültig verlassen. Die Ausgleichskasse prüft das am Fall. Wer Beiträge zurückfordert, obwohl die Zeiten später eine Rente ergeben hätten, verschenkt oft den größeren Anspruch. Fragen Sie, bevor Sie das Formular schicken.',
      ],
    },
    {
      id: 'beitraege',
      heading: 'Sollte ich weiter Beiträge zahlen?',
      lead: 'Unter bestimmten Voraussetzungen können Sie in der deutschen Versicherung freiwillig weiterzahlen, auch vom Ausland. Das ist ein Antrag. In Österreich und in der Schweiz gelten andere Regeln für freiwillige oder weitergeführte Beiträge.',
      paragraphs: [
        'Freiwillige Beiträge können Lücken schließen oder einen Anspruch erhalten. Sie lohnen nicht für jeden und sie sind kein Ersatz für eine private Vorsorge, die Sie vielleicht schon haben. Die Deutsche Rentenversicherung rechnet Ihnen anhand Ihrer Zeiten vor, was ein Beitrag bewirken würde. Seriös ist dieses Gespräch vor dem Umzug, solange die Unterlagen vollständig sind.',
        'Eine betriebliche Altersversorgung und private Verträge haben eigene Klauseln zum Wohnsitz im Ausland. Manche zahlen weltweit, manche nur auf ein Konto im Inland, manche ändern die Steuer. Legen Sie die Verträge neben den Bescheid der gesetzlichen Rente. Es sind verschiedene Töpfe.',
      ],
    },
    {
      id: 'bescheinigung',
      heading: 'Welche Bescheinigungen kommen später?',
      lead: 'Die Lebensbescheinigung, manchmal ein Lebensnachweis genannt, kommt regelmäßig. Ohne Rücklauf kann die Zahlung pausieren. Eine Adresse, die niemand liest, ist dafür der häufigste Grund.',
      paragraphs: [
        'Geben Sie dem Träger eine Adresse, an der Sie Post wirklich bekommen, oder nutzen Sie das digitale Verfahren, wenn er eines anbietet. Ein Nachsendeauftrag endet. Verwandte, die den Brief liegen lassen, auch. Tragen Sie die Frist in denselben Kalender wie die Steuererklärung.',
        'Bei einem Umzug in ein weiteres Land melden Sie auch das. Die Bescheinigung ist an den Wohnsitz gekoppelt, den der Träger kennt. Ein stiller Weiterzug ist der zweithäufigste Grund für eine gestoppte Zahlung.',
      ],
    },
    {
      id: 'wann',
      heading: 'Wann sollte ich den Träger kontaktieren?',
      lead: 'Bevor Sie das Konto wechseln und bevor Sie ausreisen, nicht wenn die erste Rente fehlt. Nehmen Sie die Versicherungsnummer und die neue Adresse mit.',
      bullets: [
        'Deutsche Rentenversicherung, PVA oder Ausgleichskasse je nach den Zeiten, die Sie haben',
        'Neue Anschrift und ein Konto auf Ihren Namen, siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland)',
        'Frage nach Lebensbescheinigung, Quellensteuer und Krankenversicherung der Rente',
        'Betriebliche und private Verträge getrennt durchgehen',
        'Bei schweizerischen Beiträgen zuerst klären, ob eine Rückzahlung überhaupt zulässig und sinnvoll ist',
        'Zeiten in mehreren Ländern nicht selbst addieren, sondern zusammenrechnen lassen',
      ],
      paragraphs: [
        'Innerhalb der EU und mit der Schweiz werden Zeiten nach den Koordinierungsregeln zusammengerechnet. Mit weiteren Staaten bestehen Sozialversicherungsabkommen, deren Umfang unterschiedlich ist. Ob Ihres dabei ist, sagt der Träger. Ein Online-Text, der alle Länder über einen Kamm schert, liegt daneben.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Kann ich die deutsche Rente auf ein Konto in Spanien oder Thailand überweisen lassen?',
      answer:
        'In vielen Ländern ja, wenn der Träger die Zahlung ins Ausland eingerichtet hat und das Konto auf Ihren Namen läuft. Beantragen Sie das vor der Abreise und testen Sie das Konto. Die Steuer folgt dem Abkommen und ist eine zweite Frage neben der Überweisung.',
    },
    {
      question: 'Bekomme ich meine schweizerischen AHV-Beiträge bei einem Umzug nach Deutschland zurück?',
      answer:
        'In der Regel nein. Bei einem Umzug in die EU oder nach den EFTA-Regeln bleiben die Beiträge für eine spätere Rente gespeichert und werden mit anderen Zeiten zusammengerechnet. Eine Rückzahlung ist ein enger Ausnahmefall. Die Ausgleichskasse prüft ihn.',
    },
    {
      question: 'Was passiert, wenn ich die Lebensbescheinigung vergesse?',
      answer:
        'Der Träger kann die Zahlung anhalten, bis der Nachweis da ist. Das Geld ist damit nicht automatisch verfallen, aber es kommt nicht an. Geben Sie eine Adresse an, die Sie lesen, und notieren Sie die Frist.',
    },
  ],
  related: [links.steuern, links.krankenversicherung, links.bank, links.abmeldung, links.spanien, links.schweiz, links.thailand],
  sources: [
    'Deutsche Rentenversicherung, Pensionsversicherungsanstalt oder die zuständige Ausgleichskasse',
    'Das Doppelbesteuerungsabkommen für die Frage, welcher Staat die Rente besteuert',
    'Ihre Krankenkasse, wenn die Rente den Krankenversicherungsschutz mitbestimmt',
  ],
});
