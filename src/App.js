import { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const script = document.querySelector('script[src="https://payhip.com/payhip.js"]');
    if (!script) {
      const s = document.createElement("script");
      s.src = "https://payhip.com/payhip.js";
      s.type = "text/javascript";
      document.head.prepend(s);
    }
  }, []);

  return (
    <div className="root">
      {/* ── HEADER ── */}
      <header className="header">
        <div className="header-inner">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fortnite_logo.svg/1024px-Fortnite_logo.svg.png"
            alt="Fortnite"
          />
          <nav className="nav">
            <span className="nav-item">Shop</span>
            <span className="nav-item">Battle Pass</span>
            <span className="nav-item">News</span>
          </nav>
          <a
            href="https://payhip.com/b/UqdAF"
            className="payhip-buy-button header-buy"
            data-theme="green"
            data-product="UqdAF"
          >
            Acheter
          </a>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="main">
        {/* HERO */}
        <div className="hero">
          <img
            className="hero-bg"
            src="https://cdn2.unrealengine.com/og-fortnite-1200x630-1200x630-360852668.jpg"
            alt="hero"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">OFFRE EXCLUSIVE</p>
            <h1 className="hero-title">VICTORY<br />VAULT</h1>
            <p className="hero-sub">Comptes Fortnite premium · Livraison instantanée</p>
          </div>
        </div>

        {/* PRODUCT CARD */}
        <section className="section">
          <div className="card">
            {/* LEFT */}
            <div className="card-left">
              <div className="badge-row">
                <span className="badge badge-legendary">★ LÉGENDAIRE</span>
                <span className="badge badge-hot">🔥 BEST-SELLER</span>
              </div>

              <h2 className="card-title">COMPTE<br />FORTNITE</h2>

              <ul className="features">
                {[
                  { icon: "🎮", text: "Compte vérifié & sécurisé" },
                  { icon: "📧", text: "Livraison immédiate par email" },
                  { icon: "💎", text: "Skins & cosmétiques inclus" },
                  { icon: "🛡️", text: "Garantie satisfaction" },
                  { icon: "⚡", text: "Support disponible 24/7" },
                ].map((f) => (
                  <li key={f.text} className="feature-item">
                    <span className="feature-icon">{f.icon}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="price-row">
                <span className="price-label">Prix</span>
                <span className="price">19,99 €</span>
              </div>

              <a
                href="https://payhip.com/b/UqdAF"
                className="payhip-buy-button buy-btn"
                data-theme="green"
                data-product="UqdAF"
              >
                🛒&nbsp;&nbsp;ACHETER MAINTENANT
              </a>

              <p className="secure-note">🔒 Paiement 100% sécurisé via Payhip</p>
            </div>

            {/* RIGHT */}
            <div className="card-right">
              <div className="img-frame">
                <div className="img-glow" />
                <img
                  className="product-img"
                  src="https://raw.githubusercontent.com/ensofpppq-bit/victoryvault/main/ChatGPT%20Image%2031%20mai%202026%2C%2021_31_38.png"
                  alt="Compte Fortnite"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="trust-row">
          {[
            { icon: "⚡", label: "Livraison instantanée" },
            { icon: "🔐", label: "100% sécurisé" },
            { icon: "✅", label: "Compte garanti" },
            { icon: "🌍", label: "Disponible partout" },
          ].map((t) => (
            <div key={t.label} className="trust-item">
              <span className="trust-icon">{t.icon}</span>
              <span className="trust-label">{t.label}</span>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Victory Vault · Non affilié à Epic Games Inc.</p>
      </footer>
    </div>
  );
}
