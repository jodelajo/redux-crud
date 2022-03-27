import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      //write code
      console.log("add user");
      state.value.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
