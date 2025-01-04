const monthNames = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];

const datenow = new Date();
const day = datenow.getDate();
const month = monthNames[datenow.getMonth() + 1];
let $month_day = document.getElementById("month-day");
$month_day.innerHTML = ` ${month}. ${day}`;

const year = datenow.getFullYear();
let $year = document.getElementById("year");
$year.innerHTML = year;
