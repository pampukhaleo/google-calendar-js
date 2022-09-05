import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
  const hoursArray = createNumbersArray(1, 24);
  const sideTimeElem = hoursArray.map(
    hour => `
      <div class="time-slot">
        <span class="time-slot_time">${hour}:00</span>
      </div>
    `,
  );
  const timeScaleElem = document.querySelector('.calendar__time-scale');
  timeScaleElem.innerHTML = sideTimeElem.join('');
};
