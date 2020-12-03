import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ProductTags } from "../../shared-data/product-tags";
import locationIcon from "../../assets/location.svg";
import tagIcon from "../../assets/tag.svg";
import CheckBox from "../check-box";
import ArrowComp from "../dashboard/arrow";
import { ArrowRight } from "../icons";
import Submenu from "./submenu";

const SearchSidebar = (props) => {
	return (
		<aside className="search-sidebar">
			<div className="page-wrapper">
				<div className="inner-wrapper">
					<div className="search_product-tags">
						<div className="inner">
							<div className="top-heading">
								<p className="text-bold">Categories</p>
							</div>
							<ul className="mt-2 product-category">
								{ProductTags().map((product, i) => (
									<Submenu product={product} key={i + 1} />
									// <div
									// 	className="list-wrapper"
									// 	key={i}
									// 	onMouseEnter={() => handleShow(product)}
									// 	onMouseLeave={() => handleMouseLeave(product)}
									// >
									// 	<li className="c-pointer list">
									// 		<img src={product.icon} alt="" />
									// 		<span className="list-item flex-1"> {product.name} </span>
									// 		<ArrowRight className="arrow-right" />
									// 	</li>
									// 	<div
									// 		className={`submenu `}
									// 		// onMouseLeave={() => setStay(false)}
									// 		id={`${product.id}-1`}
									// 	>
									// 		{product.sub &&
									// 			product.sub.map((sub, i) => (
									// 				<li className="c-pointer" key={i + 1}>
									// 					<div className="mb-1">{sub.name}</div>
									// 					<hr className="divider w-100" />
									// 				</li>
									// 			))}
									// 	</div>
									// </div>
								))}
							</ul>
						</div>
					</div>
					<div className="search_location">
						<div className="inner">
							<div className="heading-top">
								<img src={locationIcon} alt="" />
								<p>Location</p>
							</div>

							<select>
								<option>Nigeria</option>
							</select>
						</div>
					</div>
					<div className="search_price">
						<div className="inner">
							<div className="heading-top d-flex-inline ">
								<img src={tagIcon} alt="" />
								<p className="flex-1 ml-2">Price</p>
								<p className="text-primary">Apply</p>
							</div>
							<div className="d-flex-inline justify-between input-wrapper">
								<input type="number" placeholder="Min Price " />
								<hr />
								<input type="number" placeholder="Max Price" />
							</div>
						</div>
					</div>

					<div className="search_type">
						<div className="inner">
							<div className="top-heading mb-2">
								<p>Product Type</p>
							</div>
							<ul>
								<li>
									<input type="checkbox" />
									Glitz
								</li>
								<li>
									<input type="checkbox" />
									Swap
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

SearchSidebar.propTypes = {};

export default SearchSidebar;
