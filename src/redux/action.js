export function updateData(covidWorld) {
    return{
        type: "UPDATE_WORLD_COVID",
        covidWorld: covidWorld
    }
}

export function updateDataCountry(covidCountry) {
    return{
        type: "UPDATE_COUNTRY_COVID",
        covidCountry: covidCountry
    }
}