export const brandOptions = [
  "Apple",
  "Samsung",
  "Huawei",
  "Honor",
  "Xiaomi",
  "Anker",
  "Oramio",
  "Mcdodo",
];
export const priceOptions = [
  { label: "Under $30", min: 0, max: 30 },
  { label: "$30 - $60", min: 30, max: 60 },
  { label: "$60 - $100", min: 60, max: 100 },
  { label: "$100 - $150", min: 100, max: 150 },
  { label: "Over $150", min: 150, max: Infinity },
];

export const batteryLifeOptions = [
  { label: "Up to 12 hours", min: 0, max: 12 },
  { label: "12 - 24 hours", min: 12, max: 24 },
  { label: "24 - 36 hours", min: 24, max: 36 },
  { label: "36 - 48 hours", min: 36, max: 48 },
  { label: "Over 48 hours", min: 48, max: Infinity },
];
export const typeOptions = [
  { label: "AirPods", value: "airpods" },
  { label: "Wired Headphones", value: "wired" },
  { label: "Wireless Headphones", value: "wireless" },
  { label: "Wired & Wireless (Dual Mode)", value: "dual mode"},
];

export function getspec(product: { specifications: any[] }, name: any) {
  const spec = product.specifications?.find(
    (s: { name: any }) => s.name === name,
  );
  return spec ? spec.value : null;
}
