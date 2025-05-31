const OPENCAGE_API_KEY = "938e7cda5d2c45f986a8c74c468eaaa7";
const API_URL = "http://localhost:3000";

const getAllVenues = () => {
  return fetch(`${API_URL}/venue/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

const getVenueDetails = (venueId) => {
  return fetch(`${API_URL}/venue/${venueId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venue details:", error));
};

const getVenuesOnPage = (page, limit) => {
  return fetch(`${API_URL}/venue?_page=${page}&_per_page=${limit}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

function getCurrencyResults() {
  return fetch(`https://api.exchangerate-api.com/v4/latest/USD`, {})
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
}

const getAmenities = () => {
  return fetch(`${API_URL}/amenity/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

const getCoordinatesData = async (address) => {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${OPENCAGE_API_KEY}`,
    {},
  )
    .then((res) => res.json())
    .catch((error) => console.error("Error geocoding:", error));
};

const getHead = () => {
  return fetch(`${API_URL}/venue`, {
    method: "HEAD",
  }).catch((error) => console.error("Server is not running:", error));
};

export const api = {
  getAllVenues,
  getVenueDetails,
  getVenuesOnPage,
  getCurrencyResults,
  getAmenities,
  getCoordinatesData,
  getHead,
};
