import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Contact Us</h1>
      <p>Call or WhatsApp us for bookings</p>

      <div style={{ marginBottom: "20px" }}>
        <a href="tel:8807509155" style={callBtn}>
          📞 Call
        </a>

        <a
          href="https://wa.me/917904579099"
          target="_blank"
          rel="noreferrer"
          style={whatsappBtn}
        >
          💬 WhatsApp
        </a>
      </div>

      {/* CONTACT FORM HERE 👇 */}
      <ContactForm />
    </div>
  );
}

const callBtn = {
  marginRight: "15px",
  padding: "10px 18px",
  background: "#2563eb",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
};

const whatsappBtn = {
  padding: "10px 18px",
  background: "#22c55e",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
};

export default Contact;
