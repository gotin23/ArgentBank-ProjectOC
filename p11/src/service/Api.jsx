import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

// fonction de connexion
export const login = async (user, pass = {}) => {
  console.log(user, pass);
  const response = await axios.post(
    `${API_BASE_URL}/v1/user/login`,
    {
      email: user,
      password: pass,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  // recuperation du token
  const tkn = response.data.body.token;
  return tkn;
};

export const getProfile = async (token) => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
