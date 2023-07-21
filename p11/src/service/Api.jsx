import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";

// // fonction de connexion
// export const login = async (user, pass = {}) => {
//   console.log(user, pass);
//   const response = await axios.post(`${API_BASE_URL}/user/login`, {
//     email: user,
//     password: pass,
//   });
//   // récupération du token
//   const tkn = response.data.body.token;
//   return tkn;
// };

// export const getProfile = async (token) => {
//   const response = await axios.post(
//     `${API_BASE_URL}/user/profile`,
//     {},
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };

// export const editUser = async (token, name) => {
//   await axios.put(
//     `${API_BASE_URL}/user/profile`,
//     { userName: name },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };

// Toute les actions de l'api
const apiActions = {
  login: {
    method: "post",
    url: "/user/login",
    requiresAuth: false,
  },
  getProfile: {
    method: "post",
    url: "/user/profile",
    requiresAuth: true,
  },
  editUser: {
    method: "put",
    url: "/user/profile",
    requiresAuth: true,
  },
  signUp: {
    method: "post",
    url: "/user/signup",
    requiresAuth: false,
  },
};
// fonction pour gerer les appel a l'api avec l'action donnée
export const performApiAction = async (action, token, data = {}) => {
  const actionConfig = apiActions[action];
  console.log(action, "api");
  if (!actionConfig) {
    console.error("Action non prise en charge.");
    return;
  }

  const headers = {
    "Content-Type": "application/json",
  };

  if (actionConfig.requiresAuth) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      method: actionConfig.method,
      url: `${API_BASE_URL}${actionConfig.url}`,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'exécution de l'action :", error);
    throw error;
  }
};
