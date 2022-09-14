function getYear() {
    var years = [];
    var date = new Date();
    var year = date.getFullYear();
    for (var i = 0; i < 5; i++) {

        years.push({
            key: year - i,
            value: year - i
        });
    }
    return years;
}

export const year = getYear();


export const month = [
    {
        key: 1,
        value: "January"
    },
    {
        key: 2,
        value: "February"
    },
    {
        key: 3,
        value: "March"
    },
    {
        key: 4,
        value: "April"
    },
    {
        key: 5,
        value: "May"
    },
    {
        key: 6,
        value: "June"
    },
    {
        key: 7,
        value: "July"
    },
    {
        key: 8,
        value: "August"
    },
    {
        key: 9,
        value: "September"
    },
    {
        key: 10,
        value: "October"
    },
    {
        key: 11,
        value: "November"
    },
    {
        key: 12,
        value: "December"
    }
]

export const weekend = [
    {
        "id": 1,
        "Name": "Friday"
    },
    {
        "id": 2,
        "Name": "Saturday"
    },
    {
        "id": 3,
        "Name": "Sunday"
    },
    {
        "id": 4,
        "Name": "Monday"
    },
    {
        "id": 5,
        "Name": "Tuesday"
    },
    {
        "id": 6,
        "Name": "Wednesday"
    },
    {
        "id": 7,
        "Name": "Thursday"
    }
]