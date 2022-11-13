const input = document.querySelector(".input")
const btn = document.querySelector(".submit")
const capital = document.querySelector(".capital")
const continent = document.querySelector(".continent")
const population = document.querySelector(".population")
const currency = document.querySelector(".currency")
const commonlang = document.querySelector(".commonlang")

btn.addEventListener('click', function (name) {
    let url = "https://restcountries.com/v3.1/name/" + input.value + "?fullText=true"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            capital.innerHTML = data[0].capital[0]
            continent.innerHTML = data[0].continents[0]
            population.innerHTML = data[0].population
            currency.innerHTML = data[0].currencies[Object.keys(data[0].currencies)].name
            commonlang.innerHTML = Object.values(data[0].languages).toString().split(",").join(", ")
        })
})

