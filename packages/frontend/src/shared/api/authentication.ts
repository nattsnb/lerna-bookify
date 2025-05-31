const API_URL = import.meta.env.VITE_API_URL;

const signUp = (payload) => {
  return fetch(`${API_URL}/authentication/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error signing up:", err));
};

const logIn = (payload) => {
  return fetch(`${API_URL}/authentication/log-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error logging in:", err));
};

const logOut = () => {
  return fetch(`${API_URL}/authentication/log-out`, {
    method: "POST",
    credentials: "include",
  })
    .then(() => {})
    .catch((err) => console.error("Error logging out:", err));
};

const authenticate = () => {
  return fetch(`${API_URL}/authentication`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error authenticating user:", err));
};

export const authenticationApi = {
  signUp,
  logIn,
  logOut,
  authenticate,
};
