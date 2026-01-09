import { useEffect, useState } from "react";
import ImageModal from "../components/ImageModal";

const ADMIN_PIN = "6809"; // 🔐 change this

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);

  const [adminMode, setAdminMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  /* LOAD */
  useEffect(() => {
    const saved = localStorage.getItem("wanderfest_reviews");
    if (saved) setReviews(JSON.parse(saved));
  }, []);

  /* SAVE */
  useEffect(() => {
    localStorage.setItem("wanderfest_reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message || !rating) {
      alert("Fill all fields");
      return;
    }

    setReviews([
      {
        id: Date.now(),
        name,
        message,
        rating,
        image: image ? URL.createObjectURL(image) : null,
        date: new Date().toLocaleDateString(),
      },
      ...reviews,
    ]);

    setName("");
    setMessage("");
    setRating("");
    setImage(null);
  };

  const enableAdmin = () => {
    const pin = prompt("Enter Admin PIN:");
    if (pin === ADMIN_PIN) {
      setAdminMode(true);
      alert("Admin mode enabled");
    } else {
      alert("Wrong PIN");
    }
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div style={page}>
      <h1 style={{ textAlign: "center" }}>Happy Customers</h1>

      {/* ADMIN BUTTON */}
      {!adminMode && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button onClick={enableAdmin} style={adminBtn}>
            Admin Login
          </button>
        </div>
      )}

      {/* REVIEWS */}
      <div style={grid}>
        {reviews.map((r) => (
          <div key={r.id} style={card}>
            {r.image && (
              <img
                src={r.image}
                alt="Customer"
                style={img}
                onClick={() => setSelectedImage(r.image)}
              />
            )}

            <h3>{r.name}</h3>
            <p style={{ fontSize: "18px" }}>{r.rating}</p>
            <small>{r.date}</small>
            <p>{r.message}</p>

            {adminMode && (
              <button style={delBtn} onClick={() => handleDelete(r.id)}>
                Delete ❌
              </button>
            )}
          </div>
        ))}
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={form}>
        <h2>Add Review</h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write review"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Rating</option>
          <option>⭐</option>
          <option>⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐⭐</option>
        </select>

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button>Add Review</button>
      </form>

      {/* IMAGE MODAL */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

/* STYLES */
const page = { maxWidth: "1100px", margin: "auto", padding: "40px" };
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
};
const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};
const img = {
  width: "100%",
  height: "200px",
  objectFit: "contain",
  borderRadius: "10px",
  cursor: "pointer",
};
const delBtn = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "8px",
  marginTop: "10px",
};
const adminBtn = {
  background: "#000",
  color: "#fff",
  padding: "8px 14px",
  borderRadius: "6px",
};
const form = {
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export default Reviews;
