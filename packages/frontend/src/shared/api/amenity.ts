const API_URL = import.meta.env.VITE_API_URL;

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/amenity`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching amenities:", error);
  }
};

const getOne = async (id) => {
  try {
    const res = await fetch(`${API_URL}/amenity/${id}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching amenity:", error);
  }
};

const create = async (payload) => {
  try {
    const res = await fetch(`${API_URL}/amenity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Error creating amenity:", error);
  }
};

const update = async (id, payload) => {
  try {
    const res = await fetch(`${API_URL}/amenity/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating amenity:", error);
  }
};

const remove = async (id) => {
  try {
    await fetch(`${API_URL}/amenity/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting amenity:", error);
  }
};

export const amenityApi = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
