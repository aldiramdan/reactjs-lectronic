import React from "react";
import img from "../../img/product-example.png";

import "./style.css";

function CardReview() {
	return (
		<div className="card-review">
			<div className="row">
				<div className="col-8">
				<div className="left-detail">
					<div className="row">
					<div className="card-history-title">
						Sennheiser HD-25{" "}
						<span className="card-history-price">1 item | $3000</span>
					</div>
					<div className="card-history-price">Nice Headphone!!</div>
					</div>
				</div>
				</div>
				<div className="col-4 my-auto">
				<div className="row">
					<span className="right-detail">
					<span className="badge card-history-type">Daniel</span>
					<div className="review-rating">5</div>
					</span>
				</div>
				</div>
			</div>
		</div>
	);
}

export default CardReview;
