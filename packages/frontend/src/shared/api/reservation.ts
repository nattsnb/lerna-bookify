const API_URL = import.meta.env.VITE_API_URL;

const getAll = () => {
  return fetch(`${API_URL}/reservation`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching reservations:", err));
};

const getOne = (id) => {
  return fetch(`${API_URL}/reservation/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching reservation:", err));
};

const getByUser = (userId) => {
  return fetch(`${API_URL}/reservation/user/${userId}`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching reservations by user:", err));
};

const getByVenue = (venueId) => {
  return fetch(`${API_URL}/reservation/venue/${venueId}`)
    .then((res) => res.json())
    .catch((err) =>
      console.error("Error fetching reservations by venue:", err),
    );
};

const getOccupiedDates = (venueId) => {
  return fetch(`${API_URL}/reservation/occupied/${venueId}`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching occupied dates:", err));
};

const checkAvailability = (venueId, from, to) => {
  return fetch(
    `${API_URL}/reservation/availability/${venueId}?from=${from}&to=${to}`,
  )
    .then((res) => res.json())
    .catch((err) => console.error("Error checking availability:", err));
};

const create = (reservationData) => {
  return fetch(`${API_URL}/reservation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reservationData),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error creating reservation:", err));
};

const remove = (id) => {
  return fetch(`${API_URL}/reservation/${id}`, {
    method: "DELETE",
  })
    .then(() => {})
    .catch((err) => console.error("Error deleting reservation:", err));
};

const toggleIsActive = (id) => {
  return fetch(`${API_URL}/reservation/${id}`, {
    method: "PATCH",
  })
    .then((res) => res.json())
    .catch((err) =>
      console.error("Error toggling reservation active state:", err),
    );
};

export const reservationApi = {
  getAll,
  getOne,
  getByUser,
  getByVenue,
  getOccupiedDates,
  checkAvailability,
  create,
  remove,
  toggleIsActive,
};
