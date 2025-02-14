import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/reducer/todoReducer"; // ✅ Ensure the correct path

const store = configureStore({
    reducer: {
        todos: todoReducer, // ✅ Make sure this matches your reducer name
    },
});

export default store;