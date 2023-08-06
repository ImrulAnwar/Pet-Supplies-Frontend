import { BASE_URL } from "../Utils/constants";
import axios from "axios";

export const fetchAllItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/items/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
