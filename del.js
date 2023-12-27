const names = ['apple', 'banana', 'grapes', 'cashew']
// console.log(names.sort());

const num = [1, 21, 13, 4, 50]
console.log(num.sort((a, b) => { return a - b }));

let data = [
    {
        "id": "0",
        "petName": "Pepe",
        "ownerName": "felix",
        "aptNotes": "It's time for this rabbit's post spaying surgery checkup",
        "aptDate": "2018-11-28 13:30"
    },
    {
        "id": "1",
        "petName": "Rio",
        "ownerName": "Philip Ransu",
        "aptNotes": "Rio is up for his next round of vaccinations",
        "aptDate": "2018-11-28 10:15"
    },
    {
        "id": "2",
        "petName": "asnt",
        "ownerName": "Zachary Heilyn",
        "aptNotes": "Scooter has been pawing at his ear and may have an ear infection",
        "aptDate": "2018-11-28 14:45"
    }
]


console.log(data.sort((a, b) => a.petName.localeCompare(b.petName)));