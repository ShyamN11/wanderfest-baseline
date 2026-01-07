export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappText = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    window.open(
      `https://wa.me/917904579099?text=${whatsappText}`,
      "_blank"
    );
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Contact Wanderfest Tourline
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          style={inputStyle}
        />

        <button type="submit" style={btnStyle}>
          Send Enquiry via WhatsApp
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#25D366",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};
