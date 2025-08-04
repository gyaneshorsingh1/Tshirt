// data.jsx
const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    brand: "UrbanWear",
    sku: "UH-101-BLK",
    price: 49.99,
    stock: "In Stock",
    images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "Stay warm and stylish with our classic black hoodie, made with premium cotton blend for maximum comfort. Perfect for casual outings, gym wear, or layering in colder weather.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy Blue"],
    material: "80% Cotton, 20% Polyester",
    delivery: "2-5 business days",
    shipping: "Free shipping on orders above $50",
    returns: "30-day easy returns",
    rating: 4.7
  },
  {
    id: 2,
    name: "White Cotton T-Shirt",
    brand: "CottonBasics",
    sku: "CB-201-WHT",
    price: 19.99,
    stock: "In Stock",
    images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "A versatile white t-shirt made with 100% breathable cotton. Ideal for everyday wear and can be paired with jeans, shorts, or layered under jackets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Grey", "Beige"],
    material: "100% Cotton",
    delivery: "2-4 business days",
    shipping: "Free shipping on all orders",
    returns: "30-day hassle-free returns",
    rating: 4.5
  },
  {
    id: 3,
    name: "Denim Blue Jeans",
    brand: "DenimCo",
    sku: "DC-301-BLU",
    price: 59.99,
    stock: "In Stock",
    images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "Classic slim-fit blue jeans with stretch fabric for extra comfort. Durable stitching and timeless design make them perfect for casual and semi-formal occasions.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    material: "98% Cotton, 2% Elastane",
    delivery: "3-6 business days",
    shipping: "Free shipping above $40",
    returns: "15-day return policy",
    rating: 4.6
  },
  {
    id: 4,
    name: "Men's Formal White Shirt",
    brand: "EliteWear",
    sku: "EW-401-WHT",
    price: 39.99,
    stock: "In Stock",
    images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "A crisp white formal shirt tailored for a sharp fit. Ideal for office wear, business meetings, or formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Sky Blue", "Light Pink"],
    material: "60% Cotton, 40% Polyester",
    delivery: "2-5 business days",
    shipping: "Free shipping for members",
    returns: "30-day easy returns",
    rating: 4.4
  },
  {
    id: 5,
    name: "Winter Puffer Jacket",
    brand: "ColdShield",
    sku: "CS-501-BLK",
    price: 89.99,
    stock: "In Stock",
    images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "Stay cozy during the cold months with our lightweight yet warm puffer jacket. Water-resistant outer layer with soft fleece inner lining.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Navy Blue", "Olive Green"],
    material: "Polyester with Fleece Lining",
    delivery: "4-7 business days",
    shipping: "Free shipping on jackets",
    returns: "15-day return policy",
    rating: 4.8
  },
  {
    id: 6,
    name: "Casual Grey Sweatpants",
    brand: "ComfyWear",
    sku: "CW-601-GRY",
    price: 29.99,
    stock: "In Stock",
   images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "Soft and comfortable sweatpants made for everyday lounging or workouts. Features an elastic waistband and adjustable drawstring.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black", "Navy Blue"],
    material: "70% Cotton, 30% Polyester",
    delivery: "2-5 business days",
    shipping: "Free shipping above $30",
    returns: "30-day easy returns",
    rating: 4.3
  },
  {
    id: 7,
    name: "Casual Grey Sweatpants",
    brand: "ComfyWear",
    sku: "CW-601-GRY",
    price: 29.99,
    stock: "In Stock",
   images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "Soft and comfortable sweatpants made for everyday lounging or workouts. Features an elastic waistband and adjustable drawstring.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black", "Navy Blue"],
    material: "70% Cotton, 30% Polyester",
    delivery: "2-5 business days",
    shipping: "Free shipping above $30",
    returns: "30-day easy returns",
    rating: 4.3
  },
  {
    id: 8,
    name: "Casual Grey Sweatpants",
    brand: "ComfyWear",
    sku: "CW-601-GRY",
    price: 29.99,
    stock: "In Stock",
   images: [
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"
    ],
    description: "Soft and comfortable sweatpants made for everyday lounging or workouts. Features an elastic waistband and adjustable drawstring.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black", "Navy Blue"],
    material: "70% Cotton, 30% Polyester",
    delivery: "2-5 business days",
    shipping: "Free shipping above $30",
    returns: "30-day easy returns",
    rating: 4.3
  }
];

export default products;
