import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';
import { generateWeekRange } from '../common/time.utils.js';
import { renderWeek } from '../calendar/calendar.js';
import { redLineStyles } from '../calendar/currentDateStyles.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
  // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
  // установите eventIdToDelete с id события в storage
  if (event.path.length > 10) {
    // open pop up with x,y positioning
    openPopup(event.x, event.y);
    // set item id to delete
    setItem('eventIdToDelete', event.target.dataset.eventId);
  }
  return null;
}

function removeEventsFromCalendar() {
  // ф-ция для удаления всех событий с календаря
  setItem('events', []);
}

const createEventElement = event => {
  // ф-ция создает DOM элемент события
  // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  // нужно добавить id события в дата атрибут
  // здесь для создания DOM элемента события используйте document.createElement

  // get difference between event start time and end time to make proper element height
  const eventElemHeight = (event.end.getTime() - event.start.getTime()) / 60 / 1000;
  // get event start time minutes to have px count to style top position
  const eventElemStartMinutes = event.start.getMinutes();
  // create event element
  const eventElem = document.createElement('div');
  eventElem.classList.add('event');
  eventElem.dataset.eventId = event.id;
  eventElem.setAttribute(
    'style',
    `height: ${eventElemHeight}px;
      top: ${eventElemStartMinutes}px;`,
  );

  // create event title
  const eventTitle = document.createElement('div');
  eventTitle.classList.add('event__title');
  eventTitle.dataset.eventId = event.id;
  eventTitle.textContent = `${event.title}`;

  // create event time
  const eventTime = document.createElement('div');
  const startHours = event.start.getHours();
  const startMinutes = event.start.getMinutes();
  const endHours = event.end.getHours();
  const endMinutes = event.end.getMinutes();
  eventTime.classList.add('event__time');
  eventTime.dataset.eventId = event.id;
  eventTime.textContent = `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;

  // add title and time to event element
  eventElem.append(eventTitle);
  eventElem.append(eventTime);

  return eventElem;
};

export const renderEvents = () => {
  // достаем из storage все события и дату понедельника отображаемой недели
  // фильтруем события, оставляем только те, что входят в текущую неделю
  // создаем для них DOM элементы с помощью createEventElement
  // для каждого события находим на странице временную ячейку (.calendar__time-slot)
  // и вставляем туда событие
  // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
  // не забудьте удалить с календаря старые события перед добавлением новых
  // renderWeek();

  // get monday
  const mondayDate = getItem('displayedWeekStart');
  // get events
  const events = getItem('events');
  // get current week dates
  const weekArray = generateWeekRange(mondayDate).map(date => date.getDate());
  // show events
  events
    .filter(event => weekArray.includes(event.start.getDate())) // filter events to show current week events
    .map(event => {
      const slotElem = document.querySelector(
        `.calendar__day[data-day="${event.start.getDate()}"] .calendar__time-slot[data-time="${event.start.getHours()}"]`,
      );
      slotElem.setAttribute('style', 'position: relative;');
      slotElem.append(createEventElement(event));
    });
  // render red line for current time
  redLineStyles();
};

function onDeleteEvent() {
  // достаем из storage массив событий и eventIdToDelete
  // удаляем из массива нужное событие и записываем в storage новый массив
  // закрыть попап
  // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)

  // get event id
  const itemId = getItem('eventIdToDelete');
  // get events
  const events = getItem('events');
  // get filtered array with deleted element by id
  const updatedEvents = events.filter(element => element.id !== +itemId);
  // set new events array
  setItem('events', updatedEvents);
  // close pop up
  closePopup();
  // render events
  renderWeek();
}

deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);
