import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale

  // create hours array
  const hoursArray = createNumbersArray(1, 23);
  // create html element with data-time = hour
  const sideTimeElem = hoursArray.map(
    hour => `
      <div class="time-slot">
        <span class="time-slot_time" data-time="${hour}">${hour}:00</span>
      </div>
    `,
  );
  // find html element for timescale and add hours
  const timeScaleElem = document.querySelector('.calendar__time-scale');
  timeScaleElem.innerHTML = sideTimeElem.join('');
};
