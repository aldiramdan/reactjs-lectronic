import React, { useEffect, useState } from "react";
import CardOriginal from "../../components/card/cardOriginal";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./style.module.css";
import { BsPerson, BsBagCheck, BsSearch } from "react-icons/bs";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import axios from "axios";

function Product() {
  const [headphone, setHeadphone] = useState([]);
  const [airConditioner, setAirConditioner] = useState([]);
  const [television, setTelevision] = useState([]);
  const [router, setRouter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = async () => {
    try {
      const { data: headphone } = await axios.get(
        process.env.REACT_APP_BASE_URL + "products/search/?s=handphone"
      );
      const { data: airConditioner } = await axios.get(
        process.env.REACT_APP_BASE_URL + "products/search/?s=airconditioner"
      );
      const { data: television } = await axios.get(
        process.env.REACT_APP_BASE_URL + "products/search/?s=television"
      );
      const { data: router } = await axios.get(
        process.env.REACT_APP_BASE_URL + "products/search/?s=router"
      );
      setHeadphone(headphone.data);
      setAirConditioner(airConditioner.data);
      setTelevision(television.data);
      setRouter(router.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <InputGroup className={style.parent}>
        <FormControl
          className={style.input_search}
          placeholder="Tap To Search For Something"
          aria-label="Tap To Search For Something"
          aria-describedby="basic-addon2"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Button className={style.btn_search} id="button-addon2">
          <BsSearch className={style.bs_icon} />
        </Button>
        <div>
          <Button className={style.btn_w}>
            <BsPerson className={style.bs_icon} />
          </Button>
          <Button className={style.btn_w}>
            <BsBagCheck className={style.bs_icon} />
          </Button>
        </div>
      </InputGroup>
      <div className="container">
        <div className="row mb-5 mt-5">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Headphone
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Air Conditioner
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Television
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
              >
                Router
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="row">
              {headphone
                .filter((v) => {
                  if (searchTerm == "") {
                    return v;
                  } else if (
                    v.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return v;
                  }
                })
                .map((v, k) => {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        id={v.id}
                        name={v.name}
                        price={v.price}
                        rate={v.rating}
                        image={v.image}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <div className="row">
              {airConditioner
                .filter((v) => {
                  if (searchTerm == "") {
                    return v;
                  } else if (
                    v.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return v;
                  }
                })
                .map((v, k) => {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        id={v.id}
                        name={v.name}
                        price={v.price}
                        rate={v.rating}
                        image={v.image}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <div className="row">
              {television
                .filter((v) => {
                  if (searchTerm == "") {
                    return v;
                  } else if (
                    v.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return v;
                  }
                })
                .map((v, k) => {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        id={v.id}
                        name={v.name}
                        price={v.price}
                        rate={v.rating}
                        image={v.image}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            <div className="row">
              {router
                .filter((v) => {
                  if (searchTerm == "") {
                    return v;
                  } else if (
                    v.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return v;
                  }
                })
                .map((v, k) => {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        id={v.id}
                        name={v.name}
                        price={v.price}
                        rate={v.rating}
                        image={v.image}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="row">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
