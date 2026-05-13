
export function renderEventCard(event) {
  return `
    <li class="event-card" data-id="${event.id}">
      <img src="${event.images[0].url}" alt="${event.name}" />
      <div class="event-meta">
        <h3>${event.name}</h3>
        <p class="event-date">${event.dates.start.localDate}</p>
        <p class="event-venue">${event._embedded.venues[0].name}</p>
      </div>
    </li>
  `;
}
