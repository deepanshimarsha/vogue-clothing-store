import { useProductContext } from "../context/product-context";

export default function Loading() {
  const { state } = useProductContext();
  return (
    <div class="center">
      <div class="loader"></div>
    </div>
  );
}
