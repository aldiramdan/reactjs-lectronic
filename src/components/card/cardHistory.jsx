import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

function CardHistory(props) {
	const navigate = useNavigate();
	
	const detail = () => {
		navigate("/products/detail/" + props.id);
	};

	return (
		<div className="card-history">
			<div className="row">
				<div className="col-lg-6">
				<div className="card-history-image-bg mr-2">
					<img className="card-history-image" src={props.image} alt="image" />
				</div>
				<div className="left-detail">		
					<div className="row">
						<div className="card-history-title">{props.name}</div>
						<div className="card-history-price">1 item | ${props.price}</div>
					</div>
						<span className="badge card-history-type">{props.category}</span>
				</div>
				</div>
				<div className="col-lg-6 mt-auto">
				<div className="row">
					<span className="right-detail">
					Total<span className="card-history-prices">${props.total}</span>
					</span>
				</div>
				<div className="row">
					<button
					onClick={detail}
					type="button"
					class="card-history-button-detail"
					>
					Details
					</button>
					<button type="button" class="card-history-button-review">
					Review
					</button>
				</div>
				</div>
			</div>
		</div>
	);
}

export default CardHistory;
