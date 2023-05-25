export default function CategoryCard({ category_item }) {
  const { categoryName, description } = category_item;

  return (
    <div>
      <h2>{categoryName}</h2>
      <p>{description}</p>
    </div>
  );
}
