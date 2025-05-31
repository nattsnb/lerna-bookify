const API_URL = import.meta.env.VITE_API_URL;

const getAll = () => {
  return fetch(`${API_URL}/favourite`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching favourites:", err));
};

const getByUser = (userId) => {
  return fetch(`${API_URL}/favourite/user/${userId}`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching favourites by user:", err));
};

const getByVenue = (venueId) => {
  return fetch(`${API_URL}/favourite/venue/${venueId}`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching favourites by venue:", err));
};

const getOne = (id) => {
  return fetch(`${API_URL}/favourite/${id}`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching favourite:", err));
};

const create = (venueId, token) => {
  return fetch(`${API_URL}/favourite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ venueId }),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error creating favourite:", err));
};

const remove = (id) => {
  return fetch(`${API_URL}/favourite/${id}`, { method: "DELETE" })
    .then(() => {})
    .catch((err) => console.error("Error deleting favourite:", err));
};

export const favouriteApi = {
  getAll,
  getByUser,
  getByVenue,
  getOne,
  create,
  remove,
};
