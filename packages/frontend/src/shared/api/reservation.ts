const API_URL = import.meta.env.VITE_API_URL;

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/reservation`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
};

const getOne = async (id) => {
  try {
    const res = await fetch(`${API_URL}/reservation/${id}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching reservation:", error);
  }
};

const getByUser = async (userId) => {
  try {
    const res = await fetch(`${API_URL}/reservation/user/${userId}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching reservations by user:", error);
  }
};

const getByVenue = async (venueId) => {
  try {
    const res = await fetch(`${API_URL}/reservation/venue/${venueId}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching reservations by venue:", error);
  }
};

const getOccupiedDates = async (venueId) => {
  try {
    const res = await fetch(`${API_URL}/reservation/occupied/${venueId}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching occupied dates:", error);
  }
};

const checkAvailability = async (venueId, from, to) => {
  try {
    const res = await fetch(
      `${API_URL}/reservation/availability/${venueId}?from=${from}&to=${to}`,
    );
    return await res.json();
  } catch (error) {
    console.error("Error checking availability:", error);
  }
};

const create = async (reservationData) => {
  try {
    const res = await fetch(`${API_URL}/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error creating reservation:", error);
  }
};

const remove = async (id) => {
  try {
    await fetch(`${API_URL}/reservation/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting reservation:", error);
  }
};

const toggleIsActive = async (id) => {
  try {
    const res = await fetch(`${API_URL}/reservation/${id}`, {
      method: "PATCH",
    });
    return await res.json();
  } catch (error) {
    console.error("Error toggling reservation active state:", error);
  }
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
