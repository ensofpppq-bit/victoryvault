import "./App.css";

const BUY_URL = "https://payhip.com/b/UqdAF";

export default function App() {
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
          <a href={BUY_URL} target="_blank" rel="noreferrer" className="header-buy">
            Acheter
          </a>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="main">

        {/* HERO */}
        <section className="hero">
          <img
            className="hero-bg"
            src="https://cdn2.unrealengine.com/og-fortnite-1200x630-1200x630-360852668.jpg"
            alt=""
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">Victory Vault</p>
            <h1 className="hero-title">COMPTE<br/>FORTNITE</h1>
            <p className="hero-tagline">Livraison instantanée · Compte premium garanti</p>
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="hero-btn">
              <span className="hero-btn-inner">
                Acheter maintenant — 50 €
              </span>
            </a>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="product">
          <div className="product-img-wrap">
            <div className="product-halo" />
            <img
              className="product-img"
              src="https://raw.githubusercontent.com/ensofpppq-bit/victoryvault/main/ChatGPT%20Image%2031%20mai%202026%2C%2021_31_38.png"
              alt="Compte Fortnite"
            />
          </div>

          <div className="product-info">
            <div className="tags">
              <span className="tag tag-purple">★ Légendaire</span>
              <span className="tag tag-orange">🔥 Best-seller</span>
            </div>

            <h2 className="product-title">COMPTE<br/>FORTNITE</h2>

            <div className="divider" />

            <div className="price-block">
              <span className="price-currency">€</span>
              <span className="price-amount">50</span>
              <span className="price-cents">,00</span>
            </div>

            <a href={BUY_URL} target="_blank" rel="noreferrer" className="buy-btn">
              <span className="buy-btn-shine" />
              🛒&nbsp; ACHETER MAINTENANT
            </a>

            <p className="secure">🔒 Paiement sécurisé · Livraison immédiate</p>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>© 2026 Victory Vault · Non affilié à Epic Games Inc.</p>
      </footer>
    </div>
  );
}
