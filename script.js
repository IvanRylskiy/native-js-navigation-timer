window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let deadLine = '2019-05-24';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hoursWithoutDays = Math.floor((t / (1000 * 60 * 60))), // if don't use days
            hoursWithDays = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hoursWithoutDays': hoursWithoutDays,
            'hoursWithDays': hoursWithDays,
            'days': days
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            days.textContent = t.days;
            hours.textContent = t.hoursWithDays;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hoursWithDays);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);            
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);
}