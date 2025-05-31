const API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY;
const EXCHANGE_URL = import.meta.env.VITE_EXCHANGE_API_URL;

const getCoordinatesData = (address) => {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address,
    )}&key=${API_KEY}`,
  )
    .then((res) => res.json())
    .catch((error) => console.error("Error geocoding:", error));
};

const getCurrencyResults = () => {
  return fetch(EXCHANGE_URL)
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching currency data:", error));
};

export const externalApi = {
  getCoordinatesData,
  getCurrencyResults,
};
