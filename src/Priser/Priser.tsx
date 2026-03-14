interface PrisKort {
  tittel: string;
  varighet: string;
  pris: number;
  beskrivelse: string[];
  fremhevet?: boolean;
}

const priser: PrisKort[] = [
  {
    tittel: "Konsultasjon",
    varighet: "45 min",
    pris: 650,
    beskrivelse: [
      "Helsesamtale og kartlegging",
      "Kostrådgivning",
      "Enkle livsstilsråd",
    ],
  },
  {
    tittel: "Behandling",
    varighet: "60 min",
    pris: 950,
    beskrivelse: [
      "Full helseanalyse",
      "Urtemedisin og remedier",
      "Massasje eller kroppsbehandling",
      "Personlig behandlingsplan",
    ],
    fremhevet: true,
  },
  {
    tittel: "Oppfølging",
    varighet: "30 min",
    pris: 450,
    beskrivelse: [
      "Evaluering av behandling",
      "Justering av plan",
      "Spørsmål og veiledning",
    ],
  },
];

const pakker = [
  { navn: "Startpakke", innhold: "1 konsultasjon + 2 behandlinger", pris: 2200, spar: 350 },
  { navn: "Vedlikeholdspakke", innhold: "3 behandlinger + 3 oppfølginger", spar: 600, pris: 4200 },
];

function Priser() {
  return (
    <section className="priser-side" id="priser">
      <div className="priser-hero">
        <h2>Priser</h2>
        <p>Investér i din helse — alle priser er inkl. mva.</p>
      </div>

      <div className="pris-kort-grid">
        {priser.map((p) => (
          <div key={p.tittel} className={`pris-kort ${p.fremhevet ? "fremhevet" : ""}`}>
            {p.fremhevet && <span className="badge">Mest populær</span>}
            <h3>{p.tittel}</h3>
            <p className="varighet">{p.varighet}</p>
            <p className="pris">
              {p.pris} <span>kr</span>
            </p>
            <ul>
              {p.beskrivelse.map((punkt) => (
                <li key={punkt}>{punkt}</li>
              ))}
            </ul>
            <a href="mailto:jivroe@online.no" className="bestill-btn">
              Book time
            </a>
          </div>
        ))}
      </div>

      <div className="pakker-seksjon">
        <h3>Pakketilbud</h3>
        <div className="pakker-grid">
          {pakker.map((pakke) => (
            <div key={pakke.navn} className="pakke-kort">
              <div className="pakke-info">
                <h4>{pakke.navn}</h4>
                <p>{pakke.innhold}</p>
              </div>
              <div className="pakke-pris">
                <span className="spar-tag">Spar {pakke.spar} kr</span>
                <span className="pakke-sum">{pakke.pris} kr</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="avbestilling">
        Avbestilling må skje senest 24 timer før avtalt time. Ved senere avbestilling
        faktureres 50% av behandlingsprisen.
      </p>
    </section>
  );
}

export default Priser;
