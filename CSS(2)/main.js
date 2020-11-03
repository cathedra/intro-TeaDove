// Гесметио
document.querySelectorAll(".value:nth-child(-n+3) .unit_temperature_c").forEach(el => el.setAttribute("style", "background-color: #FF7F50;"))
// Яндекс погода
document.querySelectorAll(".forecast-briefly__days .forecast-briefly__day:nth-child(n+5):nth-child(-n+7) .temp__value").forEach(el => el.setAttribute("style", "background-color: #FF7F50;"))
// Запускать в консоли dev-tools
