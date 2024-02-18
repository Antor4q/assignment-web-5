function createNewElement(eventId, value){
    const seatsText = value.innerText;
    const p = document.createElement('p');
    p.innerText = seatsText ;
    const container = document.getElementById(eventId);
    container.appendChild(p);
}

