const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")
const meterAndFeet = document.getElementById("meter-feet")
const litersAndGallons = document.getElementById("liters-gallons")
const kilogramsAndPounds = document.getElementById("kilograms-pounds")


unitInput.addEventListener("wheel", function(evt){
    evt.preventDefault()
})

convertBtn.addEventListener("click", function() {
    conversion()
})

function conversion() {
    let inputValue = unitInput.value
    const meterToFeet = inputValue * 3.281
    const feetToMeter = inputValue / 3.281
    const literToGallon = inputValue * .264
    const gallonToLiter = inputValue / .264
    const killogramToPound = inputValue * 2.204
    const poundToKillogram = inputValue / 2.204

    meterAndFeet.innerHTML = 
    `${inputValue} meters = ${meterToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters`
    
    litersAndGallons.innerHTML = 
    `${inputValue} liters = ${literToGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(3)} liters`
    
    kilogramsAndPounds.innerHTML = 
    `${inputValue} kilos = ${killogramToPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundToKillogram.toFixed(3)} kilos`
}

const unitConverted = document.getElementsByClassName("unit-converted")
const unitTitle = document.getElementsByClassName("unit-title")
const unitContainer = document.getElementsByClassName("unit-container")
const unitsSection = document.getElementById("units-section")
let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.getElementById("dark-mode-toggle")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    unitsSection.classList.add("dark-theme")
    for (let i = 0; i < unitContainer.length; i++) {
        const container = unitContainer[i]
        container.classList.add("dark-theme")
    }
    for (let i = 0; i < unitTitle.length; i++) {
        const title = unitTitle[i]
        title.classList.add("dark-theme")
    }
    localStorage.setItem('darkMode','enabled')
}
const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    unitsSection.classList.remove("dark-theme")
    for (let i = 0; i < unitContainer.length; i++) {
        const container = unitContainer[i]
        container.classList.remove("dark-theme")
    }
    for (let i = 0; i < unitTitle.length; i++) {
        const title = unitTitle[i]
        title.classList.remove("dark-theme")
    }
    localStorage.setItem('darkMode',null)
}


if (darkMode === "enabled") {
    enableDarkMode()
}

darkModeToggle.addEventListener("click", function(){
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})
