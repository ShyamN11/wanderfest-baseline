import { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please enter name and review");
      return;
    }

    const newReview = {
      name,
      message,
      image: image ? URL.createObjectURL(image) : null,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setMessage("");
    setImage(null);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Customer Reviews
      </h1>

      {/* REVIEW FORM */}
      <form onSubmit={handleSubmit} style={formStyle}>
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

      {/* REVIEWS LIST */}
      <div style={{ marginTop: "40px" }}>
        {reviews.map((r, i) => (
          <div key={i} style={reviewCard}>
            {r.image && (
              <img
                src={r.image}
                alt="Customer"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            )}
            <h3>{r.name}</h3>
            <p>{r.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* STYLES */
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
};

const textareaStyle = {
  padding: "10px",
  fontSize: "16px",
  minHeight: "100px",
};

const buttonStyle = {
  background: "#16a34a",
  color: "#fff",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

const reviewCard = {
  background: "#fff",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

export default Reviews;
