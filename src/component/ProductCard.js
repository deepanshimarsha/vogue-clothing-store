import { NavLink } from "react-router-dom";

export default function ProductCard(item) {
  const { id, title, author, price, categoryName, details } = item;
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <NavLink to="/cart">add to cart</NavLink>

      {details && (
        <div>
          <p>author: {author}</p>
          <p>category : {categoryName}</p>
        </div>
      )}
    </div>
  );
}
