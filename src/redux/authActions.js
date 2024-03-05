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
      return {accessToken, refreshToken};
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

export const addMessage = createAsyncThunk(
  'messages/create',
  async ({messageContent, accessToken}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${config.apiBaseUrl}/messages/create`, // Ensure this matches your actual API endpoint
        {message: messageContent},
        {
          headers: {
            // Adjust the header to use 'auth-token' as per backend expectation
            'auth-token': accessToken,
          },
        },
      );
      console.log('Add message response:', response.data);
      return response.data; // Assuming this is the desired response structure
    } catch (error) {
      console.error(
        'Add message error:',
        error.response ? error.response.data : error.message,
      );
      // Handle errors more granularly with rejectWithValue
      return rejectWithValue(
        error.response ? error.response.data : {error: error.message},
      );
    }
  },
);
