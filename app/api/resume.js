import axios from "axios";
import { BASE_URL } from "../Constant";
import { textFormatting } from "../utils/helper";

export const createResume = async (authToken, formData) => {
  try {
    if (!(formData instanceof FormData)) {
      throw new Error("formData must be an instance of FormData");
    }

    const response = await axios.post(
      `${BASE_URL}/api/resumes/create/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return response.data; // Return response data to the caller
  } catch (error) {
    console.error("Error creating resume:", error);

    throw error.response
      ? error.response.data
      : new Error("Failed to create resume");
  }
};
export const editResume = async (authToken, formData, id) => {
  try {
    if (!(formData instanceof FormData)) {
      throw new Error("formData must be an instance of FormData");
    }

    const response = await axios.put(
      `${BASE_URL}/api/resumes/${id}/edit/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return response.data; 
  } catch (error) {
    console.error("Error creating resume:", error);

    throw error.response
      ? error.response.data
      : new Error("Failed to create resume");
  }
};
export const deleteResume = async (authToken, id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/resumes/${id}/delete/`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return response.data; 
  } catch (error) {
    console.error("Error Deleting resume:", error);

    throw error.response
      ? error.response.data
      : new Error("Failed to create resume");
  }
};

export const addUserInfo = async (authToken, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/add-user-info/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error.response
      ? error.response.data
      : new Error("Failed to add user information");
  }
};

export const getUserResume = async (authToken) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/resumes/my-resumes`,

      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error.response
      ? error.response.data
      : new Error("Failed to fetch resume");
  }
};

export const getResumeById = async (authToken, id) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/resumes/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error.response
      ? error.response.data
      : new Error("Failed to fetch resume");
  }
};

export const aiGenerationSection = async (authToken, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/generate-resume-section/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data)
    if (response.status===200) {
      return textFormatting(response.data.generated_section);
    }
   
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error.response
      ? error.response.data
      : new Error("Failed to fetch resume");
  }
};

export const AiImproveContent = async (data, authToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/regenerate-content/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.regenerated_content || "Need Content to improve";
  } catch (error) {
    console.error(
      "Error in AiImproveContent:",
      error.response || error.message || error
    );
   
    return "Need Content to improve";
  }
};
