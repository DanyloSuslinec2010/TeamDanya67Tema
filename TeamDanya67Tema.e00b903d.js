async function e(){let e=await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=sGrEGWyJv5tgPVIsbib4yeZ1GjEAJcgb");return(await e.json())._embedded.events}function t(e){return`
    <li class="event-card" data-id="${e.id}">
      <img src="${e.images[0].url}" />
      <h3>${e.name}</h3>
      <p>${e.dates.start.localDate}</p>
      <p>${e._embedded.venues[0].name}</p>
    </li>
  `}let n=document.querySelector(".events-list");!async function(){try{let a=await e();if(!a||!a.length){n.textContent="Подiй не знайдено.";return}n.innerHTML=a.map(t).join("")}catch(e){console.log(e)}}();
//# sourceMappingURL=TeamDanya67Tema.e00b903d.js.map
