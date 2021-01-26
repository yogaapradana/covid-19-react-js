const initialState = {
    covidWorld: {
        confirmed: 0,
        recovered: 0,
        critical: 0,
        deaths: 0
    },
    covidCountry: {
        country: "",
        confirmed: 0,
        recovered: 0,
        critical: 0,
        deaths: 0,
    },
    loadCovidWorldDone: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_WORLD_COVID": 
            return {
                ...state,
                covidWorld: action.covidWorld,
                loadCovidWorldDone: true
            }
        case "UPDATE_COUNTRY_COVID": 
            return {
                ...state,
                covidCountry: action.covidCountry
            }
        default: 
            return state;
    }
}

export default rootReducer;