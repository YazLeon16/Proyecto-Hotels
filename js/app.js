const cardsHotel = document.getElementById('cards')
const hotelName = document.getElementById('hotel').content 
const fragment = document.createDocumentFragment()
let topHotel =[]

document.addEventListener('DOMContentLoaded', () =>{
    loadHot()
})
const loadHot = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e4d6169bbfmsh3ea3bd5f647c0abp140a27jsn7becb48982b6',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }

};

fetch('https://hotels4.p.rapidapi.com/v2/get-meta-data', options)
	.then(response => response.json())
	.then(response => {
        topHotel =response
        tarjetas
    })
	.catch(err => console.error(err));
}
    const tarjetas = () => {
        topHotel.forEach(hotel =>{
            console.log(hotel)
            hotelName.querySelector('img').setAttribute('src',hotel.trackMetadata.displayImageUri)
            hotelName.querySelectorAll('p')[0].textContent = hotel.trackMetadata.hotels[0].name
            hotelName.querySelectorAll('p')[1].textContent = hotel.trackMetadata.hotels[1].posName
            hotelName.querySelectorAll('p')[2].textContent = hotel.trackMetadata.hotels[2].hcomLocale

            
        })
}