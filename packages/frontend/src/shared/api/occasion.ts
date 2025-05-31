const API_URL = import.meta.env.VITE_API_URL;

const getAll = () => {
  return fetch(`${API_URL}/occasion`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching occasions:", err));
};

const getOne = (id) => {
  return fetch(`${API_URL}/occasion/${id}`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching occasion:", err));
};

const create = (occasionData) => {
  return fetch(`${API_URL}/occasion`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(occasionData),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error creating occasion:", err));
};

const update = (id, updatedData) => {
  return fetch(`${API_URL}/occasion/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error updating occasion:", err));
};

const remove = (id) => {
  return fetch(`${API_URL}/occasion/${id}`, {
    method: "DELETE",
  })
    .then(() => {})
    .catch((err) => console.error("Error deleting occasion:", err));
};

export const occasionApi = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
