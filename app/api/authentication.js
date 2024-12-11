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
    // Validate input
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // Perform login request
    const response = await axios.post(`${BASE_URL}/api/users/login/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 400) {
      throw new Error("Invalid credentials. Please try again.");
    }

    const { access, refresh } = response.data;

    // Fetch user data after login
    const userData = await getUserData(access);

    // Return both tokens and user data
    return { accessToken: access, refreshToken: refresh, user: userData };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        const message =
          error.response.data?.detail || error.response.data?.error || "An error occurred.";

        if (status === 400) {
          throw new Error(message);
          // return {message:message}
        } else if (status === 401) {
          throw new Error("Invalid credentials. Please check your email and password.")
        } else if (status === 500) {
          throw new Error("Internal server error. Please try again later.");
        } else {
          throw new Error(message);
        }
      } else if (error.request) {
        // Request was made but no response received
        throw new Error("No response from the server. Please check your internet connection.");
      } else {
        // Something happened while setting up the request
        throw new Error("An unexpected error occurred. Please try again.");
      }
    } else {
      // Handle non-Axios errors
      throw new Error(error.message || "An unexpected error occurred.");
    }
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

export const tokenVerification = async (token) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/token/verify/`, {
      token: token,
    });
    return response.status; // Return 200 on success
  } catch (error) {
  
    return error.response ? error.response.status : 500; 
  }
};
