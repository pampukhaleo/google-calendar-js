import { getItem, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal } from '../common/modal.js';
import { renderWeek } from '../calendar/calendar.js';

const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');

function clearEventForm() {
  // ф-ция должна очистить поля формы от значений
  eventFormElem.reset();
}

function onCloseEventForm() {
  // здесь нужно закрыть модальное окно и очистить форму
  closeModal();
  clearEventForm();
}

function onCreateEvent(event) {
  // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
  // создавать или менять DOM элементы здесь не нужно. Этим займутся другие ф-ции
  // при подтверждении формы нужно считать данные с формы
  // с формы вы получите поля date, startTime, endTime, title, description
  // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
  // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
  // полученное событие добавляем в массив событий, что хранится в storage
  // закрываем форму
  // и запускаем перерисовку событий с помощью renderEvents
  event.preventDefault();
  // get data from form
  const formData = Object.fromEntries(new FormData(eventFormElem));
  // get events
  const events = getItem('events');
  // add form data to events array
  events.push({
    id: Math.random(),
    title: formData.title,
    description: formData.description,
    start: new Date(getDateTime(formData.date, formData.startTime)),
    end: new Date(getDateTime(formData.date, formData.endTime)),
  });
  // render events
  renderWeek();
  // close form
  onCloseEventForm();
}

export function initEventForm() {
  // подпишитесь на сабмит формы и на закрытие формы
  // onCloseEventForm();
}

closeEventFormBtn.addEventListener('click', onCloseEventForm);
eventFormElem.addEventListener('submit', onCreateEvent);
