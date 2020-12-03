import PropTypes, { element } from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "../icons";

const Submenu = ({ product }) => {
	const [active, setActive] = useState(null);

	const wrapperRef = useRef(0);
	const subRef = useRef();

	const handleMouseEnter = (index) => {
		setActive(true);
	};

	const handleMouseLeave = () => {
		setActive(false);
	};

	// const handleShow = (data) => {
	// 	// item===data.name? setShow(true):setShow(false)
	// 	console.log("Product:", product.name);
	// 	console.log("Data:", data.name);
	// 	setStay(true);
	// };

	return (
		<div
			className="list-wrapper"
			ref={wrapperRef}
			onMouseEnter={() => handleMouseEnter(product.id)}
			onMouseLeave={handleMouseLeave}
			id={product.id}
		>
			<li className="c-pointer list">
				<img src={product.icon} alt="" />
				<span className="list-item flex-1"> {product.name} </span>
				<ArrowRight className="arrow-right" />
			</li>
			<div
				// ref={subRef}
				className={`submenu  ${active ? "d-block" : "d-none"} `}
			>
				{product.sub &&
					product.sub.map((sub, i) => (
						<li className="c-pointer" key={i + 1}>
							<div className="mb-1">{sub.name}</div>
							<hr className="divider w-100" />
						</li>
					))}
			</div>
		</div>
	);
};

Submenu.propTypes = {
	children: PropTypes.node,
	isActive: PropTypes.func,
};

// Submenu.defaultProps = {
// 	isActive: false,
// };

export default Submenu;
