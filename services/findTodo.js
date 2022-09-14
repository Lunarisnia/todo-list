'use strict';
const TODO_LIST = {
    monday: [
        '08:00 AM - Go To School',
        '12:00 PM - Have a Lunch',
        '05:00 PM - Take a Bath',
        '09:30 PM - Go To Sleep'
    ],
    tuesday: [
        '08:30 AM - Go To School',
        '04:00 PM - Go To the mall',
        '09:30 PM - Go To Sleep'
    ],
    wednesday: [
        '09:30 AM - Go To School',
        '01:30 PM - Go To A Concert',
        '09:30 PM - Go To Sleep'
    ],
    thursday: [
        '12:30 PM - Go Shopping',
        '09:30 PM - Go To Sleep'
    ],
    friday: [
        '09:30 PM - Go To Sleep'
    ],
    saturday: [
        '12:00 PM - Have a Lunch'
    ],
    sunday: [
        '10:00 PM - Go Play Basketball'
    ]
}


module.exports = (query) => {
    switch (query) {
        case 'mon':
        case 'monday':
            return TODO_LIST.monday;
        case 'tue':
        case 'tuesday':
            return TODO_LIST.tuesday;
        case 'wed':
        case 'wednesday':
            return TODO_LIST.wednesday;
        case 'thu':
        case 'thursday':
            return TODO_LIST.thursday;
        case 'fri':
        case 'friday':
            return TODO_LIST.friday;
        case 'sat':
        case 'saturday':
            return TODO_LIST.saturday;
        case 'sun':
        case 'sunday':
            return TODO_LIST.sunday;
        default:
            throw new Error("InternalServerError");
    }
}