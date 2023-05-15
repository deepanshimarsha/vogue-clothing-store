const reducer = (state, action) => {
    switch(action.type){
        case "SET_PRODUCT":{
            return {...state, products : action.data, filteredProducts : action.data}
        }
    }
}
export {reducer}