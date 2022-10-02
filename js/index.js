var date = new Date();
date = new Date();
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function renderCalendar() {
	const monthDays = document.getElementById("days");
	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();
	const firstDayIndex = new Date(
		date.getFullYear(),
		date.getMonth(),
		1
	).getDay();
	const previousLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();
	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDay();
	const nextDays = 7 - lastDayIndex - 1;

	document.getElementById("month").innerHTML = months[date.getMonth()];

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<a href="day.html" class="previous-date">${
			previousLastDay - x + 1
		}</a>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth() &&
			date.getFullYear() === new Date().getFullYear()
		) {
			days += `<a href="day.html" class="today" onclick="onDayClick(${i})">${i}</a>`;
		} else {
			days += `<a href="day.html" onclick="onDayClick(${i})">${i}</a>`;
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<a href="day.html" class="next-date">${j}</a>`;
	}

	monthDays.innerHTML = days;
}

document.getElementById("previous-month").addEventListener("click", () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();

function onDayClick(day) {
	sessionStorage.setItem("day", day);
	sessionStorage.setItem("month", months[date.getMonth()]);
	sessionStorage.setItem("year", date.getFullYear());
}
