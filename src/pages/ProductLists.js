import { useProductContext } from "../context/product-context"
import ProductCard from "../component/ProductCard"

export default function ProductList(){

    const {state} = useProductContext()
    return(
        <div>
            <h1>Product Listing Page</h1>
             <div>
                {state.filteredProducts.map((item) => {
                    return <ProductCard item={item}/>
                })}
             </div>
        </div>
       
    )
}