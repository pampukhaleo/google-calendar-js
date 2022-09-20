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

const onDirectionChange = direction => {
  // get current monday
  const monday = getItem('displayedWeekStart');
  // change weeks on button direction click
  if (direction === 'next') {
    setItem('displayedWeekStart', shmoment(monday).add('days', 7).result());
  } else if (direction === 'prev') {
    setItem('displayedWeekStart', shmoment(monday).subtract('days', 7).result());
  } else {
    setItem('displayedWeekStart', getStartOfWeek(new Date()));
  }
};

const onChangeWeek = event => {
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)

  // change week on direction click
  onDirectionChange(event.target.dataset.direction);
  // render calendar
  renderHeader();
  renderCurrentMonth();
  renderWeek();
};

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener('click', onChangeWeek);
};
