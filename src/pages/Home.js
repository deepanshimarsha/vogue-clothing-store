import { useProductContext } from "../context/product-context";
import "../styles/home-page.css";
import { useNavigate, NavLink } from "react-router-dom";
import Loading from "../component/Loading";
import { useEffect } from "react";

export default function Home() {
  const { state, dispatch, getCategoryData, getProductData } =
    useProductContext();

  const navigate = useNavigate();
  console.log("orders", state.orders);

  useEffect(() => {
    getCategoryData();
    getProductData();
    dispatch({ type: "CLEAR_FILTER", filter: "ALL_FILTER" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (state.isLoading) {
    return <Loading />;
  }

  const handleShowNowBtn = () => {
    dispatch({ type: "CLEAR_FILTER", filter: "ALL_FILTER" });
    navigate("/products");
  };

  const handleClickForDress = () => {
    dispatch({ type: "SET_SHOW_DRESSES" });
    navigate("/products");
  };
  const handleClickForTop = () => {
    dispatch({ type: "SET_SHOW_TOPS" });
    navigate("/products");
  };
  const handleClickForBottom = () => {
    dispatch({ type: "SET_SHOW_BOTTOMS" });
    navigate("/products");
  };

  return (
    <div className="home-main">
      <div className="home-img">
        <div className="hero-image">
          <img
            src="https://t4.ftcdn.net/jpg/02/81/64/15/360_F_281641591_rNWtGEBhBMROKxPOBfalLnaoIpdG2i0j.jpg"
            width="100%"
            alt="hero"
          />
        </div>

        <div className="home-btn">
          <h1>Welcome!</h1>
          <p>All Your Styles Are Here.</p>
          <button onClick={handleShowNowBtn}>SHOP NOW</button>
        </div>
      </div>
      <div className="banner">
        <button onClick={handleClickForDress}> Shop For Dresses</button>
        {state.category
          .filter(({ categoryName }) => categoryName === "dresses")
          .map(({ description }) => {
            return <p>{description}</p>;
          })}
      </div>
      <div className="dress-category">
        <div className="dress-img1 img">
          <img
            src="https://img101.urbanic.com/v1/876019096d5c49d6b8323b26a173f8a2.webp"
            role="button"
            alt="dress-collection"
            onClick={handleClickForDress}
          />
        </div>
        <div className="right-collection-section">
          <div className="dress-collection">
            {state.products
              .filter(({ categoryName }) => categoryName === "dresses")
              .filter((item, idx) => idx <= 1)
              .map((item) => {
                return (
                  <div className="dress-card card">
                    <NavLink to={`/details/${item._id}`}>
                      <img src={item.img} width="100%" alt="product" />
                    </NavLink>

                    <p style={{ textAlign: "left", margin: "10px" }}>
                      <b>Rs.{item.price}</b>
                    </p>
                  </div>
                );
              })}
          </div>
          <img
            src="https://img101.urbanic.com/v1/2b9dc066fe6c408cbbed9e5082d2594d.webp"
            alt="filler"
          />
        </div>
      </div>

      <div className="banner">
        <button onClick={handleClickForTop}>Shop For Tops</button>
        {state.category
          .filter(({ categoryName }) => categoryName === "tops")

          .map(({ description }) => {
            return <p>{description}</p>;
          })}
      </div>
      <div className="top-category">
        <div className="left-collection-section">
          <div className="top-collection">
            {state.products
              .filter(({ categoryName }) => categoryName === "tops")
              .filter((item, idx) => idx <= 3)
              .map((item) => {
                return (
                  <div
                    className="top-card card"
                    style={{ width: "90%", marginLeft: "20px" }}
                  >
                    <NavLink to={`/details/${item._id}`}>
                      {" "}
                      <img src={item.img} width="100%" alt="product" />
                    </NavLink>

                    <p style={{ textAlign: "left", margin: "10px" }}>
                      <b>Rs.{item.price}</b>
                    </p>
                  </div>
                );
              })}
          </div>
          <img
            src="https://img101.urbanic.com/v1/e9bbf61575394ab98e9ac7d5247a2f40.webp"
            width="100%"
            alt="bottom-collection"
            style={{ marginTop: "20px" }}
          />
        </div>

        <div className="top-img img">
          <img
            src="https://img101.urbanic.com/v1/9e70d04cbcc64331a7706e317653f08b.webp"
            role="button"
            alt="banner"
            onClick={handleClickForTop}
          />
        </div>
      </div>

      <div className="banner">
        <button onClick={handleClickForBottom}>Shop For Bottoms</button>
        {state.category
          .filter(({ categoryName }) => categoryName === "bottoms")
          .map(({ description }) => {
            return <p>{description}</p>;
          })}
      </div>
      <div className="bottom-category">
        <div className="dress-img3 img">
          <img
            src="https://img101.urbanic.com/v1/2f5931d4330e42e5b1d014d7a2961444.webp"
            role="button"
            onClick={handleClickForBottom}
            alt="top-collection"
          />
        </div>

        <div className="right-collection-section" style={{ width: "100%" }}>
          <div className="dress-collection bottoms4">
            {state.products
              .filter(({ categoryName }) => categoryName === "bottoms")
              .filter((item, idx) => idx <= 3)
              .map((item) => {
                return (
                  <div
                    className="top-card card"
                    style={{ width: "90%", marginLeft: "20px" }}
                  >
                    <NavLink to={`/details/${item._id}`}>
                      {" "}
                      <img src={item.img} width="100%" alt="product" />
                    </NavLink>

                    <p style={{ textAlign: "left", marginLeft: "10px" }}>
                      <b>Rs.{item.price}</b>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <h3>VOGUE CLOTHING STORE</h3>
          <p>All your styles are here.</p>
          <ul className="socials">
            <li>
              <NavLink to="">
                <i className="fa fa-facebook"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <i className="fa fa-twitter"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <i className="fa fa-google-plus"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <i className="fa fa-youtube"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <i className="fa fa-linkedin-square"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="">About</NavLink>
            </li>
            <li>
              <NavLink to="">Contact</NavLink>
            </li>
            <li>
              <NavLink to="">Blogs</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>
            {" "}
            Developed By <NavLink to="">Deepanshi</NavLink>
          </p>
          <p>
            copyright &copy;2023 <NavLink to="">vogue</NavLink>
          </p>
        </div>
      </footer>
    </div>
  );
}
