const API_URL = import.meta.env.VITE_API_URL;

const getAll = () => {
  return fetch(`${API_URL}/category`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching categories:", err));
};

const getOne = (id) => {
  return fetch(`${API_URL}/category/${id}`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching category:", err));
};

const create = (payload) => {
  return fetch(`${API_URL}/category`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error creating category:", err));
};

const update = (id, payload) => {
  return fetch(`${API_URL}/category/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error updating category:", err));
};

const remove = (id) => {
  return fetch(`${API_URL}/category/${id}`, {
    method: "DELETE",
  })
    .then(() => {})
    .catch((err) => console.error("Error deleting category:", err));
};

export const categoryApi = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
