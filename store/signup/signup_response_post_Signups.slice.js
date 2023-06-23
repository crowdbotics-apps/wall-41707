import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const signup_post_api_v1_signup_create = createAsyncThunk(
  "signup_response_post_Signups/signup_post_api_v1_signup_create",
  async payload => {
    const response = await apiService.signup_post_api_v1_signup_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const signup_response_post_SignupsSlice = createSlice({
  name: "signup_response_post_Signups",
  initialState,
  reducers: {},
  extraReducers: {
    [signup_post_api_v1_signup_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [signup_post_api_v1_signup_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [signup_post_api_v1_signup_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  signup_post_api_v1_signup_create,
  slice: signup_response_post_SignupsSlice
}
