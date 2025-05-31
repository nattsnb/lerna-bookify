const API_URL = import.meta.env.VITE_API_URL;

const getAll = () => {
  return fetch(`${API_URL}/amenity`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching amenities:", err));
};

const getOne = (id) => {
  return fetch(`${API_URL}/amenity/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching amenity:", err));
};

const create = (payload) => {
  return fetch(`${API_URL}/amenity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error creating amenity:", err));
};

const update = (id, payload) => {
  return fetch(`${API_URL}/amenity/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error updating amenity:", err));
};

const remove = (id) => {
  return fetch(`${API_URL}/amenity/${id}`, {
    method: "DELETE",
  })
    .then(() => {})
    .catch((err) => console.error("Error deleting amenity:", err));
};

export const amenityApi = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
