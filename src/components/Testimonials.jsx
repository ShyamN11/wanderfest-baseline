function Testimonials() {
  const reviews = [
    {
      name: "Arun Kumar",
      place: "Chennai",
      text: "Excellent service! The Ooty trip was well planned and very comfortable. Highly recommended.",
    },
    {
      name: "Priya S",
      place: "Bangalore",
      text: "Very professional and friendly team. Hotels and cab were perfect.",
    },
    {
      name: "Rahul M",
      place: "Coimbatore",
      text: "Best tour experience so far. Worth every rupee.",
    },
  ];

  return (
    <section style={{ padding: "60px 20px", background: "#ffffff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        What Our Customers Say
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              padding: "20px",
              borderRadius: "8px",
              background: "#f5f5f5",
            }}
          >
            <p style={{ fontStyle: "italic" }}>"{r.text}"</p>
            <h4 style={{ marginTop: "10px" }}>{r.name}</h4>
            <small>{r.place}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
