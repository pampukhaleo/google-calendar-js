import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const renderHeader = () => {
  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка

  // create week range from monday
  const daysArray = generateWeekRange(getItem('displayedWeekStart'));
  // create html elements with week day name and its date
  const days = daysArray.map(
    day => `
    <div class="calendar__day-label day-label" data-day="${day.getDate()}">
      <span class="day-label__day-name">${daysOfWeek[day.getDay()]}</span>
      <span class="day-label__day-number">${day.getDate()}</span>
    </div>`,
  );
  // find header element and add html elements
  const calendarHeaderElem = document.querySelector('.calendar__header');
  calendarHeaderElem.innerHTML = days.join('');
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик
const createBtnElem = document.querySelector('.create-event-btn');

createBtnElem.addEventListener('click', openModal);
