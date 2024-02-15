const url= 'https://restcountries.com/v2/all'
const  wrapper=document.querySelector('.card-wrapper')

const countriesApi=()=>{
    fetch('https://restcountries.com/v2/all')
    .then(response=>response.json())
    .then(data=>displayCountries(data))
}
const displayCountries=countries=>{
    const countriesHtml=countries.slice(0,32)
.map(country=> getCountry(country))

}
const getCountry=(country)=>{

const card= document.createElement('div')
card.classList.add('card')
card.innerHTML=  `  <div>
<img src="${country.flag}" alt="" height='100'>

<div class="common-wrapper">
    <p>Name:</p>
    <p>${country.name}</p>
</div>
<div class="common-wrapper">
<p>Population:</p>
<p>${country.population}</p>
</div>
<div class="common-wrapper">
<p>Area:</p>
<p>${country.area}</p>
</div>  
</div>
`
 wrapper.appendChild(card)

}



countriesApi()
