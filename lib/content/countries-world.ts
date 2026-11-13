import { guide } from './create';
import { links } from './links';
import type { Guide } from './types';

const sourcesWorld = [
  'Auswärtiges Amt, BMEIA und EDA zu Einreise und Sicherheit',
  'Botschaft oder Einwanderungsbehörde des Ziellands für die aktuelle Visumskategorie',
  'Finanzamt, Finanzverwaltung oder kantonales Steueramt und eine Beratung im Zielland',
  'Krankenkasse oder Krankenversicherer, bevor eine Lücke entsteht',
];

export const thailand: Guide = guide({
  kind: 'country',
  slug: 'thailand',
  title: 'Auswandern nach Thailand',
  label: 'Thailand',
  eyebrow: 'Asien',
  description:
    'Visum, Steuern, Krankenversicherung, Kosten, Arbeit und Konto für einen längeren Aufenthalt in Thailand, ausgehend von Deutschland, Österreich oder der Schweiz.',
  summary:
    'Thailand ist kein Land mit freiem Daueraufenthalt. Für ein Leben vor Ort brauchen die meisten Menschen eine langfristige Visumskategorie, eine eigene Krankenversicherung und Klarheit, welches Land die Einkünfte besteuert. Ein Touristenstempel ist kein Wohnsitz, und aneinandergereihte Kurzaufenthalte sind kein zuverlässiger Plan.',
  sections: [
    {
      id: 'visum',
      heading: 'Welches Visum brauche ich für einen längeren Aufenthalt in Thailand?',
      lead: 'Für wenige Wochen genügt oft die visumfreie Einreise oder ein Touristenvisum. Zum Leben, Arbeiten oder für den Ruhestand brauchen Sie eine langfristige Kategorie. Welche das ist, hängt von Alter, Familie, Studium oder Arbeit ab.',
      paragraphs: [
        'Thai-Behörden unterscheiden Kurzaufenthalte von Non-Immigrant-Kategorien, etwa für Ruhestand, Familie, Studium oder Geschäft, und von neueren längeren Programmen wie dem Long-Term Resident Visa. Bezeichnungen, finanzielle Nachweise, Versicherungspflichten und Altersgrenzen werden immer wieder angepasst. Die Botschaft in Berlin, Wien oder Bern und die thailändische Einwanderungsbehörde sind die verbindliche Quelle, nicht ein Vermittler, der „Border Runs“ als Modell verkauft.',
        'Ein abgelaufener Stempel wird mit Gebühren und später mit Einreisesperren geahndet. Arbeiten ist auf einem Touristenstatus nicht erlaubt, auch nicht nebenher für Kunden in Europa. Wer eine thailändische Ehepartnerin oder einen thailändischen Ehepartner hat, folgt einer anderen Kategorie als jemand, der allein im Ruhestand leben will. Prüfen Sie die Liste vor der Kündigung von Wohnung und Job, nicht danach.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Wie werden Einkünfte besteuert, wenn ich nach Thailand ziehe?',
      lead: 'Ob Thailand oder Ihr Herkunftsland besteuert, hängt von der Ansässigkeit und von der Art der Einkünfte ab. Der Umzug beendet die Steuerpflicht zu Hause nicht automatisch.',
      paragraphs: [
        'In Deutschland kann schon eine Wohnung, die Ihnen weiter zur Verfügung steht, einen Wohnsitz begründen. Die Sechs-Monats-Regel betrifft den gewöhnlichen Aufenthalt und ist nicht der einzige Test. Österreich und die Schweiz haben eigene Anknüpfungen. Der Überblick steht im Ratgeber [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern). Mit Thailand bestehen Doppelbesteuerungsabkommen der drei Herkunftsländer. Sie verteilen Rechte, sie erlassen keine Erklärung.',
        'Thailand hat die Besteuerung ausländischer Einkünfte, die ins Land gebracht werden, in den letzten Jahren neu gefasst. Wer dort leben und Geld überweisen will, sollte die aktuelle Praxis mit einer Beratung vor Ort und im Herkunftsland abgleichen. Konkrete Sätze gehören nicht in einen allgemeinen Text, weil Freibeträge und Verwaltungspraxis sich ändern. Wer wesentliche Gesellschaftsanteile hält, prüft zusätzlich die Wegzugsbesteuerung, bevor der Wohnsitz aufgegeben wird.',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Welche Krankenversicherung brauche ich in Thailand?',
      lead: 'Die gesetzliche Versicherung in Deutschland, Österreich oder der Schweiz trägt einen dauerhaften Lebensmittelpunkt in Thailand in der Regel nicht. Für viele Visa wird ein eigener Vertrag mit definierten Leistungen verlangt.',
      paragraphs: [
        'Die europäische Krankenversicherungskarte gilt in Thailand nicht. Eine Entsendung mit A1-Bescheinigung ist etwas anderes als ein privater Umzug. Klären Sie das Ende des alten Schutzes schriftlich, bevor Sie kündigen. Internationale Policen und thailändische Versicherer unterscheiden sich bei Vorerkrankungen, Selbstbehalten und bei der Frage, ob ein Rücktransport enthalten ist. Schwere Fälle werden manchmal nach Bangkok oder ins Ausland verlegt. Das sollte im Vertrag stehen, nicht nur im Gespräch.',
        'Öffentliche Krankenhäuser gibt es, private Häuser in den Touristenorten rechnen anders ab. Ein Visum, das einen Versicherungsschutz vorschreibt, akzeptiert nicht jede Reisekrankenversicherung für zwei Wochen Urlaub. Lassen Sie die Police gegen die aktuelle Visumsliste prüfen. Mehr zum Grundsätzlichen im Ratgeber [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland).',
      ],
    },
    {
      id: 'kosten',
      heading: 'Wie teuer ist das Leben in Thailand?',
      lead: 'Der lokale Alltag außerhalb der internationalen Viertel ist für viele günstiger als in einer deutschen Großstadt. Wohnung in Bangkok oder auf einer begehrten Insel und importierte Gewohnheiten heben das schnell auf.',
      paragraphs: [
        'Bangkok, Phuket, Samui und die internationalen Wohnlagen liegen deutlich über Chiang Mai oder kleineren Orten, sind aber in sich noch einmal gespalten. Eine Wohnung mit Pool in einem Ausländerviertel und ein Zimmer nahe einem lokalen Markt sind nicht derselbe Haushalt. Märkte und Straßenküchen kosten weniger als importierte Lebensmittel. Klimaanlagen treiben die Stromrechnung, vor allem in der heißen Jahreszeit.',
        'Ein Auto ist in Bangkok oft unnötig, auf den Inseln und auf dem Land eher nicht. Internationale Schulen sind, wenn Kinder mitkommen, häufig der größte einzelne Posten und sollten vor der Ortswahl stehen. Dieser Text nennt keine Mieten und keine Warenkörbe. Die veralten schneller, als eine Behörde ein Visum ändert. Holen Sie aktuelle Angebote für den Stadtteil, den Sie wirklich meinen.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Darf ich in Thailand arbeiten oder eine Firma gründen?',
      lead: 'Arbeiten ohne Arbeitserlaubnis ist nicht zulässig. Eine Firma ist möglich, viele Tätigkeiten sind für ausländische Gesellschafter aber beschränkt.',
      paragraphs: [
        'Eine Work Permit hängt am Visum und am Arbeitgeber. Kunden in Europa vom Café aus zu bedienen ist rechtlich nicht „kein Arbeiten“. Das Foreign Business Act beschränkt ausländische Beteiligungen in zahlreichen Branchen. Förderungen über das Board of Investment folgen anderen Regeln als eine gewöhnliche Gesellschaft und passen nicht auf jedes Café oder jede Beratung. Das amerikanische Freundschaftsabkommen gilt nicht für deutsche, österreichische oder schweizerische Staatsangehörige.',
        'Konstruktionen, bei denen thailändische Gesellschafter nur auf dem Papier stehen und die Kontrolle verdeckt bei Ihnen liegt, sind ein bekanntes Durchsetzungsrisiko und kein Rat, den diese Seite gibt. Wenn Sie eine Gesellschaft brauchen, lesen Sie zuerst [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden) und holen Sie eine lokale Kanzlei, die die erlaubte Tätigkeit prüft.',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Bekomme ich in Thailand ein Bankkonto?',
      lead: 'Die Banken wollen meist ein gültiges längerfristiges Visum und eine Adresse. Mit reinem Touristenstatus wird die Eröffnung schwierig oder abgelehnt.',
      paragraphs: [
        'Üblich sind Pass, Visum, manchmal eine Bescheinigung der Einwanderungsbehörde und ein Wohnungsnachweis. Die Anforderungen unterscheiden sich nach Bank und Filiale und werden enger, nicht weiter. Große Bareinzahlungen und Devisen unterliegen Meldepflichten. Legen Sie kein Konto auf den Namen einer anderen Person. Thailändische Konten können an die Steuerbehörde Ihres Ansässigkeitsstaats gemeldet werden. Der Rahmen steht im Ratgeber [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
        'Behalten Sie das Konto in Deutschland, Österreich oder der Schweiz, bis Rente, Miete und die Versicherung einen funktionierenden Zahlungsweg haben. Fragen Sie Ihre Hausbank vor der Abmeldung, ob sie Kundinnen ohne inländischen Wohnsitz weiterführt.',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Welche Checkliste gilt vor dem Umzug nach Thailand?',
      lead: 'Zuerst die Visumskategorie mit der Botschaft klären, dann Versicherung und Steuern, und erst danach Wohnung und Möbel.',
      paragraphs: [
        'Die allgemeine Reihenfolge beschreibt die [Auswandern-Checkliste](/ratgeber/auswandern-checkliste). Für Thailand gelten zusätzlich die Punkte unten. Die [Abmeldung in Deutschland](/ratgeber/abmeldung-deutschland) ersetzt kein Visum.',
      ],
      bullets: [
        'Passgültigkeit und die passende langfristige Kategorie bei der Botschaft bestätigen',
        'Versicherung so wählen, dass sie die Visumsbedingungen erfüllt, nicht nur eine Reisepolice',
        'Steuerliche Ansässigkeit und Überweisungen nach Thailand mit Beratung in beiden Ländern klären',
        'Nicht auf aneinandergereihte Touristenaufenthalte planen',
        'Arbeit oder Gesellschaft nur mit Work Permit und erlaubter Tätigkeit',
        'Konto erst mit dem richtigen Visum einplanen, altes Konto behalten',
        'Führerschein: ein internationales Dokument ist ein Übergang, die thailändische Umschreibung hat eigene Regeln',
        'Haustiere und Impfungen mit langem Vorlauf prüfen, Rente vorher beim Träger anmelden, siehe [Rente im Ausland](/ratgeber/rente-im-ausland)',
      ],
    },
  ],
  faqs: [
    {
      question: 'Reicht ein Touristenvisum, um nach Thailand auszuwandern?',
      answer:
        'Nein. Touristenvisum und visumfreie Einreise sind Kurzaufenthalte. Leben, Arbeiten und die meisten Bank- und Versicherungsverträge setzen eine langfristige Kategorie voraus. Wiederholte kurze Einreisen sind kein zuverlässiger Ersatz und können später Probleme bei der Einreise machen.',
    },
    {
      question: 'Wird meine deutsche Rente nach Thailand gezahlt?',
      answer:
        'Die Deutsche Rentenversicherung zahlt in viele Länder, Thailand gehört zu den Zielen, bei denen eine Zahlung grundsätzlich möglich ist. Beantragen Sie die Zahlung ins Ausland und klären Sie Steuer und Überweisung, bevor Sie das Konto zu Hause schließen. Der Träger, nicht dieser Text, bestätigt Ihren Fall.',
    },
    {
      question: 'Muss ich Thai sprechen?',
      answer:
        'Für die meisten Visa ist Sprache keine formale Voraussetzung. Im Alltag der Touristenorte kommt man mit Englisch weit, bei Behörden, Mietverträgen und Kliniken außerhalb dieser Orte nicht. Wer langfristig bleibt, sollte Thai zumindest so weit lernen, dass Verträge nicht nur über Dritte laufen.',
    },
  ],
  related: [links.portugal, links.spanien, links.steuern, links.krankenversicherung, links.rente, links.checkliste],
  sources: sourcesWorld,
});

export const dubai: Guide = guide({
  kind: 'country',
  slug: 'dubai-vae',
  title: 'Auswandern nach Dubai und in die VAE',
  label: 'Dubai und die VAE',
  eyebrow: 'Golf',
  description:
    'Aufenthaltserlaubnis, Steuern, Pflichtversicherung, Kosten, Firma und Konto für einen Umzug in die Vereinigten Arabischen Emirate.',
  summary:
    'Die Vereinigten Arabischen Emirate sind kein Einwanderungsland mit unbefristetem Aufenthalt von selbst. Wohnen und Arbeiten hängen an einer Aufenthaltserlaubnis, oft über Arbeitgeber, Familie, Immobilie oder eine Gesellschaft. Dass auf Bundesebene keine allgemeine Einkommensteuer auf Privatpersonen erhoben wird, macht Sie nicht steuerfrei in Deutschland, Österreich oder der Schweiz.',
  sections: [
    {
      id: 'visum',
      heading: 'Welches Visum brauche ich für die Emirate?',
      lead: 'Ein Touristenvisum oder die visumfreie Kurzreise endet. Für den Lebensmittelpunkt brauchen Sie eine Aufenthaltserlaubnis, meist mit einem Sponsor, und danach eine Emirates ID.',
      paragraphs: [
        'Typische Wege sind ein Arbeitsvertrag, eine Familienzusammenführung, eine Immobilie oder eine eigene Lizenz in einer Free Zone oder auf dem Festland. Es gibt längere Kategorien, oft Golden Visa genannt, für definierte Gruppen wie bestimmte Investoren oder Fachkräfte. Schwellen und Berufsgruppen werden angepasst. Die Botschaft und die Ausländerbehörde des Emirats, nicht ein Gründungsportal, nennen die aktuelle Liste.',
        'Dubai, Abu Dhabi und die kleineren Emirate folgen derselben Staatsstruktur, aber nicht in jedem Verfahren demselben Amt. Ein Visum für Dubai ist nicht automatisch ein Freibrief, überall zu wohnen und jede Tätigkeit auszuüben. Überziehen Sie die Frist nicht: Bußgelder und Probleme bei der nächsten Einreise sind die übliche Folge.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Bin ich in den Emiraten einkommensteuerfrei?',
      lead: 'Auf Bundesebene gibt es keine allgemeine Einkommensteuer auf Privatpersonen. Unternehmen können der Körperschaftsteuer unterliegen, und es gibt eine Umsatzsteuer. Ihr Herkunftsland kann Sie trotzdem besteuern.',
      paragraphs: [
        'Wer in Deutschland eine Wohnung behält oder den gewöhnlichen Aufenthalt nicht wirklich verlagert, bleibt dort oft unbeschränkt steuerpflichtig. Dasselbe gilt sinngemäß für Österreich und die Schweiz mit deren eigenen Regeln. Ein Doppelbesteuerungsabkommen, soweit es mit Ihrem Herkunftsland besteht, teilt Rechte auf. Es macht einen Scheinwohnsitz nicht wirksam. Lesen Sie [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
        'Eine Firma in einer Free Zone ist nicht automatisch von jeder Steuer befreit. Körperschaftsteuer, Umsatzsteuer und Substanzanforderungen gelten je nach Tätigkeit und Zone unterschiedlich. Wird die Gesellschaft aus München oder Wien geleitet, kann sie im Herkunftsland steuerlich ansässig sein. Hinzurechnungsregeln können passive Einkünfte erfassen. Lassen Sie das modellieren, bevor Sie eine Lizenz kaufen.',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Ist eine Krankenversicherung Pflicht?',
      lead: 'In Dubai und Abu Dhabi müssen Einwohnerinnen und Einwohner krankenversichert sein. Der Arbeitgeber stellt den Schutz oft, aber nicht in jedem Vertragsmodell und nicht für jedes Familienmitglied automatisch.',
      paragraphs: [
        'Die Pflichten unterscheiden sich nach Emirat. Eine Reiseversicherung für den Touristenstatus genügt für die Aufenthaltserlaubnis nicht. Prüfen Sie, ob Ehepartner und Kinder eingeschlossen sind oder eine eigene Police brauchen. Vorerkrankungen und Selbstbehalte stehen im Kleingedruckten. Die gesetzliche Kasse zu Hause deckt den neuen Lebensmittelpunkt in der Regel nicht. Siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland).',
        'Kündigen Sie den alten Vertrag erst, wenn die neue Mitgliedskarte vorliegt. Bei einer Entsendung durch den Arbeitgeber im Herkunftsland gelten andere Regeln als bei einem lokalen Vertrag. Verwechseln Sie die beiden nicht.',
      ],
    },
    {
      id: 'kosten',
      heading: 'Was bestimmt die Kosten in Dubai und den anderen Emiraten?',
      lead: 'Die Wohnung ist der dominierende Posten. Dubai und Abu Dhabi liegen deutlich über den kleineren Emiraten, und innerhalb Dubais liegen die Viertel weit auseinander.',
      paragraphs: [
        'Eine Wohnung mit mehreren Monatsmieten im Voraus ist üblich und bindet Kapital, das in Deutschland oft als Kaution gedacht war. Schulgeld an internationalen Schulen ist für viele Familien der zweite große Posten. Klimaanlage, Auto oder Taxi und importierte Lebensmittel kommen dazu. Sharjah und andere Emirate sind bei Mieten oft günstiger und bedeuten dafür einen Arbeitsweg.',
        'Es gibt keinen seriösen „Durchschnitt für Auswanderer“. Ein Single in einer Wohngemeinschaft und eine Familie mit zwei Schulplätzen in Dubai Marina leben in verschiedenen Haushalten. Rechnen Sie mit aktuellen Angeboten und mit der Kaution, die der Vertrag wirklich verlangt.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Wie arbeite ich oder gründe ich in den VAE?',
      lead: 'Arbeiten setzt eine Aufenthaltserlaubnis voraus, die das erlaubt. Eine Lizenz in einer Free Zone ist nicht dasselbe wie eine Firma, die auf dem Festland an Kunden verkaufen darf.',
      paragraphs: [
        'Der Arbeitsvertrag, die Arbeitserlaubnis und die Emirates ID gehören zusammen. Einen europäischen Arbeitgeber aus der Wohnung zu bedienen, kann trotzdem eine Frage der Steuer und der Zulässigkeit der Tätigkeit sein. Klären Sie beides. Festlandgesellschaften durften in vielen Tätigkeiten auf lokale Partner angewiesen sein. Die Regeln zur ausländischen Beteiligung wurden gelockert, gelten aber nicht für jede Aktivität. Prüfen Sie die konkrete Tätigkeit.',
        'Free Zones bieten schnell eine Lizenz und manchmal ein Visum über die Zone. Der Handel mit Kunden auf dem Festland ist oft eingeschränkt oder braucht eine zusätzliche Erlaubnis. Buchhaltung, Umsatzsteuer und eine echte Geschäftsleitung bleiben Ihre Aufgabe. Nominee-Konstruktionen sind kein Empfehlungspfad. Lesen Sie [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden).',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Wie eröffne ich ein Konto in den Emiraten?',
      lead: 'Banken verlangen die Aufenthaltserlaubnis, die Emirates ID und meist einen Adressnachweis. Ein Touristenvisum reicht bei den Hausbanken in der Regel nicht.',
      paragraphs: [
        'Die Prüfung der Mittelherkunft ist ernst. Rechnen Sie mit Gehaltsnachweisen, Gesellschaftsunterlagen oder einem Mietvertrag. Manche Banken wollen die Registrierung der Wohnung, in Dubai oft Ejari genannt, oder ein gleichwertiges Dokument. Konten werden im Informationsaustausch gemeldet. Das Herkunftsland erfährt von dem Konto, wenn Sie dort steuerlich ansässig sind. Siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
        'Schließen Sie das Konto zu Hause nicht, bevor Gehalt und Miete über das neue Konto laufen. Fragen Sie die alte Bank vorher schriftlich, ob der Wegfall des Wohnsitzes das Konto gefährdet.',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Welche Checkliste gilt für die Emirate?',
      lead: 'Zuerst den Sponsor oder die Lizenz klären, dann Versicherung und Steuerwohnsitz, und die Wohnung nicht mit dem Touristenvisum verwechseln.',
      paragraphs: ['Die übergreifende Liste ist die [Auswandern-Checkliste](/ratgeber/auswandern-checkliste).'],
      bullets: [
        'Aufenthaltsweg festlegen: Arbeitgeber, Familie, Immobilie oder eigene Lizenz',
        'Emirat und, bei einer Firma, Free Zone oder Festland zur Tätigkeit passen',
        'Pflichtversicherung für das gewählte Emirat abschließen, Familie extra prüfen',
        'Steuerliche Ansässigkeit im Herkunftsland ehrlich bewerten, auch wenn vor Ort keine Einkommensteuer anfällt',
        'Emirates ID, Wohnungspapiere und Konto in dieser Reihenfolge einplanen',
        'Kaution und Schulgeld in die Liquidität aufnehmen, nicht nur die Monatsmiete',
        'Altes Konto und Erreichbarkeit für Behörden behalten, siehe [Abmeldung in Deutschland](/ratgeber/abmeldung-deutschland)',
        'Rente nicht stillschweigend umleiten, sondern beim Träger anmelden, siehe [Rente im Ausland](/ratgeber/rente-im-ausland)',
      ],
    },
  ],
  faqs: [
    {
      question: 'Werde ich durch einen Umzug nach Dubai im Herkunftsland steuerfrei?',
      answer:
        'Nur wenn Sie dort die Ansässigkeit wirklich aufgeben und kein Tatbestand mehr greift, der Sie weiter erfasst. Eine Wohnung, die Ihnen bleibt, oder eine Gesellschaft, die Sie von zu Hause leiten, spricht oft dagegen. Die fehlende Einkommensteuer in den Emiraten ersetzt diese Prüfung nicht.',
    },
    {
      question: 'Ist ein Touristenvisum ein Anfang fürs Auswandern?',
      answer:
        'Es ist ein Anfang für eine Besichtigung, nicht für den Wohnsitz. Arbeit, Schule und ein normales Bankkonto setzen eine Aufenthaltserlaubnis und in der Regel die Emirates ID voraus.',
    },
    {
      question: 'Darf meine Free-Zone-Firma überall in den Emiraten verkaufen?',
      answer:
        'Nicht pauschal. Viele Zonen beschränken den direkten Handel auf dem Festland oder verlangen eine zusätzliche Lizenz. Die erlaubte Tätigkeit steht in der Lizenz und im Zonenrecht, nicht in der Broschüre des Gründungsagenten.',
    },
  ],
  related: [links.zypern, links.schweiz, links.steuern, links.firma, links.krankenversicherung, links.bank],
  sources: sourcesWorld,
});

export const usa: Guide = guide({
  kind: 'country',
  slug: 'usa',
  title: 'Auswandern in die USA',
  label: 'USA',
  eyebrow: 'Nordamerika',
  description:
    'Warum ESTA kein Wohnsitz ist, wie Visa, Steuern, Krankenversicherung und ein Konto in den USA zusammenhängen.',
  summary:
    'Deutschland, Österreich und die Schweiz nehmen am Visa Waiver Program teil. ESTA erlaubt einen kurzen Aufenthalt zu Besuch oder Geschäft, nicht das Leben und nicht die Arbeit. Ein Umzug braucht ein Visum oder eine dauerhafte Aufenthaltsgenehmigung. Krankenversicherung ist privat organisiert, und die USA besteuern ansässige Personen auf das Welteinkommen. Die Bundesstaaten unterscheiden sich stark.',
  sections: [
    {
      id: 'visum',
      heading: 'Reicht ESTA, um in die USA zu ziehen?',
      lead: 'Nein. ESTA ist eine Reisegenehmigung für kurze Aufenthalte, in der Regel bis zu 90 Tagen, ohne Arbeit und ohne Wohnsitz. Für einen Umzug brauchen Sie ein Visum des Konsulats oder eine Einwanderungskategorie.',
      paragraphs: [
        'Nichteinwanderungsvisa hängen am Zweck: Arbeit bei einem Arbeitgeber, Versetzung innerhalb eines Konzerns, Studium, Investition aus einem Vertragsstaat oder ein anderer eng beschriebener Grund. Einwanderungsvisa und die dauerhafte Aufenthaltsgenehmigung, die Green Card, folgen Familie, Arbeit oder anderen Programmen. Kontingente, Wartezeiten und Eignung ändern sich. Ob ein Investorenvisum für Ihren Pass offen ist und welche Investition verlangt wird, sagt das Konsulat, nicht ein Ratgeber.',
        'Ein Visum zu bekommen ist eine Entscheidung der US-Behörde. Eine Absage muss eingeplant werden, bevor Sie Wohnung und Job im Herkunftsland aufgeben. Der Bundesstaat, in dem Sie leben wollen, ändert den Alltag, aber nicht die Tatsache, dass die Einwanderung Bundessache ist. Überzogene Aufenthalte mit ESTA gefährden spätere Anträge.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Wie besteuern die USA Zugezogene?',
      lead: 'Wer in den USA steuerlich ansässig wird, versteuert in der Regel das weltweite Einkommen. Bundessteuer und Steuer des Bundesstaats kommen zusammen. Das Herkunftsland kann parallel zuständig bleiben.',
      paragraphs: [
        'Die Ansässigkeit folgt eigenen Tests der US-Steuerbehörde, nicht nur dem Visumstempel. Zusätzlich besteuern die USA ihre Staatsbürgerinnen und Personen mit Green Card auch dann weltweit, wenn sie später wieder wegziehen. Das ist ein Strukturmerkmal und der Grund, warum ein späterer Wegzug aus den USA eigene Beratung braucht. Deutschland, Österreich und die Schweiz haben Abkommen mit den USA. Sie verhindern doppelte Belastung nicht in jedem Formular und ersetzen keine Erklärung in beiden Ländern. Siehe [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
        'Bankkonten im Ausland müssen von US-Personen zusätzlich gemeldet werden. Die Schwellen ändern sich. Wer schon Konten in Europa hat und US-Person wird, sollte das vor dem ersten US-Steuerjahr klären, nicht danach. Bundesstaaten wie Kalifornien, Texas oder Florida haben völlig unterschiedliche Steuersysteme. Der Wohnsitzstaat ist Teil der Planung.',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Wie bin ich in den USA krankenversichert?',
      lead: 'Es gibt keine gesetzliche Krankenversicherung, die Sie bei der Einreise automatisch aufnimmt. Der Schutz läuft über den Arbeitgeber, eine eigene Police oder, nur wenn die Voraussetzungen erfüllt sind, über ein staatliches Programm.',
      paragraphs: [
        'Medicare ist an Beitragszeiten und an den Status gebunden und kein Schutz für den ersten Monat nach der Einreise. Medicaid ist an Bedürftigkeit und an den Bundesstaat geknüpft und für neu Zugezogene kein Plan. Viele Arbeitsvisa setzen voraus, dass der Arbeitgeber eine Versicherung anbietet. Prüfen Sie Selbstbehalte, Netzwerke der Ärzte und ob die Familie eingeschlossen ist. Eine deutsche oder österreichische gesetzliche Kasse zahlt diesen Lebensmittelpunkt nicht. Siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland).',
        'Planen Sie eine Lücke zwischen Kündigung und dem ersten Tag der US-Police nicht mit einer Reiseversicherung weg, wenn Sie bereits wohnhaft sind. Fragen Sie den Versicherer, ab welchem Tag der Schutz wirklich gilt, nicht nur ab welchem Tag der Vertrag unterschrieben ist.',
      ],
    },
    {
      id: 'kosten',
      heading: 'Wie unterschiedlich sind die Lebenshaltungskosten?',
      lead: 'Die Spanne zwischen den Regionen ist groß. Wohnung in den Küstenmetropolen und Krankenversicherung dominieren, nicht der Einkauf.',
      paragraphs: [
        'New York, die Bay Area, Los Angeles und andere Küstenlagen sind bei Mieten in einer anderen Liga als viele Städte im Mittleren Westen oder im Süden. Dafür folgen Jobs, Schulen und Visa-Sponsoren nicht automatisch dem günstigeren Ort. Ein Auto ist außerhalb weniger Großstädte mit U-Bahn praktisch Pflicht, inklusive Versicherung, die von der Fahrhistorie abhängt. Eine europäische Schadenfreiheitsklasse wird nicht überall anerkannt.',
        'Internationale oder private Schulen sind teuer. Öffentliche Schulen hängen am Schulbezirk und damit an der Adresse. Wer Kinder hat, wählt oft zuerst den Bezirk und dann die Wohnung. Nennen Sie sich aktuelle Mieten und Versicherungsangebote. Ein Landesmittelwert wäre irreführend.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Darf ich in den USA arbeiten oder eine Firma gründen?',
      lead: 'Arbeiten darf nur, wer ein Visum oder einen Status hat, der das erlaubt. Eine Gesellschaft zu gründen ist etwas anderes, als selbst in den USA erwerbstätig zu sein.',
      paragraphs: [
        'Eine LLC oder eine Corporation in einem Bundesstaat kann eine Person im Ausland halten. Das gibt dieser Person nicht das Recht, in den USA zu arbeiten oder einzureisen. Arbeitsvisa sind an den Arbeitgeber oder an eine eng definierte Tätigkeit gebunden und oft kontingentiert. Ein Vertrag ohne Status ist für beide Seiten ein Risiko.',
        'Steuerlich werden Gesellschaften je nach Rechtsform und Wahl unterschiedlich behandelt, bis hin zur Frage, ob die Einkünfte direkt Ihnen zugerechnet werden. Der Sitzstaat und der Staat, in dem Sie tatsächlich arbeiten, müssen nicht identisch sein. Buchhaltung, Sales Tax und eine Arbeitgebernummer kommen dazu. Lesen Sie [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden) und holen Sie eine US-Beratung, bevor Sie eine LLC als Abkürzung verstehen.',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Wie bekomme ich ein US-Bankkonto?',
      lead: 'Banken wollen meist eine Sozialversicherungsnummer oder eine andere Steuernummer, einen Adressnachweis und einen Status, der zum Wohnsitz passt. Ohne diese Unterlagen bleibt das Konto oft geschlossen.',
      paragraphs: [
        'Eine Sozialversicherungsnummer gibt es nicht zu jedem Visum am ersten Tag. Manche Banken haben Programme für Neuankömmlinge, andere lehnen ab. Rechnen Sie mit mehreren Wochen. US-Banken melden nach FATCA, und Sie selbst können Meldepflichten für ausländische Konten haben, sobald Sie US-Person sind. Das europäische Konto nicht voreilig kündigen. Siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Welche Checkliste gilt für die USA?',
      lead: 'Zuerst den Status mit dem Konsulat klären, ESTA nicht als Wohnsitz behandeln, Versicherung und Steuer vor der Kündigung zu Hause.',
      paragraphs: ['Die allgemeine Reihe steht in der [Auswandern-Checkliste](/ratgeber/auswandern-checkliste).'],
      bullets: [
        'Visumskategorie und realistische Wartezeit mit dem Konsulat oder einer zugelassenen Stelle klären',
        'Nicht kündigen, bevor das Visum erteilt ist',
        'Krankenversicherung ab dem ersten Wohnsitztag sichern, Medicare nicht einplanen',
        'Bundesstaat bewusst wählen: Steuer, Schule, Auto, Miete',
        'Steuererklärung in den USA und im Herkunftsland für das Übergangsjahr vorbereiten',
        'Ausländische Konten und spätere Meldepflichten notieren, sobald Sie US-Person werden',
        'Konto erst mit Nummer und Adresse einplanen',
        'Führerschein des Staats und Sozialversicherung in der Reihenfolge der Behörde, nicht umgekehrt',
      ],
    },
  ],
  faqs: [
    {
      question: 'Dürfen Deutsche, Österreicher und Schweizer mit ESTA einreisen und bleiben?',
      answer:
        'Sie dürfen in der Regel mit ESTA kurz zu Besuch oder zu bestimmten Geschäftsterminen einreisen, üblicherweise bis zu 90 Tagen. Arbeiten, Studieren und den Wohnsitz verlegen erlaubt ESTA nicht. Dafür brauchen Sie ein Visum oder eine Einwanderungskategorie.',
    },
    {
      question: 'Zahlt meine deutsche Krankenkasse in den USA?',
      answer:
        'Einen dauerhaften Wohnsitz in den USA trägt sie nicht. Reiseleistungen sind etwas anderes als der Umzug. Klären Sie das Ende des Schutzes und schließen Sie eine US-Police, die zu Ihrem Visum passt.',
    },
    {
      question: 'Macht mich eine LLC amerikanische Steuerinländerin oder -inländer?',
      answer:
        'Die Gesellschaft allein nicht. Steuerliche Ansässigkeit, Visum und die Meldepflichten einer US-Person sind eigene Fragen. Eine LLC kann aber dazu führen, dass Einkünfte in den USA erklärt werden müssen, auch wenn Sie nicht einreisen dürfen, um dort zu arbeiten.',
    },
  ],
  related: [links.kanada, links.schweiz, links.steuern, links.krankenversicherung, links.firma, links.bank],
  sources: sourcesWorld,
});

export const kanada: Guide = guide({
  kind: 'country',
  slug: 'kanada',
  title: 'Auswandern nach Kanada',
  label: 'Kanada',
  eyebrow: 'Nordamerika',
  description:
    'eTA, Einwanderung, provinzielle Krankenversicherung, Steuern, Arbeit und Konto für einen Umzug aus Deutschland, Österreich oder der Schweiz.',
  summary:
    'Deutsche, österreichische und schweizerische Staatsangehörige brauchen für die Einreise per Flug in der Regel eine eTA. Die erlaubt keinen Wohnsitz und keine Arbeit. Dauerhaft einwandern läuft über Auswahlprogramme des Bundes, der Provinzen oder über Familie und Studium. Die Krankenversicherung ist Sache der Provinz und startet oft nicht am ersten Tag. Québec folgt einem eigenen Verfahren.',
  sections: [
    {
      id: 'visum',
      heading: 'Ist die eTA ein Visum zum Auswandern?',
      lead: 'Nein. Die eTA ist eine elektronische Reisegenehmigung für visumfreie Kurzaufenthalte mit dem Flugzeug. Arbeiten, Studieren und der dauerhafte Aufenthalt brauchen eigene Genehmigungen.',
      paragraphs: [
        'Wege zur dauerhaften Aufenthaltsgenehmigung sind unter anderem das bundesweite Auswahlverfahren Express Entry, Programme der Provinzen und Territorien sowie Familie. Québec wählt Bewerberinnen und Bewerber nach eigenen Regeln aus. Punktzahlen, Berufsgruppen und Quoten werden regelmäßig geändert. Ein Studium oder ein befristetes Arbeitsvisum ist ein anderer Status als die dauerhafte Genehmigung und führt nicht von selbst dorthin.',
        'Für junge Menschen gibt es zeitlich begrenzte Working-Holiday- und Jugendaustauschprogramme. Ob Ihr Pass und Ihr Alter in der aktuellen Runde dabei sind, steht bei der kanadischen Einwanderungsbehörde, nicht in einem alten Blog. Wer nur „erst einmal mit eTA schauen“ will, sollte den Rückflug und die Arbeit im Herkunftsland nicht vorher kündigen.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Wann werde ich in Kanada steuerlich ansässig?',
      lead: 'Kanada knüpft an Wohnsitz und persönliche Bindungen an, nicht nur an eine Zahl von Tagen. Bund und Provinz besteuern nebeneinander. Das Herkunftsland kann im Übergangsjahr mitbesteuern.',
      paragraphs: [
        'Eine Wohnung, ein Ehepartner oder ein Lebensmittelpunkt in Kanada sprechen für Ansässigkeit. Es gibt ergänzende Tagesregeln. Lassen Sie das für Ihr Jahr des Umzugs einzeln rechnen. Abkommen mit Deutschland, Österreich und der Schweiz verteilen Besteuerungsrechte. Sie ersetzen keine Erklärung. Wenn zu Hause eine Wohnung bestehen bleibt, lesen Sie [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern), bevor Sie sich abmelden.',
        'Die Provinz, in der Sie am Jahresende leben, beeinflusst die Steuer. Ein Umzug von Ontario nach Alberta ist steuerlich nicht unsichtbar. Kapitalgewinne, eine mitgebrachte Gesellschaft und Rente aus Europa gehören in dasselbe Gespräch mit der Beratung, nicht in drei getrennte.',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Bin ich ab dem Einreisetag krankenversichert?',
      lead: 'Nein, nicht zuverlässig. Die öffentliche Versicherung ist provinziell. Mehrere Provinzen haben eine Wartezeit, in der Sie privaten Schutz brauchen. Der Leistungsumfang ist nicht mit der deutschen GKV identisch.',
      paragraphs: [
        'Sie beantragen die Health Card der Provinz nach den dortigen Regeln, oft mit Wohnsitznachweis und Status. Manche Provinzen haben die Wartezeit gestrichen, andere nicht. Verlassen Sie sich nicht auf einen Erfahrungsbericht aus einer anderen Provinz. Zahn, Brille und viele Medikamente sind nur teilweise oder gar nicht in der Grundversorgung enthalten. Arbeitgeberpolicen schließen diese Lücken oft, sind aber an den Job gebunden.',
        'Die gesetzliche Versicherung in Deutschland, Österreich oder der Schweiz trägt den neuen Lebensmittelpunkt nicht wie einen Urlaub. Siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland). Schließen Sie die Lücke der Wartezeit, bevor Sie fliegen, und kündigen Sie zu Hause erst mit dem Datum, das die alte Kasse bestätigt.',
      ],
    },
    {
      id: 'kosten',
      heading: 'Was kostet das Leben in Kanada?',
      lead: 'Toronto und Vancouver sind bei Wohnen deutlich teurer als viele Städte in den Prärien oder an der Atlantikküste. Heizen im Winter und ein Auto gehören in die meisten Haushalte außerhalb der größten Zentren.',
      paragraphs: [
        'Die Miete oder der Kaufpreis der Wohnung entscheidet mehr als der Lebensmittelpreis. Ein Job in Toronto mit einer Wohnung weit draußen ist ein anderes Budget als ein Job in Halifax. Internationale Schulen sind die Ausnahme. Öffentliche Schulen sind der Normalweg und unterrichten auf Englisch oder, in Québec, auf Französisch. Wer kein Französisch spricht, sollte Québec nicht nur nach der Stadtansicht wählen.',
        'Winterkleidung, Reifen und Heizung sind reale Posten, keine Folklore. Sie sind immer noch kleiner als eine falsche Wohnung. Holen Sie Angebote für die Stadt und die Jahreszeit, in der Sie ankommen. Ein kanadischer Durchschnitt würde die Unterschiede verwischen.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Wie arbeite ich oder gründe ich in Kanada?',
      lead: 'Ohne Arbeitserlaubnis oder dauerhaften Status dürfen Sie nicht arbeiten. Eine Gesellschaft zu gründen ersetzt diese Erlaubnis nicht. Québec und die anderen Provinzen haben eigene Register.',
      paragraphs: [
        'Viele befristete Arbeitserlaubnisse hängen an einem Arbeitgeber und an einer Arbeitsmarktprüfung, andere an Abkommen oder an intra-betrieblichen Versetzungen. Die dauerhafte Genehmigung erlaubt die Arbeit freier, steht aber am Ende eines eigenen Verfahrens. Ein Vertrag aus Europa, den Sie in einer kanadischen Wohnung erfüllen, kann trotzdem kanadische Steuer und eine Erlaubnis auslösen.',
        'Gesellschaften können nach Bundesrecht oder nach Provinzrecht gegründet werden. Umsatzsteuer, je nach Provinz GST, HST oder eine provinzielle Steuer, wird ab bestimmten Umsätzen zur Pflicht. Die Schwelle sollten Sie in der aktuellen Fassung der Behörde nachlesen, nicht auswendig lernen. Buchhaltung und eine echte Geschäftsleitung gehören dazu. Siehe [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden).',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Wie eröffne ich ein kanadisches Bankkonto?',
      lead: 'Banken bieten Neuankömmlingen oft ein Paket an, wollen aber Status, Adresse und meist eine Sozialversicherungsnummer. Die Kreditgeschichte beginnt bei null.',
      paragraphs: [
        'Ohne kanadische Kredithistorie sind Kreditkarte und Handyvertrag schwerer als das Girokonto. Manche Banken akzeptieren anfangs einen ausländischen Nachweis. Planen Sie, Miete und Kaution auch ohne lokalen Kredit bezahlen zu können. Die Sozialversicherungsnummer ist an den Arbeits- oder Einwanderungsstatus gebunden. Konten werden gemeldet. Siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Welche Checkliste gilt für Kanada?',
      lead: 'Einwanderungsweg und Provinz zuerst wählen, eTA nicht als Wohnsitz behandeln, Versicherung für die Wartezeit extra abschließen.',
      paragraphs: ['Starten Sie mit der [Auswandern-Checkliste](/ratgeber/auswandern-checkliste).'],
      bullets: [
        'Programm und Provinz anhand der aktuellen Kriterien wählen, Québec getrennt prüfen',
        'Nichts Endgültiges kündigen, bevor die Genehmigung vorliegt',
        'Private Versicherung für die Wartezeit der Provinz abschließen',
        'Steuerliches Übergangsjahr in beiden Ländern vorbereiten',
        'Wohnort nach Job, Winter und Miete wählen, nicht nur nach einem Städtefoto',
        'Sozialversicherungsnummer, Health Card und Bank in der Reihenfolge der Behörden',
        'Französisch einplanen, wenn Québec das Ziel ist',
        'Rente und Sozialversicherung im Herkunftsland informieren, siehe [Rente im Ausland](/ratgeber/rente-im-ausland)',
      ],
    },
  ],
  faqs: [
    {
      question: 'Brauche ich als Deutsche oder Deutscher ein Visum für den Urlaub in Kanada?',
      answer:
        'Für die Einreise mit dem Flugzeug in der Regel eine eTA, kein klassisches Besuchsvisum. Die eTA erlaubt keinen längeren Wohnsitz und keine Arbeit. Dafür brauchen Sie eine eigene Genehmigung.',
    },
    {
      question: 'Gilt die kanadische Krankenversicherung ab dem ersten Tag?',
      answer:
        'Das entscheidet die Provinz. In manchen gibt es eine Wartezeit von mehreren Monaten, in anderen nicht mehr. Schließen Sie für die Zwischenzeit eine private Police ab und prüfen Sie die aktuelle Regel Ihrer Provinz.',
    },
    {
      question: 'Ist Express Entry ein Anspruch, wenn ich genug Punkte sammle?',
      answer:
        'Nein. Es ist ein Auswahlverfahren mit wechselnden Runden, Berufsgruppen und Quoten. Ein Punktestand aus dem letzten Jahr sagt nicht, ob Sie in der nächsten Runde gezogen werden. Die Behörde veröffentlicht die aktuellen Runden.',
    },
  ],
  related: [links.usa, links.schweiz, links.steuern, links.krankenversicherung, links.bank, links.checkliste],
  sources: sourcesWorld,
});

export const schweiz: Guide = guide({
  kind: 'country',
  slug: 'schweiz',
  title: 'Auswandern in die Schweiz',
  label: 'Schweiz',
  eyebrow: 'Europa',
  description:
    'Anmeldung, Aufenthaltsausweis, kantonale Steuern, obligatorische Krankenversicherung und Konto für einen Umzug in die Schweiz, vor allem aus Deutschland und Österreich.',
  summary:
    'Die Schweiz ist nicht in der EU, hat aber mit ihr und damit auch mit Deutschland und Österreich Personenfreizügigkeit. Wer umzieht, meldet sich bei der Gemeinde an und bekommt einen Ausweis. Steuern unterscheiden sich stark nach Kanton und Gemeinde. Die Grundversicherung ist obligatorisch und privat abgeschlossen. Wer schon in der Schweiz lebt und nur den Kanton wechselt, folgt einem anderen, hier nicht im Mittelpunkt stehenden Verfahren.',
  sections: [
    {
      id: 'visum',
      heading: 'Brauche ich ein Visum für die Schweiz?',
      lead: 'Deutsche und österreichische Staatsangehörige brauchen für den Zuzug kein klassisches Visum, aber eine Anmeldung und einen Ausländerausweis. Der Ausweis hängt oft an Arbeit, Selbstständigkeit oder ausreichenden Mitteln.',
      paragraphs: [
        'Nach dem Einzug melden Sie sich bei der Gemeinde, in vielen Kantonen innerhalb von 14 Tagen. Die Frist sollten Sie auf der Seite Ihrer Gemeinde nachlesen. Danach stellt das Migrationsamt einen Ausweis aus, häufig eine B-Bewilligung für einen längeren Aufenthalt oder eine L-Bewilligung für einen kurzen. Die Niederlassungsbewilligung C kommt erst nach Jahren und unter weiteren Voraussetzungen. Eine G-Bewilligung ist für Grenzgängerinnen und Grenzgänger und ersetzt den Umzug nicht.',
        'Schweizer Staatsangehörige, die in die Schweiz zurückkehren, melden sich ebenfalls an, durchlaufen aber nicht das Ausländerrecht. Dieser Text ist vor allem für Menschen aus Deutschland und Österreich geschrieben. Wer ohne Arbeitsvertrag von Vermögen leben will, muss die Mittel nachweisen. Die Kantone handhaben das nicht wortgleich.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Warum ist der Kanton steuerlich so wichtig?',
      lead: 'Es gibt eine Bundessteuer und dazu Kantons- und Gemeindesteuern. Dieselbe Einkunft wird in Zug anders belastet als in Genf. Zusätzlich gibt es eine kantonale Vermögenssteuer.',
      paragraphs: [
        'Viele Arbeitnehmerinnen und Arbeitnehmer werden anfangs an der Quelle besteuert und wechseln später in die ordentliche Veranlagung, wenn die Voraussetzungen erfüllt sind. Die Quellensteuer ist kein endgültiger Steuersatz für immer. Ein Doppelbesteuerungsabkommen mit Deutschland und Österreich weist Rechte zu, besonders bei Rente, unselbstständiger Arbeit und Dividenden. Wenn Sie die Wohnung im Herkunftsland behalten, kann dort die Ansässigkeit weiterbestehen. Siehe [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
        'Einige Kantone kennen die Pauschalbesteuerung für Personen ohne Erwerb in der Schweiz und mit ausländischer Staatsangehörigkeit. Sie ist an Bedingungen und an eine Mindesthöhe geknüpft und nicht in jedem Kanton offen. Wer eine Kapitalgesellschaft hält, sollte die Wegzugsregeln des Herkunftslands prüfen, bevor der Wohnsitz wechselt. Kantonale Steuerverwaltungen veröffentlichen die aktuellen Tarife. Übernehmen Sie keine Tabelle aus zweiter Hand.',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Wie funktioniert die obligatorische Krankenversicherung?',
      lead: 'Wer in der Schweiz wohnt, muss eine Grundversicherung bei einem privaten Versicherer abschließen, in der Regel innerhalb von drei Monaten nach Wohnsitznahme. Das ist keine gesetzliche Kasse wie in Deutschland oder Österreich.',
      paragraphs: [
        'Die Grundversicherung ist im Leistungsumfang gesetzlich beschrieben, die Prämie hängt von Versicherer, Kanton, Alter und gewählter Franchise ab. Die Franchise ist der Selbstbehalt, den Sie jährlich selbst tragen, bevor die Versicherung zahlt. Unfall kann über den Arbeitgeber laufen oder extra versichert werden. Wer die Frist verpasst, wird rückwirkend versichert und kann einen Zuschlag bekommen. Vergleichen Sie die Prämien über die offiziellen Listen, nicht nur über einen Vermittler.',
        'Die deutsche oder österreichische gesetzliche Versicherung endet nicht in jedem Fall am Tag der Abmeldung, trägt den Schweizer Wohnsitz aber nicht dauerhaft. Eine Entsendung ist der Gegenfall. Klären Sie schriftlich, welches System an welchem Tag zuständig ist. Siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland). Zusatzversicherungen sind freiwillig und dürfen Vorerkrankungen ablehnen oder vorbehalten. Die Grundversicherung darf das nicht auf dieselbe Weise.',
      ],
    },
    {
      id: 'kosten',
      heading: 'Wie teuer ist die Schweiz im Alltag?',
      lead: 'Wohnen in Zürich, Genf und Zug und die Krankenversicherungsprämie sind die Posten, die Haushalte überraschen. Lebensmittel und Restaurants liegen über den Nachbarländern, ersetzen aber nicht die Mietentscheidung.',
      paragraphs: [
        'Eine Wohnung in Zürich oder Genf und eine Wohnung in einem kleineren Kanton mit längerem Arbeitsweg sind verschiedene Budgets. Die Kaution beträgt oft mehrere Monatsmieten. Nebenkosten und Parkplatz kommen dazu. Wer in Euro denkt und in Franken zahlt, sollte den Wechsel nicht als Nebensache behandeln, auch ohne einen Kurs zu prognostizieren.',
        'Öffentliche Schulen sind der normale Weg und unterrichten in der Sprache des Kantons. Internationale Schulen sind eine große zusätzliche Ausgabe. ÖV ist in den Zentren stark, ein Auto in den Bergen oft trotzdem nötig. Konkrete Mieten gehören in aktuelle Inserate, nicht in diesen Text.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Wie arbeite ich oder gründe ich in der Schweiz?',
      lead: 'Mit Freizügigkeit dürfen Deutsche und Österreicher eine Stelle annehmen oder sich selbstständig machen und sich anmelden. Eine GmbH oder AG ist kapital- und formalintensiv.',
      paragraphs: [
        'Der Arbeitsvertrag, die Anmeldung bei der Ausgleichskasse und die Quellensteuer oder die ordentliche Veranlagung gehören zusammen. Ein Gehalt, das nur auf dem Papier schweizerisch ist, während die Arbeit im Herkunftsland stattfindet, überzeugt weder die Steuerverwaltung noch die Sozialversicherung. Selbstständigkeit müssen Sie gegenüber der Ausgleichskasse und oft der Kantonsbehörde glaubhaft machen.',
        'GmbH und AG brauchen Stamm- oder Aktienkapital, eine Gründung mit öffentlicher Urkunde und einen Eintrag im Handelsregister. Buchhaltung und, ab bestimmten Größen, eine Revision kommen dazu. Eine Gesellschaft, deren Beschlüsse faktisch in München fallen, kann dort steuerlich hängen. Siehe [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden). Lohnnebenkosten und das schweizerische Arbeitsrecht sind Teil des Angebots an Mitarbeitende, nicht nur der Steuersatz des Kantons.',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Wie eröffne ich ein Schweizer Bankkonto?',
      lead: 'Mit Anmeldung, Ausweis und oft dem Ausländerausweis geht ein Alltagskonto. Die Banken prüfen die Steueransässigkeit genau, auch bei Menschen aus den Nachbarländern.',
      paragraphs: [
        'Bringen Sie den Nachweis des Wohnsitzes und die Steueridentifikation des Herkunftslands mit, solange Sie dort noch ansässig sein könnten. Das Konto wird im Informationsaustausch gemeldet. Das ist der Normalfall. Ein Nummernkonto oder ein Konto auf eine andere Person ist kein Modell für einen gewöhnlichen Umzug. Halten Sie das Konto zu Hause, bis Lohn, Miete und die Krankenkassenprämie laufen. Siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Welche Checkliste gilt für den Umzug in die Schweiz?',
      lead: 'Gemeindeanmeldung, Ausweis, Grundversicherung innerhalb der Frist, Kanton bewusst wählen, altes Konto nicht am ersten Tag kündigen.',
      paragraphs: ['Die allgemeinere Reihe steht in der [Auswandern-Checkliste](/ratgeber/auswandern-checkliste).'],
      bullets: [
        'Kanton und Gemeinde nach Arbeit, Miete und Steuerlast zusammen ansehen, nicht nur nach dem Steuersatz',
        'Anmeldung bei der Gemeinde termingerecht einplanen',
        'Grundversicherung innerhalb der gesetzlichen Frist abschließen und Franchise bewusst wählen',
        'Mit der alten Kasse das Enddatum schriftlich klären',
        'Quellensteuer oder ordentliche Veranlagung mit der Kantonsverwaltung verstehen',
        'Wohnsitz im Herkunftsland nur behalten, wenn Sie die steuerlichen Folgen wollen',
        'Konto, Lohnkonto und Kaution in Franken liquide halten',
        'Bei einem späteren Wegzug aus der Schweiz die Regeln zu AHV und Pensionskasse vorher lesen, siehe [Rente im Ausland](/ratgeber/rente-im-ausland)',
      ],
    },
  ],
  faqs: [
    {
      question: 'Ist die Schweiz wegen der Freizügigkeit wie ein EU-Land?',
      answer:
        'Bei der Einreise und der Arbeit für Deutsche und Österreicher in vielem ähnlich, bei Steuern, Krankenversicherung und Abmeldung nicht. Sie melden sich in der Gemeinde an, schließen eine schweizerische Grundversicherung ab und werden nach Kanton und Gemeinde besteuert.',
    },
    {
      question: 'Kann ich die deutsche gesetzliche Krankenkasse in der Schweiz behalten?',
      answer:
        'Nicht als Ersatz für die obligatorische Grundversicherung, wenn Sie den Wohnsitz in die Schweiz verlegen. Eine Entsendung ist die Ausnahme und braucht eigene Bescheinigungen. Die Grundversicherung müssen Sie in der gesetzlichen Frist selbst abschließen.',
    },
    {
      question: 'Welcher Kanton ist steuerlich am günstigsten?',
      answer:
        'Das hängt von Einkommen, Vermögen, Familienstand und Gemeinde ab und ändert sich mit den Tarifen. Ein Kanton mit niedriger Steuer und einer Miete, die den Unterschied auffrisst, ist kein Gewinn. Rechnen Sie Ihren Fall mit aktuellen Tarifen, statt eine Rangliste zu übernehmen.',
    },
  ],
  related: [links.spanien, links.zypern, links.steuern, links.krankenversicherung, links.abmeldung, links.bank],
  sources: [
    'Kantonale Steuerverwaltung und Gemeinde des Wohnorts',
    'Staatssekretariat für Migration und die kantonale Migrationsbehörde zum Ausweis',
    'Bundesamt für Gesundheit und die offizielle Prämiensicht zur Grundversicherung',
    'Finanzamt oder Finanzverwaltung im Herkunftsland, wenn dort ein Wohnsitz bleiben könnte',
  ],
});
