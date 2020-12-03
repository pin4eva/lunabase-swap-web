import React, { useState } from "react";
import SelectComp from "../select_comp";
import { Products } from "../../../shared-data/products";
import ProductCardHover from "../../card/product-hover";
import EditProductComp from "./edit_product";

const MyListingComp = () => {
	const [view, setView] = useState(false);
	const [product, setProduct] = useState({});

	return (
		<div className="mylisting-comp">
			<div className="inner-wrapper">
				{view ? (
					<>
						<div className="top">
							<div className="wrapper">
								<div className="left">
									<h3 className="heading">My Listings</h3>
								</div>
								<div className="right">
									<div className="right-wrapper">
										<SelectComp />

										<button className="btn btn-outline">Add new</button>
									</div>
								</div>
							</div>
						</div>

						<div className="mainpage-list">
							<div className="list-wrapper">
								<div className="cards">
									<ProductCardHover
										list={Products}
										onEdit={(product) => {
											setView(!view);
											setProduct(product);
										}}
									/>
								</div>
							</div>
						</div>
					</>
				) : (
					<EditProductComp />
				)}
			</div>
		</div>
	);
};

MyListingComp.propTypes = {};

export default MyListingComp;
