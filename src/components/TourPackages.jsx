function TourPackages() {
  const tours = [
    {
      id: "ooty3d2n",
      title: "Ooty – Coonoor – Pykara (3 Days / 2 Nights)",
      image: "/images/ooty.jpg",
    },
    {
      id: "ooty4d3n",
      title: "Ooty – Coonoor – Pykara – Mudumalai (4 Days / 3 Nights)",
      image: "/images/coonoor.jpg",
    },
    {
      id: "ootyisha",
      title: "Ooty – Pykara – Coonoor – Isha",
      image: "/images/pykara.jpg",
    },
  ];

  return (
    <section style={{ padding: "60px 20px", background: "#ffffff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Tour Packages
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {tours.map((tour) => (
          <div
            key={tour.id}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={tour.image}
              alt={tour.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "10px" }}>{tour.title}</h3>

              <a
                href={`/itinerary/${tour.id}`}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "#0d6efd",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                View Itinerary
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TourPackages;
