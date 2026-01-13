function About() {
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "50px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        About Wanderfest Tourline
      </h1>

      <p style={para}>
        Wanderfest Tourline is a trusted local travel service provider based in
        the Nilgiris, offering comfortable, reliable, and affordable tour
        packages across Ooty, Coonoor, Mysore, Wayanad, Coimbatore, and nearby
        destinations.
      </p>

      <p style={para}>
        We specialize in customized tour packages, family trips, honeymoon
        tours, group tours, and corporate travel with well-maintained vehicles
        and experienced drivers who know the hill routes and local attractions.
      </p>

      <h2 style={heading}>Why Choose Us?</h2>
      <ul style={list}>
        <li>✔ Local experts with deep route knowledge</li>
        <li>✔ Clean & comfortable vehicles</li>
        <li>✔ Transparent pricing – no hidden charges</li>
        <li>✔ Customizable itineraries</li>
        <li>✔ Friendly support via Call & WhatsApp</li>
      </ul>

      <h2 style={heading}>Our Services</h2>
      <ul style={list}>
        <li>🚗 Local sightseeing tours</li>
        <li>🏔 Hill station tour packages</li>
        <li>👨‍👩‍👧‍👦 Family & group trips</li>
        <li>💑 Honeymoon packages</li>
        <li>🚌 Tempo Traveller & Coach Van services</li>
        <li>📍 Pickup & drop from railway station / airport</li>
      </ul>

      <h2 style={heading}>Our Promise</h2>
      <p style={para}>
        At Wanderfest Tourline, customer satisfaction is our top priority. We
        aim to make your journey safe, memorable, and hassle-free with honest
        service and personal care.
      </p>
    </div>
  );
}

const para = {
  fontSize: "17px",
  lineHeight: "1.8",
  marginBottom: "20px",
};

const heading = {
  marginTop: "35px",
  marginBottom: "15px",
};

const list = {
  paddingLeft: "20px",
  lineHeight: "1.9",
};

export default About;
