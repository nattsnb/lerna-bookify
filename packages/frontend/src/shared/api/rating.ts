const API_URL = import.meta.env.VITE_API_URL;

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/rating`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching ratings:", error);
  }
};

const getOne = async (id) => {
  try {
    const res = await fetch(`${API_URL}/rating/${id}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching rating:", error);
  }
};

const getByUser = async (userId) => {
  try {
    const res = await fetch(`${API_URL}/rating/user/${userId}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching ratings by user:", error);
  }
};

const getByVenue = async (venueId) => {
  try {
    const res = await fetch(`${API_URL}/rating/venue/${venueId}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching ratings by venue:", error);
  }
};

const create = async (ratingData) => {
  try {
    const res = await fetch(`${API_URL}/rating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error creating rating:", error);
  }
};

const remove = async (id) => {
  try {
    await fetch(`${API_URL}/rating/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting rating:", error);
  }
};

export const ratingApi = {
  getAll,
  getOne,
  getByUser,
  getByVenue,
  create,
  remove,
};
