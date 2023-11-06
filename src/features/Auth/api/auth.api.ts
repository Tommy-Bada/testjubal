import axios from "axios";
import { config } from "@/config";

export const loginRequest = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      config.apiBaseUrl + "/api/v1/auth/signin",
      {
        email,
        password,
      }
    );

    return response.data;
  } catch (error) {
    // Handle errors appropriately, e.g., logging or throwing an exception
    throw error;
  }
};

// Signup/Create User
export const signupRequest = async ({
  email,
  password,
  serviceType,
  name,
  contact,
  country,
}: {
  email: string;
  password: string;
  serviceType: string;
  name: string;
  contact: string;
  country: string;
}) => {
  try {
    const username = name && name.split(" ")[0];
    const firstName = name && name.split(" ")[0];
    const lastName = name && name.split(" ")[1];
    const role = serviceType === "Looking for Talents" ? "talent" : "client";

    const response = await axios.post(
      config.apiBaseUrl + "/api/v1/auth/signup",
      {
        email,
        password,
        username,
        role,
        firstName,
        lastName,
        contact,
        country,
      }
    );
    return response.data;
  } catch (error) {
    // Handle errors appropriately, e.g., logging or throwing an exception
    throw error;
  }
};
