function ContactForm() {
  return (
    <div style={{ maxWidth: "500px", marginTop: "30px" }}>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          style={inputStyle}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          style={inputStyle}
        ></textarea>

        <button type="submit" style={buttonStyle}>
          Send Enquiry
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
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

export default ContactForm;
