import axios from "axios";
import { BASE_URL } from "../Constant";


export const getPlans = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/payments/plans/`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
   
        if (response.status === 200) {
            return response.data; 
        } else {
            console.error(`Unexpected response status: ${response.status}`);
            return null;
        }
    } catch (error) {
        
        console.error("Error fetching plans:", error.message || error);
        throw error; 
    }
};


export const createPayments = async (token, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/payments/create-payment/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Fixed header format
        },
      }
    );

    if (response.status === 201 || response.status === 200) {
      console.log("Payment created successfully:", response.data);
      return response.data; 
    } else {
      console.error(`Unexpected response status: ${response.status}`);
      return null; 
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw error;
    }
  }
};
 