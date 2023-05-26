import OrderSummary from "../component/OrderSummary";
import SelectAddress from "../component/SelectAddress";
export default function Checkout() {
  return (
    <div className="cart-main">
      <SelectAddress />
      <OrderSummary />
    </div>
  );
}
