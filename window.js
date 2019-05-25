// Window methods / objects / properties

// alert
window.alert('hello world');

// prompt
const input = prompt();
alert(input);

// confirm
if (confirm('Are you sure')) {
  console.log('YES');
} else {
  console.log('NO');
}


let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width - document within scrollbar
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location; // object of current page metadata
val = window.location.hostname; // domain of current page
val = window.location.port; // port of current page
val = window.location.href; // domain and port of current page
val = window.location.search; // query string

// redirect
window.location.href = 'https://google.com'; // sets the domain and port of current page
// the code above will automatically redirect to domain specified

// reload
window.location.reload(); // reloads page
// use with caution - can crash app
// use within function or conditional


/*
* history object - go method
* @param <number> :: negative; sends user back to page in history equivalent to number value passed in
*/
window.history.go(-1); // goes back one page in user's history
window.history.length(); // returns number of pages in user's history from when window was keeping track of user activity

// navigator object
val = window.navigator(); // object of browser metadata
// appname will always be navigator, unless on IE
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
