// import * as events from '../events/events';

const storage = {
  // используется для удаления события
  eventIdToDelete: null,
  // хранит дату понедельника той отображаемой недели
  displayedWeekStart: null,
  // хранит массив всех событий
  events: [
    {
      id: 0.7520027086457333, // id понадобится для работы с событиями
      title: 'Title',
      description: 'Some description',
      start: new Date('2020-05-13T01:10:00.000Z'),
      end: new Date('2020-05-13T04:30:00.000Z'),
    },
    {
      id: 0.7520027086457334, // id понадобится для работы с событиями
      title: 'Title',
      description: 'Some description',
      start: new Date('2020-05-15T01:10:00.000Z'),
      end: new Date('2020-05-15T04:30:00.000Z'),
    },
    {
      id: 0.7520027086457335, // id понадобится для работы с событиями
      title: 'Title',
      description: 'Some description',
      start: new Date('2020-05-19T02:10:00.000Z'),
      end: new Date('2020-05-19T04:30:00.000Z'),
    },
  ],
  // это все данные, которые вам нужно хранить для работы приложения
};

export const setItem = (key, value) => {
  // ф-ция должна устанавливать значения в объект storage
  Object.assign(storage, { [key]: value });
};

export const getItem = key => {
  // ф-ция должна возвращать по ключу значения из объекта storage
  return storage[key];
};

// пример объекта события
const eventExample = {
  id: 0.7520027086457333, // id понадобится для работы с событиями
  title: 'Title',
  description: 'Some description',
  start: new Date('2020-03-17T01:10:00.000Z'),
  end: new Date('2020-03-17T04:30:00.000Z'),
};
