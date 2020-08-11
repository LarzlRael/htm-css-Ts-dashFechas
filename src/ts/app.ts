import "../scss/styles.scss";
import { cards, items, sumatoria } from "./list-items";
import { dayName, dates } from './helpers';
import { MANAGEMENT } from "./icons";

//?Here go you ts code
//* import '../static/image.jpg';
//* import 'image.jpg';
const dash = document.getElementById('dashboard');
const menu_drawer_active = document.getElementById('menu-drawer-active');
menu_drawer_active.addEventListener('click', () => {
    document.querySelector('#dashboard').classList.toggle('active');
})


items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
        ${item.icon}
        <span>${item.title}</span>

    `;
    dash.appendChild(div);
});



const days = document.getElementById('days');
dates(new Date()).forEach(date => {
    const div = document.createElement('div');
    div.classList.add('day');

    const _date = date.getDate();
    const name_day = dayName(date.getDay());
    if (date.getDay() === 0 || date.getDay() === 6) {
        div.classList.add('active');
    }
    div.innerHTML = `
        <div class="dayname">
            ${name_day}
        </div>
        <div class="date">
            ${_date}
        </div>
    `;

    days.appendChild(div);
})

const tarjetas = document.getElementById('tarjetas');

for (let i = 0; i < cards.length; i++) {
    const div = document.createElement('div');
    div.classList.add('tarjeta', cards[i].bg_color)
    div.innerHTML = `
        ${cards[i].icon}
        <span class="cantidad">
            ${cards[i].quantity}
        </span>
        <span class="desc">
            ${cards[i].title}
        </span>
        <div class="line"></div>`;
    tarjetas.appendChild(div);
}

const div = document.createElement('div');
div.classList.add('tarjeta', 'light_blue')
div.innerHTML = `
        ${MANAGEMENT}
        <span class="cantidad">
            ${sumatoria()}
        </span>
        <span class="desc">
            Total Participants
        </span>
        <div class="line"></div>`;

tarjetas.appendChild(div);


