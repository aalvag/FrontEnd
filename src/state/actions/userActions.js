import { createAsyncThunk } from "@reduxjs/toolkit";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const signIn = createAsyncThunk(
  "createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${Constants?.manifest?.extra?.apiUrl}/api/auth/login`,
        userData,
        config
      );
      await AsyncStorage.setItem("authToken", response.headers.authtoken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
