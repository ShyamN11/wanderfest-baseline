import ootyImg from "../assets/tours/ooty.jpg";
import mudumalaiImg from "../assets/tours/mudumalai.jpg";
import ishaImg from "../assets/tours/isha.jpg";

const tours = [
  {
    slug: "ooty-coonoor-pykara",
    title: "Ooty • Coonoor • Pykara (3D / 2N)",
    price: "₹7,999",
    image: ootyImg,
    itinerary: [
      "Day 1: Ooty sightseeing",
      "Day 2: Coonoor & Pykara",
      "Day 3: Departure",
    ],
  },
  {
    slug: "ooty-coonoor-pykara-mudumalai-mysore",
    title: "Ooty • Coonoor • Pykara • Mudumalai • Mysore (4D / 3N)",
    price: "₹15,999",
    image: mudumalaiImg,
    itinerary: [
      "Day 1: Ooty sightseeing",
      "Day 2: Coonoor & Pykara",
      "Day 3: Mudumalai & Mysore",
      "Day 4: Departure",
    ],
  },
  {
    slug: "ooty-pykara-coonoor-isha",
    title: "Ooty • Pykara • Coonoor • Isha (4D / 3N)",
    price: "₹13,999",
    image: ishaImg,
    itinerary: [
      "Day 1: Ooty sightseeing",
      "Day 2: Pykara & Coonoor",
      "Day 3: Isha Temple",
      "Day 4: Departure",
    ],
  },
];

export default tours;
