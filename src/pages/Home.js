import CategoryCard from "../component/CategoryCard";
import { useProductContext } from "../context/product-context";
import "../styles/home-page.css";

export default function Home() {
  const { state } = useProductContext();
  return (
    <div className="home-main">
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/02/81/64/15/360_F_281641591_rNWtGEBhBMROKxPOBfalLnaoIpdG2i0j.jpg"
          width="100%"
        />
      </div>
      <div className="tag-block">
        <img
          src="https://img101.urbanic.com/v1/e9bbf61575394ab98e9ac7d5247a2f40.webp"
          width="60%"
        />
      </div>

      <div className="category">
        <div className="category1">
          <div className="img-container">
            {" "}
            <img src="https://img101.urbanic.com/v1/4da18682db014ae584a20421297e1e67.webp" />
            <div className="tops-collection">
              {state.products
                .filter(({ categoryName }) => categoryName === "tops")
                .map((item, idx) => {
                  if (idx <= 2) {
                    return (
                      <div>
                        <img src={item.img} width="100%" />
                        <p style={{ textAlign: "left", margin: "10px" }}>
                          <b>Rs.{item.price}</b>
                        </p>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="bottoms-img">
              <img src="https://img101.urbanic.com/v1/504652e8fb1b4ba6b8c521356d6f7ca8.webp" />
            </div>
          </div>
          <div className="collection">
            {state.products
              .filter(({ categoryName }) => categoryName === "dresses")
              .map((item, idx) => {
                if (idx <= 2) {
                  return (
                    <div>
                      <img src={item.img} width="100%" />
                      <p style={{ textAlign: "left", margin: "10px" }}>
                        <b>Rs.{item.price}</b>
                      </p>
                    </div>
                  );
                }
              })}

            <div className="tops-img">
              <img
                src="https://img101.urbanic.com/v1/8ace6f56d780495c8132fa8c627ff427.webp"
                width="780px"
              />
            </div>
            <div className="bottoms-collection">
              {state.products
                .filter(({ categoryName }) => categoryName === "bottoms")
                .map((item, idx) => {
                  if (idx <= 2) {
                    return (
                      <div>
                        <img src={item.img} width="100%" />
                        <p style={{ textAlign: "left", margin: "10px" }}>
                          <b>Rs.{item.price}</b>
                        </p>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
