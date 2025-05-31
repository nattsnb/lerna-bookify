const API_URL = import.meta.env.VITE_API_URL;

const signUp = async (payload) => {
  try {
    const res = await fetch(`${API_URL}/authentication/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

const logIn = async (payload) => {
  try {
    const res = await fetch(`${API_URL}/authentication/log-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

const logOut = async () => {
  try {
    await fetch(`${API_URL}/authentication/log-out`, {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

const authenticate = async () => {
  try {
    const res = await fetch(`${API_URL}/authentication`, {
      method: "GET",
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    console.error("Error authenticating user:", error);
  }
};

export const authenticationApi = {
  signUp,
  logIn,
  logOut,
  authenticate,
};
