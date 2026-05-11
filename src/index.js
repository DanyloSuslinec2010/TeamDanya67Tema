import { load } from './js/fetch';
import { renderEventCard } from './js/render';

async function init() {
  try {
    const events = await load();
    
    if (!events || !events.length) {
      todosRoot.textContent = 'Подiй не знайдено.';
      return;
    }

    const list = document.createElement('ul');
    events.forEach((event) => {
   renderEventCard(event);
  
  } catch (error) {
    console.error(error);
  });
}

init();

