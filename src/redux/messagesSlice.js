import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {config} from '../../config';
import axios from 'axios';

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const response = await axios.get(
      `${config.apiBaseUrl}/messages/allmessages`,
    );
    return response.data; // Assuming the API returns an array of messages
  },
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMessages.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched messages to the array
        state.items = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default messagesSlice.reducer;
