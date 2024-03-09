import {configureStore} from '@reduxjs/toolkit';
import TaskReducer from './Slices/task-slice';

const Store = configureStore({
    reducer: {
        task: TaskReducer
    }
});

export default Store;