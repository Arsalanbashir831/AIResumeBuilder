import axios from "axios";
import { BASE_URL } from "../Constant";

// Fetch user data based on the provided auth token
export const getUserData = async (authToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/getUserInfo/`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data; // Assuming the user data is in the response
  } catch (error) {
    console.log("Error fetching user data:", error);
    throw new Error("Failed to fetch user data.");
  }
};

export const login = async (email, password) => {
  try {
    // Create FormData object
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // Perform login request
    const response = await axios.post(`${BASE_URL}/api/token/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.data) {
      throw new Error("Login failed. No response from server.");
    }

    const { access, refresh } = response.data;

    // Fetch user data after login (if needed)
    const userData = await getUserData(access);

    // Return both tokens and user data
    return { accessToken: access, refreshToken: refresh, user: userData };
  } catch (error) {
    console.log("Login error:", error);
    throw error.response ? error.response.data : new Error("Login failed");
  }
};




export const register = async (email, password, name) => {
  try {
    // Create FormData object
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);

   
    const response = await axios.post(`${BASE_URL}/api/users/register/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // Returning response from the registration API
  } catch (error) {
    console.log("Registration error:", error);
    throw error.response
      ? error.response.data
      : new Error("Registration failed");
  }
};

// Refresh access token
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/token/refresh/`, {
      refresh: refreshToken,
    });

    return response.data; // Return the refreshed token data
  } catch (error) {
    console.log("Error refreshing token:", error);
    throw error.response
      ? error.response.data
      : new Error("Token refresh failed");
  }
};
