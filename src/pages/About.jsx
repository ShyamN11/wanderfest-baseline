function About() {
  return (
    <section style={aboutSection}>
      <h1 style={title}>About Wanderfest Tourline</h1>

      <p style={text}>
        Welcome to <strong>Wanderfest Tourline</strong> — your trusted partner for unforgettable hill station tours.
        We bring the magic of Ooty, Coonoor, Pykara, Mysore and more, all crafted with care and local expertise.
      </p>

      <p style={text}>
        Our mission is to help you experience the best of the Nilgiri Hills. From personalized tour packages
        to comfortable accommodations and reliable transport services, we ensure every journey is seamless
        and memorable. Explore hidden gems, scenic landscapes, and authentic local experiences with us.
      </p>

      <p style={text}>
        Whether you are planning a family vacation, a romantic getaway, or a group adventure, our team
        crafts thoughtful itineraries tailored to your desires. With years of experience serving travelers,
        we’re dedicated to your comfort, safety, and delight.
      </p>

      <div style={listSection}>
        <h2 style={subTitle}>What We Offer</h2>
        <ul style={list}>
          <li>Personalized Tour Packages</li>
          <li>Expert Local Guidance</li>
          <li>Comfortable & Quality Accommodations</li>
          <li>Reliable Cab & Pickup Services</li>
          <li>Flexible, Customizable Itineraries</li>
        </ul>
      </div>

      <p style={conclusion}>
        Let Wanderfest Tourline plan your next memorable escape — where adventure meets comfort!
      </p>
    </section>
  );
}

/* ---------- STYLES ---------- */

const aboutSection = {
  padding: "40px 20px",
  maxWidth: "900px",
  margin: "auto",
};

const title = {
  fontSize: "32px",
  textAlign: "center",
  marginBottom: "20px",
};

const text = {
  fontSize: "18px",
  lineHeight: "1.6",
  marginBottom: "18px",
};

const listSection = {
  marginTop: "30px",
};

const subTitle = {
  fontSize: "24px",
  marginBottom: "12px",
};

const list = {
  listStyle: "disc",
  paddingLeft: "20px",
  fontSize: "18px",
  lineHeight: "1.5",
};

const conclusion = {
  marginTop: "30px",
  fontSize: "20px",
  fontWeight: "600",
};

export default About;
