import {VenueFilterDto} from "nestjs-bookify/dist/src/venue/dto/venue-filter.dto";

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

const getFilteredVenues = (filters: VenueFilterDto) => {
  const query = new URLSearchParams();

  if (filters.amenities?.length)
    query.append("amenities", filters.amenities.join(","));
  if (filters.occasions?.length)
    query.append("occasions", filters.occasions.join(","));

  if (filters.venueTypeId != null)
    query.append("venueTypeId", filters.venueTypeId.toString());

  if (filters.pricePerNightInEURCentMin != null)
    query.append("pricePerNightInEURCentMin", filters.pricePerNightInEURCentMin.toString());
  if (filters.pricePerNightInEURCentMax != null)
    query.append("pricePerNightInEURCentMax", filters.pricePerNightInEURCentMax.toString());

  if (filters.dateStart)
    query.append("dateStart", filters.dateStart);
  if (filters.dateEnd)
    query.append("dateEnd", filters.dateEnd);

  if (filters.guests != null)
    query.append("guests", filters.guests.toString());

  if (filters.radiusKm != null)
    query.append("radiusKm", filters.radiusKm.toString());
  if (filters.latitude != null)
    query.append("latitude", filters.latitude.toString());
  if (filters.longitude != null)
    query.append("longitude", filters.longitude.toString());

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
