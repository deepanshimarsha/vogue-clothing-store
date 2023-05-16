import CategoryCard from "../component/CategoryCard";
import { useProductContext } from "../context/product-context";

export default function Home() {
  const { state } = useProductContext();
  return (
    <div>
      <h1>Category</h1>
      {state.category.map((category_item) => {
        return <CategoryCard category_item={category_item} />;
      })}
    </div>
  );
}
