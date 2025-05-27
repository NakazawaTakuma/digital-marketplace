// src/features/product/api/productAPI.ts
// export async function fetchProducts() {
//   const response = await fetch("http://localhost:8001/api/products/");
//   return await response.json();
// }

// frontend/market-palace/src/features/products/api/productAPI.ts
const BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8001/api";

export async function fetchProductById(productId: string) {
  const res = await fetch(`${BASE}/products/${productId}/`);
  if (!res.ok) {
    throw new Error(`Failed to fetch product ${productId}: ${res.status}`);
  }
  return res.json();
}
