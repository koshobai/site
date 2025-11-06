import "./Home.css"
// import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="services-container">
        <header className="services-header">
          <h1 className="services-h1">
            Bring Your Game Studio to Japan. <br />
            We'll Build Your Foundation.
          </h1>
          <br />
          <p className="lead-text">
            We are a Nagoya-based team of licensed consultants who specialize in
            helping game studios and creative tech companies from overseas
            establish their presence in Japan.{" "}
          </p>
          <br />
          <a href="/about" className="cta-button">
            learn more about us
          </a>
          <br />
          <br />
          <p className="lead-text">
            From finding the perfect studio for your development team, to
            navigating the visa process, we provide a seamless, end-to-end
            relocation service.
          </p>
        </header>

        {/* Core Services Section */}
        <section className="services-section">
          <h2 className="services-h2">Our Services</h2>
          <div className="services-grid-container">
            <div className="service-card">
              <h3 className="services-h3">Strategic Real Estate Placement</h3>
              <p>
                Whether you're looking for a modern office space, a studio, or a
                home for your leadership team, we leverage our deep market
                knowledge to find properties that fit your vision and budget.
                <br />
                <br />
              </p>
            </div>
            <div className="service-card">
              <h3 className="services-h3">Business & Visa Consultation</h3>
              <p>
                We consult for the Business Manager Visa, working in cooperation
                with the Japanese government and our immigration partners to
                ensure your application is comprehensive and positioned for
                success.
              </p>
            </div>
            <div className="service-card">
              <h3 className="services-h3">Turnkey Relocation Support</h3>
              <p>
                Our network handles everything from company registration and
                accounting setup to language support and building inspections.
              </p>
            </div>
            <div className="service-card">
              <h3 className="services-h3">Turnkey Relocation Support</h3>
              <p>
                <em>WE DO THINGS!</em>
              </p>
            </div>
          </div>
        </section>

        {/* Partner Network Section */}
        <section className="services-section">
          <h2 className="services-h2">Our Expert Partner Network</h2>
          <p className="lead-text">
            <strong>
              Your success is supported by our curated network of local
              professionals. <br />
            </strong>
            <br /> We have successfully placed dozens of overseas clients in
            offices and homes across the country, and have built strong
            relationships with other licensed experts to handle every detail of
            their relocation.
          </p>
          <ul className="partner-list">
            <li className="partner-tag">Judicial Scriveners</li>
            <li className="partner-tag">Administrative Scriveners</li>
            <li className="partner-tag">Immigration Lawyers</li>
            <li className="partner-tag">Accountants & Tax Advisors</li>
            <li className="partner-tag">Building Inspectors</li>
            <li className="partner-tag">Professional Translators</li>
            <li className="partner-tag">Japanese Language Instructors</li>
          </ul>
        </section>

        {/* Our Case Studies  */}
        <section className="services-section">
          <h2 className="services-h2">
            Proven Success.
            <br /> New Horizons.
          </h2>
          <p className="lead-text">
            While we are now focusing on empowering the vibrant video game
            industry, our foundation is built on dozens of successful
            relocations for non-Japanese individuals and businesses. <br />
            <br />
            Our case studies demonstrate our ability to manage complex moves
            with precision and care.
            <br />
          </p>
        </section>

        <section>
          <h2 className="services-h2">Ready to Start Your Journey?</h2>
          <p className="lead-text">
            Let's discuss your vision for expanding into the heart of the gaming
            world.
            <br /> Request a prospective call with us today!
          </p>
        </section>
        <br />
        <br />
        <br />
        <br />
        {/* <br />
        <br /> */}
      </div>
      <a href="/about#about-top" className="brand">
        <h6 className="copyright">©︎ 2025 Nutabi </h6>
      </a>
    </div>
  )
}
