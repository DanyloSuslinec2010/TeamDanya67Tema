const apikey = 'sGrEGWyJv5tgPVIsbib4yeZ1GjEAJcgb';

const URL = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${apikey}`;

export async function load() {

  const res = await fetch(URL);
  const data = await res.json();

  console.log(data._embedded.events);
  return data._embedded.events;
}
