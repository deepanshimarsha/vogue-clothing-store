import {createContext, useContext, useEffect, useReducer} from "react"
import { reducer } from "../redux/reducer"

const ProductContext = createContext(null)

const ProductContextProvider = ({children}) => {
    
    const initialState = {
        products : [],
        filteredProducts : [],
        category : []

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

    const getCategoryData = async () => {
        try{
            const res = await fetch("/api/categories")
            const resJson = await res.json()
            dispatch({type : "SET_CATEGORY", data : resJson.categories})
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getProductData()
        getCategoryData()
    },[])

    return (
        <ProductContext.Provider value={{state}}>
            {children}
        </ProductContext.Provider>
    )
    
}

const useProductContext = () => useContext(ProductContext)

export {useProductContext, ProductContextProvider}