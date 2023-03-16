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
    
    fetch('http://localhost:5050/js/API.json', options)
        .then(response => response.json())
        .then(response => {
            topHotel = response
            console.log(topHotel)
            tarjetas()//metodo
        })
        .catch(err => console.error(err));
        
}
    const tarjetas = () => {

           //hotelName.querySelector('img').setAttribute('src',topHotel.LATAM.lastMinuteDealsCardImageUrl)
           hotelName.querySelectorAll('p')[0].textContent = "Código del país: " + topHotel.LATAM.countryCode
           hotelName.querySelectorAll('p')[1].textContent = "Idioma: " + topHotel.LATAM.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[2].textContent = "Numero telefonico: " + topHotel.LATAM.supportedLocales[0].localeSpecificSupportPhoneNumber
           
           hotelName.querySelectorAll('p')[3].textContent ="Codigo del país: " + topHotel.BE.countryCode
           hotelName.querySelectorAll('p')[4].textContent = "Idioma: " + topHotel.BE.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[5].textContent = "Numero telefonico: " + topHotel.BE.supportedLocales[0].localeSpecificSupportPhoneNumber
          
           hotelName.querySelectorAll('p')[6].textContent ="Codigo del país: " + topHotel.JP.countryCode
           hotelName.querySelectorAll('p')[7].textContent = "Idioma: " + topHotel.JP.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[8].textContent = "Numero telefonico: " + topHotel.JP.supportedLocales[0].localeSpecificSupportPhoneNumber

           hotelName.querySelectorAll('p')[9].textContent ="Codigo del país: " + topHotel.TW.countryCode
           hotelName.querySelectorAll('p')[10].textContent = "Idioma: " + topHotel.TW.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[11].textContent = "Numero telefonico: " + topHotel.TW.supportedLocales[0].localeSpecificSupportPhoneNumber

           hotelName.querySelectorAll('p')[12].textContent ="Codigo del país: " + topHotel.ID.countryCode
           hotelName.querySelectorAll('p')[13].textContent = "Idioma: " + topHotel.ID.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[14].textContent = "Numero telefonico: " + topHotel.ID.supportedLocales[0].localeSpecificSupportPhoneNumber

           hotelName.querySelectorAll('p')[15].textContent ="Codigo del país: " + topHotel.SG.countryCode
           hotelName.querySelectorAll('p')[16].textContent = "Idioma: " + topHotel.SG.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[17].textContent = "Numero telefonico: " + topHotel.SG.supportedLocales[0].localeSpecificSupportPhoneNumber           

           hotelName.querySelectorAll('p')[18].textContent ="Codigo del país: " + topHotel.CA.countryCode
           hotelName.querySelectorAll('p')[19].textContent = "Idioma: " + topHotel.CA.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[20].textContent = "Numero telefonico: " + topHotel.CA.supportedLocales[0].localeSpecificSupportPhoneNumber

           hotelName.querySelectorAll('p')[21].textContent ="Codigo del país: " + topHotel.CO.countryCode
           hotelName.querySelectorAll('p')[22].textContent = "Idioma: " + topHotel.CO.supportedLocales[0].languageCode
           hotelName.querySelectorAll('p')[23].textContent = "Numero telefonico: " + topHotel.CO.supportedLocales[0].localeSpecificSupportPhoneNumber
           hotelName.querySelectorAll('p')[24].textContent = "Reservación: " + topHotel.CO.deepLinkDateFormat
           
           const clone = hotelName.cloneNode(true)
           fragment.appendChild(clone)

           cardsHotel.appendChild(fragment)
}