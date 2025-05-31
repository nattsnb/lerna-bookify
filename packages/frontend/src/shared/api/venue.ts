const API_URL = import.meta.env.VITE_API_URL;

const getAllVenues = () => {
  return fetch(`${API_URL}/venue`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching all venues:", err));
};

const getVenueById = (id) => {
  return fetch(`${API_URL}/venue/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching venue by ID:", err));
};

const getFilteredVenues = (amenities = [], occasions = []) => {
  const query = new URLSearchParams();
  if (amenities.length) query.append("amenities", amenities.join(","));
  if (occasions.length) query.append("occasions", occasions.join(","));

  return fetch(`${API_URL}/venue/filter?${query.toString()}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error filtering venues:", err));
};

const createVenue = (data, token) => {
  return fetch(`${API_URL}/venue`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error creating venue:", err));
};

const updateVenue = (id, data) => {
  return fetch(`${API_URL}/venue/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error updating venue:", err));
};

const deleteVenue = (id) => {
  return fetch(`${API_URL}/venue/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error deleting venue:", err));
};

const checkServerStatus = () => {
  return fetch(`${API_URL}/venue`, {
    method: "HEAD",
  }).catch((err) => console.error("Server check failed:", err));
};

const getHead = () => {
  return fetch(`${API_URL}/venue`, {
    method: "HEAD",
  }).catch((err) => console.error("Error in getHead:", err));
};

export const venueApi = {
  getAllVenues,
  getVenueById,
  getFilteredVenues,
  createVenue,
  updateVenue,
  deleteVenue,
  checkServerStatus,
  getHead,
};
