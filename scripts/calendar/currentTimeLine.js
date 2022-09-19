export const currentTimeLine = () => {
  const currentTime = new Date();
  const slotElem = document.querySelector(
    `.calendar__day[data-day="${currentTime.getDate()}"] .calendar__time-slot[data-time="${currentTime.getHours()}"]`,
  );
  const currentTimeLine = document.createElement('div');
  currentTimeLine.setAttribute(
    'style',
    `width: 150px;
      position: absolute;
      top: ${currentTime.getMinutes()}px;
      border: 1px solid red;`,
  );
  slotElem.setAttribute('style', 'position: relative;');
  slotElem.append(currentTimeLine);
};
