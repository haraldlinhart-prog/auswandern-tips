import { guide } from './create';
import { links } from './links';
import type { Guide } from './types';

const sourcesEu = [
  'Auswärtiges Amt, BMEIA und EDA für den Blick aus Deutschland, Österreich und der Schweiz',
  'Botschaft oder Ausländerbehörde des Ziellands für den aktuellen Aufenthaltstitel',
  'Finanzamt, Finanzverwaltung oder kantonales Steueramt plus eine Beratung im Zielland',
  'Ihre Krankenversicherung, bevor Sie kündigen oder eine Lücke entstehen lassen',
];

export const spanien: Guide = guide({
  kind: 'country',
  slug: 'spanien',
  title: 'Auswandern nach Spanien',
  label: 'Spanien',
  eyebrow: 'Europäische Union',
  description:
    'Anmeldung, NIE, Steuern, Krankenversicherung und Alltag für einen Umzug aus Deutschland, Österreich oder der Schweiz nach Spanien.',
  summary:
    'Staatsangehörige der EU dürfen in Spanien leben und arbeiten, müssen einen längeren Aufenthalt aber anmelden. NIE, Melderegister, Krankenversicherung und der Steuerwohnsitz sind die praktischen Hürden, nicht die Einreise. Schweizer Staatsangehörige stützen sich auf das Freizügigkeitsabkommen. Der Umzug beendet Pflichten in Deutschland, Österreich oder der Schweiz nicht von selbst.',
  sections: [
    {
      id: 'visum',
      heading: 'Welchen Aufenthaltstitel brauche ich in Spanien?',
      lead: 'Für wenige Wochen reicht die Freizügigkeit. Wer länger bleibt, meldet den Aufenthalt an und besorgt sich eine NIE. Ein Touristenstatus ist für EU-Bürgerinnen und EU-Bürger nicht das richtige Modell.',
      paragraphs: [
        'Deutsche und österreichische Staatsangehörige nutzen die EU-Freizügigkeit. Nach einem längeren Aufenthalt, in der Umsetzung der Richtlinie üblicherweise ab drei Monaten, ist eine Registrierung bei der zuständigen Ausländerbehörde vorgesehen. Daraus wird eine Bescheinigung, kein klassisches Visum. Die NIE, die ausländische Identifikationsnummer, brauchen Sie praktisch für Mietvertrag, Bank, Arbeit und viele Verträge. Das Melderegister der Gemeinde, der Padrón, ist davon getrennt und trotzdem fast immer nötig.',
        'Schweizer Staatsangehörige fallen nicht unter das EU-Bürgerverfahren, sondern unter das Freizügigkeitsabkommen. Das Recht zu wohnen und zu arbeiten ist vergleichbar, Formular und Karte sind es nicht in jedem Detail. Personen ohne EU- oder Schweizer Pass, auch Familienangehörige, brauchen einen eigenen Weg. Visa für Nicht-EU-Bürger, etwa ein Aufenthalt ohne Arbeit oder ein Visum für ortsunabhängiges Arbeiten, gehen deutsche und österreichische Staatsangehörige in der Regel nichts an. Die regionale Behörde und das spanische Konsulat im Herkunftsland nennen den aktuellen Stand.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Wo bin ich steuerlich ansässig, wenn ich nach Spanien ziehe?',
      lead: 'Spanien besteuert Personen mit gewöhnlichem Aufenthalt in der Regel umfassend. Ob Deutschland, Österreich oder die Schweiz parallel zugreifen, hängt vom verbliebenen Wohnsitz und vom Abkommen ab, nicht vom Tag der Abmeldung.',
      paragraphs: [
        'Eine Wohnung, die Ihnen im Herkunftsland weiter zur Verfügung steht, kann dort einen Wohnsitz erhalten. Die oft genannte Zahl von 183 Tagen beschreibt in Deutschland nur einen Teil der Prüfung, den gewöhnlichen Aufenthalt. Lesen Sie dazu den Ratgeber [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern). Zwischen den drei Herkunftsländern und Spanien bestehen Doppelbesteuerungsabkommen. Sie verteilen Besteuerungsrechte nach Einkunftsarten und ersetzen keine Steuererklärung.',
        'Spanien kennt ein besonderes Zuzugsregime für bestimmte Arbeitnehmer mit engen Voraussetzungen. Es ist kein Automatismus für Ruheständler oder für jede Selbstständigkeit, und Sätze sowie Fristen ändern sich. Einige autonome Gemeinschaften erheben zusätzlich Vermögen- oder Solidaritätsabgaben. Wer Anteile an Kapitalgesellschaften hält, sollte die Wegzugsbesteuerung im Herkunftsland vor dem Umzug prüfen lassen. Regionale Unterschiede sind groß: Madrid, Andalusien und die Inseln folgen nicht derselben Praxis.',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Wie bin ich in Spanien krankenversichert?',
      lead: 'Die europäische Krankenversicherungskarte deckt keinen Umzug. Nach der Anmeldung und mit Beiträgen oder einem tragbaren Dokument Ihrer alten Kasse kommen Sie in das öffentliche System. Bis dahin brauchen Sie eine eigene Absicherung.',
      paragraphs: [
        'Das öffentliche System heißt SNS. Zugang bekommen Einwohnerinnen und Einwohner in der Regel über eine Beschäftigung, eine Selbstständigkeit mit Beiträgen oder über ein Formular der bisherigen Versicherung, etwa wenn eine Rente aus einem EU-Staat bezogen wird. Die Karte aus Deutschland, Österreich oder der Schweiz gilt für vorübergehende Aufenthalte, nicht für den neuen Lebensmittelpunkt. Kündigen Sie die alte Versicherung erst, wenn die neue bestätigt ist. Details stehen im Ratgeber [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland).',
        'Wer ohne Arbeit und ohne Rentenexport einreist, etwa mit ausreichenden Mitteln, muss oft eine private Police vorlegen, die die Behörde akzeptiert. Vorerkrankungen, Selbstbehalte und Wartedekungen unterscheiden sich stark. Eine Entsendung durch einen Arbeitgeber im Herkunftsland ist ein anderer Fall: Dann bleiben Sie oft im alten System und bekommen eine A1-Bescheinigung. Das ist kein Auswandern im engeren Sinn.',
      ],
    },
    {
      id: 'kosten',
      heading: 'Wie teuer ist das Leben in Spanien?',
      lead: 'Küstenstädte und Inseln kosten deutlich mehr als das Landesinnere. Miete und, falls nötig, eine internationale Schule bestimmen das Budget stärker als der Einkauf auf dem Markt.',
      paragraphs: [
        'Madrid, Barcelona, Palma, Málaga und die beliebten Küstenorte liegen bei Wohnen spürbar über kleineren Städten in Kastilien, Aragón oder Extremadura. Lokale Märkte sind günstiger als importierte Gewohnheiten und internationale Restaurants. Strom für Klimaanlage im Sommer und Heizung im Landesinneren gehört in die Rechnung, auch wenn beides nicht dem deutschen Winter entspricht.',
        'Öffentliche Verkehrsmittel tragen in den großen Städten. Auf dem Land ist ein Auto oft praktisch, Versicherung und Parken kommen dazu. Wer Kinder auf eine internationale Schule schickt, sollte das vor der Wohnungssuche klären: Die Plätze sind begrenzt und der Aufwand ist eine eigene Haushaltsposition, keine Nebensache. Konkrete Mieten ändern sich schnell. Nutzen Sie aktuelle Angebote am Ort, keine Tabellen aus einem alten Artikel.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Kann ich in Spanien arbeiten oder eine Firma gründen?',
      lead: 'EU-Bürgerinnen und EU-Bürger brauchen dafür kein Arbeitsvisum, aber eine Anmeldung, eine Sozialversicherungsnummer und, bei Selbstständigkeit, die Registrierung als autónomo. Eine Gesellschaft ist die Sociedad Limitada.',
      paragraphs: [
        'Ein Arbeitsvertrag läuft über die spanische Sozialversicherung. Als Selbstständige oder Selbstständiger melden Sie die Tätigkeit an und zahlen Beiträge, deren Höhe von der gewählten Basis abhängt. Die Regeln für den Anfang wurden in den letzten Jahren umgebaut. Verlassen Sie sich nicht auf einen alten Blog zur Pauschalbeitrag. Eine Gestoria, ein lokales Verwaltungsbüro, erledigt viele Meldungen, ersetzt aber keine steuerliche Beratung, wenn Einkünfte in zwei Ländern anfallen.',
        'Die übliche Kapitalgesellschaft ist die SL. Gründung, Stammkapital, Notar und Register sind machbar, die laufende Buchhaltung nicht nebenbei. Wer die Entscheidungen weiter vom Küchentisch in Deutschland trifft, riskiert, dass das Herkunftsland die Gesellschaft oder die Person besteuert. Lesen Sie [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden), bevor Sie eine SL nur wegen eines Steuersatzes aufmachen.',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Wie eröffne ich ein Bankkonto in Spanien?',
      lead: 'Banken wollen eine NIE, einen Identitätsnachweis und meist eine Adresse in Spanien. Kündigen Sie das Konto zu Hause nicht, bevor Gehalt, Miete und Behördenwege laufen.',
      paragraphs: [
        'Ohne NIE wird es bei den meisten Filialbanken mühsam oder unmöglich. Manche Online-Anbieter eröffnen früher ein begrenztes Konto, das später nachgereicht werden muss. Rechnen Sie mit Nachweisen zur Steueransässigkeit. Spanische Konten werden im automatischen Informationsaustausch gemeldet. Das ist der Normalfall und kein Grund, das Konto auf eine andere Person zu legen. Mehr dazu im Ratgeber [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
        'Daueraufträge für Miete und Strom sollten stehen, bevor Sie das alte Konto schließen. Fragen Sie Ihre Bank in Deutschland, Österreich oder der Schweiz schriftlich, ob sie Kundinnen und Kunden ohne Wohnsitz im Land weiterführt. Viele deutsche Institute tun das nicht.',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Welche Checkliste gilt für den Umzug nach Spanien?',
      lead: 'Zuerst Aufenthalt und Versicherung klären, dann NIE und Padrón, danach Konto, Steuer und erst zum Schluss den Container.',
      paragraphs: [
        'Die allgemeine Reihenfolge steht in der [Auswandern-Checkliste](/ratgeber/auswandern-checkliste). Für Spanien kommen die Punkte unten dazu. Die [Abmeldung in Deutschland](/ratgeber/abmeldung-deutschland) sollten Sie nicht am selben Tag erledigen, an dem Sie das einzige Konto kündigen.',
      ],
      bullets: [
        'Passgültigkeit und, bei Nicht-EU-Familienangehörigen, deren eigenen Aufenthaltsweg prüfen',
        'Termin für die Aufenthaltsregistrierung und die NIE in der zuständigen Provinz suchen',
        'Wohnung so wählen, dass Sie sich im Padrón anmelden können',
        'Krankenversicherung lückenlos anschließen, EHIC nicht als Umzugsschutz behandeln',
        'Steuerliche Ansässigkeit und eventuelle Wegzugsbesteuerung mit Beratung in beiden Ländern klären',
        'Bankkonto erst nach NIE fest einplanen, altes Konto vorläufig behalten',
        'Führerschein umschreiben, sobald Sie wohnhaft sind; die Frist ist begrenzt und ändert sich',
        'Rente vor dem Umzug beim Träger anmelden, siehe [Rente im Ausland](/ratgeber/rente-im-ausland)',
      ],
    },
  ],
  faqs: [
    {
      question: 'Reicht die europäische Krankenversicherungskarte für einen Umzug nach Spanien?',
      answer:
        'Nein. Die Karte ist für vorübergehende Aufenthalte gedacht. Wer den Lebensmittelpunkt nach Spanien verlegt, braucht Zugang zum öffentlichen System oder eine anerkannte private Police. Klären Sie das mit der alten Kasse, bevor Sie kündigen.',
    },
    {
      question: 'Brauche ich als Deutsche oder Deutscher ein Visum für Spanien?',
      answer:
        'Für die Einreise und einen kurzen Aufenthalt nein. Für einen längeren Aufenthalt melden Sie sich an und beantragen die Registrierungsbescheinigung sowie praktisch immer eine NIE. Das ist kein Visum, aber ohne diese Schritte funktionieren Wohnung, Arbeit und Bank schlecht.',
    },
    {
      question: 'Gilt das Sonderregime für Zugezogene automatisch?',
      answer:
        'Nein. Das spanische Zuzugsregime hat enge Voraussetzungen, betrifft vor allem bestimmte Arbeitsfälle und gilt nicht für jeden Ruhestand oder jede Selbstständigkeit. Ob es auf Sie passt, sagt eine aktuelle Beratung, nicht ein Forum.',
    },
  ],
  related: [links.portugal, links.zypern, links.steuern, links.krankenversicherung, links.abmeldung, links.checkliste],
  sources: sourcesEu,
});

export const portugal: Guide = guide({
  kind: 'country',
  slug: 'portugal',
  title: 'Auswandern nach Portugal',
  label: 'Portugal',
  eyebrow: 'Europäische Union',
  description:
    'Anmeldung, NIF, Steuern nach dem Ende des alten NHR-Regimes, Krankenversicherung und Konto für einen Umzug nach Portugal.',
  summary:
    'Auch Portugal ist für deutsche und österreichische Staatsangehörige ein Freizügigkeitsland mit Anmeldepflicht, nicht ein Land ohne Formalitäten. Sie brauchen eine NIF, eine Wohnsitzmeldung und einen Plan für Krankenversicherung und Steuern. Das frühere Non-Habitual-Resident-Regime ist für gewöhnliche Neuzuzüge nicht mehr offen. Schweizer Staatsangehörige nutzen das Freizügigkeitsabkommen.',
  sections: [
    {
      id: 'visum',
      heading: 'Wie melde ich einen längeren Aufenthalt in Portugal an?',
      lead: 'EU-Bürgerinnen und EU-Bürger registrieren einen Aufenthalt von mehr als drei Monaten. Die NIF, die Steueridentifikationsnummer, brauchen Sie schon für Alltag und Verträge.',
      paragraphs: [
        'Die Registrierungsbescheinigung für EU-Bürger stellt die zuständige Behörde aus, heute bei der AIMA und den Gemeinden, je nach Verfahren. Zuständigkeiten wurden in den letzten Jahren umgebaut, früher war oft der SEF der erste Ansprechpartner. Schauen Sie auf die aktuelle Seite der Behörde, nicht auf ein Formular von 2019. Ein Mietvertrag oder ein anderer Wohnsitznachweis, Versicherung und Mittel für den Lebensunterhalt können verlangt werden.',
        'Die NIF bekommen Sie beim Finanzamt oder über einen zugelassenen Vertreter. Ohne sie werden Mobilfunk, Strom und Bank mühsam. Schweizer Staatsangehörige folgen dem Freizügigkeitsabkommen und nicht wortgleich dem EU-Formular. Visa für ortsunabhängiges Arbeiten oder passive Einkünfte richten sich an Menschen ohne dieses Aufenthaltsrecht. Für deutsche und österreichische Pässe sind sie meist der falsche Weg.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Was gilt steuerlich, nachdem das NHR-Regime geschlossen wurde?',
      lead: 'Wer jetzt gewöhnlich in Portugal lebt, wird nach den allgemeinen Regeln ansässig. Das alte NHR-Regime mit breiten Vergünstigungen ist für neue gewöhnliche Fälle zu. Nachfolger gelten nur für bestimmte Tätigkeiten.',
      paragraphs: [
        'Portugal knüpft die Steueransässigkeit an den Wohnsitz und an die Aufenthaltsdauer. Ein Doppelbesteuerungsabkommen mit Deutschland, Österreich und der Schweiz verhindert nicht, dass Sie Erklärungen abgeben müssen. Es weist Besteuerungsrechte zu. Wenn in der Heimat eine Wohnung bestehen bleibt, kann dort die unbeschränkte Steuerpflicht weiterlaufen. Der Überblick steht unter [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern).',
        'Das Non-Habitual-Resident-Regime wurde für neue Anträge weitgehend geschlossen. Übergangsregeln betreffen Menschen, die schon angemeldet waren oder konkrete Altfälle erfüllen. Ein späteres Anreizregime für Forschung und Innovation deckt definierte Berufe ab, nicht pauschal jede Remote-Arbeit. Lassen Sie anhand Ihrer Daten prüfen, ob Sie überhaupt in eine Übergangs- oder Nachfolgeregel fallen. Werbeflyer, die „NHR noch schnell“ versprechen, sind ein Warnsignal.',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Wie funktioniert die Krankenversicherung in Portugal?',
      lead: 'Der öffentliche Dienst SNS steht Einwohnerinnen und Einwohnern mit Registrierung offen. Bis die Nummer steht und in den Fällen, in denen die Behörde eine Police verlangt, brauchen Sie privaten Schutz.',
      paragraphs: [
        'Beschäftigte und Selbstständige zahlen in das portugiesische System ein. Rentnerinnen und Rentner aus einem anderen EU-Staat können über ein tragbares Dokument ihrer Kasse Zugang bekommen. Das müssen Sie vor dem Umzug bei der deutschen, österreichischen oder schweizerischen Stelle beantragen, nicht erst in der Schlange vor dem Gesundheitszentrum. Die europäische Karte ersetzt das nicht. Siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland).',
        'Private Versicherungen werden beim Antrag auf Aufenthalt oft als Nachweis verlangt, solange Sie dem SNS noch nicht angehören. Achten Sie auf Wartezeiten bei Vorerkrankungen. Zahnarzt und viele Fachtermine laufen im Alltag oft privat, auch wenn der SNS grundsätzlich zuständig ist. Das ist eine Planung der Wartezeit, keine Aussage über die Qualität im Einzelfall.',
      ],
    },
    {
      id: 'kosten',
      heading: 'Was kostet der Alltag in Portugal?',
      lead: 'Lissabon, Porto und die Algarve sind deutlich teurer als das Inland. Wohnen ist der größte Posten, nicht der Kaffee.',
      paragraphs: [
        'In den letzten Jahren sind die Mieten in Lissabon, Porto und an der Küste spürbar gestiegen. Wer nur ältere Vergleiche im Kopf hat, plant zu knapp. Kleinere Städte im Inland und auf dem Land liegen darunter, haben aber weniger internationale Schulen, weniger Fachärzte und längere Wege. Ein Auto ist dort oft nötig.',
        'Lokale Märkte und die Kantine bleiben günstiger als importierte Produkte und Wohnungen mit Meerblick. Strom zum Heizen im Winter wird unterschätzt, vor allem in älteren Häusern. Internationale Schulen in Lissabon und an der Algarve sind eine eigene Entscheidung und sollten vor der Wohnungswahl stehen. Nennen Sie sich selbst aktuelle Angebote, dieser Text setzt absichtlich keine Mieten in Euro an.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Wie arbeite ich oder gründe ich in Portugal?',
      lead: 'Mit EU-Freizügigkeit dürfen Sie arbeiten, sobald die Anmeldung stimmt. Selbstständige eröffnen eine Tätigkeit beim Finanzamt und bei der Sozialversicherung. Die übliche Gesellschaft ist die Lda.',
      paragraphs: [
        'Ein portugiesischer Arbeitsvertrag bringt Sozialversicherung und Steuerabzug mit sich. Wer für einen Arbeitgeber im Herkunftsland remote arbeitet, ist nicht automatisch „nur zu Hause steuerpflichtig“. Der Tätigkeitsort kann eine Betriebsstätte oder eine portugiesische Steuerpflicht auslösen. Klären Sie das, bevor der Laptop der einzige Plan ist.',
        'Die Lda ist die verbreitete Form mit beschränkter Haftung. Gründung und laufende Pflichten, inklusive zertifizierter Buchhaltung, sind überschaubar, aber nicht nebenher. Eine Gesellschaft ohne Substanz, deren Beschlüsse in Wien oder Zürich fallen, löst das Steuerproblem nicht. Der Ratgeber [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden) beschreibt die Fallen.',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Was verlangen portugiesische Banken für ein Konto?',
      lead: 'Eine NIF, ein Ausweis und ein Adressnachweis sind die übliche Grundlage. Mit reinem Touristenstatus wird es schwer.',
      paragraphs: [
        'Filialbanken prüfen die Steueransässigkeit und melden Konten im Informationsaustausch. Das ist erwartet. Bringen Sie die NIF zum Termin mit und rechnen Sie damit, dass eine Adresse in Portugal nachgereicht werden muss. Halten Sie das Konto im Herkunftsland, bis Gehalt oder Rente, Miete und die Behörde einen funktionierenden Weg haben. Siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Welche Punkte gehören auf die Portugal-Checkliste?',
      lead: 'NIF und Aufenthaltsregistrierung zuerst, Versicherung ohne Lücke, Steuern ohne NHR-Illusion, Konto erst danach.',
      paragraphs: ['Die übergreifende Reihenfolge steht in der [Auswandern-Checkliste](/ratgeber/auswandern-checkliste).'],
      bullets: [
        'NIF beantragen, sobald ein Termin oder ein Vertreter feststeht',
        'Wohnsitznachweis so wählen, dass die Aufenthaltsregistrierung möglich ist',
        'Mit der Krankenkasse klären, ob ein Formular für den SNS möglich ist oder eine private Police gebraucht wird',
        'Nicht auf das geschlossene NHR-Regime planen; Übergangs- und Nachfolgeregeln einzeln prüfen lassen',
        'Wegzugsbesteuerung und verbliebenen Wohnsitz im Herkunftsland vor der Abmeldung besprechen',
        'Altes Bankkonto behalten, bis das portugiesische Konto Zahlungen ausführt',
        'Führerschein und, bei Hunden oder Katzen, die Einreisebestimmungen mit Vorlauf klären',
        'Rentenbezug vor der Abreise beim Träger anstoßen, siehe [Rente im Ausland](/ratgeber/rente-im-ausland)',
      ],
    },
  ],
  faqs: [
    {
      question: 'Kann ich das NHR-Regime noch neu beantragen?',
      answer:
        'Für gewöhnliche Neuzuzüge nein. Das breite Regime ist geschlossen. Ob ein Altfall oder ein eng begrenztes Nachfolgeregime für bestimmte Tätigkeiten greift, prüft die portugiesische Steuerbehörde anhand Ihrer Unterlagen.',
    },
    {
      question: 'Brauchen Deutsche ein Visum für Portugal?',
      answer:
        'Nein, nicht für Einreise und kurzen Aufenthalt. Wer länger bleibt, registriert den Aufenthalt und braucht im Alltag eine NIF. Das ist eine Anmeldung, kein Visumverfahren wie für Drittstaatsangehörige.',
    },
    {
      question: 'Ist die Algarve automatisch günstiger als Deutschland?',
      answer:
        'Das lässt sich nicht pauschal sagen. Beliebte Küstenorte sind bei Mieten teuer geworden, das Inland oft günstiger und dafür weiter weg von Schulen und Ärzten. Rechnen Sie mit aktuellen Angeboten an Ihrem Ort, nicht mit einem Landesdurchschnitt.',
    },
  ],
  related: [links.spanien, links.zypern, links.steuern, links.krankenversicherung, links.bank, links.checkliste],
  sources: [
    ...sourcesEu,
    'Autoridade Tributária e Aduaneira zum aktuellen Stand von NHR-Nachfolge und Steueransässigkeit',
  ],
});

export const zypern: Guide = guide({
  kind: 'country',
  slug: 'zypern',
  title: 'Auswandern nach Zypern',
  label: 'Zypern',
  eyebrow: 'Europäische Union',
  description:
    'Aufenthalt in der Republik Zypern, Non-Dom nur als Sonderfall, GeSY, Steuern und Konto für Zugezogene aus Deutschland, Österreich und der Schweiz.',
  summary:
    'Dieser Ratgeber meint die Republik Zypern, den EU-Teil der Insel. Deutsche und österreichische Staatsangehörige melden einen längeren Aufenthalt an. Die oft beworbene Non-Dom-Stellung ist an Wohnsitz und Frist gebunden und keine pauschale Steuerfreiheit. Die gesetzliche Gesundheitsversorgung GeSY hat eigene Beitrittsregeln. Der Norden der Insel ist ein anderer rechtlicher Vorgang und hier nicht beschrieben.',
  sections: [
    {
      id: 'visum',
      heading: 'Wie registriere ich den Aufenthalt in der Republik Zypern?',
      lead: 'EU-Bürgerinnen und EU-Bürger holen für einen längeren Aufenthalt eine Registrierungsbescheinigung, im Alltag oft gelber Zettel genannt. Schweizer Staatsangehörige klären den Weg über das Freizügigkeitsabkommen.',
      paragraphs: [
        'Die Bescheinigung stellt die Einwanderungsbehörde aus. Üblich sind Ausweis, Wohnsitznachweis und ein Beleg, dass Sie arbeiten, selbstständig sind oder den Lebensunterhalt decken können. Die genaue Liste ändert sich. Einreise und drei Monate Aufenthalt sind nicht dasselbe wie ein gemeldeter Wohnsitz. Ohne Registrierung werden Versicherung, Konto und Verträge schwer.',
        'Planen Sie den Umzug in den nicht von der Republik kontrollierten Norden nicht nach diesem Text. Dort gelten andere Stellen, und der EU-Status hilft Ihnen nicht auf dieselbe Weise. Familienangehörige ohne EU-Pass brauchen einen eigenen Antrag. Die Botschaft der Republik und die Civil Registry and Migration Department sind die Quellen, nicht ein Vermittler mit Pauschalpaket.',
      ],
    },
    {
      id: 'steuern',
      heading: 'Macht mich das Non-Dom-Regime in Zypern steuerfrei?',
      lead: 'Nein. Non-Dom beschreibt eine zeitlich begrenzte Einordnung bestimmter ausländischer Einkünfte für Menschen, die in Zypern steuerlich ansässig, aber nicht domiziliert sind. Parallel kann das Herkunftsland weiter besteuern.',
      paragraphs: [
        'Zypern kennt eine 183-Tage-Regel und eine kürzere Anknüpfung mit zusätzlichen Bedingungen, darunter die Vorgabe, anderswo nicht steuerlich ansässig zu sein. Wer die Bedingungen nicht alle erfüllt, wird nicht ansässig, nur weil er eine Wohnung gemietet hat. Die Non-Dom-Stellung ist an weitere Fristen gebunden und betrifft nicht jede Einkunft. Sätze und Ausnahmen wurden schon geändert. Lassen Sie den aktuellen Text und Ihren Fall prüfen.',
        'Deutschland, Österreich und die Schweiz können Sie weiter besteuern, wenn dort ein Wohnsitz bleibt oder die Wegzugsregeln greifen. Ein Doppelbesteuerungsabkommen teilt Rechte auf, es löscht keine Erklärungspflicht. Wer eine zyprische Gesellschaft von Köln aus leitet, hat das Problem nur verlagert. Lesen Sie [Steuern beim Auswandern](/ratgeber/steuern-beim-auswandern) und [Firma im Ausland gründen](/ratgeber/firma-im-ausland-gruenden).',
      ],
    },
    {
      id: 'krankenversicherung',
      heading: 'Bin ich über GeSY versichert?',
      lead: 'GeSY ist das allgemeine Gesundheitssystem der Republik. Beitragszahler und bestimmte Einwohner sind einbezogen. Bis die Mitgliedschaft steht, brauchen Sie eine andere Police.',
      paragraphs: [
        'Beschäftigung und Selbstständigkeit führen in der Regel zu Beiträgen. Nicht jede neu eingereiste Person ist am ersten Tag leistungsberechtigt. Die europäische Krankenversicherungskarte trägt den Übergang nicht, wenn Sie den Wohnsitz verlegen. Klären Sie mit Ihrer Kasse in Deutschland, Österreich oder der Schweiz, wann der Schutz endet. Siehe [Krankenversicherung im Ausland](/ratgeber/krankenversicherung-ausland).',
        'Private Policen werden von manchen Aufenthaltsnachweisen und von Arbeitgebern verlangt. Achten Sie darauf, ob die Police GeSY ergänzt oder nur die Lücke bis zur Mitgliedschaft schließt. Behandlungen außerhalb der Republik, auch im Norden oder im Ausland, sind nicht automatisch mit abgedeckt.',
      ],
    },
    {
      id: 'kosten',
      heading: 'Wie hoch sind die Lebenshaltungskosten?',
      lead: 'Limassol und Teile von Nikosia liegen deutlich über den kleineren Städten. Wohnen und ein Auto prägen das Budget, weil öffentliche Verbindungen nicht überall tragen.',
      paragraphs: [
        'Limassol ist durch internationale Firmen und einen engen Wohnungsmarkt teurer geworden. Larnaka, Paphos und das Umland sind oft günstiger und dafür abhängiger vom Auto. Strom im Sommer durch Klimaanlagen und importierte Lebensmittel schlagen stärker zu Buche als in einem Land mit großer eigener Produktion.',
        'Internationale Schulen sind in Limassol und Nikosia vorhanden und eine relevante Ausgabe, wenn das Kind nicht auf Griechisch unterrichtet werden soll. Öffentliche Schulen unterrichten auf Griechisch. Englisch trägt im Berufsalltag vieler Firmen, bei Behörden und Verträgen nicht durchgängig. Dieser Text nennt keine Mieten, weil sie sich schneller ändern als ein Ratgeber.',
      ],
    },
    {
      id: 'arbeiten',
      heading: 'Kann ich auf Zypern arbeiten oder eine Limited gründen?',
      lead: 'EU-Bürgerinnen und EU-Bürger dürfen nach der Registrierung arbeiten. Eine Limited ist einfach zu gründen und streng zu führen, sobald Substanz und Buchhaltung ernst genommen werden.',
      paragraphs: [
        'Ein lokaler Arbeitsvertrag oder eine selbstständige Tätigkeit setzt die Sozialversicherung in Gang. Remote-Arbeit für ein Unternehmen im Herkunftsland kann dort eine Betriebsstätte oder eine fortbestehende Lohnsteuerpflicht bedeuten. Klären Sie das mit beiden Arbeitgebern und beiden Steuerberatern, bevor Sie nur den Schreibtisch umstellen.',
        'Die zyprische Limited ist eine verbreitete Rechtsform. Gründung über das Register ist der leichte Teil. Schwerer sind tatsächliche Geschäftsleitung, Buchhaltung, wirtschaftliche Substanz und die Frage, ob das Herkunftsland die Gesellschaft trotzdem erfasst. Strohmann-Direktoren sind kein Modell, das dieser Ratgeber empfiehlt. EU-Regeln zur Hinzurechnungsbesteuerung und zur Gestaltungsmissbrauchsbekämpfung gelten auch hier.',
      ],
    },
    {
      id: 'bankkonto',
      heading: 'Wie schwer ist ein Bankkonto auf Zypern?',
      lead: 'Banken prüfen Herkunft der Mittel und Steueransässigkeit genau. Eine Registrierung und eine Adresse helfen, ein Touristenstempel reicht nicht.',
      paragraphs: [
        'Seit Jahren ist die Kontoeröffnung für Zugezogene aufwendiger als der Werbetext von Gründungsagenturen verspricht. Rechnen Sie mit Nachweisen zu Einkommen, Wohnsitz und manchmal einer bestehenden Beziehung. Das Konto wird gemeldet. Legen Sie es nicht auf einen Nominee. Halten Sie das Konto im Herkunftsland, bis Zahlungen zuverlässig laufen. Siehe [Bankkonto im Ausland](/ratgeber/bankkonto-im-ausland).',
      ],
    },
    {
      id: 'checkliste',
      heading: 'Was gehört in die Zypern-Checkliste?',
      lead: 'Republik und Norden nicht verwechseln, Registrierung vor Non-Dom-Versprechen, Versicherung und Konto mit Unterlagen statt mit Hoffnung.',
      paragraphs: ['Starten Sie mit der [Auswandern-Checkliste](/ratgeber/auswandern-checkliste) und ergänzen Sie die Punkte unten.'],
      bullets: [
        'Klarstellen, dass der Wohnsitz in der Republik Zypern liegen soll',
        'Unterlagen für die Aufenthaltsregistrierung nach aktueller Liste zusammenstellen',
        'Steueransässigkeit in beiden Ländern modellieren, Non-Dom nur als geprüften Sonderfall',
        'GeSY-Beitritt oder private Übergangsversicherung festlegen, alte Kasse nicht voreilig kündigen',
        'Kontoeröffnung mit Herkunftsnachweisen einplanen, altes Konto behalten',
        'Bei einer Limited Substanz, Buchhaltung und Geschäftsleitung ehrlich zuordnen',
        'Auto, Führerschein und Schulweg vor der Wohnungssuche außerhalb der Städte bedenken',
        'Abmeldung im Herkunftsland erst, wenn Post, Bank und Versicherung einen neuen Weg haben, siehe [Abmeldung in Deutschland](/ratgeber/abmeldung-deutschland)',
      ],
    },
  ],
  faqs: [
    {
      question: 'Gilt dieser Ratgeber auch für den Norden Zyperns?',
      answer:
        'Nein. Beschrieben ist die Republik Zypern als Mitgliedstaat der EU. Ein Aufenthalt im Norden folgt anderen Stellen und ist hier nicht dargestellt.',
    },
    {
      question: 'Werde ich mit einer zyprischen Limited im Herkunftsland steuerfrei?',
      answer:
        'Nein, nicht automatisch. Wenn Sie dort wohnhaft bleiben oder die Gesellschaft von dort leiten, besteuert das Herkunftsland oft mit. Zusätzlich können Hinzurechnungsregeln passive Einkünfte erfassen. Lassen Sie das vor der Gründung prüfen.',
    },
    {
      question: 'Ist Non-Dom ein fester Steuersatz für alle Zugezogenen?',
      answer:
        'Nein. Es ist eine bedingte Einordnung für Menschen, die in Zypern steuerlich ansässig, aber nicht domiziliert sind, und sie ist zeitlich begrenzt. Nicht jede Einkunft fällt darunter, und das Herkunftsland kann parallel zuständig bleiben.',
    },
  ],
  related: [links.spanien, links.portugal, links.dubai, links.steuern, links.firma, links.krankenversicherung],
  sources: sourcesEu,
});
