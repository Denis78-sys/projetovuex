import { createStore } from "vuex";
import { faqCategories } from "@/db.json";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    fetchTodos(context) {
      const todos = faqCategories;
      context.commit("SET_TODOS", todos);
    },
  },
  getters: {
    $allTodos(state) {
      return state.todos;
    },
  },
});
