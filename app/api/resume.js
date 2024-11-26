import axios from "axios";
import { BASE_URL } from "../Constant";

export const createResume = async (authToken, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/resumes/create/`, 
      data, 
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json", // Optional if you're sending JSON
        },
      }
    );

    return response.data; // Return response data to the caller
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error.response ? error.response.data : new Error("Failed to create resume");
  }
};


export const addUserInfo = async (authToken , data)=>{
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
        throw error.response ? error.response.data : new Error("Failed to add user information");
      } 
}


export const getUserResume = async (authToken)=>{
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
        throw error.response ? error.response.data : new Error("Failed to fetch resume");
      }
}

export const getResumeById = async (authToken , id)=>{
    try {
        const response = await axios.get(
          `${BASE_URL}/api/resumes/${id}`, 
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
        throw error.response ? error.response.data : new Error("Failed to fetch resume");
      }
}


export const aiGenerationSection = async (authToken , data)=>{
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
        return response.data; 
      } catch (error) {
        console.error("Error creating resume:", error);
        throw error.response ? error.response.data : new Error("Failed to fetch resume");
      }
}