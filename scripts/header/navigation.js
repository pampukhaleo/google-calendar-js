import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';
import shmoment from '../common/shmoment.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector('.navigation__displayed-month');

function renderCurrentMonth() {
  // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
  // вставить в .navigation__displayed-month
  displayedMonthElem.innerHTML = getDisplayedMonth(getItem('displayedWeekStart'));
}

const onChangeWeek = event => {
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
  console.dir(event.target.dataset.direction);
  const monday = getItem('displayedWeekStart');
  console.log(monday);
  switch (event.target.dataset.direction) {
    case 'next':
      setItem('displayedWeekStart', shmoment(monday).add('days', 7).result());
      renderHeader();
      renderCurrentMonth();
      break;
    case 'prev':
      setItem('displayedWeekStart', shmoment(monday).subtract('days', 7).result());
      renderHeader();
      renderCurrentMonth();
      break;
    case 'today':
      setItem('displayedWeekStart', getStartOfWeek(new Date()));
      renderHeader();
      renderCurrentMonth();
      break;
    default:
      break;
  }
};

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener('click', onChangeWeek);
};
