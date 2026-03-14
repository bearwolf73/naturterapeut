function Kontaktinfo() {
  return (
    <section className="kontakt-side" id="kontaktinfo">
      <div className="kontakt-hero">
        <h2>Kontaktinfo</h2>
        <p>Ta gjerne kontakt — jeg svarer så raskt jeg kan.</p>
      </div>

      <div className="kontakt-grid">
        <div className="kontakt-info">
          <h3>Jan Ivar Røed</h3>
          <p className="kontakt-tittel">Autorisert naturterapeut</p>

          <ul className="kontakt-liste">
            <li>
              <span className="kontakt-ikon">📞</span>
              <div>
                <strong>Telefon</strong>
                <a href="tel:+4791234567">+47 912 34 567</a>
              </div>
            </li>
            <li>
              <span className="kontakt-ikon">📧</span>
              <div>
                <strong>E-post</strong>
                <a href="mailto:jivroe@online.no">jivroe@online.no</a>
              </div>
            </li>
            <li>
              <span className="kontakt-ikon">📍</span>
              <div>
                <strong>Adresse</strong>
                <span>Naturveien 12, 0123 Oslo</span>
              </div>
            </li>
            <li>
              <span className="kontakt-ikon">🕐</span>
              <div>
                <strong>Åpningstider</strong>
                <span>Man–fre: 09:00–17:00</span>
                <span>Lørdag: 10:00–14:00</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="kontakt-skjema-wrapper">
          <h3>Send en melding</h3>
          <form
            className="kontakt-skjema"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Takk for din melding! Jeg tar kontakt snart.");
            }}
          >
            <div className="felt-gruppe">
              <label htmlFor="navn">Navn</label>
              <input id="navn" type="text" placeholder="Ditt fulle navn" required />
            </div>
            <div className="felt-gruppe">
              <label htmlFor="epost">E-post</label>
              <input id="epost" type="email" placeholder="din@epost.no" required />
            </div>
            <div className="felt-gruppe">
              <label htmlFor="telefon">Telefon (valgfritt)</label>
              <input id="telefon" type="tel" placeholder="+47 000 00 000" />
            </div>
            <div className="felt-gruppe">
              <label htmlFor="melding">Melding</label>
              <textarea id="melding" rows={5} placeholder="Hva kan jeg hjelpe deg med?" required />
            </div>
            <button type="submit" className="send-btn">Send melding</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Kontaktinfo;
