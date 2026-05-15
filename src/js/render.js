
export function renderEventCard(event) {
  return `
    <li class="event-card" data-id="${event.id}">
      <img src="${event.images[0].url}" />
      <h3>${event.name}</h3>
      <p>${event.dates.start.localDate}</p>
      <p>${event._embedded.venues[0].name}</p>
    </li>
  `;
}
