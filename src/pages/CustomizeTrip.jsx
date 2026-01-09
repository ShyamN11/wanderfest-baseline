import { useState } from "react";

function CustomizeTrip() {
  const [form, setForm] = useState({
    name: "",
    pickup: "",
    drop: "",
    days: "",
    places: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = `
Hello Wanderfest Tourline!

Name: ${form.name}
Pickup Location: ${form.pickup}
Drop Location: ${form.drop}
Number of Days: ${form.days}
Places to Visit: ${form.places}

I want to customize my trip.
    `;

    const url = `https://wa.me/917904579099?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "60px 20px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Customize Your Trip
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Tell us your travel plan and we’ll arrange everything for you
      </p>

      {/* FORM */}
      <div style={{ display: "grid", gap: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={form.pickup}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="drop"
          placeholder="Drop Location"
          value={form.drop}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="days"
          placeholder="Number of Days (eg: 3 Days / 2 Nights)"
          value={form.days}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="places"
          placeholder="Places you want to visit (Ooty, Wayanad, Mysore, etc.)"
          value={form.places}
          onChange={handleChange}
          rows="4"
          style={{ ...inputStyle, resize: "none" }}
        />

        {/* WHATSAPP BUTTON */}
        <button
          onClick={handleWhatsApp}
          style={{
            background: "#22c55e",
            color: "white",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Send on WhatsApp
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

export default CustomizeTrip;
