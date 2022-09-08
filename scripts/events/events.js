import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
  // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
  // установите eventIdToDelete с id события в storage
}

function removeEventsFromCalendar() {
  // ф-ция для удаления всех событий с календаря
}

const createEventElement = event => {
  // ф-ция создает DOM элемент события
  // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  // нужно добавить id события в дата атрибут
  // здесь для создания DOM элемента события используйте document.createElement
  const eventElem = document.createElement('div');
  eventElem.classList.add('event');
  eventElem.dataset.eventId = event.id;
  eventElem.setAttribute('style', 'height: 200px;');
  const eventTitle = document.createElement('div');
  eventTitle.classList.add('event__title');
  eventTitle.textContent = `${event.title}`;
  const eventTime = document.createElement('div');
  const startHours = event.start.getHours();
  const startMinutes = event.start.getMinutes();
  const endHours = event.end.getHours();
  const endMinutes = event.end.getMinutes();
  eventTime.classList.add('event__time');
  eventTime.textContent = `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;
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
  const mondayDate = getItem('displayedWeekStart');
  const events = getItem('events');
  // console.log(mondayDate);
  // console.log(events);

  events.map(event => {
    const timeSlot = document.querySelectorAll('.calendar__time-slot');

    const eventHours = event.start.getHours().toString();

    const dayDate = document.querySelector('.calendar__day-label');
    const eventDate = event.start.getDate().toString();
    // console.log(eventHours);
    // console.log(eventDate);
    Array.from(timeSlot).map(slot =>
      slot.dataset.time === eventHours ? slot.append(createEventElement(event)) : `hi`,
    );
    console.log('daydate', dayDate);
    // Array.from(dayDate).map(day => console.log('day', day));
    // console.log(event);

    // const slotElem = document.querySelector(
    //   `.calendar__day[data-day="${start.getDate()}"] .calendar__time-slot[data-time="${start.getHours()}"]`,
    // );
  });
};

function onDeleteEvent() {
  // достаем из storage массив событий и eventIdToDelete
  // удаляем из массива нужное событие и записываем в storage новый массив
  // закрыть попап
  // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
}

deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);
