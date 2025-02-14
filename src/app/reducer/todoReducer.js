import { ADD_TODO, REMOVE_TODO } from "../action/ActionTypes";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { todos: [] };

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { 
                ...state, 
                todos: [...state.todos, action.payload] // ✅ Creates a new array 
            };

        case REMOVE_TODO:
            return { 
                ...state, 
                todos: state.todos.filter((todo) => todo !== action.payload) // ✅ Removes without mutating
            };

        default:
            return state;
    }
};

export default todoReducer;