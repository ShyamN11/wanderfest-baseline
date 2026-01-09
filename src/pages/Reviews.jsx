import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  /* LOAD SAVED REVIEWS */
  useEffect(() => {
    const saved = localStorage.getItem("wanderfest_reviews");
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, []);

  /* SAVE REVIEWS */
  useEffect(() => {
    localStorage.setItem("wanderfest_reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please enter name and review");
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      message,
      image: image ? URL.createObjectURL(image) : null,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setMessage("");
    setImage(null);
  };

  /* DELETE REVIEW */
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirmDelete) return;

    const updatedReviews = reviews.filter((r) => r.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Happy Customers
      </h1>

      {/* REVIEWS LIST */}
      <div style={reviewGrid}>
        {reviews.length === 0 && (
          <p style={{ textAlign: "center", color: "#666" }}>
            No reviews yet. Be the first 😊
          </p>
        )}

        {reviews.map((r) => (
          <div key={r.id} style={reviewCard}>
            {r.image && (
              <img src={r.image} alt="Customer" style={reviewImage} />
            )}

            <h3>{r.name}</h3>
            <small>{r.date}</small>
            <p>{r.message}</p>

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(r.id)}
              style={deleteBtn}
            >
              Delete ❌
            </button>
          </div>
        ))}
      </div>

      {/* REVIEW FORM */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Share Your Review</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Write your review..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyle}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" style={buttonStyle}>
          Submit Review
        </button>
      </form>
    </div>
  );
}

/* STYLES */
const pageStyle = {
  maxWidth: "1100px",
  margin: "auto",
  padding: "50px 20px",
};

const reviewGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
  marginBottom: "50px",
};

const reviewCard = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
  position: "relative",
};

const reviewImage = {
  width: "100%",
  height: "200px",
  objectFit: "contain",
  borderRadius: "10px",
  marginBottom: "10px",
};

const deleteBtn = {
  marginTop: "10px",
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
};

const formStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "12px",
  fontSize: "16px",
};

const textareaStyle = {
  padding: "12px",
  fontSize: "16px",
  minHeight: "100px",
};

const buttonStyle = {
  background: "#16a34a",
  color: "#fff",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Reviews;
