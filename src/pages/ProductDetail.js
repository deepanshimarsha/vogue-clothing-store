import { useParams } from "react-router-dom"
import { useProductContext } from "../context/product-context"
import { useEffect } from "react"
import ProductCard from "../component/ProductCard"

export default function ProductDetail(){
    const {productId} = useParams()
    const {state,getProductDetail} = useProductContext()

    useEffect(() => {
        getProductDetail(productId)
    }, [])
    console.log(state)
    return(
        <div>
            <h1>Details</h1>
            {state.productDetail.map((item) => {
                return <ProductCard {...item} details />
            })}
        </div>
    )
}