import { useProductContext } from "../context/product-context";
import { NavLink } from "react-router-dom";
import "../styles/orders.css";

export default function Orders() {
  const { state } = useProductContext();

  console.log([...state.orders].reverse());
  return (
    <div>
      <div>
        <h3>Your Orders</h3>
      </div>
      <div>
        {!state.orders.length ? (
          <p>No Orders</p>
        ) : (
          <div className="order_main">
            {state.orders.map((order_group) => {
              return (
                <div className="order_group">
                  <div className="order_group_header">
                    <div>
                      {" "}
                      <span>Total Price : Rs. {order_group.total_price}</span>
                    </div>
                    <div>
                      <span>order #{order_group.order_no}</span>
                    </div>
                  </div>
                  {order_group.order.map(({ img, title, qty, price, _id }) => {
                    return (
                      <NavLink to={`/details/${_id}`}>
                        {" "}
                        <div className="order">
                          <div>
                            <img src={img} alt="order" />
                          </div>
                          <div className="mobile_view">
                            <div>{title}</div>
                            <div>x{qty}</div>
                          </div>
                          <div className="laptop_view">{title}</div>
                          <div className="laptop_view">x{qty}</div>
                          <div>Rs. {Number(price) * Number(qty)}</div>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
