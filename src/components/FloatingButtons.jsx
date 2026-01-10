function FloatingButtons() {
  return (
    <>
      {/* WHATSAPP */}
      <a
        href="https://wa.me/917904579099"
        target="_blank"
        rel="noreferrer"
        style={whatsapp}
      >
        💬
      </a>

      {/* CALL */}
      <a href="tel:8807509155" style={call}>
        📞
      </a>
    </>
  );
}

const whatsapp = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  background: "#16a34a",
  color: "#fff",
  fontSize: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  zIndex: 1000,
};

const call = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  background: "#2563eb",
  color: "#fff",
  fontSize: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  zIndex: 1000,
};

export default FloatingButtons;
