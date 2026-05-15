import { load } from './js/fetch';
import { renderEventCard } from './js/render';

const list = document.querySelector('.events-list')

async function init() {
  try {
    const events = await load();
    
    if (!events || !events.length) {
      list.textContent = 'Подiй не знайдено.';
      return;
    }

  
    const markup = events.map(renderEventCard).join("");
    list.innerHTML = markup;  

    
  } catch (error) {
    console.log(error);
  }
}

init();

