import { useState } from "react";

function CustomizeTrip() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsApp = () => {
    const message = `
Wanderfest Tourline - Custom Trip Request

Pickup Location: ${pickup}
Drop Location: ${drop}
State: ${state}
Trip Type: ${type}
Additional Notes: ${notes}
`;

    const phone = "7904579099";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={container}>
      <h1>Customize Your Trip</h1>
      <p>Create your own travel plan with us</p>

      <input
        style={input}
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />

      <input
        style={input}
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />

      <select style={input} value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Select State</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Kerala">Kerala</option>
        <option value="Karnataka">Karnataka</option>
      </select>

      <select style={input} value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Trip Type</option>
        <option value="Local">Local</option>
        <option value="Outstation">Outstation</option>
        <option value="Multi-State">Multi-State</option>
      </select>

      <textarea
        style={{ ...input, height: "100px" }}
        placeholder="Additional requirements (hotel, sightseeing, etc.)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button style={button} onClick={handleWhatsApp}>
        Send on WhatsApp
      </button>
    </div>
  );
}

const container = {
  maxWidth: "500px",
  margin: "80px auto",
  padding: "30px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const button = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#22c55e",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default CustomizeTrip;
