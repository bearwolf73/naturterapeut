interface Behandling {
  ikon: string;
  tittel: string;
  ingress: string;
  detaljer: string[];
  varighet: string;
}

const behandlinger: Behandling[] = [
  {
    ikon: "🌿",
    tittel: "Urtemedisin",
    ingress:
      "Urtemedisin er en av verdens eldste helbredelsesformer. Jeg bruker planter og naturlige ekstrakter tilpasset dine individuelle behov.",
    detaljer: [
      "Skreddersydde urteblandinger",
      "Støtte ved fordøyelsesproblemer",
      "Styrking av immunforsvaret",
      "Hormonell balanse",
    ],
    varighet: "60 min",
  },
  {
    ikon: "🥗",
    tittel: "Kosthold og ernæring",
    ingress:
      "Mat er medisin. Gjennom grundig kartlegging lager vi en ernæringsplan som gir kroppen din det den trenger for å fungere optimalt.",
    detaljer: [
      "Helsesamtale og kostholdsanalyse",
      "Personlig ernæringsplan",
      "Veiledning ved matintoleranser",
      "Oppfølging og justering",
    ],
    varighet: "45 min",
  },
  {
    ikon: "💆",
    tittel: "Massasje og kroppsbehandling",
    ingress:
      "Terapeutisk massasje frigjør spenninger, øker blodsirkulasjonen og fremmer dyp avslapning for kropp og sinn.",
    detaljer: [
      "Klassisk terapeutisk massasje",
      "Triggerpunktbehandling",
      "Lymfedrenasje",
      "Bindevevsmassasje",
    ],
    varighet: "60 min",
  },
  {
    ikon: "🧘",
    tittel: "Stressmestring",
    ingress:
      "Langvarig stress tærer på helsen. Jeg hjelper deg med konkrete verktøy og teknikker for å gjenfinne ro og energi i hverdagen.",
    detaljer: [
      "Kartlegging av stresskilder",
      "Pustøvelser og meditasjon",
      "Livsstilsrådgivning",
      "Plan for bedre søvn",
    ],
    varighet: "60 min",
  },
  {
    ikon: "⚡",
    tittel: "Energibehandling",
    ingress:
      "Energibehandling arbeider med kroppens egne energistrømmer for å gjenopprette balanse og støtte selvhelbredelse.",
    detaljer: [
      "Reiki og energibalansering",
      "Chakraarbeid",
      "Avslapning og stressreduksjon",
      "Støtte ved utmattelse",
    ],
    varighet: "60 min",
  },
  {
    ikon: "🌙",
    tittel: "Livsstilsveiledning",
    ingress:
      "Varig helse handler om mer enn behandling. Jeg hjelper deg å bygge gode vaner — slik at du kan leve godt i det lange løp.",
    detaljer: [
      "Analyse av nåværende livsstil",
      "Søvn og restitusjon",
      "Bevegelse og aktivitet",
      "Mentalt velvære",
    ],
    varighet: "45 min",
  },
];

function Behandlinger() {
  return (
    <section className="behandlinger-side" id="behandlinger">
      <div className="behandlinger-hero">
        <h2>Behandlinger</h2>
        <p>Helhetlige og naturlige metoder tilpasset deg og dine behov.</p>
      </div>

      <div className="behandlinger-grid">
        {behandlinger.map((b) => (
          <div key={b.tittel} className="behandling-kort">
            <span className="behandling-ikon">{b.ikon}</span>
            <h3>{b.tittel}</h3>
            <p className="behandling-ingress">{b.ingress}</p>
            <ul>
              {b.detaljer.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="behandling-footer">
              <span className="behandling-varighet">⏱ {b.varighet}</span>
              <a href="mailto:jivroe@online.no" className="bestill-btn">
                Book time
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="behandlinger-bunntekst">
        <p>
          Usikker på hvilken behandling som passer for deg?{" "}
          <a href="mailto:jivroe@online.no">Ta kontakt</a> — så finner vi ut av
          det sammen.
        </p>
      </div>
    </section>
  );
}

export default Behandlinger;
