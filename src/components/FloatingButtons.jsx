export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917904579099"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        WhatsApp
      </a>

      {/* Call Button */}
      <a
        href="tel:7904579099"
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        Call
      </a>
    </>
  );
}
