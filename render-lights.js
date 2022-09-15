export function renderLight(light) {
    const li = document.createElement('li');

    const headerEl = document.createElement('h2');
    headerEl.textContent = light.location;

    const pEl = document.createElement('p');
    pEl.textContent = light.color + ' ' + light.type;

    li.append(headerEl, pEl);

    li.classList.add('light-item');

    return li;
}
