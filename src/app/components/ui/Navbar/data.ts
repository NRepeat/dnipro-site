const newArrivals = [
  { link: "/all", label: "Всі  нові надходження" },
  { link: "/clothing", label: "Одежа " },
  { link: "/shoes", label: "Взуття" },
  { link: "/bags", label: "Сумки" },
];

const womanClothing = [
  { link: "/dresses", label: "Сукні" },
  { link: "/tops", label: "Топи" },
  { link: "/pants", label: "Штани" },
  { link: "/jackets", label: "Куртки" },
];
const womanShoes = [
  { link: "/shoes/running", label: "Running Shoes" },
  { link: "/shoes/high-heels", label: "High Heels" },
  { link: "/shoes/sandals", label: "Sandals" },
  { link: "/shoes/boots", label: "Boots" },
  { link: "/shoes/flats", label: "Flats" },
  { link: "/shoes/sneakers", label: "Sneakers" },
];
const manClothing = [
  { link: "/shirts", label: "Сорочки" },
  { link: "/pants", label: "Штани" },
  { link: "/jackets", label: "Куртки" },
  { link: "/suits", label: "Костюми" },
];

export const navBardData = {
  pages: [
    {
      link: "/woman",
      label: "Жіноче",
      slug: "woman",
      categories: [
        { label: "Нові надходження", data: newArrivals },
        { label: "Одежа", data: womanClothing },
        { label: "Взуття", data: womanShoes },
        { label: "Взуття", data: womanShoes },
        { label: "Взуття", data: womanShoes },
        { label: "Взуття", data: womanShoes },
        { label: "Взуття", data: womanShoes },
        { label: "Взуття", data: womanShoes },
        { label: "Взуття", data: womanShoes },
      ],
    },
    {
      link: "/man",
      label: "Чоловіче",
      slug: "man",
      categories: [
        { label: "Нові надходження", data: newArrivals },
        { label: "Одежа", data: manClothing },
      ],
    },
    { link: "/about", slug: "about", label: "Про нас" },
  ],
};
