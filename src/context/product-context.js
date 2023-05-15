import {createContext, useContext, useEffect, useReducer} from "react"
import { reducer } from "../redux/reducer"

const ProductContext = createContext(null)

const ProductContextProvider = ({children}) => {
    
    const initialState = {
        products : [],
        filteredProducts : []

    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProductData = async() => {
        try{
            const res = await fetch("/api/products")
            const resJson = await res.json()
            dispatch({type : "SET_PRODUCT", data : resJson.products } )
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getProductData()
    },[])

    return (
        <ProductContext.Provider value={{state}}>
            {children}
        </ProductContext.Provider>
    )
    
}

const useProductContext = () => useContext(ProductContext)

export {useProductContext, ProductContextProvider}