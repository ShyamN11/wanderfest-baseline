function CustomizeTrip() {
  return (
    <div style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Customize Your Trip</h1>

      <p style={{ marginBottom: "30px", color: "#555" }}>
        Tell us your pickup location, destination, days and preferences.
        We will plan the best trip for you.
      </p>

      <form style={{ display: "grid", gap: "15px" }}>
        <input placeholder="Your Name" required />
        <input placeholder="Phone Number" required />
        <input placeholder="Pickup Location" required />
        <input placeholder="Drop Location / Destination" required />
        <input placeholder="Number of Days" />
        <textarea placeholder="Your travel requirements" rows="4" />

        <button
          style={{
            background: "#16a34a",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default CustomizeTrip;
