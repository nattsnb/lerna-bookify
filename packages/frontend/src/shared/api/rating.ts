const API_URL = import.meta.env.VITE_API_URL;

const getAll = () => {
  return fetch(`${API_URL}/rating`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching ratings:", err));
};

const getOne = (id) => {
  return fetch(`${API_URL}/rating/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching rating:", err));
};

const getByUser = (userId) => {
  return fetch(`${API_URL}/rating/user/${userId}`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching ratings by user:", err));
};

const getByVenue = (venueId) => {
  return fetch(`${API_URL}/rating/venue/${venueId}`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching ratings by venue:", err));
};

const create = (ratingData) => {
  return fetch(`${API_URL}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ratingData),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error creating rating:", err));
};

const remove = (id) => {
  return fetch(`${API_URL}/rating/${id}`, {
    method: "DELETE",
  })
    .then(() => {})
    .catch((err) => console.error("Error deleting rating:", err));
};

export const ratingApi = {
  getAll,
  getOne,
  getByUser,
  getByVenue,
  create,
  remove,
};
