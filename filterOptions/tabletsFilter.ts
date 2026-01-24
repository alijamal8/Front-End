export const brandOptions = ["Apple", "Samsung", "Huawei", "Honor", "Xiaomi"];

// Price ranges (دولار)
export const priceOptions = [
  { label: "Under 200", min: 0, max: 100 },
  { label: "$200 - $300", min: 100, max: 200 },
  { label: "$300 - $400", min: 200, max: 300 },
  { label: "$400 - $500", min: 300, max: 500 },
  { label: "$500 - $600", min: 500, max: 800 },
  { label: "$800 - $1000", min: 800, max: 1000 },
  { label: "Over $1000", min: 1000, max: Infinity },
];

// RAM in GB
export const ramOptions = [4, 6, 8, 12, 16];

// Storage in GB
export const storageOptions = [128, 256, 512, 1024, 2048];



// Battery mAh
export const batteryOptions = [
  { label: "Under 7000 mAh", min: 0, max: 7000 },
  { label: "7000 - 7500 mAh", min: 7000, max: 7500 },
  { label: "7500 - 8000 mAh", min: 7500, max: 8000 },
  { label: "8000 - 8500 mAh", min: 8000, max: 8500 },
  { label: "8500 - 10000 mAh", min: 8500, max: 10000 },
  { label: "Over 10000 mAh", min: 10000, max: Infinity },
];

// Display size (inch)export 
export const displaySizeOptions = [
  { label: "7.0 - 8.9 inch", min: 7.0, max: 8.9 },
  { label: "9.0 - 10.9 inch", min: 9.0, max: 10.9 },
  { label: "11.0 - 12.9 inch", min: 11.0, max: 12.9 },
  { label: "13.0 - 14.9 inch", min: 13.0, max: 14.9 },
];