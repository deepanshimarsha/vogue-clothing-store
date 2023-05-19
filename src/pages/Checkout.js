import UserAddress from "../component/UserAddress";
import OrderSummary from "../component/OrderSummary";
export default function Checkout() {
  return (
    <div>
      <UserAddress />
      <OrderSummary />
    </div>
  );
}
