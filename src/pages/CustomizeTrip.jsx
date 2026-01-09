function CustomizeTrip() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const pickup = e.target.pickup.value;
    const drop = e.target.drop.value;
    const state = e.target.state.value;
    const days = e.target.days.value;
    const type = e.target.type.value;
    const message = e.target.message.value;

    const whatsappText = `
Customize Trip Enquiry:
Pickup: ${pickup}
Drop: ${drop}
State: ${state}
Trip Type: ${type}
Days: ${days}
Message: ${message}
    `;

    const url = `https://wa.me/917904579099?text=${encodeURIComponent(
      whatsappText
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "40px" }}>
      <h1 style={{ marginBottom: "10px" }}>Customize Your Trip</h1>
      <p style={{ marginBottom: "30px" }}>
        Plan your trip your way. Fill the details and get instant assistance.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="drop"
          placeholder="Drop Location"
          required
          style={inputStyle}
        />

        <select name="state" required style={inputStyle}>
          <option value="">Select State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Other">Other</option>
        </select>

        <select name="type" required style={inputStyle}>
          <option value="">Trip Type</option>
          <option value="Outstation">Outstation</option>
          <option value="Local">Local</option>
          <option value="Multi-State">Multi-State</option>
        </select>

        <input
          type="number"
          name="days"
          placeholder="Number of Days"
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Additional requirements (optional)"
          rows="4"
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#22c55e",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};

export default CustomizeTrip;
