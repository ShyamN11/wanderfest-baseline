import { useState } from "react";
import ImageModal from "../components/ImageModal";

import sedanImg from "../assets/vehicles/sedan.jpg";
import innovaImg from "../assets/vehicles/innova.jpg";
import ertigaImg from "../assets/vehicles/ertiga.jpg";
import hatchbackImg from "../assets/vehicles/hatchback.jpg";
import coachvan1Img from "../assets/vehicles/coachvan1.jpg";
import coachvan2Img from "../assets/vehicles/coachvan2.jpg";

function Vehicles() {
  const [selectedImage, setSelectedImage] = useState(null);

  const vehicles = [
    { name: "Sedan", image: sedanImg },
    { name: "Innova", image: innovaImg },
    { name: "Ertiga", image: ertigaImg },
    { name: "Hatchback", image: hatchbackImg },
    { name: "Coach Van", image: coachvan1Img },
    { name: "Coach Van (Large)", image: coachvan2Img },
  ];

  return (
    <div style={{ padding: "50px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Vehicles
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {vehicles.map((v, i) => (
          <div key={i} style={cardStyle}>
            <img
              src={v.image}
              alt={v.name}
              style={imgStyle}
              onClick={() => setSelectedImage(v.image)}
            />
            <h3>{v.name}</h3>
          </div>
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "15px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const imgStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "10px",
  cursor: "pointer",
  marginBottom: "10px",
};

export default Vehicles;
