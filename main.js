months = [
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
    "December"
]
today = new Date();
setHeader = function () {
    monthYearDiv = document.getElementsByClassName('month-year')[0]
    monthYearDiv.innerText = months[today.getMonth()] + ', ' + today.getFullYear()
    calendar = document.getElementsByClassName('calendar')[0]
    tbody = calendar.getElementsByTagName('tbody')[0]
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild)
    }
    firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    monthStartDay = firstDayOfMonth.getDay();
    lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    if (monthStartDay !== 0) {
        currentDate = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth(), -monthStartDay+1)
    } else {
        currentDate = firstDayOfMonth;
    }
    console.log(currentDate, lastDayOfMonth, currentDate < lastDayOfMonth)
    todaysDate = new Date()
    createNextRow = true;
    while (createNextRow === true) {
        tr = document.createElement('tr')
        tbody.appendChild(tr)

        for (i = 0; i < 7; i++) {
            td = document.createElement('td');
            if (i === 0 || i === 6) {
                td.classList.add('weekend')
            } else {
                td.classList.add('weekday')
            }
            if (currentDate.getMonth() !== today.getMonth()) {
                td.classList.add('other-month')
            }
            if(currentDate.getDate() === todaysDate.getDate()
                && currentDate.getMonth() === todaysDate.getMonth()
                && currentDate.getFullYear() === todaysDate.getFullYear()
            ) {
                td.classList.add('today')
            }
            td.innerText = currentDate.getDate();
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)

            tr.appendChild(td);
        }
        console.log(currentDate)
        createNextRow = currentDate < lastDayOfMonth
    }
}
setHeader()


btnPrevious = document.getElementById('btnPrevious')
btnPrevious.onclick = function () {
    today = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    setHeader();
}


btnNext = document.getElementById('btnNext')
btnNext.onclick = function () {
    today = new Date(today.getFullYear(), today.getMonth() + 1, 1)
    setHeader();
}

btnGoToToday = document.getElementById('btnGoToToday')
btnGoToToday.onclick = function () {
    today = new Date()
    setHeader();
}