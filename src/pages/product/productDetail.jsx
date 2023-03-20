import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./style.css";
import useApi from "../../helpers/api";
import { useParams } from "react-router-dom";
import CardReview from "../../components/card/cardReview";

function DetailProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const api = useApi();

  const getProducts = () => {
    api
      .req({
        method: "GET",
        url: `/products/` + params.id,
      })
      .then((res) => {
        const { data } = res.data;
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-5">
            <div className="detail-image">
              <div className="row">
                <img src={product.image} alt="" className="detail-big-image" />
              </div>
              <div className="row">
                <div className="col-3">
                  <img
                    src={product.image}
                    alt=""
                    className="detail-little-image"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={product.image}
                    alt=""
                    className="detail-little-image"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={product.image}
                    alt=""
                    className="detail-little-image"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={product.image}
                    alt=""
                    className="detail-little-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="detail-title">{product.name}</div>
            <div className="detail-subtitle">Sold 6 | 4.9</div>
            <div className="detail-tab">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Details
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Review
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active detail-tab"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  {product.description}
                </div>
                <div
                  class="tab-pane fade detail-tab"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  <CardReview />
                  <CardReview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
