export default function ProductCard({item}){

    const {id, title, author, price, categoryName, details} = item
    return(
        <div>
            <h2>{title}</h2>
            <p>{price}</p>  
        </div>
    )
}