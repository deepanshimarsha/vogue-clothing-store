const reducer = (state, action) => {
    switch(action.type){
        case "SET_PRODUCT":{
            return {...state, products : action.data, filteredProducts : action.data}
        }

        case "SET_CATEGORY" : {
            return {...state, category : action.data}
        }
        default:
            throw new Error("Unknown action type");
    }
}
export {reducer}