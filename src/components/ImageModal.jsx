function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtn} onClick={onClose}>✕</button>

        <img
          src={image}
          alt="Vehicle"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  position: "relative",
  background: "#000",
  padding: "10px",
  borderRadius: "10px",
  maxWidth: "90%",
  maxHeight: "90%",
  overflow: "auto",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "white",
  border: "none",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  cursor: "pointer",
  fontSize: "18px",
};

export default ImageModal;
