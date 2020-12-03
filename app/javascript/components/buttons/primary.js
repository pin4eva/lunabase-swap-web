import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BtnPrimary = ({ title, color, icon, onClick }) => {
	const buttonVariants = {
		init: {
			y: 0,
		},
		hover: {
			y: -5,
			backgroundColor: "#ee7329",
			boxShadow: "0 3px 6px rgba(247,153,97)",
		},
	};
	return (
		<motion.p
			className={color ? "btn color" : "btn primary"}
			variants={buttonVariants}
			initial="init"
			whileHover="hover"
			onClick={onClick}
		>
			{icon && <img src={require("../../icons/" + icon)} />}
			{title}
		</motion.p>
	);
};

BtnPrimary.propTypes = {
	onClick: PropTypes.func,
};

export default BtnPrimary;
