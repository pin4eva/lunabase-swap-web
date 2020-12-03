import React, { useState } from "react";
import BtnPrimary from "../../../components/buttons/primary";
import UserInfo from "../../../components/user/user";
import SwapProductComp from "../../../components/dashboard/swapproductcomp";

const ProductAction = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<SwapProductComp show={showModal} close={() => setShowModal(false)} />;
			<p className="heading product-title">Apple MacBook Air 13'</p>
			<p className="heading product-price">₦520,900.00</p>
			<div className="product-cta">
				<div className="product-swap-bid-cta-holder">
					<BtnPrimary
						title="Swap"
						color={true}
						onClick={() => setShowModal(true)}
					/>
					<BtnPrimary title="Buy Now" color={false} />
				</div>
			</div>
			<ul className="product-meta-action">
				<li>
					<img src={require("../../../icons/swap.svg")} /> 15 Swaps
				</li>
				<li>
					<img src={require("../../../icons/bid.svg")} /> 32 Bids
				</li>
				<li>
					<img src={require("../../../icons/clock.svg")} /> 5 Days Left
				</li>
			</ul>
			<div className="product-delivery-option">
				<img src={require("../../../icons/delivery.svg")} /> Delivery Option:
				<span>Pickup Delivery</span>
			</div>
			<div className="product-user-card">
				<p className="sub-heading product-about-seller">About the seller</p>
				<UserInfo />
			</div>
		</div>
	);
};

export default ProductAction;
