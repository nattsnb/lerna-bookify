const API_URL = import.meta.env.VITE_API_URL;

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/favourite`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching favourites:", error);
  }
};

const getByUser = async (userId) => {
  try {
    const res = await fetch(`${API_URL}/favourite/user/${userId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching favourites by user:", error);
  }
};

const getByVenue = async (venueId) => {
  try {
    const res = await fetch(`${API_URL}/favourite/venue/${venueId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching favourites by venue:", error);
  }
};

const getOne = async (id) => {
  try {
    const res = await fetch(`${API_URL}/favourite/${id}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching favourite:", error);
  }
};

const create = async (venueId, token) => {
  try {
    const res = await fetch(`${API_URL}/favourite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ venueId }),
    });
    return await res.json();
  } catch (error) {
    console.error("Error creating favourite:", error);
  }
};

const remove = async (id) => {
  try {
    await fetch(`${API_URL}/favourite/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting favourite:", error);
  }
};

export const favouriteApi = {
  getAll,
  getByUser,
  getByVenue,
  getOne,
  create,
  remove,
};
