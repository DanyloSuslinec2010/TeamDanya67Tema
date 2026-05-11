import { load } from './js/fetch';
import { createListFromObject } from './js/render';

const todosRoot = document.getElementById('todos');
const todoForm = document.getElementById('todo-form');
const todoText = document.getElementById('todo-text');

async function init() {
  try {
    const events = await load();
    todosRoot.innerHTML = '';
    
    if (!events || !events.length) {
      todosRoot.textContent = 'События не найдены.';
      return;
    }

    const list = document.createElement('ul');
    events.forEach((event) => {
      const item = document.createElement('li');
      item.append(createListFromObject(event));
      list.append(item);
    });
    todosRoot.append(list);
  } catch (error) {
    todosRoot.textContent = 'Ошибка загрузки данных.';
    console.error(error);
  }
}

init();

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
