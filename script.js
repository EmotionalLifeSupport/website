const bookingDialog = document.querySelector("#booking-dialog");
const bookingIntro = document.querySelector(".booking-intro");
const bookingForm = document.querySelector("#booking-form");
const bookingSuccess = document.querySelector("#booking-success");
const bookingSummary = document.querySelector("#booking-summary");
const dateOptions = document.querySelector("#date-options");
const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");

const formatDate = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
});

const getNextWeekdays = (count) => {
  const days = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);

  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
};

getNextWeekdays(3).forEach((date, index) => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const text = document.createElement("span");

  input.type = "radio";
  input.name = "date";
  input.value = date.toISOString().slice(0, 10);
  input.required = true;
  if (index === 0) input.checked = true;
  text.textContent = formatDate.format(date);
  label.append(input, text);
  dateOptions.append(label);
});

const openBooking = () => {
  bookingIntro.hidden = false;
  bookingForm.hidden = false;
  bookingSuccess.hidden = true;
  bookingDialog.showModal();
  document.body.classList.add("dialog-open");
};

const closeBooking = () => {
  bookingDialog.close();
  document.body.classList.remove("dialog-open");
};

document.querySelectorAll("[data-booking-open]").forEach((button) => {
  button.addEventListener("click", openBooking);
});

document.querySelectorAll("[data-booking-close]").forEach((button) => {
  button.addEventListener("click", closeBooking);
});

bookingDialog.addEventListener("click", (event) => {
  const bounds = bookingDialog.getBoundingClientRect();
  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (outside) closeBooking();
});

bookingDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const selectedDate = new Date(`${data.get("date")}T12:00:00`);
  bookingSummary.textContent = `${data.get("name")}, you selected ${formatDate.format(
    selectedDate,
  )} at ${data.get("time")}.`;
  bookingIntro.hidden = true;
  bookingForm.hidden = true;
  bookingSuccess.hidden = false;
  bookingSuccess.focus();
});

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("is-open", !expanded);
});

siteNav.addEventListener("click", (event) => {
  if (!event.target.closest("a, button")) return;
  menuButton.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
