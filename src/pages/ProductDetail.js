import { useParams } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import "../styles/product-detail.css";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const { state, getProductDetail, addToCart, findInCart } =
    useProductContext();

  const navigate = useNavigate();
  useEffect(() => {
    getProductDetail(productId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ToastContainer autoClose={1000} position="top-center" />
      {state.productDetail.map((item) => {
        const indexCart = findInCart(item._id);

        const handleClickForCart = () => {
          if (!state.isLoggedIn) {
            navigate("/login");
          } else {
            if (indexCart === -1) {
              addToCart(item);
              toast("Added to cart");
            } else {
              navigate("/cart");
            }
          }
        };

        const ratingArrFilled = new Array(Number(item.rating)).fill(1);
        const hollowStar = 5 - Number(item.rating);
        const ratingArr = new Array(hollowStar).fill(0);
        //console.log(ratingArrFilled, ratingArr);
        return (
          <div className="detail-container">
            {" "}
            <img src={item.img} style={{ width: "40%" }} alt="product" />
            <div className="detail-description">
              <p className="detail-title">{item.title}</p>

              <span className="rating">
                <div className="stars">
                  {" "}
                  {ratingArrFilled.map((star) => {
                    return (
                      <span
                        class="fa fa-star"
                        // style={{ fontSize: "24px" }}
                      ></span>
                    );
                  })}
                  {ratingArr.map((star) => {
                    return (
                      <i
                        className="fa fa-star-o "
                        // style={{ fontSize: "24px" }}
                      ></i>
                    );
                  })}
                </div>

                <span className="reviews">
                  {item.reviews} {item.reviews > 1 ? "reviews" : "review"}
                </span>
              </span>

              <p className="detail-category">Category</p>
              <span className="category-box">
                {item.categoryName.toUpperCase()}
              </span>

              <div className="para">
                <hr></hr>

                <p className="para-line">
                  <i>Inclusive Of All Taxes</i>
                </p>

                <p className="para-line">
                  <i>Fastest Delivery</i>
                </p>
                <p className="para-line">
                  <i>Cash On Delivery Available</i>
                </p>
              </div>

              <span className="detail-price">Rs.{item.price} </span>

              <button className="btn" onClick={handleClickForCart}>
                {indexCart === -1 ? "Add to Cart" : "Go to Cart"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
