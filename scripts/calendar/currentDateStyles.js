// shows red line on current time
import { openModal } from '../common/modal.js';

export const redLineStyles = () => {
  const currentDate = new Date();
  // looking for current day and time slot
  const slotElem = document.querySelector(
    `.calendar__day[data-day="${currentDate.getDate()}"] .calendar__time-slot[data-time="${currentDate.getHours()}"]`,
  );
  // create red line
  const currentTimeLine = document.createElement('div');
  currentTimeLine.setAttribute(
    'style',
    `width: 150px;
      position: absolute;
      top: ${currentDate.getMinutes()}px;
      border: 1px solid red;`,
  );
  // add line to current time slot
  if (slotElem) {
    slotElem.setAttribute('style', 'position: relative;');
    slotElem.append(currentTimeLine);
  }
  return null;
};

// looking for current day and time slot
// const slotElem = document.querySelector(
//   `.calendar__day[data-day="${currentDate.getDate()}"] .calendar__time-slot[data-time="${currentDate.getHours()}"]`,
// );

// export const getSlotElem = () => {
//   const currentDate = new Date();
//   const slotElem = document.querySelector(
//     `.calendar__day[data-day="${currentDate.getDate()}"] .calendar__time-slot[data-time="${currentDate.getHours()}"]`,
//   );
//   return slotElem;
// };
//
// getSlotElem().addEventListener('click', () => console.log('hi'));

// export const currentDateStyles = () => {
//   const todayDate = new Date().getDate();
//   const dayElem = document.querySelector(`.calendar__day-label[data-day="${todayDate}"]`);
//   dayElem.setAttribute(
//     'style',
//     `width: 5%;
//     background: floralwhite;
//     border-radius: 15px;`,
//   );
// };
//

// export const initCurrentDayStyles = () => {
//   redLineStyles();
// };
