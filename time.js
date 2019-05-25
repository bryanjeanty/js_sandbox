let val;

const today = new Date(); // today's date by default
const birthday = new Date('5-1-1996');
const birthdayAndTime = new Date('5-1-1996 11:25:00');

val = today; // ** varies **
val = birthday; // (Day) May 01 1996
val = birthdayAndTime; // (Day) May 01 1996 11:25:00
val = today.getMonth(); // current month - 1 (0-based indexing)
val = today.getDate(); // current date
val = today.getDay(); // current day - 1 (numerical output)
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliSeconds();
val = today.getTime(); // amount of time in milliseconds since jan 1, 1970
val = today.getTime() / 1000; // time since in seconds; unix time

birthday.setMonth(2); // march
birthday.setDate(12); // sets the day requested
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
