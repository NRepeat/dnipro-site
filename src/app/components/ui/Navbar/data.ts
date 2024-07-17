const newArrivals = [
  { link: "/all", label: "Всі нові надходження" },
  { link: "/clothing", label: "Одежа" },
  { link: "/shoes", label: "Взуття" },
  { link: "/bags", label: "Сумки" },
];

const womanClothing = [
  { link: "/dresses", label: "Сукні" },
  { link: "/tops", label: "Топи" },
  { link: "/pants", label: "Штани" },
  { link: "/jackets", label: "Куртки" },
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
