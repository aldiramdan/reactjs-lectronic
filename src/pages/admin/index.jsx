import React, { useEffect, useState } from "react";
import { BsBagCheck, BsSearch } from "react-icons/bs";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CardAdmin from "../../components/card/cardAdmin";
import ModalAdd from "../../components/modal/modalAdd";
import useApi from "../../helpers/api";
import withAuth from "../../helpers/withAuth";

import style from "./style.module.css";
import "./style.css";

function Admin() {
	const navigate = useNavigate();
	const { data } = useSelector((state) => state.users);
	const [product, setProduct] = useState([]);
	const api = useApi();

	useEffect(() => {
		console.log(data);
		if (data.role !== "admin") {
			navigate("/");
		}
	});

	const getProducts = () => {
		api
		.req({
			method: "GET",
			url: `/products/`,
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

	if (!product) {
		return <div>Loading....</div>
	}


	return (
		<div className="App">
		<Header />
			<InputGroup className={style.parent}>
				<FormControl
					className={style.input_search}
					placeholder="Tap To Search For Something"
					aria-label="Tap To Search For Something"
					aria-describedby="basic-addon2"
				/>
				<Button className={style.btn_search} id="button-addon2">
				<BsSearch className={style.bs_icon} />
				</Button>
				<div>
				<Button className={style.btn_w}>
					<BsBagCheck className={style.bs_icon} />
				</Button>
				</div>
				<ModalAdd />
			</InputGroup>
			<div className="container">
				<div className="row"></div>
				<div className="row mb-5 mt-5">
				{product.map((v, k) => {
					return (
					<CardAdmin
						id={v.id}
						name={v.name}
						price={v.price}
						category={v.category}
						image={v.image}
					/>
					);
				})}
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

export default withAuth(Admin);
