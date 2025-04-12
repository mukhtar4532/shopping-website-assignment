const API = "https://fakestoreapi.com";

export const loginForm = async (formData) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return await res.json();
};

export const fetchCategoriesAPI = async () => {
  const res = await fetch(`${API}/products/categories`);

  return await res.json();
};

export const fetchProductsAPI = async (category) => {
  const url =
    category === "all"
      ? `${API}/products`
      : `${API}/products/category/${encodeURIComponent(category)}`;
  const res = await fetch(url);

  return await res.json();
};

export const fetchProductDetailsAPI = async (id) => {
  try {
    const res = await fetch(`${API}/products/${id}`);

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching product details: ", error);
    return null;
  }
};
