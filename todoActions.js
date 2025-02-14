// AddTodo Action
import { ADD_TODO, REMOVE_TODO } from "./src/app/action/ActionTypes";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    payload: todo,
});