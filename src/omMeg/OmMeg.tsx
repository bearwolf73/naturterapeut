const utdanning = [
  { aar: "2010", tittel: "Bachelor i naturmedisin", sted: "Norges Naturmedisinsk Høyskole" },
  { aar: "2012", tittel: "Sertifisering i urtemedisin", sted: "Scandinavian College of Herbal Medicine" },
  { aar: "2015", tittel: "Videreutdanning i kosthold og ernæring", sted: "Universitetet i Oslo" },
  { aar: "2018", tittel: "Sertifisering i massasjeterapi", sted: "Norsk Massasjeforbund" },
];

const verdier = [
  { ikon: "🌿", tittel: "Helhetlig tilnærming", tekst: "Jeg ser hele mennesket — kropp, sinn og sjel — ikke bare symptomene." },
  { ikon: "🤝", tittel: "Samarbeid", tekst: "Du er eksperten på ditt eget liv. Min rolle er å veilede og støtte deg." },
  { ikon: "🌱", tittel: "Naturlige metoder", tekst: "Jeg bruker naturens egne ressurser og kroppen sin evne til å helbrede seg selv." },
  { ikon: "❤️", tittel: "Omsorg og trygghet", tekst: "Hos meg skal du føle deg sett, hørt og ivaretatt." },
];

function OmMeg() {
  return (
    <section className="om-meg-side" id="om-meg">
      <div className="om-meg-hero">
        <div className="om-meg-bilde">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"
            alt="Jan Ivar Røed, naturterapeut"
          />
        </div>
        <div className="om-meg-intro">
          <h2>Om meg</h2>
          <h3>Jan Ivar Røed</h3>
          <p className="om-meg-rolle">Naturterapeut MNNH · Oslo</p>
          <p>
            Jeg har over 15 års erfaring som naturterapeut og brenner for å hjelpe
            mennesker til å finne balanse og velvære på naturlig vis. Min tilnærming
            er helhetlig — jeg tror på at kropp og sinn henger uløselig sammen, og
            at varig helse krever mer enn å behandle symptomer.
          </p>
          <p>
            Gjennom min praksis har jeg hjulpet hundrevis av klienter med alt fra
            stress og utbrenthet til fordøyelsesproblemer og kroniske smerter.
            Hvert møte er unikt, og jeg skreddersyr alltid behandlingen til den
            einzelne.
          </p>
          <a href="mailto:jivroe@online.no" className="bestill-btn">
            Book en konsultasjon
          </a>
        </div>
      </div>

      <div className="om-meg-verdier">
        <h2>Mine verdier</h2>
        <div className="verdier-grid">
          {verdier.map((v) => (
            <div key={v.tittel} className="verdi-kort">
              <span className="verdi-ikon">{v.ikon}</span>
              <h4>{v.tittel}</h4>
              <p>{v.tekst}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="om-meg-utdanning">
        <h2>Utdanning og sertifiseringer</h2>
        <div className="tidslinje">
          {utdanning.map((u) => (
            <div key={u.tittel} className="tidslinje-punkt">
              <span className="tidslinje-aar">{u.aar}</span>
              <div className="tidslinje-innhold">
                <strong>{u.tittel}</strong>
                <span>{u.sted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="om-meg-sitat">
        <blockquote>
          "Helsen er ikke bare fraværet av sykdom — det er en tilstand av fullstendig
          fysisk, psykisk og sosialt velvære."
        </blockquote>
        <cite>— WHO, tilpasset</cite>
      </div>
    </section>
  );
}

export default OmMeg;
