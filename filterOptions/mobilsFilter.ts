export const brandOptions = ["Apple", "Samsung", "Huawei", "Honor", "Xiaomi"];

// Price ranges (دولار)
export const priceOptions = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
  { label: "$500 - $800", min: 500, max: 800 },
  { label: "$800 - $1000", min: 800, max: 1000 },
  { label: "Over $1000", min: 1000, max: Infinity },
];

// RAM in GB
export const ramOptions = [4, 6, 8, 12, 16, 24];

// Storage in GB
export const storageOptions = [64, 128, 256, 512, 1024, 2048];

// Camera mega pixel ranges
export const cameraOptions = [
  { label: "10 - 24 MP", min: 10, max: 24 },
  { label: "50 - 99 MP", min: 50, max: 99 },
  { label: "100 - 199 MP", min: 100, max: 199 },
  { label: "200+ MP", min: 200, max: Infinity },
];

// Battery mAh
export const batteryOptions = [
  { label: "Under 4500 mAh", min: 0, max: 4500 },
  { label: "4500 - 5000 mAh", min: 4500, max: 5000 },
  { label: "5000 - 5500 mAh", min: 5000, max: 5500 },
  { label: "5500 - 6000 mAh", min: 5500, max: 6000 },
  { label: "Over 6000 mAh", min: 6000, max: Infinity },
];

// Display size (inch)
export const displaySizeOptions = [
  { label: "6.0 - 6.2", min: 6.0, max: 6.2 },
  { label: "6.3 - 6.5", min: 6.3, max: 6.5 },
  { label: "6.6 - 6.9", min: 6.6, max: 6.9 },
  { label: "Over 7.0", min: 7.0, max: Infinity },
];
