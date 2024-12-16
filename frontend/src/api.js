import axios from "axios";

const API_URL = "http://localhost:8000/api/tasks/";

export const fetchTasks = () => axios.get(API_URL);
export const createTask = (data) => axios.post(API_URL, data);
export const updateTask = (id, data) => axios.patch(`${API_URL}${id}/`, data);
