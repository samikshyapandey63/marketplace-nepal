const Arrow = () => (
  <span aria-hidden="true" className="button-arrow">
    <span />
  </span>
)

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1ea] text-[#171713]">
      <section id="home" className="hero">
        <nav className="site-nav" aria-label="Main navigation">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#discover">Discover</a>
          </div>

          <a className="nav-cta" href="#discover">
            Explore labels
          </a>
        </nav>

        <div className="hero-copy">
          <p className="hero-brand" aria-label="SAMI">
            SAMI
          </p>
          <p className="eyebrow">Independent fashion, thoughtfully found</p>
          <h1>
            Fashion,
            <br />
            <em>all in one place.</em>
          </h1>
          <p className="hero-description">
            A curated marketplace for independent labels, rare pieces, and the
            people shaping what comes next.
          </p>
          <a className="primary-button" href="#about">
            About us
            <Arrow />
          </a>
        </div>

        <div className="hero-image-wrap">
          <div className="image-index" aria-hidden="true">
            <span>01</span>
            <span>SAMI / EDIT 001</span>
          </div>
          <figure className="hero-figure">
            <img
              src="/sami-editorial.jpg"
              alt="Model wearing a chic black tailored look and statement accessories"
            />
            <figcaption>
              <span>New perspective</span>
              <span>Selected by SAMI</span>
            </figcaption>
          </figure>
          <p className="vertical-note">CURATED GLOBALLY — WORN PERSONALLY</p>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to discover</span>
          <i />
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-number">01 / OUR STORY</div>
        <div className="about-copy">
          <p className="eyebrow">More than a marketplace</p>
          <h2>
            We bring independent
            <br />
            voices <em>into view.</em>
          </h2>
          <div className="about-details">
            <p>
              SAMI is a destination for discovering fashion with a point of
              view. We connect curious dressers with emerging designers and
              independent labels from around the world.
            </p>
            <p>
              Every collection is chosen for its craft, character, and ability
              to make the everyday feel entirely your own.
            </p>
          </div>
        </div>
      </section>

      <section id="discover" className="discover-strip">
        <p>Wear what moves you.</p>
        <a href="#home">
          Start exploring
          <Arrow />
        </a>
      </section>

      <footer>
        <a className="wordmark" href="#home">
          SAMI
        </a>
        <p>Fashion, all in one place.</p>
        <p>© {new Date().getFullYear()} SAMI</p>
      </footer>
    </main>
  )
}
