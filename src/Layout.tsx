import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="page">
      <header className="header">
        <span className="logo">🌿</span>
        <div>
          <h1 className="brand">Jan Ivar Røed</h1>
          <p className="tagline">Naturterapeut</p>
        </div>
        <a href="mailto:jivroe@online.no" className="contact-btn">
          Ta kontakt
        </a>
      </header>

      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Hjem</NavLink>
        <NavLink to="/priser" className={({ isActive }) => isActive ? "active" : ""}>Priser</NavLink>
        <NavLink to="/kontaktinfo" className={({ isActive }) => isActive ? "active" : ""}>Kontaktinfo</NavLink>
      </nav>

      <Outlet />

      <footer className="footer">
        <span>📞 <a href="tel:+4791234567">+47 912 34 567</a></span>
        <span>📧 <a href="mailto:jivroe@online.no">jivroe@online.no</a></span>
        <span>© 2024 Jan Ivar Røed — Naturterapeut</span>
      </footer>
    </div>
  );
}

export default Layout;
