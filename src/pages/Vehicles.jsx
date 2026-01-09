function Vehicles() {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Vehicles
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {vehicles.map((v, i) => (
          <div key={i} style={card}>
            <img src={v.image} alt={v.name} style={img} />
            <h3>{v.name}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const vehicles = [
  {
    name: "Innova Crysta",
    desc: "Comfortable family travel (6–7 seater)",
    image: "/vehicle1.jpg",
  },
  {
    name: "Tempo Traveller",
    desc: "Group tours & corporate trips",
    image: "/vehicle2.jpg",
  },
  {
    name: "Mini Bus",
    desc: "School & large group tours",
    image: "/vehicle3.jpg",
  },
  {
    name: "Sedan",
    desc: "Budget friendly local & outstation trips",
    image: "/vehicle4.jpg",
  },
];

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const img = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "15px",
};

export default Vehicles;
