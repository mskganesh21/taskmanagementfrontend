import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    status: "idle",
    error:null
}

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await axios.get()
})

const TaskSlice = createSlice({
    name: 'Tasks',
    initialState: {},
    reducers: {}
})

export const {} = TaskSlice.actions;
export default TaskSlice.reducer;