function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappMessage = `
Name: ${name}
Phone: ${phone}
Message: ${message}
    `;

    const url = `https://wa.me/7904579099?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Enquire Now
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
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

        <button style={buttonStyle} type="submit">
          Send via WhatsApp
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#25D366",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
};

export default ContactForm;
