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
  { label: "Under 25,000 IQD", min: 0, max: 25000 },
  { label: "25,000 - 50,000 IQD", min: 25000, max: 50000 },
  { label: "50,000 - 100,000 IQD", min: 50000, max: 100000 },
  { label: "100,000 - 200,000 IQD", min: 100000, max: 200000 },
  { label: "Over 200,000 IQD", min: 200000, max: Infinity },
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
