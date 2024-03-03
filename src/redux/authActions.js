// authActions.js

import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {config} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({email, password}) => {
    try {
      const response = await axios.post(`${config.apiBaseUrl}/login`, {
        email,
        password,
      });
      console.log('API Response:', response.data);
      const {accessToken, refreshToken} = response.data;

      // Store tokens securely in AsyncStorage
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      return response.data;
    } catch (error) {
      console.error(
        'API Error:',
        error.response ? error.response.data : error.message,
      );
      // Handle the error appropriately
      // You might want to throw an error or return a specific error structure
      throw error;
    }
  },
);

export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({email, password}, {rejectWithValue}) => {
    try {
      // Adjust the payload as needed for your backend API requirements
      const response = await axios.post(`${config.apiBaseUrl}/register`, {
        email,
        password,
      });
      console.log('Signup response:', response.data);
      return response.data; // This could include tokens, user info, etc.
    } catch (error) {
      console.error(
        'Signup error:',
        error.response ? error.response.data : error.message,
      );
      // Using rejectWithValue to handle errors in a more controlled manner
      return rejectWithValue(
        error.response ? error.response.data : {error: error.message},
      );
    }
  },
);
