const API_URL = import.meta.env.VITE_API_URL;

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/occasion`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching occasions:", error);
  }
};

const getOne = async (id) => {
  try {
    const res = await fetch(`${API_URL}/occasion/${id}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching occasion:", error);
  }
};

const create = async (occasionData) => {
  try {
    const res = await fetch(`${API_URL}/occasion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(occasionData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error creating occasion:", error);
  }
};

const update = async (id, updatedData) => {
  try {
    const res = await fetch(`${API_URL}/occasion/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating occasion:", error);
  }
};

const remove = async (id) => {
  try {
    await fetch(`${API_URL}/occasion/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting occasion:", error);
  }
};

export const occasionApi = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
