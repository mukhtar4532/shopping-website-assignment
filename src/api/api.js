const API = "https://fakestoreapi.com";

export const loginForm = async (formData) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return res.json();
};
