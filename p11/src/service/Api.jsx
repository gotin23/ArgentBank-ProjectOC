import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";

// fonction de connexion
export const login = async (user, pass = {}) => {
  console.log(user, pass);
  const response = await axios.post(`${API_BASE_URL}/user/login`, {
    email: user,
    password: pass,
  });
  // récupération du token
  const tkn = response.data.body.token;
  return tkn;
};

export const getProfile = async (token) => {
  const response = await axios.post(
    `${API_BASE_URL}/user/profile`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const editUser = async (token, name) => {
  await axios.put(
    `${API_BASE_URL}/user/profile`,
    { userName: name },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
