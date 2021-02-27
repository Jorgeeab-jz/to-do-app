let testObject = [
    {
        date : 'today',
        ammount : 58
    },

    {
        date : 'tomorrow',
        ammount : 64
    }
]


localStorage.setItem('myCat', JSON.stringify(testObject));
console.log(testObject)
console.log(JSON.parse(localStorage.getItem('myCat')));