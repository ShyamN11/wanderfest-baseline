import { useState } from "react";
import ImageModal from "../components/ImageModal";

// vehicle images (MAKE SURE THESE FILES EXIST)
import sedanImg from "../assets/vehicles/sedan.jpg";
import innovaImg from "../assets/vehicles/innova.jpg";
import ertigaImg from "../assets/vehicles/ertiga.jpg";
import hatchbackImg from "../assets/vehicles/hatchback.jpg";
import coachvan1Img from "../assets/vehicles/coachvan1.jpg";
import coachvan2Img from "../assets/vehicles/coachvan2.jpg";

function Vehicles() {
  const [selectedImage, setSelectedImage] = useState(null);

  const vehicles = [
    {
      name: "Sedan",
      desc: "Budget friendly local & outstation trips",
      image: sedanImg,
    },
    {
      name: "Innova Crysta",
      desc: "Comfortable family travel (6–7 seater)",
      image: innovaImg,
    },
    {
      name: "Ertiga",
      desc: "Smooth & spacious family trips",
      image: ertigaImg,
    },
    {
      name: "Hatchback",
      desc: "City rides & short trips",
      image: hatchbackImg,
    },
    {
      name: "Coach Van",
      desc: "Group tours & corporate trips",
      image: coachvan1Img,
    },
    {
      name: "Coach Van (Premium)",
      desc: "Luxury group travel",
      image: coachvan2Img,
    },
  ];

  return (
    <div style={{ padding: "50px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Vehicles
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {vehicles.map((v, i) => (
          <div key={i} style={cardStyle}>
            <img
              src={v.image}
              alt={v.name}
              onClick={() => setSelectedImage(v.image)}
              style={imageStyle}
            />

            <h2>{v.name}</h2>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      {/* IMAGE MODAL */}
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

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
  cursor: "pointer",
  marginBottom: "15px",
};

export default Vehicles;
