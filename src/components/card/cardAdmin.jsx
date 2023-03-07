import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useApi from "../../helpers/api";

import "./style.css";

function CardAdmin(props) {
    const navigate = useNavigate();

    const api = useApi();

    const deleteProduct = () => {
      api
        .req({
          method: "DELETE",
          url: `/products/` + props.id,
        })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const [data, setData] = useState({});
    const [product, setProduct] = useState({});
    const { token } = useSelector((state) => state.users);

    const onChangeInput = (event) => {
		event.preventDefault();

		const tmpdata = { ...data };
		tmpdata[event.target.name] = event.target.value;
		setData(tmpdata);
    };

    const onChangeFile = (event) => {
		event.preventDefault();

		const file = event.target.files[0];
		if (file) {
			const tmpdata = { ...data };
			tmpdata["image"] = file;
			setData(tmpdata);
		}
    };

    const getProducts = () => {
		api
			.req({
				method: "GET",
				url: `/products/` + props.id,
			})
			.then((res) => {
			const { data } = res.data;
				setProduct(data);
			})
			.catch((err) => {
				console.log(err);
			});
    };

    const postData = async () => {
		const formData = new FormData();
		for (const key in data) {
			formData.append(`${key}`, data[key]);
      	}
		api
			.req({
				method: "PUT",
				url: `/products/` + props.id,
				headers: {
					"Content-Type": "multipart/form-data",
				},
				data: formData,
			})
			.then((res) => {
				window.location.reload(navigate("/products"));
			})
			.catch((err) => {
				console.log(data);
				alert(err);
			});
	};

    useEffect(() => {
      getProducts();
    }, []);

    return (
		<div className="card-admin">
			<div className="row">
			<div className="col-lg-6">
				<div className="card-admin-image-bg mr-2">
					<img className="card-admin-image" src={props.image} alt="image" />
				</div>
				<div className="left-detail">
				<div className="row">
					<div className="card-admin-title">{props.name}</div>
					<div className="card-admin-price">${props.price}</div>
				</div>
				<span className="badge card-admin-type">{props.category}</span>
				</div>
			</div>
			<div className="col-lg-6 mt-auto">
				<div className="row">
				<button
					type="button"
					class="card-admin-button-edit"
					data-bs-toggle="modal"
					data-bs-target="#editModal"
				>
					Edit
				</button>
				<button
					onClick={() => {
					if (window.confirm("Are you sure to delete this vehicle?")) {
							deleteProduct();
						}
					}}
					type="button"
					class="card-admin-button-trash"
				>
					<BsTrash className="bs-cart" />
				</button>
				</div>
			</div>
			</div>
			<div
				class="modal fade"
				id="editModal"
				tabindex="-1"
				aria-labelledby="editModalLabel"
				aria-hidden="true"
			>
			<div class="modal-dialog modal-xl">
				<div class="modal-content modal-contents">
				<div class="modal-header">
					<h1 class="modal-title" id="editModalLabel">
						Edit Product
					</h1>
				</div>
				<div class="modal-body">
					<div className="row">
					<div className="col-lg-6">
						<label class="form-label form-labels">Name</label>
						<input
							name="name"
							type="text"
							defaultValue={product.name}
							class="form-control form-control-lg mb-3 modal-forms"
							placeholder="Input name product..."
							onChange={onChangeInput}
						></input>
					</div>
					<div className="col-lg-6">
						<label class="form-label form-labels">Price</label>
						<input
							name="price"
							type="number"
							defaultValue={product.price}
							class="form-control form-control-lg mb-3 modal-forms"
							placeholder="Input price product..."
							onChange={onChangeInput}
						></input>
					</div>
					</div>
					<div className="row">
					<div className="col-lg-6">
						<label class="form-label form-labels">Stock</label>
						<input
							name="stock"
							type="number"
							defaultValue={product.stock}
							class="form-control form-control-lg mb-3 modal-forms"
							placeholder="Input stock product..."
							onChange={onChangeInput}
						>
						</input>
					</div>
					<div className="col-lg-6">
						<label class="form-label form-labels">Description</label>
						<input
							name="description"
							type="text"
							defaultValue={product.description}
							class="form-control form-control-lg mb-3 modal-forms"
							placeholder="Input description product..."
							onChange={onChangeInput}
						>
						</input>
					</div>
					</div>
					<div className="row">
					<div className="col-lg-6">
						<label class="form-label form-labels">Category</label>
						<select
							name="category"
							className="form-select modal-forms"
							defaultValue={product.category}
							onChange={onChangeInput}
						>
							<option value="" selected disabled hidden>
								{product.category}
							</option>
							<option value="Headphone">Headphone</option>
							<option value="Air Conditioner">Air Conditioner</option>
							<option value="Television">Television</option>
							<option value="Router">Router</option>
						</select>
					</div>
					<div className="col-lg-6">
						<label class="form-label form-labels">Image (max 5)</label>
						<input
							name="image"
							type="file"
							class="form-control mb-3 modal-forms"
							onChange={onChangeFile}
						>
						</input>
					</div>
					</div>
				</div>
				<div class="modal-footer">
					<button
					type="button"
					class="modal-button-submit mt-3"
					onClick={postData}
					>
						Submit
					</button>
				</div>
				</div>
			</div>
			</div>
		</div>
    );
}

export default CardAdmin;
