// fetch('https://restcountries.herokuapp.com/api/v1')
// .then((result) => {
//     return result.json()
// })

// a fetch api code
fetch('https://corona-api.com/countries')
.then((result) => {
     return result.json();
})
.then((data) => {
    data.data.forEach(information => {
        console.log(`${information.name}: Confirmed cases: ${information.latest_data.confirmed}, Critical cases: ${information.latest_data.critical}, Deaths: ${information.latest_data.deaths}, Recoveries: ${information.latest_data.recovered}`)
    });  
})
.catch((err) => {
    console.log(err)
})