export default function CartProductCard(item) {
  const { title, price, qty } = item;
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{qty}</p>
    </div>
  );
}
