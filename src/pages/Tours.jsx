import { Link } from "react-router-dom";

function Tours() {
  return (
    <div style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Tour Packages
      </h1>

      <div style={{ display: "grid", gap: "30px" }}>
        <div>
          <h2>Ooty • Coonoor • Pykara (3D / 2N)</h2>
          <p>₹12,999</p>
          <Link to="/tour/ooty-3d2n">View Itinerary</Link>
        </div>

        <div>
          <h2>Ooty • Coonoor • Pykara • Mudumalai • Mysore (4D / 3N)</h2>
          <p>₹15,999</p>
          <Link to="/tour/ooty-mudumalai-mysore">View Itinerary</Link>
        </div>

        <div>
          <h2>Ooty • Pykara • Coonoor • Isha (4D / 3N)</h2>
          <p>₹13,999</p>
          <Link to="/tour/ooty-isha">View Itinerary</Link>
        </div>
      </div>
    </div>
  );
}

export default Tours;
