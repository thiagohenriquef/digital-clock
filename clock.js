function mountDate () {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const contentDate = document.querySelector('.date');
  const contentHour = document.querySelector('.hour');

  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const dayOfWeek = daysOfTheWeek[now.getDay()];

  contentDate.innerHTML = `${dayOfWeek}, ${day}-${month}-${year}`

  const second = fixNumber(now.getSeconds());
  const minute = fixNumber(now.getMinutes());
  const hours = fixNumber(now.getHours());

  contentHour.innerHTML = `${hours}:${minute}:${second}`
}

function fixNumber (number) {
  return number.toString().length === 1 ? `0${number}` : number;
}

mountDate();

window.setInterval(mountDate, 1000);