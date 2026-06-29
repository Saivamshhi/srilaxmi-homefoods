/**
 * @typedef {Object} FoodItem
 * @property {number} id - Unique identifier
 * @property {string} name - Display name of the food item
 * @property {string} filename - Web-friendly filename (lowercase, hyphens, extension)
 * @property {string} alt - Alt text for accessibility (5–125 chars)
 * @property {number|null} priceHalfKg - Price per 500g in ₹ (integer 1–99999, or null)
 * @property {number|null} pricePerKg - Price per 1kg in ₹ (integer 1–99999, or null)
 * @property {number} width - Original image width in px
 * @property {number} height - Original image height in px
 */

const foodItems = [
  {
    id: 1,
    name: "Ariselu",
    filename: "Ariselu.jpg",
    alt: "Ariselu - traditional sweet rice flour snack",
    priceHalfKg: 200,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 2,
    name: "Avisaginjala Laddu",
    filename: "avisagingala-laddu.jpg",
    alt: "Avisagingala laddu - flaxseed sweet balls",
    priceHalfKg: 300,
    pricePerKg: 600,
    width: 800,
    height: 600,
  },
  {
    id: 3,
    name: "Boondi Kara",
    filename: "boondhi-kara.jpg",
    alt: "Boondhi kara - spicy gram flour droplets",
    priceHalfKg: 200,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 4,
    name: "Garjalu",
    filename: "gargalu.jpg",
    alt: "Gargalu - crispy fried snack rings",
    priceHalfKg: 200,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 5,
    name: "Janthikalu",
    filename: "janthikalu.jpg",
    alt: "Janthikalu - pressed rice flour savory snack",
    priceHalfKg: 200,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 6,
    name: "Sanna Karapusa",
    filename: "karapusa.jpg",
    alt: "Karapusa - diamond shaped sweet pastry",
    priceHalfKg: 220,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 7,
    name: "Laddu",
    filename: "laddu.jpg",
    alt: "Laddu - round gram flour sweet balls",
    priceHalfKg: 200,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 8,
    name: "Pappu Chakkalu",
    filename: "pappu-chakkalu-kattagaralu.jpg",
    alt: "Pappu chakkalu and kattagaralu - lentil crackers",
    priceHalfKg: 200,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 9,
    name: "Sev",
    filename: "sanna-karapusa.jpg",
    alt: "Sanna karapusa - thin crispy sweet pastry",
    priceHalfKg: 200,
    pricePerKg: 400,
    width: 800,
    height: 600,
  },
  {
    id: 10,
    name: "Sunnundalu",
    filename: "sunnundalu.jpg",
    alt: "Sunnundalu - urad dal sweet balls",
    priceHalfKg: 300,
    pricePerKg: 600,
    width: 800,
    height: 600,
  },
]

export default foodItems
