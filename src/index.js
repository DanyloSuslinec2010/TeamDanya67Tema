import { load } from './js/fetch';
import { createListFromObject } from './js/render';

const todosRoot = document.getElementById('todos');
const todoForm = document.getElementById('todo-form');
const todoText = document.getElementById('todo-text');

load();

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoText.value.trim();
  if (!text) {
    return;
  }

  const todoObject = {
    [`task-${Date.now()}`]: {
      title: text,
      created: new Date().toLocaleString(),
    },
  };

  todosRoot.innerHTML = '';
  todosRoot.append(createListFromObject(todoObject));
  todoText.value = '';
});
