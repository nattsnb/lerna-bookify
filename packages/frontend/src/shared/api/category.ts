const API_URL = import.meta.env.VITE_API_URL;

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/category`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

const getOne = async (id) => {
  try {
    const res = await fetch(`${API_URL}/category/${id}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};

const create = async (payload) => {
  try {
    const res = await fetch(`${API_URL}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Error creating category:", error);
  }
};

const update = async (id, payload) => {
  try {
    const res = await fetch(`${API_URL}/category/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating category:", error);
  }
};

const remove = async (id) => {
  try {
    await fetch(`${API_URL}/category/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};

export const categoryApi = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
